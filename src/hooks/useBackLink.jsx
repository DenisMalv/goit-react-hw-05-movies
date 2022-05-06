import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

export const useBackLink = (initialValue, resp, initLocation) => {
  const location = useLocation();
  console.log(location);
  const [backLinkURL, setBackLinkURL] = useState(initialValue);
  useEffect(() => {
    if (backLinkURL) {
      return;
    }
    if (!resp) {
      return;
    }
    setBackLinkURL(initLocation?.state?.from ?? `/movies?query=${resp.title}`);
  }, [backLinkURL, resp, initLocation?.state?.from]);
  return [backLinkURL, setBackLinkURL];
};
