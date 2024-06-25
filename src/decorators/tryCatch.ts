/**
 * This type is a function which expects T as return value (original function return type). 
 * In the function the this.-pointer can be used to access the class instance. 
 * In addition, the first parameter is the error thrown and then all other passing parameters are passed to the method to which the decorator is applied
 * @example
 * ```typescript
 * @tryCatch()
 * public catchThisFunc(p1, p2, p3): number { .... }
 * @tryCatch({
 *    defaultValueOnError(err, p1, p2, p3): number {
      console.error(err, p1, p2, p3, this);
      return 0;
    }
  })
  public catchThisFunc(p1, p2, p3): number { .... }
 * ```
 */
export type DefaultValueOnErrorFunction<T> = (error: any, ...args: any[]) => T | null | undefined;

export interface ITryCatchDecoratorOptions<T> {
  /**
   * The default value that is returned when an error has occurred.
   * @default null
   */
  defaultValueOnError?: T | null | undefined | DefaultValueOnErrorFunction<T>;
}

/**
 * Decorator to wrap a class method with a try-catch block. Works also with Promise
 * @param {ITryCatchDecoratorOptions<T>} options custom options for the decorators
 * @returns {T|null|undefined} In case of success the expected result T, otherwise the specified default value or null or undefined.
 * @since 1.4.0
 * @since 1.5.0 defaultValueOnError can be a function
 */
export const tryCatch: <T>(options?: ITryCatchDecoratorOptions<T>) => any = <T>(
  options?: ITryCatchDecoratorOptions<T>
): any => {
  const defaultOptions: ITryCatchDecoratorOptions<T> = {
    defaultValueOnError: null,
  };

  options = { ...defaultOptions, ...options };

  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function () {
      const args = arguments;
      const currentTarget = this;

      try {
        const result: any = originalMethod.apply(this, arguments);

        if (!(result instanceof Promise)) {
          return result;
        }

        return new Promise<any>((resolve) => {
          (result as Promise<any>)
            .then((value) => {
              return resolve(value);
            })
            .catch((error) => {
              console.error(`Error caught in method "${propertyKey}":`, error);

              if (typeof options.defaultValueOnError === 'function') {
                return resolve(options.defaultValueOnError.apply(currentTarget, [error, ...args]));
              }

              return resolve(options.defaultValueOnError);
            });
        });
      } catch (error) {
        console.error(`Error caught in method "${propertyKey}":`, error);
        if (typeof options.defaultValueOnError === 'function') {
          return options.defaultValueOnError.apply(currentTarget, [error, ...args]);
        }

        return options.defaultValueOnError;
      }
    };

    return descriptor;
  };
};
