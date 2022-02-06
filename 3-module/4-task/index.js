function showSalary(users, age) {
  let filteredUsers = users.filter(item => item.age <= age);
  return filteredUsers.map((user, index) => index !== filteredUsers.length - 1 ? `${user.name}, ${user.balance}\n` : `${user.name}, ${user.balance}`).join('');
}
