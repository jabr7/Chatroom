import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />


    return (
        <ChatEngine 
            height="100vh"
            projectID="8c836c40-ce15-413b-ab11-f400b6d56755"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        
        
        />

    );
}
export default App;