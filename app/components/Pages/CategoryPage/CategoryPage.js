import MovieCard from 'components/UI/MovieCard';
import { useState } from 'react';
import { WrapperGrid, MovieCardWrapper, SearchDiv, SearchStyle } from './CategoryPage.styles';

export function CategoryPage({ moviesData, ...props }) {
  console.log(moviesData);
  if (moviesData.length === 0) {
    console.alert("Oops looks like there's no movies anymore");
    //need to fix error when the array is empty
  }

  const [filteredData, setFilteredData] = useState('');
  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = moviesData.filter((data) => {
      return data.title.search(value) != -1;
    });
    setFilteredData(result);
  };

  return (
    <>
      <SearchDiv>
        <SearchStyle>
          <input onChange={(e) => handleSearch(e.target.value)} type="text" value={filteredData} />
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
