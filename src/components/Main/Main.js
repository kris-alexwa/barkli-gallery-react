import React from 'react';
import './Main.css';
import Lead from '../Lead/Lead';
import TheNames from './TheNames/TheNames';

function Main() {
    return (
        <>
            <main className='content'>
                <Lead />
                <TheNames />
            </main>
        </>
    )
}

export default Main;