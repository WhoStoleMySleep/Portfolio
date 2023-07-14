function generateHexColorCode(text: string): string {
  let hash = 0;
  for (let index = 0; index < text.length; index++) {
    hash = text.charCodeAt(index) + ((hash << 5) - hash);
    hash = hash & hash;
  }

  let color = "#";
  for (let index = 0; index < 3; index++) {
    const value = (hash >> (index * 12)) & 255;
    color += ("00" + value.toString(16)).substr(-2);
  }

  return color;
}

export default generateHexColorCode;