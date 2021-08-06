import React from 'react';
import './Main.css';
import Lead from '../Lead/Lead';
import TheNames from './TheNames/TheNames';
import Location from './Location/Location';

function Main() {
    return (
        <>
            <main className='content'>
                <Lead />
                <TheNames />
                <Location />
            </main>
        </>
    )
}

export default Main;