export type AsyncResult<TResult, TError> = [TResult|null, TError|null];

/**
 * A wrapper function to handle an await function and their results/errors
 *
 * @template TResult Type of expected result
 * @template TError Type of expected error
 * @param {Promise<TResult>} The asynchronous function to wait for
 * @return {*}  {Promise<AsyncResult<TResult, TError>>}
 * @since 1.1.0
 */
export default async function asyncFn<TResult, TError>(promiseFn: Promise<TResult>): Promise<AsyncResult<TResult, TError>> {
    try {
        const r: TResult = await promiseFn;
        return [r, null];
    }
    catch(e) {
        return [null, e];
    }
}