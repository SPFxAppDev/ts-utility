
import '../../src/extensions/ArrayExtensions';
import '../../src/extensions/StringExtensions';
import { asyncFn, randomString, cssClasses, getDeepOrDefault, getUrlParameter, isFunction, isNullOrEmpty, isset, issetDeep, isValidEmail, promiseQueue, PromiseQueue, toParameterlessPromiseQueueFunc, replaceNonAlphanumeric, stripHTML, toBoolean } from '../../src';
import { log } from '@spfxappdev/logger';

interface ISimpleItem {
    id: string;
    name: string;
    sequence: number;
}

const simpleArray: ISimpleItem[] = [
    { id: randomString(), name: "App", sequence: 2 },
    { id: randomString(), name: "SPFx", sequence: 1 },
    { id: randomString(), name: "Dev", sequence: 3 }
];

class ArrayApp {

    private simpleArray: ISimpleItem[] = simpleArray;

    public start(): void {
        this.firstOrDefaultExamples();
        this.indexOfExamples();
        this.whereExamples();
        this.orderByExamples();
        this.orderByDescendingExamples();
        this.orderByMultipleExamples();
        this.orderByMultipleDescendingExamples();
        this.containsExamples();
        this.countExamples();
        this.lastOrDefaultExamples();
        this.addAtExamples();
        this.removeAtExamples();
    }

    @log()
    private simpleClone(): ISimpleItem[] {
        console.log("simple array:", this.simpleArray);
        return JSON.parse(JSON.stringify(this.simpleArray));
    }

    @log()
    private firstOrDefaultExamples(): void {

        var myArr = this.simpleClone();

        const spfxItem: ISimpleItem|null = myArr.FirstOrDefault(i => i.name.Equals("spfx"));

        console.log(spfxItem);

        const firstItem: ISimpleItem|null = myArr.FirstOrDefault();

        console.log(firstItem);

        const defaultItem: ISimpleItem|null = myArr.FirstOrDefault(i => i.name.Equals("404"), { id: randomString(), name: "This is item is the default item, because the searched item was not found", sequence: 404 });

        console.log(defaultItem);

        const defaultNullItem: ISimpleItem|null = myArr.FirstOrDefault(i => i.name.Equals("404"));

        console.log(defaultNullItem);
    }

    @log()
    private indexOfExamples(): void {

        var myArr = this.simpleClone();

        const spfxItemIndex: number = myArr.IndexOf(i => i.name.Equals("spfx"));

        console.log(spfxItemIndex);

        
        const notFoundIndex: number = myArr.IndexOf(i => i.name.Equals("404"));

        console.log(notFoundIndex);
    }

    @log()
    private whereExamples(): void {

        var myArr = this.simpleClone();

        const allItemsWhereSequenceGt1: ISimpleItem[] = myArr.Where(i => i.sequence > 1);

        console.log(allItemsWhereSequenceGt1);

        
        const notFoundItems: ISimpleItem[] = myArr.Where(i => i.name.Equals("404"));

        console.log(notFoundItems);
    }

    @log()
    private orderByExamples(): void {

        var myArr1 = this.simpleClone();
        var myArr2 = this.simpleClone();

        const allItemsOrderedBySequence: ISimpleItem[] = myArr1.OrderBy(i => i.sequence);

        console.log(allItemsOrderedBySequence);

        
        const allItemsOrderedByName: ISimpleItem[] = myArr2.OrderBy(i => i.name);

        console.log(allItemsOrderedByName);
    }

    @log()
    private orderByDescendingExamples(): void {

        var myArr1 = this.simpleClone();
        var myArr2 = this.simpleClone();

        const allItemsOrderedBySequenceDescending: ISimpleItem[] = myArr1.OrderByDescending(i => i.sequence);

        console.log(allItemsOrderedBySequenceDescending);

        
        const allItemsOrderedByNameDescending: ISimpleItem[] = myArr2.OrderByDescending(i => i.name);

        console.log(allItemsOrderedByNameDescending);
    }

    @log()
    private orderByMultipleExamples(): void {

        var myArr1 = this.simpleClone();
        myArr1.push({ id: randomString(), name: "App", sequence: 1 });

        const allItemsOrderedByNameAndThenSequence: ISimpleItem[] = myArr1.OrderByMultiple([(item) => item.name, (item) => item.sequence]);

        console.log(allItemsOrderedByNameAndThenSequence);
    }

