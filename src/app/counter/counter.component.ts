import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template: `
    <h1>Hello, from CounterComponent</h1>

    <span>Welcome, {{title}}! </span>

    <h2> {{counter}} </h2>
    
    <button (click)="increaseValue()"> +1 </button>
    <button (click)="resetValue()"> Reset </button>
    <button (click)="decreaseValue()"> -1 </button>

    `
})
export class CounterComponent {

    public title: string = 'To NG';
    public counter: number = 10;

    increaseValue(): void {
        this.counter = this.counter + 1;
    }

    decreaseValue(): void {
        if (this.counter === 0) return;
        this.counter = this.counter - 1;
    }

    resetValue(): void {
        this.counter = 10;
    }

}