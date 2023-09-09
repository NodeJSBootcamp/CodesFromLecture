import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from 'axios';


type UseAxiosRequestHook<TData> = {
    lineData: TData | null;
    loading: boolean;
    error: AxiosError | null;
  };

function useAxiosRequest<TData>(initialUrl: string,requestData: any): UseAxiosRequestHook<TData> {
    const [lineData, setData] = useState<TData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<AxiosError | null>(null);
  
    const fetchData = async (url: string, requestData: any) => {
      try {
        const response: AxiosResponse<TData> = await axios.post(url, requestData);
        setData(response.data);
        setLoading(false);
      } catch (error:any) {
        setError(error);
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData(initialUrl, requestData);
    }, [initialUrl]);
  
  
    return { lineData, loading, error };
}


export default useAxiosRequest