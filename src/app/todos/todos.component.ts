import { Component, OnInit } from '@angular/core';
import { secondSlide, fade, slide} from './animations';
import { Todo } from './model/todo';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [
    fade,
    slide,
    secondSlide,
   
  ]
})
export class TodosComponent implements OnInit {
  public todos: Todo[] = [];
  public text: string = '';
 

  public clear() {
    this.text = '';
  }

  public removeAll() {
    this.todos = [];
    this.storageService.saveTodos(this.todos);
  }


  public addTodo() {
    const todo: Todo = {
      text: this.text,
      done: false,
      priority: 0,
    };
    this.todos.push(todo);
    this.clear();
    this.storageService.saveTodos(this.todos);
  }

  public setDone(todo: Todo) {
    if (todo.done === false) {
      todo.done = true;
    } else {
      todo.done = false;
    }
  }

  public deleteTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);

    this.storageService.saveTodos(this.todos);
  }

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.todos = this.storageService.loadTodos()
  }
}
