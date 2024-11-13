// add url strapi before all src images
export const changeSrcUrl = (html: string) => {
  // console.log('html: ', html)
  if (!html || typeof html !== 'string') {
    return '';
  }
  const arrHtml = html.split(' ');
  for (let i = 0; i < arrHtml.length; i++) {
    let element = arrHtml[i];
    // change src
    if (element.startsWith('src=')) {
      const newSrc = element.substring(0, 5) + element.substring(5);
      arrHtml[i] = newSrc;
    }
    // remove srcset
    if (element.startsWith('srcset=')) {
      arrHtml[i] = '';
    }
  }
  const result = arrHtml.join(' ');
  return result;
};
