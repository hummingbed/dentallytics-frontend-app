import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost/dentallytics-api/public/api/v1';

export const chartDataService = createApi({
  reducerPath: 'chartDataService',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  keepUnusedDataFor: 120,
  endpoints: (builder) => ({
    endpointForNextMonthAnalysis: builder.query({
      query: ({ apiToken, corpId, clinicId, startDate, endDate }) => {
        const params = new URLSearchParams({
          api_token: apiToken,
          corpId: corpId,
          clinicId: clinicId,
          startDate: startDate,
          endDate: endDate,
        });

        return `/9999/charts/24/next-month-revenue-analysis?${params.toString()}`;
      },
      transformResponse: (response) => {
        try {
          const decodedString = atob(response);
          const parsedData = JSON.parse(decodedString);
          return parsedData;
        } catch (error) {
          console.error('Error decoding response:', error);
          return null;
        }
      },
    }),
  }),
});

export const { useEndpointForNextMonthAnalysisQuery } = chartDataService;