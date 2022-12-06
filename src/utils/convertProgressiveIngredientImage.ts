import 위트 from '@assets/images/resize/ingredients/bread/Resize_Wheat.webp';
import 파마산_오레가노 from '@assets/images/resize/ingredients/bread/Resize_Parmesan_Oregano.webp';
import 플랫브레드 from '@assets/images/resize/ingredients/bread/Resize_Flat_Bread.webp';
import 하티 from '@assets/images/resize/ingredients/bread/Resize_Hearty_Italian.webp';
import 허니오트 from '@assets/images/resize/ingredients/bread/Resize_Honey_Oat.webp';
import 화이트 from '@assets/images/resize/ingredients/bread/Resize_White.webp';
import 모차렐라_치즈 from '@assets/images/resize/ingredients/cheese/Resize_Mozzarella_Cheese.webp';
import 슈레드_치즈 from '@assets/images/resize/ingredients/cheese/Resize_Shredded_Cheese.webp';
import 아메리칸_치즈 from '@assets/images/resize/ingredients/cheese/Resize_American_Cheese.webp';
import 양상추 from '@assets/images/resize/ingredients/vegetable/Resize_Lettuce.webp';
import 양파 from '@assets/images/resize/ingredients/vegetable/Resize_Red_Onions.webp';
import 오이 from '@assets/images/resize/ingredients/vegetable/Resize_Cucumbers.webp';
import 올리브 from '@assets/images/resize/ingredients/vegetable/Resize_Olives.webp';
import 토마토 from '@assets/images/resize/ingredients/vegetable/Resize_Tomatoes.webp';
import 피망 from '@assets/images/resize/ingredients/vegetable/Resize_Peppers.webp';
import 피클 from '@assets/images/resize/ingredients/vegetable/Resize_Pickles.webp';
import 할라피뇨 from '@assets/images/resize/ingredients/vegetable/Resize_Jalapenos.webp';
import 렌치 from '@assets/images/resize/ingredients/sauce/Resize_ranch.webp';
import 레드와인식초 from '@assets/images/resize/ingredients/sauce/Resize_Red_Wine.webp';
import 마요네즈 from '@assets/images/resize/ingredients/sauce/Resize_mayonnaise.webp';
import 머스타드 from '@assets/images/resize/ingredients/sauce/Resize_Yellow_Mustard.webp';
import 사우스웨스트_치플레 from '@assets/images/resize/ingredients/sauce/Resize_southwest_chipotle.webp';
import 소금 from '@assets/images/resize/ingredients/sauce/Resize_Salt.webp';
import 스모크_바비큐 from '@assets/images/resize/ingredients/sauce/Resize_smoke_bbq.webp';
import 스위트_어니언 from '@assets/images/resize/ingredients/sauce/Resize_sweet_onion.webp';
import 스위트_칠리 from '@assets/images/resize/ingredients/sauce/Resize_sweet_chilli.webp';
import 올리브_오일 from '@assets/images/resize/ingredients/sauce/Resize_olive_oil.webp';
import 이탈리안_드레싱 from '@assets/images/resize/ingredients/sauce/Resize_Italian_Dressing.webp';
import 핫_칠리 from '@assets/images/resize/ingredients/sauce/Resize_hot_chilli.webp';
import 허니_머스타드 from '@assets/images/resize/ingredients/sauce/Resize_Honey_Mustard.webp';
import 홀스래디쉬 from '@assets/images/resize/ingredients/sauce/Resize_horseradish.webp';
import 후추 from '@assets/images/resize/ingredients/sauce/Resize_black_pepper.webp';
import 더블업 from '@assets/images/resize/ingredients/additional/Resize_double.webp';
import 아보카도 from '@assets/images/resize/ingredients/additional/Resize_avocado.webp';
import 오믈렛 from '@assets/images/resize/ingredients/additional/Resize_Omelet.webp';
import 베이컨 from '@assets/images/resize/ingredients/main/Resize_bacon.webp';
import 페퍼로니 from '@assets/images/resize/ingredients/main/Resize_pepperoni.webp';
import 에그마요 from '@assets/images/resize/ingredients/main/Resize_egg_mayo.webp';

const convertProgressiveIngredientImage = (ingredient: string) => {
  switch (ingredient) {
    case '위트':
      return 위트;
    case '파마산 오레가노':
      return 파마산_오레가노;
    case '플랫브레드':
      return 플랫브레드;
    case '하티':
      return 하티;
    case '허니오트':
      return 허니오트;
    case '화이트':
      return 화이트;
    case '모차렐라 치즈':
      return 모차렐라_치즈;
    case '슈레드 치즈':
      return 슈레드_치즈;
    case '아메리칸 치즈':
      return 아메리칸_치즈;
    case '양상추':
      return 양상추;
    case '양파':
      return 양파;
    case '오이':
      return 오이;
    case '올리브':
      return 올리브;
    case '토마토':
      return 토마토;
    case '피망':
      return 피망;
    case '피클':
      return 피클;
    case '할라피뇨':
      return 할라피뇨;
    case '렌치':
      return 렌치;
    case '레드와인식초':
      return 레드와인식초;
    case '마요네즈':
      return 마요네즈;
    case '머스타드':
      return 머스타드;
    case '사우스웨스트 치플레':
      return 사우스웨스트_치플레;
    case '소금':
      return 소금;
    case '스모크 바비큐':
      return 스모크_바비큐;
    case '스위트 어니언':
      return 스위트_어니언;
    case '스위트 칠리':
      return 스위트_칠리;
    case '올리브 오일':
      return 올리브_오일;
    case '이탈리안 드레싱':
      return 이탈리안_드레싱;
    case '핫 칠리':
      return 핫_칠리;
    case '허니 머스타드':
      return 허니_머스타드;
    case '홀스래디쉬':
      return 홀스래디쉬;
    case '후추':
      return 후추;
    case '더블업':
      return 더블업;
    case '에그마요':
      return 에그마요;
    case '베이컨':
      return 베이컨;
    case '아보카도':
      return 아보카도;
    case '오믈렛':
      return 오믈렛;
    case '페퍼로니':
      return 페퍼로니;
    default:
  }
};

export default convertProgressiveIngredientImage;
