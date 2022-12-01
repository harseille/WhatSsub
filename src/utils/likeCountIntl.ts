const likeCountIntl = (count: number) => {
  const formatter = new Intl.NumberFormat('en', {
    notation: 'compact',
    compactDisplay: 'short',
  });
  return formatter.format(count);
};
export default likeCountIntl;
