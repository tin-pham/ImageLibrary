const root = 'https://asa-image-server.herokuapp.com/';
const images = 'images';
const api = root + images;
async function getImages() {
  const data = await fetch(api);
  const images = await data.json();
  return images;
}

export default getImages;
