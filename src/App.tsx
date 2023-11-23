import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { StyledEngineProvider } from '@mui/material/styles';
import Statistics from "./components/Statistics";
import WordEditor from "./components/WordEditor";
import Settings from "./components/Settings";
import api from "./apiClient/_Api";

const userResponse = await api.get("/user/get_by_telegram_id?id=123456789");
const data = await userResponse.data;
console.log(data);

export default function App() {
  return (
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
          <Routes>
            <Route path="/" element={<Statistics />} />
            <Route path="/get_word_editor" element={<WordEditor />} />
            <Route path="/get_settings" element={<Settings />} />
          </Routes>
      </StyledEngineProvider>
    </HelmetProvider>
  );
}