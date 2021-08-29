/*
 * @Author: Vir
 * @Date: 2021-07-19 16:59:47
 * @Last Modified by: Vir
 * @Last Modified time: 2021-07-19 17:02:33
 */

export const isObject = (object: any): boolean => {
  return object instanceof Object && object.constructor.name === 'Object';
};

export const isArray = (array: any): boolean => {
  return array instanceof Array && array.constructor.name === 'Array';
};

export const setId = (): string => {
  return (
    (new Date().getTime() / 1000).toString(16).substr(-4) +
    Math.random().toString(16).substr(2, 12)
  );
};

export interface StorageDBConfig {
  mode: 'session' | 'local';
}

class StorageDB {
  constructor() {}
}
