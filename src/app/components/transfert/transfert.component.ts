import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

interface Task {
  text: string
  img: string
}

@Component({
  selector: 'app-transfert',
  templateUrl: './transfert.component.html',
  styleUrls: ['./transfert.component.less']
})
export class TransfertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  backlog: Task[] = [
    {text: "fix bug", img: "./assets/bug.jpeg"},
    {text: "learn cdk", img: "./assets/cdk.png"},
    {text: "drink tea", img: "./assets/tea.jpeg"},
  ]
  sprint: Task[] = [
    {text: "finish project", img: "./assets/project.png"},
  ]

  drop(e: CdkDragDrop<Task[]>): void {
    if (e.container === e .previousContainer) {
      moveItemInArray(e.container.data, e.previousIndex, e.currentIndex)
    } else {
      transferArrayItem(
        e.previousContainer.data,
        e.container.data,
        e.previousIndex,
        e.currentIndex,
      )
    }
  }

}
