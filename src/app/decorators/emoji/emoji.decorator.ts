/**
 * 装饰器本质是函数，它是一个返回函数的函数
 */
export function Emoji() {
    return (target: object, key: string) => {
        let val = target[key];
        const getter = () => {
            return val;
        };
        const setter = (value: string) => {
            val = `🎉🎉🎉 ${value}`;
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}
