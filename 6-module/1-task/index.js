/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.createTable();
  }
  createTable() {
    const table = document.createElement('table');
    table.insertAdjacentHTML('beforeend', `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      <tbody></tbody>`);
    for (const row of this.rows) {
      const renderedRow = this.createRow(row);
      table.querySelector('tbody').appendChild(renderedRow);
    }
    return table;
  }

  createRow(rowData) {
    const row = document.createElement('tr');
    row.insertAdjacentHTML('beforeend', `
      <tr>
        <td>${rowData.name}</td>
        <td>${rowData.age}</td>
        <td>${rowData.salary}</td>
        <td>${rowData.city}</td>
        <td><button>X</button></td>
      </tr>
    `);

    const btn = row.querySelector('button');
    btn.addEventListener('click', () => {
      btn.closest('tr').remove();
    });

    return row;
  }
}
