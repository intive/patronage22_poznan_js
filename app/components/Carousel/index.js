import { useEffect, useRef, useState } from "react";
import { CarouselOuter, CarouselItem, Button } from "components/Carousel/CarouselStyle";

const Carousel = ({ movies = [] }) => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [tilesPerScreen, setTilesPerScreen] = useState(1);

  const carouselRef = useRef(null);

  const tileCount = movies.length;
  const screenCount = Math.ceil(tileCount / tilesPerScreen);
  const lastScreenIndex = screenCount - 1;

  // TODO: czy da się reagować tylko na zmianę rozmiaru samego CarouselOuter zamiast window?

  useEffect(() => {
    const foo = () => {
        const carouselWidth = carouselRef.current
          ? carouselRef.current.offsetWidth
          : 1;
        console.log("carouselWidth", carouselWidth);
        let targetTileCount = 1;
        if (carouselWidth > 768) {
          targetTileCount = 3;
        }
        if (carouselWidth > 1024) {
          targetTileCount = 5;
        }
    
        console.log("targetTileCount", targetTileCount);
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
        }
    }
    
    window.addEventListener("resize", throttle(() => {
            foo();
            console.log("window resize");
        }, 800));
    window.removeEventListener("resize", throttle(() => {
        foo();
    }));

  }, [tilesPerScreen]);


  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= screenCount) {
      newIndex = lastScreenIndex;
    }
    setActiveScreen(newIndex);
  };

  return (
    <CarouselOuter ref={carouselRef}>
      <div
        className="inner"
        style={{
          transform: `translateX(-${activeScreen * 100}%)`,
          whiteSpace: "nowrap",
          transition: "transform 0.3s",
        }}
      >
        {movies.map(({ id, title }) => (
          <CarouselItem key={id} title={title} tileCount={tilesPerScreen} />
        ))}
      </div>

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
