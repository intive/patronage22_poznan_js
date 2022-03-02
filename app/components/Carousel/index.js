import { useEffect, useState } from 'react';
import {
  CarouselOuter,
  CarouselItemWrapper,
  CarouselItemInner,
  CarouselInner,
  NavButton,
} from 'components/Carousel/Carousel.styles';

import { device } from '/app/consts/mediaQueries.js';

const Carousel = ({ movies = [] }) => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [tilesPerScreen, setTilesPerScreen] = useState(1);

  const tileCount = movies.length;
  const screenCount = Math.ceil(tileCount / tilesPerScreen);
  const lastScreenIndex = screenCount - 1;

  useEffect(() => {
    const carouselWidth = () => {
      const windowWidth = window.innerWidth;

      let targetTileCount = 1;

      if (windowWidth > device.tablet) {
        targetTileCount = 3;
      }

      if (windowWidth > device.desktop) {
        targetTileCount = 5;
      }

      if (targetTileCount !== tilesPerScreen) {
        setTilesPerScreen(targetTileCount);
      }
    };
    carouselWidth();

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

    window.addEventListener(
      'resize',
      throttle(() => {
        carouselWidth();
      }, 600)
    );
    window.removeEventListener(
      'resize',
      throttle(() => {
        carouselWidth();
      })
    );
  }, [tilesPerScreen]);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= screenCount) {
      newIndex = lastScreenIndex;
    }
    setActiveScreen(newIndex);
  };

  const CarouselItem = ({ title, tileCount }) => (
    <CarouselItemWrapper tileCount={tileCount}>
      <CarouselItemInner>{title} </CarouselItemInner>
    </CarouselItemWrapper>
  );

  return (
    <CarouselOuter>
      <CarouselInner
        style={{
          transform: `translateX(-${activeScreen * 100}%)`,
        }}
      >
        {movies.map(({ id, title }) => (
          <CarouselItem key={id} title={title} tileCount={tilesPerScreen} />
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
          &#60;
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
          &#62;
        </NavButton>
      )}
    </CarouselOuter>
  );
};

export default Carousel;
