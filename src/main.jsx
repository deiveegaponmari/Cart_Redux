import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { Provider } from 'react-redux';
import Redux_store from './Redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Redux_store}>
    <App />
    </Provider>
  </StrictMode>,
)
