/**
 * Creates a simulated promise to mock asynchronous operations.
 * @template T - The type of the value the promise will resolve with.
 * @template E - The type of the error the promise will reject with.
 * @param {number} [duration=3000] - Delay in milliseconds.
 * @param {boolean} [success=true] - Whether to resolve or reject.
 * @param {T} [returnValue] - Value to resolve with.
 * @param {E} [errorValue='Dummy Reject'] - Value to reject with.
 */
export function dummyPromise(duration?: number, success?: boolean): Promise<void>;
export function dummyPromise<T>(duration: number, success: true, returnValue: T): Promise<T>;
export function dummyPromise<T, E>(
  duration: number,
  success: false,
  returnValue: T,
  errorValue: E,
): Promise<never>;
export function dummyPromise<T, E>(
  duration: number = 3000,
  success: boolean = true,
  returnValue?: T,
  errorValue?: E,
): Promise<T | void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!success) {
        return reject(errorValue ?? 'Dummy Reject');
      }
      resolve(returnValue as T);
    }, duration);
  });
}
