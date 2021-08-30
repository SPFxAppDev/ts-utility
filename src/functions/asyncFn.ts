export type AsyncResult<TResult, TError> = [TResult|null, TError|null];

export const asyncFn = async <TResult, TError>(promiseFn: Promise<TResult>): Promise<AsyncResult<TResult, TError>> => {
    try {
        const r: TResult = await promiseFn;
        return [r, null];
    }
    catch(e) {
        return [null, e];
    }
}