import { Component } from '@angular/core';
import { WowService } from '../services/wow.service';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-wow-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor( private wowService: WowService ) { }

    get characters(): Character[] {
        return [...this.wowService.charaters];
    }

    onDeleteCharacter( id: string ): void {
        this.wowService.deleteCharacterById( id );
    }
    

    onNewCharacter( character: Character ): void {
        this.wowService.addCharacter( character );
    }

}