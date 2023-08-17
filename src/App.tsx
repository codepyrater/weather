import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { LandingPage } from './components/Landingpage';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <QueryClientProvider client={queryClient}>
     <Routes>
     <Route path="/" element={<LandingPage />} />
      
      </Routes>
     
     </QueryClientProvider>
     </BrowserRouter>
   
    </div>
  );
}

export default App;
