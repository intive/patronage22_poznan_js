import AppContext from 'context/app';
import { useContext, useState } from 'react';
import { addMovieToMyList, removeMovieFromMyList } from 'actions/app';
import { fetchWrapper } from 'utils/fetchWrapper';
import Button from 'components/UI/Button';
import { HeartIcon } from './LikeButton.styles';

export default function LikeButton({ movieId }) {
  const { myList } = useContext(AppContext);
  const [isLiked, setIsLiked] = useState(isOnMyList(movieId));

  const handleHeartClick = () => {
    if (!isLiked) {
      addMovieToMyList(movieId);
      setIsLiked(true);
      fetchWrapper.put(`/api/mylist/${movieId}`);
    } else {
      removeMovieFromMyList(movieId);
      setIsLiked(false);
      fetchWrapper.delete(`/api/mylist/${movieId}`);
    }
  };

  function isOnMyList(movieID) {
    return myList[movieID];
  }

  return (
    <Button
      onClick={handleHeartClick}
      style={{ marginLeft: '1em', alignSelf: 'flex-start' }}
      aria-label="Add this movie to my list"
      onlyIcon
    >
      <HeartIcon isLiked={isLiked} />
    </Button>
  );
}
