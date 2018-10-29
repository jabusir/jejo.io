import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class MyCarousel extends React.Component {
    render() {
        return (
            <div>
                <Carousel showStatus={false} showThumbs={false} dynamicHeight={true} width={500}>
                    <div>
                        <img src="./images/authorize.png" alt="authorize" height={400} width={400} />
                    </div>
                    <div>
                        <img src="./images/playlists.png" alt="playlists" height={400} width={400} />
                    </div>
                    <div>
                        <img src="./images/voting.png" alt="voting" height={400} width={400} />
                    </div>
                </Carousel>
            </div>
        );
    }
}
