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

export default function App() {
  const [initData, setInitData] = useState<string | null >(null);

  useEffect(()=>{
    const initDataString = getInitData();
    setInitData(initDataString);
  }, [initData]);

  if(initData === null){
    return <div>Loading...</div>
  }

  return (
    <SDKProvider  initOptions={{ debug: true, cssVars: true }}>
      <HelmetProvider>
        <StyledEngineProvider injectFirst>
            <Routes>
              <Route path="/" element={<Statistics />} />
              <Route path="/get_word_editor" element={<WordEditor />} />
              <Route path="/get_settings" element={<Settings />} />
              <Route path="/get_list_studied_words" element={<ListStudiedWords/>} />
            </Routes>
        </StyledEngineProvider>
      </HelmetProvider>
    </SDKProvider>
  );
}