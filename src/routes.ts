import React, { ReactNode } from 'react'

export type route = {
  component?: ReactNode
  name?: string
  path?: string
  routes?: route[]
}

const Home = React.lazy(() => import('./views/home/Home'))

const routes = [
  { path: '/home', name: 'Home', component: Home },
]

export default routes
