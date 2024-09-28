import { getCurrentContext } from 'src/graphQL/context';

export function ResolverLog() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const context = getCurrentContext();
      context.logger.info(
        `ResolverLog: ${target.constructor.name}.${propertyKey} start`,
      );
      const res = await originalMethod.apply(this, args);

      context.logger.info(
        `ResolverLog: ${target.constructor.name}.${propertyKey} finish`,
      );

      return res;
    };
    return descriptor;
  };
}
