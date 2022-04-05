import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Input() color = 'red';
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter

  faTimes = faTimes;

  onDelete(task) {
    confirm("Do you want to remove this task?")
    // let de = this.task
    this.onDeleteTask.emit(task);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
