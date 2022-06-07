import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

// routes config
import routes from '../routes'
import { RequireAuth } from './AuthProvider'

const AppContent = () => {
  return (
    <>
      <Suspense fallback>
        <Routes>
          {routes.map((route, idx) => {
            return (
              <Route
                key={idx}
                path={route.path}
                element={<RequireAuth><route.component /></RequireAuth>}
              /> 
            )
          })}
        </Routes>
      </Suspense>
    </>
  )
}

export default React.memo(AppContent)
