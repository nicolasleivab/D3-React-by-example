export type TErrorWithMessage = {
    message: string;
  };
  
  export type TApiDataItem = {
    priceUsd: string;
    time: number;
  };

  export type TResponse = {
    data: TApiDataItem[];
    error: string | null;
  };
  