    @log()
    private orderByMultipleDescendingExamples(): void {

        var myArr1 = this.simpleClone();
        myArr1.push({ id: randomString(), name: "App", sequence: 1 });

        const allItemsOrderedByNameAndThenSequenceDescending: ISimpleItem[] = myArr1.OrderByMultipleDescending([(item) => item.name, (item) => item.sequence]);

        console.log(allItemsOrderedByNameAndThenSequenceDescending);
    }

    @log()
    private containsExamples(): void {

        var myArr = this.simpleClone();

        const containsSpfxItem: boolean = myArr.Contains(i => i.name.Equals("spfx"));

        console.log(containsSpfxItem);

        const contains404Item: boolean = myArr.Contains(i => i.name.Equals("404"));

        console.log(contains404Item);

        const multipleConditions: boolean = myArr.Contains(i => i.name.Equals("404") || i.name.Equals("spfx"));

        console.log(multipleConditions);

        const emptyArrayContains: boolean = [].Contains(i => (i as any).name.Equals("404") || (i as any).name.Equals("spfx"));
        
        console.log(emptyArrayContains);
    }

    @log()
    private countExamples(): void {

        var myArr = this.simpleClone();
        myArr.push({ id: randomString(), name: "App", sequence: 1 });
        myArr.push({ id: randomString(), name: "Dev", sequence: 1 });
        myArr.push({ id: randomString(), name: "Dev", sequence: 5 });

        const totalAppItems: number = myArr.Count(i => i.name.Equals("app"));

        console.log(totalAppItems);

        
        const total404Items: number = myArr.Count(i => i.name.Equals("404"));

        console.log(total404Items);

        const totalAppOrDevItems: number = myArr.Count(i => i.name.Equals("app") || i.name.Equals("dEv"));

        console.log(totalAppOrDevItems);

        const emptyArrayCount: number = [].Count(i => (i as any).name.Equals("404") || (i as any).name.Equals("spfx"));
        
        console.log(emptyArrayCount);
    }

    @log()
    private lastOrDefaultExamples(): void {

        var myArr = this.simpleClone();
        myArr.push({ id: randomString(), name: "SPFx", sequence: 4 });
        myArr.push({ id: randomString(), name: "SPFx", sequence: 5 });
        myArr.push({ id: randomString(), name: "SPFx", sequence: 6 });
        myArr.push({ id: randomString(), name: "Dev", sequence: 1000 });

        const spfxItem: ISimpleItem|null = myArr.LastOrDefault(i => i.name.Equals("spfx"));

        console.log(spfxItem);

        const lastItem: ISimpleItem|null = myArr.LastOrDefault();

        console.log(lastItem);

        const defaultItem: ISimpleItem|null = myArr.LastOrDefault(i => i.name.Equals("404"), { id: randomString(), name: "This is item is the default item, because the searched item was not found", sequence: 404 });

        console.log(defaultItem);

        const defaultNullItem: ISimpleItem|null = myArr.LastOrDefault(i => i.name.Equals("404"));

        console.log(defaultNullItem);

        const emptyArrCheck: ISimpleItem|null = [].LastOrDefault(i => (i as any).name.Equals("404"));

        console.log(emptyArrCheck);
    }

    @log()
    private addAtExamples(): void {
        var myArr = this.simpleClone();
        myArr.AddAt(0, { id: randomString(), name: "First Item", sequence: 0 });
        myArr.AddAt(1, { id: randomString(), name: "Second Item", sequence: 1 });
        myArr.AddAt(1000, { id: randomString(), name: "LAST Item", sequence: 10000 });
        myArr.AddAt(-3, { id: randomString(), name: "LAST Item - 3", sequence: 10000 });

        console.log(myArr, JSON.stringify(myArr));
    }

