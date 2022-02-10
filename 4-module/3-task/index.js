function highlight(table) {
  for (const row of table.rows) {
    const available = row.cells[3].dataset.available;
    const sex = row.cells[2].innerText;
    const age = +row.cells[1].innerText;

    switch (available) {
    case 'true':
      row.classList.add('available');
      break;
    case 'false':
      row.classList.add('unavailable');
      break;
    default:
      row.setAttribute('hidden', 'hidden');
    }
    if (sex === 'f') {
      row.classList.add('female');
    } else {
      row.classList.add('male');
    }
    if (age < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
