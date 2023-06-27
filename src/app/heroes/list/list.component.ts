import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroeName: string[] = ['SuperMan', 'WonderWoman', 'Batman', 'Shazam', 'AquaMan'];
  public deletedHero?: string = '';

  removeHero() {
    this.deletedHero = this.heroeName.pop();

  }
}
