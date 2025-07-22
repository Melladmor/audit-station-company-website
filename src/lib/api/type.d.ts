export interface FetchPublicDataParams {
  url: string;
}
export interface Data<T = Record<string, unknown>> {
  data: T;
  url: string;
}
