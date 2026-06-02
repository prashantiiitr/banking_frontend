import { useQuery } from '@tanstack/react-query';

import api from '../api/axios';

export const useManagerStats =
  () => {
    return useQuery({
      queryKey: ['manager'],

      queryFn: async () => {
        const [
          accounts,
          kyc,
        ] = await Promise.all([
          api.get(
            '/accounts/pending',
          ),

          api.get(
            '/kyc/pending',
          ),
        ]);

        return {
          accounts:
            accounts.data.length,

          kyc:
            kyc.data.length,
        };
      },
    });
  };