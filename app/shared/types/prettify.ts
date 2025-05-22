export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

// export type Prettify<T> = {
//   [K in keyof T]: T[K] extends object ? (T[K] extends Array<infer U> ? Prettify<U>[] : Prettify<T[K]>) : T[K]
// }
