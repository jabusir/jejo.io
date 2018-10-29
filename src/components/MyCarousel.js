import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Projects from './Projects';

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class MyCarousel extends React.Component {
    render() {
        return (
            <div>
                <Carousel showStatus={false} showThumbs={false} dynamicHeight={true} width={1700}>
                    <div>
                        <Projects />
                    </div>
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
