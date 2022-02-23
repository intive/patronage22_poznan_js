import { useEffect, useState } from 'react';
import {
  CarouselOuter,
  CarouselItemWrapper,
  CarouselItemInner,
  CarouselInner,
  Button,
} from 'components/Carousel/Carousel.styles';

const Carousel = ({ movies = [] }) => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [tilesPerScreen, setTilesPerScreen] = useState(1);

  const tileCount = movies.length;
  const screenCount = Math.ceil(tileCount / tilesPerScreen);
  const lastScreenIndex = screenCount - 1;

  // TODO: czy da się reagować tylko na zmianę rozmiaru samego CarouselOuter zamiast window?

  useEffect(() => {
    const foo = () => {
      const windowWidth = window.innerWidth;
      console.log(`this is window width now ${windowWidth}`);

      let targetTileCount = 1;

      if (windowWidth > 768) {
        targetTileCount = 3;
      }

      if (windowWidth > 1024) {
        targetTileCount = 5;
      }

      console.log('targetTileCount', targetTileCount);
      if (targetTileCount !== tilesPerScreen) {
        setTilesPerScreen(targetTileCount);
      }
    };
    foo();

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
        foo();
      }, 600)
    );
    window.removeEventListener(
      'resize',
      throttle(() => {
        foo();
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
        <Button
          left
          onClick={() => {
            updateIndex(activeScreen - 1);
          }}
          className="carousel-nav-button"
        >
          &#60;
        </Button>
      )}

      {activeScreen < lastScreenIndex && (
        <Button
          right
          onClick={() => {
            updateIndex(activeScreen + 1);
          }}
          className="carousel-nav-button"
        >
          &#62;
        </Button>
      )}
    </CarouselOuter>
  );
};
export default Carousel;
