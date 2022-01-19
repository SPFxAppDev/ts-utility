import { isset, isFunction } from ".";

//TODO: Documentation

export type PromiseQueue<T> = {
    promiseFunc: Promise<T>;
    callback?(result: T, index: number): void|Promise<any>;
    onError?(error: any, index: number): void|Promise<any>;
};

export default async function promiseQueue(promiseArray: Array<Promise<any>>|Array<PromiseQueue<any>>, delayBetweenCalls: number = 500): Promise<void> {
    await promiseQueueExecutor(promiseArray, 0, delayBetweenCalls);
}

const promiseQueueExecutor = async (promiseArray: Array<Promise<any>>|Array<PromiseQueue<any>>, index: number, delayBetweenCalls: number): Promise<void> => {

    return new Promise<void>((resolve, reject) => {

        let currentPromise: Promise<any>;
        let callbackFunc: (result: any, index: number) => void|Promise<any> = undefined;
        let errorFunc: (error: any, index: number) => void|Promise<any> = undefined;

        if(promiseArray[index] instanceof Promise) {
            currentPromise = promiseArray[index] as Promise<any>;
        }
        else if((promiseArray[index] as PromiseQueue<any>).promiseFunc instanceof Promise) {
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

        currentPromise.then(async (promiseResult: any) => {

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

// export default async function promiseQueue(promiseArray: Array<Promise<any>>, delayBetweenCalls: number = 500): Promise<void> {
//     await promiseQueueExecutor(promiseArray, 0, delayBetweenCalls);
// }

// const promiseQueueExecutor = async (promiseArray: Array<Promise<any>>, index: number, delayBetweenCalls: number): Promise<void> => {

//     return new Promise<void>((resolve, reject) => {
//         let currentPromise: Promise<any> = promiseArray[index];

//         currentPromise.then(async () => {
//             if(index + 1 >= promiseArray.length) {
//                 return resolve();
//             }

//             setTimeout(async () => {
//                 await promiseQueueExecutor(promiseArray, index+1, delayBetweenCalls);
//                 return resolve();
//             }, delayBetweenCalls);

//         }).catch(async () => {
//             if(index + 1 >= promiseArray.length) {
//                 return resolve();
//             }
    
//             await promiseQueueExecutor(promiseArray, index+1, delayBetweenCalls);
//             return resolve();
//         });
//     });
// }