import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/global.css';

// REDUX
import { Provider } from 'react-redux';
import store from './redux/store';

import HomePage from './pages';
import RegistryPage from './pages/registry';

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav> */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registry" element={<RegistryPage />} />
          </Routes>
        </main>
      </Router>
    </Provider>
  );
}

export default App;
