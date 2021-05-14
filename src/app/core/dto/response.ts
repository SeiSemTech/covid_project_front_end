export interface Response<T> {
  error: number;
  mensaje: string;
  response: T;
}
