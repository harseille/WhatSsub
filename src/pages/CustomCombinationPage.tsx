import { lazy } from 'react';

const CustomPageWrap = lazy(() => import('@components/CustomCombination/CustomPageWrap'));

function CustomCombination() {
  return <CustomPageWrap />;
}

export default CustomCombination;
