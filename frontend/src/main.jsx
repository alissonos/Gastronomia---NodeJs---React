import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/home/home.jsx'
import Cart from './pages/cart/cart.jsx'
import Profile from './pages/profile/profile.jsx'
import Plates from './pages/plates/plates.jsx'
import Auth from './pages/auth/auth.jsx'

const pages = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/', element: <Home />
			},
			{
				path: '/cart', element: <Cart />
			},
			{
				path: '/profile', element: <Profile />
			},
			{
				path: '/plates', element: <Plates />
			},
			{
				path: '/auth', element: <Auth />
			}
		]
	}
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={pages}></RouterProvider>
	</StrictMode>,
)
