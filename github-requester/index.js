import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1 from './App1';
import App2 from './App2';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App2 />, document.getElementById('root'));
//registerServiceWorker();
ReactDOM.render((
    <Form schema={schema} noHtml5Validate onSubmit={console.log} showErrorList={false} />
),document.getElementById("root"));
