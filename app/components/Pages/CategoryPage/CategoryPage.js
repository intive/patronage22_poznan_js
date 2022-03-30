import MovieCard from 'components/UI/MovieCard';
import { useState } from 'react';
import { WrapperGrid, MovieCardWrapper, SearchDiv, SearchStyle } from './CategoryPage.styles';

export function CategoryPage({ moviesData, ...props }) {
  if (moviesData.length === 0) {
    console.alert("Oops looks like there's no movies anymore");
    //need to fix error when the array is empty
  }

  const [searchQ, setSearchQ] = useState('');
  console.log(searchQ);

  return (
    <>
      <SearchDiv>
        <SearchStyle>
          <input
            onChange={(event) => setSearchQ(event)}
            {...moviesData
              .filter((movie) => movie.title.includes(searchQ))
              .map((film, index) => (
                <MovieCardWrapper key={index}>
                  <MovieCard
                    title={film.title}
                    src={film.images.poster.m}
                    alt={film.title}
                    {...props}
                  ></MovieCard>
                </MovieCardWrapper>
              ))}
          />
        </SearchStyle>
      </SearchDiv>
      <WrapperGrid>
        {moviesData.map((film, index) => (
          <MovieCardWrapper key={index}>
            <MovieCard
              title={film.title}
              src={film.images.poster.m}
              alt={film.title}
              {...props}
            ></MovieCard>
          </MovieCardWrapper>
        ))}
      </WrapperGrid>
    </>
  );
}
