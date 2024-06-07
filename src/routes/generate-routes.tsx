import flattenDeep from 'lodash.flattendeep'

import {Route, Routes as ReactRoutes} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import {useMemo} from 'react'

type routesInterface = {
  name: string
  title: string
  path?: string
  isPublic?: boolean
  hasSiderLink?: boolean
  component?: React.FC
}

type renderRoutesProps = {
  layout: React.FC
  routes: routesInterface[]
}

interface GenerateFlattenRoutesProps extends routesInterface {
  routes?: routesInterface[]
}

const generateFlattenRoutes = (
  routes: GenerateFlattenRoutesProps[],
): routesInterface[] => {
  if (!routes) return []

  return flattenDeep<GenerateFlattenRoutesProps>(
    routes.map(({routes: subRoutes = [], ...rest}) => [
      rest,
      generateFlattenRoutes(subRoutes),
    ]),
  )
}

export const renderRoutes = (mainRoutes: renderRoutesProps[]) => {
  const Routes = ({isAuthorized}: {isAuthorized: boolean}) => {
    const layouts = useMemo(() => {
      return mainRoutes.map(({layout: Layout, routes}, index) => {
        const subRoutes = generateFlattenRoutes(routes)
        return (
          <Route key={index} element={<Layout />}>
            {subRoutes.map(({component: Component, path, name, isPublic}) => {
              return (
                <Route
                  key={name}
                  element={
                    <ProtectedRoute
                      isAuthorized={isAuthorized}
                      isPublic={isPublic}
                    />
                  }>
                  {Component && path && (
                    <Route element={<Component />} path={path} />
                  )}
                </Route>
              )
            })}
          </Route>
        )
      })
    }, [isAuthorized])
    return <ReactRoutes>{layouts}</ReactRoutes>
  }
  return Routes
}
