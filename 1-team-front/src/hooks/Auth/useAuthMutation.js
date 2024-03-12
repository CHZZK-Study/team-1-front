/* eslint-disable */

import axios from 'axios';
import { useMutation } from 'react-query';

const useAuthMutation = (url) => {
  const { mutate, ...rest } = useMutation(async (payload) => {
    const response = await axios.post(url, payload);
    return response.data;
  });

  return { mutate, ...rest };
};

export default useAuthMutation;
