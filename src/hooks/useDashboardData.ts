
import { useQuery } from '@tanstack/react-query';

import api from '../api/axios';

export const useDashboardData =
  () => {
    return useQuery({
      queryKey: ['dashboard-data'],

      queryFn: async () => {
        const [
          accountsRes,
          transactionsRes,
          loansRes,
        ] = await Promise.all([
          api.get('/accounts'),

          api.get('/transactions'),

          api.get('/loans'),
        ]);

        return {
          accounts:
            accountsRes.data,

          transactions:
            transactionsRes.data,

          loans: loansRes.data,
        };
      },
    });
  };

