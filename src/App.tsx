import React from 'react';
import ApiGithub from './ApiGithub';
import ApiGithubHistory from './ApiGithubHistory';
import {clearHistory} from './utils';
import './App.css';

function App() {
    if (window.location.pathname === '/history') {
        return (<ApiGithubHistory />)
    }

    if (window.location.pathname === '/') {
        return (
            <>
                <div>
                    <a href="/history" style={{marginRight: 8}}>调用历史</a>
                    <a href="#" onClick={() => {
                        clearHistory();
                    }}>清除历史</a>
                </div>
                <ApiGithub />
            </>
        )
    }

    return (
        <>
            Not Found
        </>
    );
}

export default App;
