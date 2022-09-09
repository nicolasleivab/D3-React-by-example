import { useCallback, useEffect, useState } from 'react';
import { getHistoricData } from '../../infrastructure/api/get-historic-data';
import type { TApiDataItem } from '../../infrastructure/types';
import { DEFAULT_URL } from '../constants';

export default function useApi() {
    const [error, setError] = useState<null | string>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<TApiDataItem[]>([]);

    const fetchData = useCallback(async () => {
        setLoading(true);
        const response = await getHistoricData(DEFAULT_URL);

        if(response.error){
            setLoading(false);
            return setError(response.error);
        }

        setData(response.data)
        setLoading(false)
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData]);

  return {data, loading, error}
}
