function ucFirst(string) {

  if (string.length === 0) {
    return string;
  } else if (string.length === 1) {
    return string.toUpperCase();
  } else {
    return string[0].toUpperCase() + string.slice(1, string.length);
  }
}
