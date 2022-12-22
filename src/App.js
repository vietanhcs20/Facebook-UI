import './App.css';
import { HomePage, LoginPage } from './pages'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react';
import { AppContext } from './Context/ContextProvider';

function App() {
  const { currentUser } = useContext(AppContext)

  const ProtectedUser = ({ children }) => {
    if (!currentUser) return <Navigate to='/login' />
    return children
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<ProtectedUser><HomePage /></ProtectedUser>} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
