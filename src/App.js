import React from 'react';
import './App.css';
import ParentContainer from '../src/container/ParentContainer/ParentContainer';
import LoggedUser from '../src/container/LoggedUser/LoggedUser';
import Messaging from '../src/container/Messaging/Messaging';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

function App() {
    return (
        <div className='App'>
            <LoggedUser />
            <div className="heading">
                <span>
                    <FontAwesomeIcon icon={faAddressBook} />
                </span>
                <p>Contacts
                    <span> Welcome to CRM contact page </span>
                </p>
            </div>
            <ParentContainer />
            <Messaging/>
        </div>
    );
}

export default App;
