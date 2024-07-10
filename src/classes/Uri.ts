import { getUrlParameter, isNullOrEmpty, removeAllParametersFromUrl } from "../functions";
import '../extensions/ArrayExtensions';
import '../extensions/StringExtensions';

export interface IUrlParameter {
    Key: string; // 'foo',
    Value: string; // bar,
}

/**
 * A class for URL Parameters
 * @since 1.2.0
 */
export class UrlParameter {

    protected Parameters: IUrlParameter[];

    protected Query: string;

    public constructor(query: string) {
        this.Query = query;
        this.Parameters = this.buildParametersArray();
    }

    public onQueryChanged?(): void;

    public add(name: string, value: string, encode: boolean = true): void {
        this.remove(name);

        if (encode) {
            value = encodeURIComponent(value);
        }

        this.Parameters.push({
            Key: name,
            Value: value
        });

        this.buildQuery();
    }

    public get(name: string, decode: boolean = true): string {
        const value: string = getUrlParameter(name, this.getQuery());

        if (value && decode) {
            return decodeURIComponent(value);
        }

        return value;
    }

    public getAll(): IUrlParameter[] {
        return this.Parameters;
    }

    public remove(name: string): void {
        const existingParameterIndex: number = this.Parameters.IndexOf(p => p.Key.Equals(name, true));

        if (existingParameterIndex < 0) {
            return;
        }

        this.Parameters.splice(existingParameterIndex, 1);

        this.buildQuery();
    }

    public removeAll(): void {
        this.Parameters = [];
        this.buildQuery();
    }

    public getQuery(): string {
        this.buildQuery(false);
        return this.Query;
    }

    public toString(): string {
        return this.getQuery();
    }

    private buildParametersArray(): IUrlParameter[] {
        const parameters: IUrlParameter[] = [];
        this.Query.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        (match, key, value): string => {
            parameters.push({
              Key: key,
              Value: value
          });

          return value;

        });

        return parameters;
    }

    private buildQuery(fireOnChangeEvent: boolean = true): void {
        if (isNullOrEmpty(this.Parameters)) {
            this.Query = '';

            if (fireOnChangeEvent && typeof this.onQueryChanged === 'function') {
              this.onQueryChanged();
            }

            return;
        }

        const queryArray: string[] = [];
        this.Parameters.forEach((param: IUrlParameter) => {
            queryArray.push(`${param.Key}=${param.Value}`);
        });

        const query: string = queryArray.join('&');
        this.Query = '?' + query;

        if (fireOnChangeEvent && typeof this.onQueryChanged === 'function') {
            this.onQueryChanged();
        }
    }
}

export interface IUrlContext {
    OriginalUrl: string; // 'https://example.com/try?foo=bar&age=20',
    Host: string;
    WebUrl: string; // 'https://example.com/try',
    Path: string; // '/try',
    Query: string;
    Parameters?: UrlParameter; // '?foo=bar&age=20'
    Protocol: string; // https
}

export class Uri implements IUrlContext {

    public readonly OriginalUrl: string;
    public Url: string;
    public Host: string;
    public WebUrl: string;
    public Path: string;
    public Query: string;
    public Parameters: UrlParameter;
    public Protocol: string;
    public Hash: string;

    protected SplittedUrl: string[];

    protected get hash(): string {
        return isNullOrEmpty(this.Hash) ? '' : `#${this.Hash}`;
    }

    public constructor(url: string) {
        this.OriginalUrl = url;
        this.Hash = this.getHash(url);
        
        if(!isNullOrEmpty(this.hash)) {
            url = url.replace(this.hash, '');
        }

        this.createUrlContext(url);
    }

    public toString(): string {
        return this.Url.Contains(this.hash) ? this.Url : this.Url + this.hash;
    }

    public Combine(urlToCombine: string): void {
        const absoluteUrl: string = this.makeAbsoluteUrl(urlToCombine);
        this.createUrlContext(absoluteUrl);
    }

    protected createUrlContext(url: string): void {
        this.Url = url;
        this.Host = this.getHost(url);
        this.WebUrl = this.getWebUrl(url);
        this.Path = this.getPath(url);
        this.Query = this.getQuery(url);
        this.Protocol = this.getProtocol(url);
        this.Parameters = new UrlParameter(this.Query);
        const self: Uri = this;
        this.Parameters.onQueryChanged = () => {
            self.onParameterQueryChanged();
        };
    }

    protected onParameterQueryChanged(): void {
        // this.Query = this.Parameters.toString();
        const newUrl: string = removeAllParametersFromUrl(this.Url) + this.Parameters.toString();
        this.createUrlContext(newUrl);
    }

    protected makeAbsoluteUrl(urlToCombine: string): string {
        if (urlToCombine.StartsWith('http://') ||
            urlToCombine.StartsWith('https://')) {
            return urlToCombine;
        }

        if (urlToCombine.StartsWith('?') || urlToCombine.StartsWith('&')) {
            const params: UrlParameter = new UrlParameter(urlToCombine);
            params.getAll().forEach((param: IUrlParameter) => {
                this.Parameters.add(param.Key, param.Value);
            });

            return this.toString();
        }

        let absoluteUrl: string = this.WebUrl;
        const relativeUrl: string = this.Path;

        if (absoluteUrl.EndsWith('/')) {
            absoluteUrl = absoluteUrl.substring(0, absoluteUrl.length - 1);
        }

        if (relativeUrl.length > 0 && urlToCombine.StartsWith(relativeUrl)) {
          urlToCombine = urlToCombine.substring(
            urlToCombine.IndexOf(relativeUrl) + relativeUrl.length
          );
        }

        if (urlToCombine.StartsWith('/')) {
          urlToCombine = urlToCombine.substring(1);
        }

        const url: string = absoluteUrl + '/' + urlToCombine + this.Parameters.toString();
        return url;
    }

    protected getSplittedUrl(url: string): string[] {
        if (this.SplittedUrl) {
            return this.SplittedUrl;
        }

        this.SplittedUrl = url.split('/');
        return this.SplittedUrl;
    }

    protected getWebUrl(url: string): string {
        url = removeAllParametersFromUrl(url);
        return url;
    }

    protected getProtocol(url: string): string {
        const pathArray: string[] = this.getSplittedUrl(url);
        return pathArray[0];
    }

    protected getHost(url: string): string {
        const pathArray: string[] = this.getSplittedUrl(url);
        return pathArray[2];
    }

    protected getHostWithProtocol(url: string): string {
        const protocol: string = this.getProtocol(url);
        const host: string = this.getHost(url);
        return `${protocol}//${host}`;
    }

    protected getPath(url: string): string {
        const webUrl: string = this.getWebUrl(url);
        const hostWithProtocol: string = this.getHostWithProtocol(url);
        return webUrl.replace(hostWithProtocol, '');
    }

    protected getQuery(url: string): string {
        const webUrl: string = this.getWebUrl(url);
        return url.replace(webUrl, '');
    }

    protected getHash(url: string): string {
        let urlCopy = url.slice();
        let hashValue = "";
        if(!urlCopy.Contains("#")) {
            return hashValue;            
        }

        let splittedUrl = urlCopy.split('#');

        hashValue = splittedUrl.LastOrDefault();

        if(!urlCopy.EndsWith('#' + hashValue) || hashValue.Contains("?")) {
            hashValue = "";
        }

        return hashValue;
    }

}