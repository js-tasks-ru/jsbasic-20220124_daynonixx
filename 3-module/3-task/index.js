function camelize(str) {
  return str
    .split('-')
    .map((item, index) => {
      if (index !== 0 && item !== '') {
        return item[0].toUpperCase() + item.slice(1);
      }
      return item;
    })
    .join('');
}
