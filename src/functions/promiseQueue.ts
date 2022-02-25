import { isFunction } from ".";

export type ParameterlessPromiseQueueFunc<T> = () => Promise<T>;

/**
 *
 * The Result Type of promiseQueue-Function
 * @since 1.1.0
 */
export type PromiseQueue<T> = {
    promiseFunc: ParameterlessPromiseQueueFunc<T>;
    callback?(result: T, index: number): void|Promise<any>;
    onError?(error: any, index: number): void|Promise<any>;
};

export function toParameterlessPromiseQueueFunc<T>(promiseFunc, ...funcParams: any): ParameterlessPromiseQueueFunc<T> {
    const wrapper: ParameterlessPromiseQueueFunc<T> = function(): Promise<T> {

        return promiseFunc(...funcParams);
    };

    return wrapper;
}



/**
 *
 * Executes a list of Promise one after one (in a queu). An Error/reject will not stop the next promise call. 
 * @param {(Array<Promise<any>>|Array<PromiseQueue<any>>)} promiseArray The array of Promises that will be executed. Use Array<PromiseQueue<any>> to handle callback or errors
 * @param {number} [delayBetweenCalls=500] A delay time (in ms) determines a period of time between each execution
 * @return {*}  {Promise<void>}
 * @since 1.1.0
 */
export default async function promiseQueue(promiseArray: Array<ParameterlessPromiseQueueFunc<any>>|Array<PromiseQueue<any>>, delayBetweenCalls: number = 500): Promise<void> {
    await promiseQueueExecutor(promiseArray, 0, delayBetweenCalls);
}

const promiseQueueExecutor = async (promiseArray: Array<ParameterlessPromiseQueueFunc<any>>|Array<PromiseQueue<any>>, index: number, delayBetweenCalls: number): Promise<void> => {

    return new Promise<void>((resolve, reject) => {

        let currentPromise: ParameterlessPromiseQueueFunc<any>;
        let callbackFunc: (result: any, index: number) => void|Promise<any> = undefined;
        let errorFunc: (error: any, index: number) => void|Promise<any> = undefined;

        if(isFunction(promiseArray[index])) {
            currentPromise = promiseArray[index] as ParameterlessPromiseQueueFunc<any>;
        }
        else if(isFunction((promiseArray[index] as PromiseQueue<any>).promiseFunc)) {
            const promiseQueue: PromiseQueue<any> = (promiseArray[index] as PromiseQueue<any>);
            currentPromise = promiseQueue.promiseFunc;
            callbackFunc = isFunction(promiseQueue.callback) ? promiseQueue.callback : callbackFunc;
            errorFunc = isFunction(promiseQueue.onError) ? promiseQueue.onError : errorFunc;
        }

        // if(!isset(currentPromise)) {
        //     if(index + 1 >= promiseArray.length) {
        //         return resolve();
        //     }

        //     setTimeout(async () => {
        //         await promiseQueueExecutor(promiseArray, index+1, delayBetweenCalls);
        //         return resolve();
        //     }, delayBetweenCalls);
        // }

        currentPromise().then(async (promiseResult: any) => {

            if(isFunction(callbackFunc)) {
                const callbackResult = callbackFunc(promiseResult, index);
                if((callbackResult instanceof Promise)) {
                    try { await callbackResult; } catch (e) {}
                }
            }

            if(index + 1 >= promiseArray.length) {
                return resolve();
            }

            setTimeout(async () => {
                await promiseQueueExecutor(promiseArray, index+1, delayBetweenCalls);
                return resolve();
            }, delayBetweenCalls);

        }).catch(async (error) => {
            if(isFunction(errorFunc)) {
                const errorResult = errorFunc(error, index);

                if((errorResult instanceof Promise)) {
                    try { await errorResult; } catch (e) {}
                }
            }

            if(index + 1 >= promiseArray.length) {
                return resolve();
            }

            await promiseQueueExecutor(promiseArray, index+1, delayBetweenCalls);
            return resolve();
        });
    });
}