import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { StyledEngineProvider } from '@mui/material/styles';
import Statistics from "./components/Statistics";
import WordEditor from "./components/WordEditor";
import Settings from "./components/Settings";
import Notification from './components/Notification';
import ListStudiedWords from './components/ListStudiedWords';
import { SDKProvider} from '@tma.js/sdk-react';
import { getInitData } from "./initData";
import { useEffect, useState } from 'react';
import { getCurentTelegramUser } from './currentTelegramUser';

export default function App() {

  const [TelegramId, setTelegramId] = useState<string | null>(null);
  const [initData, setInitData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try { 
        const initDataRaw = getInitData();
        setInitData(initDataRaw);  
        
        const userTelegramId = getCurentTelegramUser(initDataRaw).id;
        setTelegramId(userTelegramId);
    } catch (error) {
      console.error(error);
    }
  };
    fetchData();
  }, []);

  if (initData  === null || TelegramId === null) {
    return <Notification />
  }

  return (
    <SDKProvider initOptions={{ debug: true, cssVars: true }}>
      <HelmetProvider>
        <StyledEngineProvider injectFirst>
            <Routes>
              <Route path="/" element={<Statistics TelegramId={TelegramId} initData={initData}/>} />
              <Route path="/get_word_editor" element={<WordEditor TelegramId={TelegramId} initData={initData}/>} />
              <Route path="/get_settings" element={<Settings TelegramId={TelegramId} initData={initData}/>} />
              <Route path="/get_list_studied_words" element={<ListStudiedWords TelegramId={TelegramId} initData={initData}/>} />
            </Routes>
        </StyledEngineProvider>
      </HelmetProvider>
    </SDKProvider>
  );
}