    @log()
    private removeAtExamples(): void {
        var myArr = this.simpleClone();
        myArr.AddAt(0, { id: randomString(), name: "First Item", sequence: 0 });
        myArr.AddAt(1, { id: randomString(), name: "Second Item", sequence: 1 });
        myArr.AddAt(1000, { id: randomString(), name: "LAST Item", sequence: 10000 });
        myArr.AddAt(-3, { id: randomString(), name: "LAST Item - 3", sequence: 10000 });

        console.log("Before remove:", [...[], ...myArr]);

        //Remove 2 items, starting at index 0
        myArr.RemoveAt(0, 2);
        console.log("after the first two items removed", [...[], ...myArr]);

        //remove the item at index 2
        myArr.RemoveAt(2);
        console.log("after the item at index 2 removed", [...[], ...myArr]);

        // myArr.RemoveAt(-3);

        myArr.RemoveAt(-3);
        console.log("after the item at lastitem -3 removed", [...[], ...myArr]);       

    }
}

class StringsApp {

    private testString: string = "Hello @spfxappdev/utility";

    public start(): void {
    //    this.startsWithExamples();
    //    this.endsWithExamples();
    //    this.containsExamples();
    //    this.indexOfExamples();
    //    this.insertExamples();
    //    this.equalsExamples();
    //    this.isEmptyExamples();
    }

    @log()
    private startsWithExamples(): void {
        console.log(`${this.testString}.StartsWith('hello') ==> `, this.testString.StartsWith("hello"));
        console.log(`${this.testString}.StartsWith('hello', false) ==> `, this.testString.StartsWith("hello", false));
        console.log(`${this.testString}.StartsWith('@spfxappdev') ==> `, this.testString.StartsWith("@spfxappdev"));
    }

    @log()
    private endsWithExamples(): void {
        console.log(`${this.testString}.EndsWith('@SPFxAppDev/Utility') ==> `, this.testString.EndsWith("@SPFxAppDev/Utility"));
        console.log(`${this.testString}.EndsWith('@SPFxAppDev/Utility', false) ==> `, this.testString.EndsWith("@SPFxAppDev/Utility", false));
        console.log(`${this.testString}.EndsWith('@spfxappdev') ==> `, this.testString.EndsWith("@spfxappdev"));
    }

    @log()
    private containsExamples(): void {
        console.log(`${this.testString}.Contains('@SPFxAppDev/Utility') ==> `, this.testString.Contains("@SPFxAppDev/Utility"));
        console.log(`${this.testString}.Contains('@SPFxAppDev/Utility', false) ==> `, this.testString.Contains("@SPFxAppDev/Utility", false));
        console.log(`${this.testString}.Contains('404') ==> `, this.testString.Contains("404"));
    }

    @log()
    private indexOfExamples(): void {
        console.log(`${this.testString}.IndexOf('@SPFxAppDev/Utility') ==> `, this.testString.IndexOf("@SPFxAppDev/Utility"));
        console.log(`${this.testString}.IndexOf('@SPFxAppDev/Utility', false) ==> `, this.testString.IndexOf("@SPFxAppDev/Utility", false));
        console.log(`${this.testString}.IndexOf('404') ==> `, this.testString.IndexOf("404"));
    }

    @log()
    private insertExamples(): void {
        console.log(`${this.testString}.Insert(5, " from") ==> `, this.testString.Insert(5, " from"));
        console.log(`${this.testString}.Insert(255, " insert to end") ==> `, this.testString.Insert(255, " insert to end"));
    }

    @log()
    private equalsExamples(): void {
        console.log(`${this.testString}.Equals('HeLlO @SPFxAppDev/UTILITY') ==> `, this.testString.Equals("HeLlO @SPFxAppDev/UTILITY"));
        console.log(`${this.testString}.Equals('HeLlO @SPFxAppDev/UTILITY', false) ==> `, this.testString.Equals("HeLlO @SPFxAppDev/UTILITY", false));
        console.log(`${this.testString}.Equals('404') ==> `, this.testString.Equals("404"));
    }

    @log()
    private isEmptyExamples(): void {
        console.log(`${this.testString}.IsEmpty() ==> `, this.testString.IsEmpty());
        console.log(`"".IsEmpty() ==> `, "".IsEmpty());
        console.log(`"     ".IsEmpty() ==> `, "     ".IsEmpty());
    }
}

class FunctionsApp {

    private testString: string = "Hello @spfxappdev/utility";

