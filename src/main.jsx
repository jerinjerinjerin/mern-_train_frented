import { createRoot } from 'react-dom/client';
import './index.css'; // Your CSS file
import App from './App.jsx'; // Your App component
import { Provider } from 'react-redux'; // Redux Provider
import { PersistGate } from 'redux-persist/integration/react'; // PersistGate for loading persisted state
import { store, persistor } from './redux/store'; // Correct named imports from store.js
import ErrorBoundary from './components/ErrorBoundray.jsx'; // Error Boundary Component for graceful error handling

// Render the app using React's StrictMode
createRoot(document.getElementById('root')).render(
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ErrorBoundary>
);
