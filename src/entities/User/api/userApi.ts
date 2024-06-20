import { rtkApi } from '@/shared/api/rtkApi';
import { TUser } from '../model/types';

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUserDataById: build.query<TUser, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;
