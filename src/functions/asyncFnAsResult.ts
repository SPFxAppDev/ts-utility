import { Result } from '../classes';
import asyncFn, { PromiseFunc } from './asyncFn';
import isNullOrEmpty from './isNullOrEmpty';

/**
 * A wrapper function to handle an await function and their results/errors as IResult<TResult>
 *
 * @template TResult Type of expected result
 * @param {PromiseFunc<TResult>} promiseFn The asynchronous function to wait for
 * @param {object|null|undefined} thisArg The optional Object to to be used as the "this." object
 * @param {any} promiseFnArgs A set of arguments to be passed to the function
 * @return {Promise<Result<TResult>}
 * @since 1.4.0
 * @example const result: IResult = await asyncFnAsResult(myPromiseFunc, null, 2000);
 * @example const result: IResult = await asyncFnAsResult(this.myPromiseFunc, this, true, null, 'abc');
 */
export default async function asyncFnAsResult<TResult>(
  promiseFn: PromiseFunc<TResult>,
  thisArg?: object | null | undefined,
  ...promiseFnArgs: any
): Promise<Result<TResult>> {
  const result = new Result<TResult>();

  const bindThis: boolean =
    !isNullOrEmpty(thisArg) && typeof thisArg === 'object';

  const [asyncResult, error] = await asyncFn(
    bindThis ? promiseFn.bind(thisArg) : promiseFn,
    ...promiseFnArgs
  );

  if (error) {
    result.error = error;
  } else {
    result.value = asyncResult as TResult;
  }

  return result;
}
