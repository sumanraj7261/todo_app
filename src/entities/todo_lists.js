const TODOList = require('./todo_list');

class TODOLists {
  constructor(lists, initialID) {
    this.lists = lists;
    this.latestListID = initialID;
  }

  static parse({ lists, latestListID }) {
    const todoLists = lists.map(TODOList.parse);
    return new TODOLists(todoLists, latestListID);
  }

  addTODOList(title, description, items) {
    this.latestListID = this.latestListID + 1;
    const todoList = new TODOList(this.latestListID, title, description, items, 0);
    this.lists.push(todoList);
  }

  getTODOLists() {
    return this.lists;
  }
}

module.exports = TODOLists;
