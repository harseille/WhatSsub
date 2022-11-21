import MyCombinationCard from '@components/CustomCombination/MyCombinationCard';
import Button from '@components/UI/Button';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';

function CombinationRegistration() {
  return (
    <CustomForm>
      <MyCombinationCard />
      <CreateCombinationButton designType="primaryGreen" width="100%" padding="15px" fontSize="16px" fontWeight="700">
        나만의 조합 만들기
      </CreateCombinationButton>
    </CustomForm>
  );
}

export default CombinationRegistration;

const CustomForm = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const CreateCombinationButton = styled(Button)`
  ${mediaQuery} {
    display: none;
  }
`;
