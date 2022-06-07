import React from 'react';

import {
  useLocation,
  Navigate,
} from "react-router-dom";
import useAuthStore from '../store/auth';
import shallow from 'zustand/shallow';

  export function RequireAuth({ children }: { children: JSX.Element }) {
    const [authToken] = useAuthStore((state) => [state.authToken], shallow);
    let location = useLocation();
  
     if (!authToken) {
       return <Navigate to="/" state={{ from: location }} replace />;
     }
  
    return children;
  }
  