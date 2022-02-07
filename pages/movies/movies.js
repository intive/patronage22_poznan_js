import React from 'react';
import Carousel, { CarouselItem } from 'components/Layout/videoCarousel';

function Movies() {

    return (
        <div className='Movies'>
            <Carousel>
                <CarouselItem>Item 1</CarouselItem>
                <CarouselItem>Item 2</CarouselItem>
                <CarouselItem>Item 3</CarouselItem>
                <CarouselItem>Item 4</CarouselItem>
                <CarouselItem>Item 5</CarouselItem>
                <CarouselItem>Item 6</CarouselItem>
                <CarouselItem>Item 7</CarouselItem>
                <CarouselItem>Item 8</CarouselItem>
                <CarouselItem>Item 9</CarouselItem>
                <CarouselItem>Item 10</CarouselItem>
            </Carousel>
        </div>
    );
}


export default Movies;
