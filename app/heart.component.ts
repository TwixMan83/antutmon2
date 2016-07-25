import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'heart',
    template: 
    `
    <li class="glyphicon glyphicon-heart"
    [class.highlighted]="iLike"
    (click)="onClick()">
    
    </li>
    <span> {{totalLikes}} </span>
    
    `,
    styles: 
    [`
    .glyphicon-heart {
        color: #ccc;
        cursor: pointer;
    }
    
    .highlighted {
        color: deeppink;

    }

    `]

})
export class HeartComponent{
    
    @Input() iLike = false;
    @Input() totalLikes = 10;

    onClick() {
        this.iLike = !this.iLike;
       this.totalLikes += this.iLike ? 1 : -1;
        
    }
}