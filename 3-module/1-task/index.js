function namify(users) {
  let resultArr = [];
  for (let obj of users) {
    resultArr.push(obj.name);
  }
  return resultArr;
}
