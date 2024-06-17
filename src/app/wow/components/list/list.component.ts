import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'wow-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() 
  characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( characterId?: string ): void {
    if(!characterId) return;
    
    this.onDelete.emit( characterId );

  }

}
  