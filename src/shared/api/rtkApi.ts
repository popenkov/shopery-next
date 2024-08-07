import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { USER_LOCALSTORAGE_KEY } from '@/shared/lib/constants';

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
      if (token) {
        headers.set('Authorization', token);
      }
      return headers;
    },
  }),
  // eslint-disable-next-line
  endpoints: (builder) => ({}),
});
