import sandwich from '@assets/images/pick_page_desktop_sandwich.png';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';

function DeskTopImage() {
  return (
    <ImgWrap>
      <img src={sandwich} alt="샌드위치" />
    </ImgWrap>
  );
}

export default DeskTopImage;

const ImgWrap = styled.div`
  display: none;
  max-width: 600px;

  & img {
    width: 100%;
  }

  ${mediaQuery} {
    display: block;
  }
`;