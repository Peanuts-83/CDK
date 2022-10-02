import { Component, OnInit } from '@angular/core'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.less']
})
export class SortComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  song: string[] = [
    "Au clair de la Lune",
    "Mon ami Pierrot",
    "Prête-moi ta plume",
    "Pour écrire un mot",
    "Ma chandelle est morte",
    "Je n'ai plus de feu",
    "Ouvre-moi ta porte",
    "Pour l'amour de Dieu"
  ]

  drop(e: CdkDragDrop<string[]>): void {
    moveItemInArray(this.song, e.previousIndex, e.currentIndex)
  }

}
