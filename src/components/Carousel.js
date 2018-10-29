import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default class MyCarousel extends React.Component {
    render() {
        return (
            <div>
                <Carousel showArrows={true}>
                    <div> 
                        <img src="sample.jpg" alt="patrick" height="400" width="400" />
                    </div>
                </Carousel>
            </div>
        );
    }
}
