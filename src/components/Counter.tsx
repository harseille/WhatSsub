import { useRecoilState } from 'recoil';
import count from '../state/state';
import styled from '@emotion/styled';

const P = styled.p`
  font-size: 20px;
  display: inline-block;
  background-color: #9c4141;
  color: #fff;
  line-height: 50px;
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Number = () => {
  const [countNumber] = useRecoilState(count);

  return <P>{countNumber}</P>;
};

export default Number;
