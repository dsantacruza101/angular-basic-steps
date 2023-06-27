import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Batman';
  public age:  number = 45;


  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  get HeroDescription():string {
    return `${this.name} - ${this.age}`;
  }


  changeHero():string {
    return this.name = 'NightWing'
  }

  changeAge(): number {
    return this.age = 26;
  }

  resetForm(): void {
    this.name = 'Batman',
    this.age  = 45
  }

}