    public start(): void {
        // this.ayncFnExamples();
        // this.cssClassesExamples();
        // this.getDeepOrDefaultExamples();
        // this.getUrlParameterExamples();
        // this.isFunctionExamples();
        // this.isNullOrEmptyExamples();
        // this.issetExamples();
        this.issetDeepExamples();
        // this.isValidEmailExamples();
        // this.promiseQueueExamples();
        // this.randomStringExamples();
        // this.replaceNonAlphanumericExamples();
        // this.stripHTMLExamples();
        // this.toBooleanExamples();

    }

    private dummyPromise(success: boolean = true, delay = 5000): Promise<string> {

        console.log("dummyPromise START");

        return new Promise<string>((resolve, reject) => {

            setTimeout(() => {

                if(success) {
                    console.log("IN dummyPromise success ", delay);
                    return resolve(`Success after ${delay}ms`);
                }

                console.log("IN dummyPromise fail ", delay);
                return reject(`Error after ${delay}ms`);
            }, delay);
        });
    }

    private parameterlessPromiseFunc(): Promise<string> {

        console.log("parameterlessPromiseFunc START");

        return new Promise<string>((resolve, reject) => {

            setTimeout(() => {

                return resolve(`Success parameterlessPromiseFunc`);
            }, 5000);
        });
    }

    @log()
    private async ayncFnExamples(): Promise<void> {

        const [result, error] = await asyncFn(this.dummyPromise(true, 2000));

        console.log(result, error);

        if(error) {
            console.error("ERROR occurred...");
        }

        const [result2, error2] = await asyncFn(this.dummyPromise(false, 2000));

        console.log(result2, error2);

        if(error2) {
            console.error("ERROR occurred...");
        }
    }

    @log()
    private cssClassesExamples(): void {
        console.log(`cssClasses('spfx-app-dev', 'theme') ==> `, cssClasses('spfx-app-dev', 'theme'));
        console.log(`cssClasses('spfx-app-dev', { theme: false }) ==> `, cssClasses('spfx-app-dev', { theme: false }));
        console.log(`cssClasses('spfx-app-dev', ['theme', { active: true, item: false }, null, false, undefined, 0, 1, 'container']) ==> `, cssClasses('spfx-app-dev', ['theme', { active: true, item: false }, null, false, undefined, 0, 1, 'container']));
    }

    @log()
    private  getDeepOrDefaultExamples(): void {

        const myObj = {
            My: {
                nested: {
                    property: "Hello from nested Property"
                }
            },
            items: simpleArray
        };

        console.log(myObj, `getDeepOrDefault(myObj, "My.nested.property") ==> `, getDeepOrDefault(myObj, "My.nested.property"));

        console.log(myObj, `ARRAY: getDeepOrDefault(myObj, "items.2") ==> `, getDeepOrDefault(myObj, "items.2"));

        const arr: ISimpleItem[] = getDeepOrDefault<ISimpleItem[]>(myObj, "items");
        console.log(myObj, `TypeSafe: getDeepOrDefault<ISimpleItem[]>(myObj, "items") ==> `, arr);

        console.log(myObj, `Default: getDeepOrDefault(myObj, "404", "this string is returend as default, because 404 does not exist in myObj") ==> `, getDeepOrDefault(myObj, "404", "this string is returend as default, because 404 does not exist in myObj"));
    }

    @log()
    private  getUrlParameterExamples(): void {

        console.log(`getUrlParameter("from-window-location") ==> `, getUrlParameter("from-window-location"));
        console.log(`getUrlParameter("from-passed-url", 'http://localhost:1234/?from-passed-url=hello') ==> `, getUrlParameter("from-passed-url", 'http://localhost:1234/?from-passed-url=hello'));
        console.log(`getUrlParameter("anotherparam", 'http://localhost:1234/?from-passed-url=hello&anotherparam=2') ==> `, getUrlParameter("anotherparam", 'http://localhost:1234/?from-passed-url=hello&anotherparam=2'));

    }

    @log()
    private  isFunctionExamples(): void {

        console.log(`isFunction("this is a string") ==> `, isFunction("this is a string"));
        console.log(`isFunction(1) ==> `, isFunction(1));
        console.log(`isFunction(() => { }) ==> `, isFunction(() => { }));
        console.log(`isFunction(window.addEventListener) ==> `, isFunction(window.addEventListener));

    }

