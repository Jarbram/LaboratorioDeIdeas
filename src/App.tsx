import  { Suspense } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Router';
import { NotificationProvider } from './context/notification.context';

function App() {
  return (
    <NotificationProvider>
      <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
      </Suspense>
      
    </NotificationProvider>
    
  );
}

export default App;
