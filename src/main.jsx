import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import AuthProvider from './provider/AuthProvider'
import ThemeProvider from './provider/ThemeProvider'
import { Toaster } from 'react-hot-toast'
import AnimatedCursor from 'react-animated-cursor'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <AnimatedCursor
          style={{ zIndex: 2147483647 }}
          innerStyle={{ backgroundColor: 'var(--cursor-inner)' }}
          outerStyle={{ backgroundColor: 'var(--cursor-outer)', mixBlendMode: 'exclusion'}}
          hasBlendMode={true}
          innerSize={8}
          outerAlpha={0.1}
          innerScale={0.7}
          outerScale={8}
          trailingSpeed={8}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)