import { Wrapper, Contents, Title, Media } from "components/Banner";

export default function VideoSection() {
  const title = "Whiplash";
  return (
    <>
      <Wrapper imgLink={'https://wallpaperaccess.com/full/2191678.jpg'}>
        <Contents flexDir={"column"}>
          <Title>{title}</Title>
          <Media></Media>
        </Contents>
      </Wrapper>
    </>
  );
}
