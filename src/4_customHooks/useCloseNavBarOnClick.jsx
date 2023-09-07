import { useEffect } from 'react';
import { useGlobalContext } from '../2_context/GlobalContext';

const useCloseNavBarOnClick = () => {
  const { closeNavHeader } = useGlobalContext();

  useEffect(() => {
    const handleClick = (event) => {
      closeNavHeader(false);
    };
    document
      .getElementById('main_content')
      .addEventListener('click', handleClick);
    return () => {
      document
        .getElementById('main_content')
        .removeEventListener('click', handleClick);
    };
  });
};

export default useCloseNavBarOnClick;
