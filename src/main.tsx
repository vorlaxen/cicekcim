import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from '@/store';

import App from '@/App'
import { initI18n } from './services/localization/localization';

(async () => {
  await initI18n('en');
  
  createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
})();