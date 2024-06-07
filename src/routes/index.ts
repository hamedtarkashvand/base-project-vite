// Layout
import AnonymousLayout from '../layouts/anonymousLayout'
import MainLayout from '../layouts/mainLayout'

// pages

import SearchUser from '../pages/searchUser'
import Home from '../pages/home'
import Login from '../pages/login'
import CreateUser from '../pages/createUser'
import {renderRoutes} from './generate-routes'

export const routes = [
  {
    layout: AnonymousLayout,
    routes: [
      {
        name: 'login',
        title: 'Login page',
        component: Login,
        path: '/login',
        isPublic: true,
      },
    ],
  },
  {
    layout: MainLayout,
    routes: [
      {
        name: 'home',
        title: 'Home page',
        component: Home,
        path: '/',
        isPublic: false,
      },
      {
        name: 'users',
        title: 'Users',
        hasSiderLink: true,
        routes: [
          {
            name: 'search-users',
            title: 'search user',
            hasSiderLink: true,
            component: SearchUser,
            path: '/search-user',
          },
          {
            name: 'create-users',
            title: 'create user',
            hasSiderLink: true,
            component: CreateUser,
            path: '/create-user',
          },
        ],
      },
    ],
  },
]

export const Routes = renderRoutes(routes)
