import { 인터페이스_꿀조합선택페이지_필터 } from '@typings/ISandwich';

const changeAttrToQueryString = (attribute: 인터페이스_꿀조합선택페이지_필터) => {
  const queryString = [];

  for (const key of Object.entries(attribute)) {
    queryString.push([key[0], key[1].join(',')]);
  }

  return new URLSearchParams(queryString);
};

export default changeAttrToQueryString;
