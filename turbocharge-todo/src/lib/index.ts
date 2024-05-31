// place files you want to import through the `$lib` alias in this folder.
//Export the Todo class from this file.
export class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
  }
  get() {
    return this.todos;
  }
  sum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}