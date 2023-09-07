import { useMutation } from '@tanstack/react-query';
import { customFetch } from '../5_utils/utils';

export const useSendMail = (mailBody) => {
  const {
    mutate: sendMail,
    isLoading,
    data,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: (mailBody) => customFetch.post('/sendMail', mailBody),
    onSuccess: () => {
      console.log('success');
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { sendMail, isLoading, data, isError, isSuccess };
};
