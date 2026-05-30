import { useQuery } from '@tanstack/react-query';

import api from '../api/axios';

export const useBeneficiaries =
  () => {
    return useQuery({
      queryKey: [
        'beneficiaries',
      ],

      queryFn: async () => {
        const response =
          await api.get(
            '/beneficiaries',
          );

        return response.data;
      },
    });
  };