export interface ITryCatchDecoratorOptions<T> {
  /**
   * The default value that is returned when an error has occurred.
   * @default null
   */
  defaultValueOnError?: T | null | undefined;
}

/**
 * Decorator to wrap a class method with a try-catch block. Works also with Promise
 * @param {ITryCatchDecoratorOptions<T>} options custom options for the decorators
 * @returns {T|null|undefined} In case of success the expected result T, otherwise the specified default value or null or undefined.
 * @since 1.4.0
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
              return resolve(options.defaultValueOnError);
            });
        });
      } catch (error) {
        console.error(`Error caught in method "${propertyKey}":`, error);
        return options.defaultValueOnError;
      }
    };

    return descriptor;
  };
};
