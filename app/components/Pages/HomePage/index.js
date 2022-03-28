import Link from 'next/link';
import {
  HomePageWrapper,
  CarouselHeader,
  CarouselsWrapper,
  MovieHeroWrapper,
  CarouselContainer,
} from './HomePage.styles';
import Carousel from 'components/Carousel';
import MovieHero from 'components/MovieHero';

export default function HomePage({ listOfCarousels, heroMovie }) {
  return (
    <HomePageWrapper>
      <MovieHeroWrapper>
        <MovieHero movieData={heroMovie} />
      </MovieHeroWrapper>
      <CarouselsWrapper>
        {listOfCarousels.map(({ id, name, listOfMovies }) => (
          <CarouselContainer key={id}>
            <Link href={'/category/' + id} passHref>
              <CarouselHeader categoryId={id}>{name}</CarouselHeader>
            </Link>
            <Carousel movies={listOfMovies}></Carousel>
          </CarouselContainer>
        ))}
      </CarouselsWrapper>
    </HomePageWrapper>
  );
}
