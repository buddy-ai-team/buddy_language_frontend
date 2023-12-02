import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { StyledEngineProvider } from '@mui/material/styles';
import Statistics from "./components/Statistics";
import WordEditor from "./components/WordEditor";
import Settings from "./components/Settings";
import ListStudiedWords from './components/ListStudiedWords';
import { SDKProvider } from '@tma.js/sdk-react'; 
import { useEffect, useState } from 'react';
import { getInitData } from './initData';
import { getCurentTelegramUserId } from './currentTelegramUser';

export default function App() {
  const [initData, setInitData] = useState<string | null >(null);

  useEffect(()=>{
    try{
      const initDataString = getInitData();
      setInitData(initDataString);
    }catch(error){
      console.error(error);
    }

  }, []);

  if(initData === null){
    return <div>Это приложение работает только из Telegram.</div>
  }

  const userId = getCurentTelegramUserId(initData);

  return (
    <SDKProvider  initOptions={{ debug: true, cssVars: true }}>
      <HelmetProvider>
        <StyledEngineProvider injectFirst>
            <Routes>
              <Route path="/" element={<Statistics telegramUserId={userId}/>} />
              <Route path="/get_word_editor" element={<WordEditor telegramUserId={userId}/>} />
              <Route path="/get_settings" element={<Settings telegramUserId={userId}/>} />
              <Route path="/get_list_studied_words" element={<ListStudiedWords telegramUserId={userId}/>} />
            </Routes>
        </StyledEngineProvider>
      </HelmetProvider>
    </SDKProvider>
  );
}