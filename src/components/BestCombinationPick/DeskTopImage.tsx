import sandwich from '@assets/images/pick_page_desktop_sandwich.webp';
import test from '@assets/images/pick_page_desktop_sandwich.png';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';
import ProgressiveImage from 'react-progressive-graceful-image';

function DeskTopImage() {
  return (
    <ImgWrap>
      <ProgressiveImage src={sandwich} placeholder={test}>
        {(src, loading) => <img style={{ filter: loading ? 'blur(4px)' : 'blur(0)' }} src={src} alt="샌드위치" />}
      </ProgressiveImage>
      {/* <img src={test} alt="샌드위치" /> */}
    </ImgWrap>
  );
}

export default DeskTopImage;

const ImgWrap = styled.div`
  display: none;
  min-width: 47%;
  max-width: 600px;

  & img {
    width: 100%;
  }

  ${mediaQuery} {
    display: block;
  }
`;
