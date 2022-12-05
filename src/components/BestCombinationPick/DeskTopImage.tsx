import ProgressiveImage from 'react-progressive-graceful-image';
import sandwich from '@assets/images/pick_page_desktop_sandwich.webp';
import tinySandwich from '@assets/images/resize/Resize_pick_page_desktop_sandwich.webp';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';

function DeskTopImage() {
  return (
    <ImgWrap>
      <ProgressiveImage src={sandwich} placeholder={tinySandwich}>
        {(src, loading) => <img style={{ filter: loading ? 'blur(4px)' : 'blur(0)' }} src={src} alt="샌드위치" />}
      </ProgressiveImage>
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
