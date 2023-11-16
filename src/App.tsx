import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { StyledEngineProvider } from '@mui/material/styles';
//import Statistics from "./components/Statistics";
import WordEditor from "./components/WordEditor";

export default function App() {
  return (
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
          <Routes>
            <Route path="/" element={<WordEditor />} />
          </Routes>
      </StyledEngineProvider>
    </HelmetProvider>
  );
}