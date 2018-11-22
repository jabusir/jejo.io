import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class MyCarousel extends React.Component {
    render() {
        return (
            <div>
                <Carousel showStatus={false} showThumbs={false} dynamicHeight={true} width={600}>
                    <div>
                        <img src="./images/authorize.png" alt="authorize" height={500} width={600} />
                    </div>
                    <div>
                        <img src="./images/playlists.png" alt="playlists" height={500} width={600} />
                    </div>
                    <div>
                        <img src="./images/voting.png" alt="voting" height={500} width={600} />
                    </div>
                </Carousel>
            </div>
        );
    }
}
