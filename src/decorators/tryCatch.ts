export const tryCatch: () => any = (): any => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function () {
      //TODO: Promise Check
      try {
        const result: any = originalMethod.apply(this, arguments);

        if (!(result instanceof Promise)) {
          return result;
        }

        return Promise.resolve(result)
          .then((value) => {
            return value;
          })
          .catch((error) => {
            console.error(
              `Error caught in async method "${propertyKey}":`,
              error
            );
            return Promise.reject(error);
          });
      } catch (error) {
        console.error(`Error caught in method "${propertyKey}":`, error);
      }
    };

    return descriptor;
  };
};
