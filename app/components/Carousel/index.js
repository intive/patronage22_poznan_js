import { useEffect, useState } from 'react';
import {
  CarouselOuter,
  CarouselItemWrapper,
  CarouselItemInner,
  CarouselInner,
  NavButton,
} from 'components/Carousel/Carousel.styles';
import Icon from 'components/UI/Icon';

import PropTypes from 'prop-types';
import MovieCard from 'components/UI/MovieCard';

const throttle = (fun, limit) => {
  let wait = false;
  return function () {
    if (!wait) {
      fun.call();
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
};

const Carousel = ({ movies = [] }) => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [tilesPerScreen, setTilesPerScreen] = useState(1);

  const tileCount = movies.length;
  const screenCount = Math.ceil(tileCount / tilesPerScreen);
  const lastScreenIndex = screenCount - 1;

  useEffect(() => {
    const carouselWidth = () => {
      const windowWidth = window.innerWidth;

      let targetTileCount = 2;

      if (windowWidth >= 768) {
        targetTileCount = 3;
      }

      if (windowWidth >= 1024) {
        targetTileCount = 6;
      }

      if (targetTileCount !== tilesPerScreen) {
        setTilesPerScreen(targetTileCount);
      }
    };
    carouselWidth();

    const resizeListener = throttle;

    window.addEventListener('resize', resizeListener(carouselWidth, 600));

    return () => window.removeEventListener('resize', resizeListener);
  });

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= screenCount) {
      newIndex = lastScreenIndex;
    }
    setActiveScreen(newIndex);
  };

  const CarouselItem = ({ tileCount, ...props }) => (
    <CarouselItemWrapper tileCount={tileCount}>
      <CarouselItemInner>
        <MovieCard {...props} />
      </CarouselItemInner>
    </CarouselItemWrapper>
  );

  return (
    <CarouselOuter>
      <CarouselInner activeScreen={activeScreen}>
        {movies.map(({ id, title, images }) => (
          <CarouselItem
            key={id}
            title={title}
            tileCount={tilesPerScreen}
            src={images?.poster?.m}
            id={id}
          />
        ))}
      </CarouselInner>

      {activeScreen !== 0 && (
        <NavButton
          left
          onClick={() => {
            updateIndex(activeScreen - 1);
          }}
          className="carousel-nav-button"
        >
          <Icon type={'chevron-left'} />
        </NavButton>
      )}

      {activeScreen < lastScreenIndex && (
        <NavButton
          right
          onClick={() => {
            updateIndex(activeScreen + 1);
          }}
          className="carousel-nav-button"
        >
          <Icon type={'chevron-right'} />
        </NavButton>
      )}
    </CarouselOuter>
  );
};

Carousel.propTypes = {
  movies: PropTypes.array,
};

export default Carousel;
