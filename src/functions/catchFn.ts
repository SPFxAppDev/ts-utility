import { Result } from '../classes/Result';
import isNullOrEmpty from './isNullOrEmpty';

export type CatchFunc<T> = (...args: any) => T;

/**
 * A function to wrap a specified function with a try-catch block and returns IResult<TResult>
 *
 * @template TResult Type of expected result
 * @param {CatchFunc<TResult>} fnToCatch The function to wrap with try-catch
 * @param {object|null|undefined} thisArg The Object to to be used as the "this." object
 * @param {any} fnArgs A set of arguments to be passed to the function
 * @return {Result<TResult>}
 * @since 1.4.0
 */
export default function catchFn<TResult>(
  fnToCatch: CatchFunc<TResult>,
  thisArg?: object | null | undefined,
  ...fnArgs: any
): Result<TResult> {
  const result = new Result<TResult>();

  try {
    if (!isNullOrEmpty(thisArg) && typeof thisArg === 'object') {
      result.value = fnToCatch.apply(thisArg, [...fnArgs]) as TResult;
    } else {
      result.value = fnToCatch(...fnArgs) as TResult;
    }
  } catch (error: any) {
    result.error = error;
  }

  return result;
}
