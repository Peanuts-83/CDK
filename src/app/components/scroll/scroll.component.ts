import { Component, OnInit } from '@angular/core'
import { randomEmoji } from './emojis'
import { faker } from '@faker-js/faker'

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.less']
})
export class ScrollComponent implements OnInit {
  people!: any[]

  constructor() {
    this.people = Array(100)
      .fill(1)
      .map(_ => {
        return {
          name: faker.name.fullName(),
          bio: faker.hacker.phrase(),
          avatar: faker.image.avatar(),
          emoji: randomEmoji()
        }
      })
    console.log(this.people)
  }

  ngOnInit(): void {
  }

}
