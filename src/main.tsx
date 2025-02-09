import { createRoot } from 'react-dom/client'
import './app/styles/index.scss'
import { Provider } from 'react-redux'
import { store } from '@/app/store'
import { Router } from '@/common/routes/Router'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router />
  </Provider>
)
