import { useNavigate } from 'react-router-dom';
import changeAttrToQueryString from '@utils/changeAttrToQueryString';
import Button from '@components/Common/UI/Button';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';
import { 인터페이스_꿀조합선택페이지_필터 } from '@typings/ISandwich';

type TProps = {
  filteredAttribute: 인터페이스_꿀조합선택페이지_필터;
};

function NavigateListPageButton({ filteredAttribute }: TProps) {
  const navigate = useNavigate();

  const searchParams = changeAttrToQueryString(filteredAttribute);

  const 꿀조합_목록_페이지로_이동하기 = () => {
    navigate(`/best-combination?${searchParams}`, { state: filteredAttribute });
  };

  return (
    <ButtonWrap>
      <Button
        onClick={꿀조합_목록_페이지로_이동하기}
        designType="AccessibilityGreen"
        minWidth={changeRem(330)}
        height={changeRem(50)}>
        꿀 조합 보러가기
      </Button>
    </ButtonWrap>
  );
}

export default NavigateListPageButton;

const ButtonWrap = styled.div`
  position: fixed;
  bottom: 100px;

  & button:hover {
    box-shadow: 5px 5px 5px #7879706d;
  }

  ${mediaQuery} {
    position: static;
    width: 100%;

    & button {
      width: 100%;
    }
  }
`;
