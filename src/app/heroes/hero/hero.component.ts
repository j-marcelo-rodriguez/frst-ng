import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Raynor';
  public age: number = 37;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string  {
    return `${this.name} - ${this.age}`;    
  }

  changeHero(): void {
    this.name = 'Kerrigan';
  }

  changeHeroAge(): void {
    this.age = 40;
  }


}
