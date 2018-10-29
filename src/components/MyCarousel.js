import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class MyCarousel extends React.Component {
    render() {
        return (
            <div>
                <Carousel showArrows={true}>
                    <div> 
                        <img src="sample.jpg" alt="patrick" height="400" width="400" />
                    </div>
                    <div> 
                        <img src="sample2.jpeg" alt="sponge" height="400" width="400" />
                    </div>
                </Carousel>
            </div>
        );
    }
}
