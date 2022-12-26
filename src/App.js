import './App.css';
import { HomePage, LoginPage } from './pages'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react';
import { AppContext } from './Context/ContextProvider';
import BookmarkLayout from './layout/bookmark/BookmarkLayout';
import { linkList } from './components/sidebarLeft/sidebarLeftLink/SidebarLeftLink';

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

          {linkList.map(item => <Route key={item.id} path={item.route} element={<HomePage />} />)}
          <Route path='/login' element={<LoginPage />} />
          <Route path='/bookmark' element={<BookmarkLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
