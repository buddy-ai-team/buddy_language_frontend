import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { StyledEngineProvider } from '@mui/material/styles';
//import questTheme from '../Theme/LightTheme';
import Statistics from "./components/Statistics";

export default function App() {
  return (
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
          <Routes>
            <Route path="/" element={<Statistics />} />
          </Routes>
      </StyledEngineProvider>
    </HelmetProvider>
  );
}