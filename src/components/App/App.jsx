import { useLayoutEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import './App.scss';
import { getQuery } from '../utils/common';

const addQueryParameter = ({ navigate, query }) => {
  if (!query) {
    const currentURL = new URL(window.location.href);
    currentURL.searchParams.set('_ga', query ?? getQuery());
    navigate(`${currentURL.pathname}${currentURL.search}`, { replace: true });
  }
};

const App = ({ withooutQuery }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const gaQueryParam = searchParams.get('_ga');

  useLayoutEffect(() => {
    if (!withooutQuery) {
      addQueryParameter({navigate, query: gaQueryParam});
    }
  }, [navigate, gaQueryParam, withooutQuery]);

  return (
    <div className="app">
      <div className="app__inner">
        <div className="app__left-side-wrapper">
          <LeftSide withooutQuery={withooutQuery} />
        </div>
        <div className="app__right-side-wrapper">
          <RightSide />
        </div>
      </div>
    </div>
  )
}

export default App