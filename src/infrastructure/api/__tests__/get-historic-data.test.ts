import axios from 'axios';
import { getHistoricData } from '../get-historic-data';
import {DEFAULT_URL} from '../../../application/constants'

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

const MOCK_DATA = [
  { priceUsd: '6601.0724971279524219', time: 1530748800000 },
  { priceUsd: '6581.0092630267574887', time: 1530662400000},
];

describe('getHistoricData', () => {
  describe('when getHistoricData is successful', () => {
    it('returns historical data', async () => {
      const response = {
            data:{
                data: MOCK_DATA,
                error: null,
            }
        };

      mockedAxios.get.mockResolvedValueOnce(response);

      const result = await getHistoricData(DEFAULT_URL);

      expect(mockedAxios.get).toHaveBeenCalledWith(DEFAULT_URL);
      expect(result.data).toEqual(MOCK_DATA);
    });
  });

  describe('when getHistoricData fails', () => {
    it('returns and empty array and an error message', async () => {
      const message = 'Network Error';
      mockedAxios.get.mockRejectedValueOnce(new Error(message));

      const result = await getHistoricData(DEFAULT_URL);

      expect(mockedAxios.get).toHaveBeenCalledWith(DEFAULT_URL);
      expect(result.data).toEqual([]);
      expect(result.error).toEqual(message);
    });
  });
});