    @log()
    private  isNullOrEmptyExamples(): void {

        console.log(`isNullOrEmpty("this is a string") ==> `, isNullOrEmpty("this is a string"));
        console.log(`isNullOrEmpty(1) ==> `, isNullOrEmpty(1));
        console.log(`isNullOrEmpty(() => { }) ==> `, isNullOrEmpty(() => { }));
        console.log(`isNullOrEmpty(null) ==> `, isNullOrEmpty(null));
        console.log(`isNullOrEmpty(undefined) ==> `, isNullOrEmpty(undefined));
        console.log(`isNullOrEmpty([]) ==> `, isNullOrEmpty([]));
        console.log(`isNullOrEmpty([1,2]) ==> `, isNullOrEmpty([1,2]));
        console.log(`isNullOrEmpty({}) ==> `, isNullOrEmpty({}));
        console.log(`isNullOrEmpty("") ==> `, isNullOrEmpty(""));
        console.log(`isNullOrEmpty("     ") ==> `, isNullOrEmpty("     "));

    }

    @log()
    private  issetExamples(): void {

        console.log(`isset("this is a string") ==> `, isset("this is a string"));
        console.log(`isset(1) ==> `, isset(1));
        console.log(`isset(() => { }) ==> `, isset(() => { }));
        console.log(`isset(null) ==> `, isset(null));
        console.log(`isset(undefined) ==> `, isset(undefined));
        console.log(`isset([]) ==> `, isset([]));
        console.log(`isset([1,2]) ==> `, isset([1,2]));
        console.log(`isset({}) ==> `, isset({}));
        console.log(`isset("") ==> `, isset(""));
        console.log(`isset("     ") ==> `, isset("     "));

    }

    @log()
    private  issetDeepExamples(): void {

        const myObj = {
            My: {
                nested: {
                    property: "Hello from nested Property"
                }
            },
            items: simpleArray
        };

        console.log(myObj, `issetDeep(myObj, "My.nested.property") ==> `, issetDeep(myObj, "My.nested.property"));

        console.log(myObj, `ARRAY: issetDeep(myObj, "items.2") ==> `, issetDeep(myObj, "items.2"));

        console.log(myObj, `Not set: issetDeep(myObj, "404") ==> `, issetDeep(myObj, "404"));
    }

    @log()
    private  isValidEmailExamples(): void {
        console.log(`isValidEmail('seryoga@spfx-app.dev') ==> `, isValidEmail('seryoga@spfx-app.dev'));
        console.log(`isValidEmail('spfx-app.dev') ==> `, isValidEmail('spfx-app.dev'));
        console.log(`isValidEmail('my@mail.c') ==> `, isValidEmail('my@mail.c'));
        console.log(`isValidEmail('my@mail.12') ==> `, isValidEmail('my@mail.12'));
        console.log(`isValidEmail('my@mail.co') ==> `, isValidEmail('my@mail.co'));

    }

    

