const AbstractManager = require("./AbstractManager");

class CardManager extends AbstractManager {
  constructor() {
    super({ table: "card" });
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(card) {
    return this.connection.query(
      `insert into ${this.table} (picture, date, description, link) values (?, ?, ?, ?)`,
      [card.picture, card.date, card.description, card.link]
    );
  }

  findById(id) {
    return this.connection.query(`select * from ${this.table} where id = ?`, [
      id,
    ]);
  }

  update(card) {
    return this.connection.query(
      `update ${this.table} set picture = ?, date = ?, description = ?, link = ? where id = ?`,
      [card.picture, card.date, card.description, card.link, card.id]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = CardManager;
