import React,{Fragment,Component} from 'react';
import ReactDOM from 'react-dom';
import {} from 'react-router-dom';

import './general-styles/general.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from "./components/header";
import Main from "./components/main";






class App extends Component {


    render() {
        return (
            <Fragment>
                <Header />
                <Main />
            </Fragment>
        )
    }
};






ReactDOM.render(<App />,document.getElementById('root'));
