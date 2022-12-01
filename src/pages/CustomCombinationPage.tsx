import { lazy, Suspense } from 'react';

const CustomPageWrap = lazy(() => import('@components/CustomCombination/CustomPageWrap'));

function CustomCombination() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <CustomPageWrap />;
    </Suspense>
  );
}

export default CustomCombination;
