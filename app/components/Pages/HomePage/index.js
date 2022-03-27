import {
  HomePageWrapper,
  CarouselHeader,
  CarouselWrapper,
  HomePageFooter,
  MovieHeroWrapper,
} from './HomePage.styles';

import Carousel from 'components/Carousel';
import Link from 'next/link';
import MovieHero from 'components/MovieHero';

export default function HomePage({ listOfCategories, listOfHeroMovies }) {
  const getRandomMovie = (listOfHeroMovies) => {
    return listOfHeroMovies[Math.floor(Math.random() * listOfHeroMovies.length)];
  };
  const randomMovie = getRandomMovie(listOfHeroMovies);
  return (
    <HomePageWrapper>
      <MovieHeroWrapper>
        <MovieHero movieData={randomMovie} />
      </MovieHeroWrapper>
      <CarouselWrapper>
        {listOfCategories.map((list) => (
          <div key={list.id}>
            <Link href="/#" passHref>
              <CarouselHeader categoryId={list.id}>{list.name}</CarouselHeader>
            </Link>
            <Carousel movies={list.listOfMovies}></Carousel>
          </div>
        ))}
      </CarouselWrapper>
      <HomePageFooter></HomePageFooter>
    </HomePageWrapper>
  );
}
