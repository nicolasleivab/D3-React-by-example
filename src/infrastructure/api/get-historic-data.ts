import axios from 'axios';
import { getErrorMessage } from '../utils/handle-error';
import type { TResponse } from '../types';

export async function getHistoricData(url: string): Promise<TResponse> {
  try {
    const res = await axios.get(url);

    return { data: res.data.data, error: null };
  } catch (error) {
    const errorMessage = getErrorMessage(error);

    return { data: [], error: errorMessage };
  }
}
