// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
//import { Redirect } from 'react-router';
import Login from './Components/Login';
import { useAuth } from './Components/Auth';
import AssociateDashboard from './Components/AssociateDashboard';
import AdminDashboard from './Components/AdminDashboard';
import OwnerDashboard from './Components/OwnerDashboard';
import ProtectedRoute from './Routes/ProtectedRoute';
import { useEffect } from 'react';



// const ProtectedRoute = ({ component: Component, requiredRole, ...rest }) => {
//   const { currentUser, userRole } = useAuth();

//   return (
//     <Routes>
//     <Route
//       {...rest}
//       render={(props) =>
//         currentUser && userRole === requiredRole ? (
//           <Component {...props} />
//         ) : (
//           <Navigate to="/login" />
//         )
        
//       }
//     />
//     </Routes>
//   );
// };

function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/associate" element={<ProtectedRoute roles={["associate"] }><AssociateDashboard /></ProtectedRoute>} />
      <Route path="/admin/*" element={<ProtectedRoute component={AdminDashboard} roles={["admin"] } />} />
      <Route path="/owner/*" element={<ProtectedRoute component={OwnerDashboard} roles={["owner"] } />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
  );
}

export default App;
