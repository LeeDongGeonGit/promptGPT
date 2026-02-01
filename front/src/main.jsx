import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './store.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './css/index.css'



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

