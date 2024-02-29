import './assets/scss/ui.scss'
import {Routes, Route, Navigate} from 'react-router-dom';

import Today from './pages/Today';
import Album from './pages/Album';
import Error from './pages/Error';

import Layout from './layouts/Layout';

function App() {

  return (
    <Routes>
        <Route element={ <Layout isMainPage={ true } /> }>
          {['/', 'today'].map((path, index) => <Route path={path} element={<Today />} key={index} />)}
        </Route>
        <Route element={ <Layout isMainPage={ true } /> }>
          <Route path="/new-release-album">
            <Route path="" element={<Navigate to="/error" />} />
            <Route path="manual" element={<Album txt="종합"/>} />
            <Route path="domestic" element={<Album txt="국내"/>} />
            <Route path="oversea" element={<Album txt="해외"/>} />
          </Route>
        </Route>
        <Route element={ <Layout isMainPage={ false } /> }>
          {[
            {
              path: 'error',
              element: <Error/>
            },
            {
              path: '*',
              element: <Navigate to="/error" />
            }
          ].map((obj, index) => <Route path={obj.path} element={obj.element} key={index} />)}
        </Route>
      </Routes>
  );
}

export default App;
