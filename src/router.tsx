import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingSpinner from '@components/Common/LoadingSpinner';
import RootLayout from '@layouts/RootLayout';

const HomePage = lazy(() => import('@pages/HomePage'));
const RankingPage = lazy(() => import('@pages/RankingPage'));
const LoginPage = lazy(() => import('@pages/LoginPage'));
const CustomCombination = lazy(() => import('@pages/CustomCombinationPage'));
const BestCombinationListPage = lazy(() => import('@pages/BestCombinationListPage'));
const MyPage = lazy(() => import('@pages/MyPagePage'));
const RandomPickPage = lazy(() => import('@pages/RandomPickPage'));
const BestCombinationPickPage = lazy(() => import('@pages/BestCombinationPickPage'));
const BestCombinationDetailPage = lazy(() => import('@pages/BestCombinationDetailPage'));
const NotFound = lazy(() => import('@pages/NotFound'));

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="best-combination-pick" element={<BestCombinationPickPage />} />
            <Route path="best-combination">
              <Route index element={<BestCombinationListPage />} />
              <Route path="ranking" element={<RankingPage />} />
              <Route path=":combinationId" element={<BestCombinationDetailPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="random-pick" element={<RandomPickPage />} />
            <Route path="custom-combination" element={<CustomCombination />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Router;