    @log()
    private async  promiseQueueExamples(): Promise<void> {
        

        const promise1 = toParameterlessPromiseQueueFunc(this.dummyPromise, true, 10000);
        const promise2 = this.parameterlessPromiseFunc;
        const promise3 = toParameterlessPromiseQueueFunc(this.dummyPromise, false, 2000);
        const promise4 = toParameterlessPromiseQueueFunc(this.dummyPromise, true, 600);

        console.log("const promise1 = toParameterlessPromiseQueueFunc(this.dummyPromise, true, 10000);");
        console.log("const promise2 = this.parameterlessPromiseFunc;");
        console.log("const promise3 = toParameterlessPromiseQueueFunc(this.dummyPromise, false, 2000);");
        console.log("const promise4 = toParameterlessPromiseQueueFunc(this.dummyPromise, true, 600);");


        // const promise1 = this.dummyPromise(true, 6000);
        // const promise2 = this.dummyPromise(true, 1000);
        // const promise3 = this.dummyPromise(false, 1000);
        // const promise4 = this.dummyPromise(true, 1000);
        
        console.log(`await promiseQueue([promise1, promise2, promise3, promise4], 0)`, await promiseQueue([promise1, promise2, promise3, promise4], 0));

        const onSuccessFunc = (result: string, index: number) => {
            console.log(`The Promise with index ${index} successfully executed. Result is:`, result);
        };


        const onErrorFunc = (error: string, index: number) => {
            console.error(`The Promise with index ${index} failed. Error is:`, error);
        };

        const onSuccessFuncPromise = (result: string, index: number): Promise<void> => {

            console.log("onSuccessFuncPromise START, wait 2s before execute next promise queue");
            return new Promise<void>((resolve, reject) => {
                setTimeout(() => {
                    console.log(`The Promise with index ${index} successfully executed. Result is:`, result);
                    return resolve();
                }, 2000);
            });
            
        };


        const onErrorFuncPromise = (error: string, index: number): Promise<void> => {

            console.log("onErrorFuncPromise START, wait 2s before execute next promise queue");
            return new Promise<void>((resolve, reject) => {
                setTimeout(() => {
                    console.error(`The Promise with index ${index} failed. Error is:`, error);
                    return reject();
                }, 2000);
            });

            
        };

        const promises: Array<PromiseQueue<any>> = [ 
            { promiseFunc: promise1, callback: onSuccessFunc, onError: onErrorFunc}, 
            { promiseFunc: promise2, callback: onSuccessFuncPromise, onError: onErrorFunc}, 
            { promiseFunc: promise3, callback: onSuccessFunc, onError: onErrorFuncPromise}, 
            { promiseFunc: promise4, callback: onSuccessFunc, onError: onErrorFunc} ]

        console.log(`await promiseQueue([promise1, promise2, promise3, promise4], 0)`, await promiseQueue(promises, 0));

    }

    @log()
    private  randomStringExamples(): void {
        console.log(`randomString() ==> `, randomString());
        console.log(`randomString(15) ==> `, randomString(15));
        console.log(`randomString(6, 'abcdef0123456789') ==> `, randomString(6, 'abcdef0123456789'));

    }

    @log()
    private replaceNonAlphanumericExamples(): void {
        console.log(`replaceNonAlphanumeric('This is a text with non alphanumberic and not underscore characters: 1234567890??!"??$%&/()=?+#____<---->') ==> `, replaceNonAlphanumeric('This is a text with non alphanumberic and not underscore characters: 1234567890??!"??$%&/()=?+#____<---->'));
        console.log(`replaceNonAlphanumeric('This is a text with non alphanumberic and not underscore characters: ??????1234567890??!"??$%&/()=?+#____<---->', '*') ==> `, replaceNonAlphanumeric('This is a text with non alphanumberic and not underscore characters: ??????1234567890??!"??$%&/()=?+#____<---->', '*'));
        console.log(`randomString(6, 'abcdef0123456789') ==> `, randomString(6, 'abcdef0123456789'));
    }

    @log()
    private stripHTMLExamples(): void {
        console.log("stripHTML(`<div class='abc'>Hello <strong>spfxappdev</strong></div>) ==> ", stripHTML(`<div class="abc">Hello <strong>spfxappdev</strong></div>`));
        console.log("stripHTML(`Hello spfxappdev`) ==> ", stripHTML(`Hello spfxappdev`));
    }

    @log()
    private toBooleanExamples(): void {
        console.log(`toBoolean(true) ==> `, toBoolean(true));
        console.log(`toBoolean("true") ==> `, toBoolean("true"));
        console.log(`toBoolean("1") ==> `, toBoolean("1"));
        console.log(`toBoolean(1) ==> `, toBoolean(1));
        console.log(`toBoolean(false) ==> `, toBoolean(false));
        console.log(`toBoolean("false") ==> `, toBoolean("false"));
        console.log(`toBoolean("0") ==> `, toBoolean("0"));
        console.log(`toBoolean(0) ==> `, toBoolean(0));
        console.log(`toBoolean(2) ==> `, toBoolean(2));
        console.log(`toBoolean("this is a string") ==> `, toBoolean("this is a string"));
        console.log(`toBoolean("") ==> `, toBoolean(""));
    }

    
}

new ArrayApp().start();
new StringsApp().start();
new FunctionsApp().start();
