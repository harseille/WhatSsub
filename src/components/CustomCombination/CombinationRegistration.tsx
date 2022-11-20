import MyCombinationCard from '@components/Common/Cards/MyCombinationCard';
import Button from '@components/UI/Button';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import danzziTrust from '../../assets/images/danzzi/danzzi_trust.svg';
import sandwich from '../../assets/images/sandwich_B.L.png';

function CombinationRegistration() {
  return (
    <CustomForm>
      {/* <CustomCardWrap>
        <ImgDanJji>
          <img src={danzziTrust} alt="단찌 이미지" />
        </ImgDanJji>
        <CustomCard>
          <CustomCardTitle>
            <span>단찌</span>만의 조합 완성
          </CustomCardTitle>
          <img src={sandwich} alt="샌드위치 이미지" />
          <input type="text" placeholder="왓썹의 이름은..?" />
        </CustomCard>
      </CustomCardWrap> */}
      <MyCombinationCard />
      <CreateCombinationButton designType="primaryGreen" width="100%" padding="15px" fontSize="16px" fontWeight="700">
        나만의 조합 만들기
      </CreateCombinationButton>
    </CustomForm>
  );
}

export default CombinationRegistration;

const CustomForm = styled.form``;
const CustomCardWrap = styled.div``;
const ImgDanJji = styled.div``;
const CustomCard = styled.div``;
const CustomCardTitle = styled.h2`
  font-size: ${changeRem(20)};
  font-weight: bold;

  & span {
    color: #fab608;
    font-size: ${changeRem(24)};
  }
`;
const CreateCombinationButton = styled(Button)``;
