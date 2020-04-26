import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';

import './general-styles/general.scss';

import Header from "./components/header";
import Main from "./components/main";






const App = () => {
    return (
        <Fragment>
            <Header />
            <Main />
        </Fragment>

    )
};






ReactDOM.render(<App />,document.getElementById('root'));
