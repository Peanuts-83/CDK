import { Component, OnInit } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { heroes, columnNames, Heroe } from './data'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  private heroes$: BehaviorSubject<any> = new BehaviorSubject<Heroe>(heroes)
  public dataSource$!: Observable<Heroe[]>
  public columns = columnNames
  public minMax$!: Observable<any>

  constructor() { }

  ngOnInit(): void {
    this.dataSource$ = this.heroes$.pipe(map(v => Object.values(v)))
    this.minMax$ = this.heroes$.pipe(
      map(v => {
        const val: any = Object.values(v)
        const min = Math.min(...Object.values(val).map((v: any)=> v.health))
        const max = Math.max(...Object.values(val).map((v: any)=> v.health))
        return { min, max }
      }))
    console.log('Healths:', Object.values(this.heroes$.value).map((v: any) => v.health))

  }

  levelUp(heroName: string) {
    const updatedHero = this.heroes$.value[heroName]

    updatedHero.attack++
    updatedHero.defense++
    updatedHero.speed++
    updatedHero.healing++
    updatedHero.recovery++
    updatedHero.health++

    const newHeroData = { ...this.heroes$.value, [heroName]: updatedHero }
    // console.log(newHeroData);
    this.heroes$.next(newHeroData)
  }




}
