'use strict';
const G = typeof global === typeof null ? global : self;
exports.G = G;

const findIndex = [].findIndex || function (callback, context) {
  let i = this.length;
  while (i--) if (callback.call(context, this[i])) return i;
  return i;
};
exports.findIndex = findIndex;

const defineProperty = Object.defineProperty;
exports.defineProperty = defineProperty;

let i = 0;
const UID = '__event-target__' + Math.random();
const WeakMap = G.WeakMap || function WeakMap() {
  const UUID = UID + i++;
  return {
    get(obj) { return obj[UUID]; },
    set(obj, value) {
      defineProperty(obj, UUID, {
        configurable: true,
        value
      });
    }
  };
};
exports.WeakMap = WeakMap;
