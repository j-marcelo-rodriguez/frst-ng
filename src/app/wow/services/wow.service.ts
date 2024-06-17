import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})
export class WowService {
    
    public charaters: Character[] = [
        {
            id: uuid(),
            name: 'Artas',
            power: 500
        },
        {
            id: uuid(),
            name: 'Kerrigan',
            power: 550
        },
        {
            id: uuid(),
            name: 'Illidan',
            power: 780
        },
    ];

    addCharacter( character: Character ): void {

        const newCharacter: Character = {
            id: uuid(), ...character
        };

        this.charaters.push(newCharacter);
    }

    // onDeleteCharacter( index: number ): void {
    //     console.log('index', index);
    //     this.charaters.splice(index, 1);
    // }
    deleteCharacterById( id: string ) {

        this.charaters = this.charaters.filter( character => character.id !== id );
        

    }
    
}