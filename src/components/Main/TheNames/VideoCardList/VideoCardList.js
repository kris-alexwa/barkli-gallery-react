import React from 'react';
import './VideoCardList.css';
import VideoCard from '../VideoCard/VideoCard';
import Tregulova from '../../../../images/tregulova.jpg';
import Wanders from '../../../../images/wanders.jpg';

function VideoCardList() {
    const cardDescriptionTregulova = 'The main museum of Russian national art, reflecting its unique contribution to world culture.'
    const cardDescriptionWanders = 'The Dutchman Marcel Wanders is a living legend of modern design, the author of incredibly bright and unexpected concepts. For Barkli Gallery, Marcel created the lobby design, it became his first project in Russia.'

    return (
        <>
            <ul className='video-card__list'>
                <VideoCard image={Tregulova} videoTitle={'Interview with Zelfira Tregulova'} cardTitle={'the tretyakov gallery'} cardDescription={cardDescriptionTregulova} />
                <VideoCard image={Wanders} videoTitle={'Interview with Marcel Wanders'} cardTitle={'marcel wanders'} cardDescription={cardDescriptionWanders} />
            </ul>
        </>
    )
}

export default VideoCardList;