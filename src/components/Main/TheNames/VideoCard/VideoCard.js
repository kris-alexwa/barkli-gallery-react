import React from 'react';
import './VideoCard.css';

function VideoCard(props) {
    return (
        <>
        <li className='video-card'>
            <a href='#' target="_blank" rel="noreferrer" className='video-card__link'>
                <img src={props.image} className='video-card__image' alt='Превью видео' />
                <h3 className='video-card__video-title'>{props.videoTitle}</h3>
            </a>
            <h3 className='video-card__card-title'>{props.cardTitle}</h3>
            <p className='video-card__description'>{props.cardDescription}</p>
        </li>
        </>
    )
}

export default VideoCard;