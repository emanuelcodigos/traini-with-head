
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { firebase, firebaseContext } from './firebase/index';
import { useAutenticacion } from './hooks/useAutenticacion';

import { Navbar } from "./components/layout/NavBar";
import { Home } from "./pages";

import {PrivateRoutes} from './routes/PrivateRoutes';
import {DashboardRoutes} from './routes/DashboardRoutes';

function TrainingApp() {

  const autenticado = useAutenticacion();

  return (
    <firebaseContext.Provider
      value={{
        firebase,
        autenticado
      }}
    >
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
         

          <Route path="/*" element={
            <PrivateRoutes>
              <DashboardRoutes />
            </PrivateRoutes>
          } />
        </Routes>

      </Router>

    </firebaseContext.Provider>
  );
}

export default TrainingApp;
