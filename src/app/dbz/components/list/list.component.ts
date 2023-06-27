import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: '',
    power: 0
  }]

  onDeleteItem( id: string ):void {

    console.log({id});
    if ( !id ) return;
    this.onDeleteCharacter.emit(id);

  }

}
