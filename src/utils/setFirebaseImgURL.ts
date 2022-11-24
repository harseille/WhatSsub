// TODO: 리팩토링 필요
const setFirebaseImgURL = (url: string) => {
  const _url = url.split('images');
  const reg = new RegExp(/[/+]/, 'g');
  const regURL = ('images' + _url[1]).replace(reg, '%2F');
  const firebaseImageURL = `https://firebasestorage.googleapis.com/v0/b/whatssub-fce96.appspot.com/o/${regURL}?alt=media&token=${process.env.FIREBASE_imgToken}`;

  return firebaseImageURL;
};

export default setFirebaseImgURL;
