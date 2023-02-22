import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from 'react-router-dom';

  import Dashboard from './Dashboard/Dashboard.jsx';
  import Auth from './Auth/Auth.jsx';
  import UserProvider from '../state/UserContext';
  import AuthForm from './Auth/AuthForm.jsx';


export default function App() {
  return (
    <Router>
        <UserProvider>
        <Routes>
            <Route path="auth" element={<Auth />}>
                <Route index element={<AuthForm mode="signin" />} />
                <Route
                path="signup"
                element={<AuthForm mode="signup" />}
                />
            </Route>
        </Routes>
        </UserProvider>
    </Router>
    
  )
}
