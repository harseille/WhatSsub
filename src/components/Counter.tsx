import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import count from '../state/state';

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

function Number() {
  const [countNumber] = useRecoilState(count);

  return <P>{countNumber}</P>;
}

export default Number;
