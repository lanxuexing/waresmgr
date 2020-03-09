const isFunction = fn => typeof fn === 'function';

const doUnsubscribe = subscription => {
    // tslint:disable-next-line:no-unused-expression
    subscription &&
        isFunction(subscription.unsubscribe) &&
        subscription.unsubscribe();
};

const doUnsubscribeIfArray = subscriptionsArray => {
    // tslint:disable-next-line:no-unused-expression
    Array.isArray(subscriptionsArray) &&
        subscriptionsArray.forEach(doUnsubscribe);
};

export function AutoUnsubscribe({
    blackList = [],
    arrayName = '',
    event = 'ngOnDestroy'
} = {}) {
    // tslint:disable-next-line:ban-types
    type NewType = Function;

    // tslint:disable-next-line:only-arrow-functions
    return function(constructor: NewType) {
        const original = constructor.prototype[event];

        if (!isFunction(original)) {
            throw new Error(
                `${
                constructor.name
                } is using @AutoUnsubscribe but does not implement ${event}`
            );
        }

        constructor.prototype[event] = function() {
            // tslint:disable-next-line:no-unused-expression
            isFunction(original) && original.apply(this, arguments);

            if (arrayName) {
                doUnsubscribeIfArray(this[arrayName]);
                return;
            }

            for (const propName in this) {
                if (blackList.includes(propName)) { continue; }

                const property = this[propName];
                doUnsubscribe(property);
            }
        };
    };
}
