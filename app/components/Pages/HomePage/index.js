import {
  HomePageWrapper,
  MovieHeroContainer,
  CarouselHeader,
  CarouselWrapper,
  CarouselInstance,
  HomePageFooter,
} from './HomePage.styles';

import Carousel from 'components/Carousel';
import Link from 'next/link';

export default function HomePage({ listOfCategories }) {
  return (
    <HomePageWrapper>
      <MovieHeroContainer></MovieHeroContainer>
      <CarouselWrapper>
        {listOfCategories.map((list) => (
          <CarouselInstance key={list.id}>
            <Link href="/#" passHref>
              <CarouselHeader categoryId={list.id}>{list.name}</CarouselHeader>
            </Link>
            <Carousel movies={list.listOfMovies}></Carousel>
          </CarouselInstance>
        ))}
      </CarouselWrapper>
      <HomePageFooter></HomePageFooter>
    </HomePageWrapper>
  );
}
