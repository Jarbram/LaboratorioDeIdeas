import React from 'react';  
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages';
import { RouterLayout } from './common/RouterLayout';
import { MentorPage } from './pages/Mentor';
import {MentorRegistrationPage} from './pages';
export const AppRouter: React.FC = () => {
    return(
        <Routes>
            <Route path='/' element={<RouterLayout/>}>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/mentor/:id' element={<MentorPage/>}/>
                <Route path='/register' element={<MentorRegistrationPage/>}/>
            </Route>
        </Routes>
    )
}