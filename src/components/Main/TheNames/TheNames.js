import React from 'react';
import './TheNames.css';
import VideoCardList from './VideoCardList/VideoCardList';
import EllipseIcon from '../../../images/icons/ellipse-icon.svg';
import ArrowIcon from '../../../images/icons/arrow-icon.svg';

function TheNames() {
    return (
        <>
        <section className='the-names'>
            <h2 className='the-names__title title-section'>the names</h2>
            <div className='the-names__text-box text-box'>
                <h3 className='text-box__title'>from bakst to barkli</h3>
                <p className='text-box__description'>A modern residential house inspired by the art of the early twentieth century, the works of Bakst and the proximity of the Tretyakov Gallery. The collection of ideas put together in the Barkli Gallery project is described by people who embodied this elegant concept.</p>
            </div>
            <VideoCardList />
        </section>
        <div className='the-names__card-switch switch'>
            <img className='switch__ellipse' src={EllipseIcon} alt='Иконка круга' />
            <img className='switch__ellipse' src={EllipseIcon} alt='Иконка круга' />
            <img className='switch__ellipse' src={EllipseIcon} alt='Иконка круга' />
            <img className='switch__ellipse' src={EllipseIcon} alt='Иконка круга' />
            <button className='switch__button'>
                <img className='switch__arrow-icon' src={ArrowIcon} alt='Иконка стрелки'></img>
            </button>
        </div>
        </>
    )
}

export default TheNames;