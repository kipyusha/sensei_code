import React from 'react';

import StartHome from './components/startHome/StartHome';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/signinnew/SignIn';
import Home from './components/home/Home';
import Tasks from './components/tasks/Tasks';
import Profile from './components/profile/Profile';
import HeaderUser from './components/header/HeaderUser';
import HeaderNav from './components/sidebar/Sidebar';
import SettingsUser from './components/settingUser/SettingsUser';
import Language from './components/home/content/language/Language';
import EditorMain from './components/tasks/editor/EditorMain';
import { useAppSelector } from './hooks';
import { getUserInfo } from './redux/ducks/userInfo/selectors';
import PageNews from './components/home/content/news/pageNews/PageNews';
import PageDocument from './components/pageDocument/PageDocument';
import Document from './components/pageDocument/document/Document';

const App = () => {
    const isAuthorize = useAppSelector(getUserInfo).userInfo.isAuthorize;
    
    return (
        <>
            {isAuthorize && <HeaderUser/>}
            {isAuthorize && <HeaderNav/>}
            
            <Routes>
                <Route path="/" element={isAuthorize ? <Home /> : <StartHome />} />
                <Route path="/login/:operation" element={<SignIn />} />

                <Route path="/tasks/:lang" element={<Language />} />
                <Route path="/tasks/:lang_id/:task_id" element={<Tasks />} />
                <Route path="/editor" element={<EditorMain />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<SettingsUser/>} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/news/:id" element={<PageNews/>}/>
                <Route path='/document/' element={<PageDocument/>}/>
                <Route path='/document/:id' element={<Document/>}/>
            </Routes>
        </>
    );
};

export default App;


