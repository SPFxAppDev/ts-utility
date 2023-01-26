var Logger = console;

export type AsyncResult<TResult, TError> = [TResult | null, TError | null];

export type PromiseFunc<T> = (...args: any) => Promise<T>;

/**
 * A wrapper function to handle an await function and their results/errors
 *
 * @template TResult Type of expected result
 * @template TError Type of expected error
 * @param {Promise<TResult>} The asynchronous function to wait for
 * @return {*}  {Promise<AsyncResult<TResult, TError>>}
 * @since 1.1.0
 */
export async function asyncFn<TResult, TError>(
    promiseFn: PromiseFunc<TResult>,
    ...promiseFnArgs: any
): Promise<AsyncResult<TResult, TError>> {
    try {
        const r: TResult = await promiseFn(...promiseFnArgs);
        return [r, null];
    } catch (e: any) {
        return [null, e];
    }
}

export class ApiClient {
    private get defaultGETOptions(): RequestInit {
        return {
            method: 'GET',
            // credentials: 'include',
            mode: 'cors',
            cache: 'no-cache'
        };
    }

    private get defaultPOSTOptions(): RequestInit {
        return {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }

    public async get(url: string, options?: RequestInit): Promise<any> {
        options = options || {};
        options = { ...this.defaultGETOptions, ...options };
        const [response, error] = await asyncFn<Response, any>(ApiClient.sendRequest, url, options);

        if (error) {
            throw error;
        }

        return response;
    }

    public async getAsJson<T>(url: string, options?: RequestInit): Promise<T | Error> {
        options = options || {};
        options = { ...this.defaultGETOptions, ...options };
        const [data, error] = await asyncFn<T, Error>(ApiClient.sendRequestResultAsJson, url, options);

        if (error) {
            throw error;
        }

        return data as T;
    }

    public async post(url: string, bodyData?: any, options?: RequestInit): Promise<any> {
        options = options || {};

        if (bodyData) {
            options.body = JSON.stringify(bodyData);
        }

        options = { ...this.defaultPOSTOptions, ...options };
        const [response, error] = await asyncFn<Response, any>(ApiClient.sendRequest, url, options);

        if (error) {
            throw error;
        }

        return response;
    }

    public async postAsJson<T>(url: string, bodyData?: any, options?: RequestInit): Promise<T | Error> {
        options = options || {};
        
        if (bodyData) {
            options.body = JSON.stringify(bodyData);
        }

        options = { ...this.defaultPOSTOptions, ...options };
        const [data, error] = await asyncFn<T, Error>(ApiClient.sendRequestResultAsJson, url, options);

        if (error) {
            throw error;
        }

        return data as T;
    }
  
    private static async sendRequestResultAsJson(url: string, options?: RequestInit): Promise<any> {
        const [response, error] = await asyncFn<Response, Error>(ApiClient.sendRequest, url, options);
        
        if (error) {
            throw error;
        }
      
        const data = await response?.json();
        return data || null;
      
    }

    private static async sendRequest(url: string, options?: RequestInit): Promise<any> {
        const [response, error] = await asyncFn<Response, any>(fetch, url, options);

        if (error) {
            Logger.error({
                name: `ApiClient.sendRequest: ${url} => ${error.name}`,
                message: error.message
            });

            throw error;
        }

        return response;
    }
}


export class App {

    public async test() {
        const c = new ApiClient();
        const r = await c.getAsJson("https://httpstat.us/200?sleep=4000", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        console.log(r);
    }
}

const app = new App();
app.test();