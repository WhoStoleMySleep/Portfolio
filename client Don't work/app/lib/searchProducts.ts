function searchProducts(text: string, query: string, tag: string): boolean {
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const lowerTag = tag.toLowerCase();

  const result = [true, true];

  if (lowerQuery[0] !== '@') {
    if (lowerText.includes(lowerQuery)) {
      result[0] = true;
    } else {
      result[0] = false;
    }
  }

  if (lowerQuery[0] === '@') {
    if (lowerTag.includes(lowerQuery.slice(1))) {
      result[1] = true
    } else {
      result[1] = false;
    }
  }

  if (result[0] && result[1]) {
    return true;
  }

  return false;
}

export default searchProducts;