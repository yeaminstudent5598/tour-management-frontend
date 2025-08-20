import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router'
import { ThemeProvider } from './providers/theme.provider'

createRoot(document.getElementById('root')!).render(
  // <ReduxProvider store={store}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        {/* <Toaster richColors /> */}
      </ThemeProvider>
    // </ReduxProvider>,
)
