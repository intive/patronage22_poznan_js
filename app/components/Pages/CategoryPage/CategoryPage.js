import MovieCard from 'components/UI/MovieCard';
import { useState } from 'react';
import { WrapperGrid, MovieCardWrapper, SearchDiv, SearchStyle } from './CategoryPage.styles';
import { Input } from 'components/Form';

export function CategoryPage({ moviesData, ...props }) {
  if (moviesData.length === 0) {
    console.alert("Oops looks like there's no movies anymore");
    //need to fix error when the array is empty
  }

  const [isInputActive, setInputActive] = useState(false);

  const [searchQ, setSearchQ] = useState('');
  console.log(searchQ);

  return (
    <>
      <SearchDiv>
        <SearchStyle>
          <Input
            id="search"
            isInputActive={isInputActive}
            placeholder="Enter the title..."
            onChange={(event) => setSearchQ(event.target.value)}
          />
        </SearchStyle>
      </SearchDiv>
      {isInputActive && (
        <WrapperGrid>
          {moviesData
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
        </WrapperGrid>
      )}
      {!isInputActive && (
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
      )}
    </>
  );
}
