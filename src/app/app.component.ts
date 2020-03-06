import { Model, TodoItem } from './model';
import { Component } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-todo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo';
  model = new Model();

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    return this.model.items.filter(item => !item.done);
  }

  addItem(newItem) {
    if (newItem !== '') {
      this.model.items.push(new TodoItem(newItem, false));
    }
  }
}
