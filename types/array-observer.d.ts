export enum ActionType {
  Added = 'added',
  Modified = 'modified',
  Removed = 'removed'
}

export interface ArrayObserverCallbackParams<T> {
  index: number;
  target: T[];
  type: ActionType;
  value: T;
}

export type ArrayObserverCallback = <T>(params: ArrayObserverCallbackParams<T>) => void;

export declare function observer<T>(array: T[], callback: ArrayObserverCallback): Proxy;
