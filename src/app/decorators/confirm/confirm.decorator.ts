/**
 * 装饰器本质是函数，它是一个返回函数的函数
 */
export function Confirm(message: string) {
    return (target: object, key: string, descriptor: PropertyDescriptor) => {
        const originFn = descriptor.value;
        descriptor.value = function(...args: any) {
            const allow = window.confirm(message);
            if (allow) {
                const result = originFn.apply(this, args);
                return result;
            }
            return null;
        };
        return descriptor;
    };
}
