import 스파이시_바비큐 from '@assets/images/resize/sandwich/Resize_SpicyBBQ.webp';
import K_바비큐 from '@assets/images/resize/sandwich/Resize_K-BBQ.webp';
import 풀드_포크_바비큐 from '@assets/images/resize/sandwich/Resize_PulledPorkBarbecue.webp';
import 이탈리안_비엠티 from '@assets/images/resize/sandwich/Resize_ItalianB.M.T.webp';
import 써브웨이_클럽 from '@assets/images/resize/sandwich/Resize_SubwayClub.webp';
import 스테이크_치즈 from '@assets/images/resize/sandwich/Resize_Steak&Cheese.webp';
import 치킨_베이컨_아보카도 from '@assets/images/resize/sandwich/Resize_ChickenBaconAvocado.webp';
import 로티세리_비비큐_치킨 from '@assets/images/resize/sandwich/Resize_RotisserieBarbecueChicken.webp';
import 로스트_치킨 from '@assets/images/resize/sandwich/Resize_RoastedChicken.webp';
import 쉬림프 from '@assets/images/resize/sandwich/Resize_Shrimp.webp';
import 치킨_데리야끼 from '@assets/images/resize/sandwich/Resize_ChickenTeriyaki.webp';
import 스파이시_이탈리안 from '@assets/images/resize/sandwich/Resize_SpicyItalian.webp';
import 비엘티 from '@assets/images/resize/sandwich/Resize_B.L.T.webp';
import 치킨_슬라이스 from '@assets/images/resize/sandwich/Resize_ChickenSlice.webp';
import 헴 from '@assets/images/resize/sandwich/Resize_Ham.webp';
import 참치 from '@assets/images/resize/sandwich/Resize_Tuna.webp';
import 에그마요 from '@assets/images/resize/sandwich/Resize_EggMayo.webp';
import 베지 from '@assets/images/resize/sandwich/Resize_VeggieDelite.webp';

const convertProgressiveSandwichImage = (baseSandwich: string) => {
  switch (baseSandwich) {
    case '스파이시 바비큐':
      return 스파이시_바비큐;
    case 'K-바비큐':
      return K_바비큐;
    case '풀드 포크 바비큐':
      return 풀드_포크_바비큐;
    case '이탈리안 비엠티':
      return 이탈리안_비엠티;
    case '써브웨이 클럽':
      return 써브웨이_클럽;
    case '스테이크 & 치즈':
      return 스테이크_치즈;
    case '치킨 베이컨 아보카도':
      return 치킨_베이컨_아보카도;
    case '로티세리 바비큐 치킨':
      return 로티세리_비비큐_치킨;
    case '로스트 치킨':
      return 로스트_치킨;
    case '쉬림프':
      return 쉬림프;
    case '치킨 데리야끼':
      return 치킨_데리야끼;
    case '스파이시 이탈리안':
      return 스파이시_이탈리안;
    case '비엘티':
      return 비엘티;
    case '치킨 슬라이스':
      return 치킨_슬라이스;
    case '햄':
      return 헴;
    case '참치':
      return 참치;
    case '에그마요':
      return 에그마요;
    case '베지':
      return 베지;
    default:
  }
};

export default convertProgressiveSandwichImage;
