import  { Suspense } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { AppRouter } from './Router';
import { NotificationProvider } from './context/notification.context';

function App() {
  return (
    <NotificationProvider>
      <Suspense fallback={<div>Loading...</div>}>
      <HashRouter>
        <AppRouter/>
      </HashRouter>
      </Suspense>
      
    </NotificationProvider>
    
  );
}

export default App;
