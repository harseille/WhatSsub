import { useNavigate } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-graceful-image';
import Button from '@components/Common/UI/Button';
import cryingDanji from '@assets/images/danzzi/danzzi_crying.webp';
import tinyCryingDanji from '@assets/images/resize/Resize_danzzi_crying.webp';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';

function NotFoundBestCombinationList() {
  const navigate = useNavigate();
  const 페이지_뒤로가기 = () => navigate(-1);

  return (
    <>
      <Title>꿀조합 찾기 실패</Title>
      <ImgWrap>
        <ProgressiveImage src={cryingDanji} placeholder={tinyCryingDanji}>
          {(src, loading) => (
            <img style={{ filter: loading ? 'blur(4px)' : 'blur(0)' }} src={src} alt="울고있는 단지" />
          )}
        </ProgressiveImage>
      </ImgWrap>
      <Desc>검색하신 샌드위치를 찾을 수 없습니다.</Desc>
      <Desc>꿀조합을 다시 선택해주세요.</Desc>
      <ButtonWrap>
        <Button
          onClick={페이지_뒤로가기}
          designType="primaryYellow"
          width={changeRem(330)}
          height={changeRem(50)}
          marginTop="40px">
          다시 찾기
        </Button>
      </ButtonWrap>
    </>
  );
}

export default NotFoundBestCombinationList;

const ImgWrap = styled.div`
  max-width: ${changeRem(250)};

  & img {
    width: 100%;
    height: 100%;
    min-height: ${changeRem(251)};
  }

  ${mediaQuery} {
    min-width: ${changeRem(350)};

    & img {
      min-height: ${changeRem(351)};
    }
  }
`;

const Title = styled.p`
  padding-top: 60px;
  font-weight: 700;
  font-size: ${changeRem(28)};
  text-align: center;
  color: #181818;

  ${mediaQuery} {
    font-size: ${changeRem(36)};
  }
`;

const Desc = styled.p`
  font-size: ${changeRem(14)};
  margin-bottom: 4px;
  color: #6c6c6c;

  ${mediaQuery} {
    font-size: ${changeRem(18)};
  }
`;

const ButtonWrap = styled.div`
  & button:hover {
    box-shadow: 5px 5px 5px #7879706d;
  }
`;
