import { Notify } from 'quasar';

export const useNotify = () => {
  const showErrorNotify = (text: string) => {
    Notify.create({
      message: text,
      color: 'negative'
    });
  };

  const showSuccessNotify = (text: string) => {
    Notify.create({
      message: text,
      color: 'secondary'
    });
  };

  return {
    showErrorNotify,
    showSuccessNotify
  };
};

