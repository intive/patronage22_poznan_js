import Image from 'next/image';
import homeIcon from '/public/home.svg';

const imageIcon = (
  <>
    <Image src={homeIcon} alt="union" height={20} width={24} />
  </>
);

export const navData = [
  {
    id: 1,
    icon: imageIcon,
    link: '/',
  },
  { id: 0, name: 'My List', link: '/mylist' },
  { id: 3, name: 'movies', link: '/' },
  { id: 4, name: 'series', link: '/' },
  { id: 5, name: 'kids', link: '/' },
];
