export type AsyncResult<TResult, TError> = [TResult|null, TError|null];

/** 
 * Type for supporting methodes with parameters
 * @since 1.1.1
*/
export type PromiseFunc<T> = (...args: any) => Promise<T>;

/**
 * A wrapper function to handle an await function and their results/errors
 *
 * @template TResult Type of expected result
 * @template TError Type of expected error
 * @param {PromiseFunc<TResult>} promiseFn The asynchronous function to wait for
 * @param {any} promiseFnArgs A set of arguments to be passed to the function (since 1.1.1)
 * @return {Promise<AsyncResult<TResult, TError>>}
 * @since 1.1.0
 * @example const [result, error] = await asyncFn(myPromiseFunc, true, 2000);
 * @example const [result, error] = await asyncFn<PromiseResultType, Error>(this.myPromiseFunc.bind(this), true, null, 'abc');
 */
export default async function asyncFn<TResult, TError>(
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