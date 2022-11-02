import styled from '@emotion/styled';
import SandwitchInfoCard from '@components/SandwitchInfoCard';
import CombinationIngredientList from '@components/CombinationIngredientList';
import CombinationRankingCard from '@components/CombinationRankingCard';
import IngredientCard from '@components/IngredientCard';
import Button from '@components/UI/Button';
import { changeRem } from '../styles/mixin';

// const Description = styled.p`
//   font-size: 20px;
//   background-color: yellow;
//   color: ${props => props.theme.colors.primaryBlue};
//   padding: 10px;
// `;

// const audio = new Audio(music);

function HomePage() {
  return (
    <>
      <SandwitchInfoCard />

      <h2>준하</h2>
      <CombinationIngredientList />
      <CombinationRankingCard />
      <Button designType="primaryGreen" width={changeRem(370)} height={changeRem(50)}>
        꿀 조합 보러가기
      </Button>
      <Button designType="primaryYellow" width={changeRem(370)} height={changeRem(50)}>
        다시 찾기
      </Button>
      <Button designType="social" width={changeRem(360)} height={changeRem(54)} borderRadius="6px">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          css={{ marginRight: '8px' }}>
          <path
            d="M23.5 12.0672C23.5 5.95496 18.5751 1 12.5 1C6.42486 1 1.5 5.95496 1.5 12.0672C1.5 17.5912 5.52254 22.1697 10.7812 23V15.2663H7.98828V12.0672H10.7812V9.62898C10.7812 6.85525 12.4235 5.32314 14.9361 5.32314C16.1396 5.32314 17.3984 5.53929 17.3984 5.53929V8.26287H16.0114C14.6449 8.26287 14.2188 9.11597 14.2188 9.99119V12.0672H17.2695L16.7818 15.2663H14.2188V23C19.4775 22.1697 23.5 17.5912 23.5 12.0672Z"
            fill="#1877F2"
          />
        </svg>
        Continue with Facebook
      </Button>
      <Button designType="social" width={changeRem(360)} height={changeRem(54)} borderRadius="6px">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          css={{ marginRight: '8px' }}>
          <rect width="24" height="24" transform="translate(0.5)" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.06 12.25C23.06 11.47 22.99 10.72 22.86 10H12.5V14.255H18.42C18.165 15.63 17.39 16.795 16.225 17.575V20.335H19.78C21.86 18.42 23.06 15.6 23.06 12.25Z"
            fill="#4285F4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.4999 22.9998C15.4699 22.9998 17.9599 22.0148 19.7799 20.3348L16.2249 17.5748C15.2399 18.2348 13.9799 18.6248 12.4999 18.6248C9.63492 18.6248 7.20992 16.6898 6.34492 14.0898H2.66992V16.9398C4.47992 20.5348 8.19992 22.9998 12.4999 22.9998Z"
            fill="#34A853"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.345 14.0901C6.125 13.4301 6 12.7251 6 12.0001C6 11.2751 6.125 10.5701 6.345 9.91006V7.06006H2.67C1.925 8.54506 1.5 10.2251 1.5 12.0001C1.5 13.7751 1.925 15.4551 2.67 16.9401L6.345 14.0901Z"
            fill="#FBBC05"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.4999 5.375C14.1149 5.375 15.5649 5.93 16.7049 7.02L19.8599 3.865C17.9549 2.09 15.4649 1 12.4999 1C8.19992 1 4.47992 3.465 2.66992 7.06L6.34492 9.91C7.20992 7.31 9.63492 5.375 12.4999 5.375Z"
            fill="#EA4335"
          />
        </svg>
        Continue with Gmail
      </Button>

      {/* <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veritatis.</Description> */}
    </>
  );
}

export default HomePage;
