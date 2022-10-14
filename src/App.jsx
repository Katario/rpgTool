import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  )
}

export default App;
