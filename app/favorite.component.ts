import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'fav-icon',
   templateUrl: 'app/favorite.template.html',
    // inputs: ['isFavorite'] - dieser weg dient mehr als dokumentation, da die "Variable" (wie @Input)nicht sichtbar ist für die restlichen komponenten
    // inputs: ['isFavorite:is-favorite'] - dadurch wird die variable public 
    // outputs: ['change'] aliasing ist möglich change:favoriteChange
    styles: [
        `
        .glyphicon-star {
            color: orange;
        }
        `

    ],
    
})
export class FavoriteComponent{
    @Input() isFavorite = false;
    //@Input(is-favorite) = false;
    
    @Output() change = new EventEmitter();

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite});
    }


}