import { HomePageWrapper, MovieHeroContainer } from './HomePage.styles';
import Carousel from 'components/Carousel';
export default function HomePage({
  popularMovies,
  comedyList,
  dramaList,
  horrorList,
  familyList,
  romanceList,
}) {
  return (
    <HomePageWrapper>
      <MovieHeroContainer></MovieHeroContainer>
      <Carousel movies={popularMovies}></Carousel>
      <Carousel movies={familyList}></Carousel>
      <Carousel movies={comedyList}></Carousel>
      <Carousel movies={romanceList}></Carousel>
      <Carousel movies={dramaList}></Carousel>
      <Carousel movies={horrorList}></Carousel>
    </HomePageWrapper>
  );
}
