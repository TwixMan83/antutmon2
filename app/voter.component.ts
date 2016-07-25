import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'voter',
    template: 
    `
    <div style="width:20px">
    <ul>
    <li class="glyphicon glyphicon-menu-up" 
    (click)="onClickUp()" [class.highlighted]="myVote==1"></li>
    <span>{{voteCount + myVote}}</span>
    <li class="glyphicon glyphicon-menu-down" 
    (click)="onClickDown()"[class.highlighted]="myVote==-1"></li>
    </ul>
    </div>
    `,
    styles: [`
     .glyphicon {
         cursor: pointer;
     }
     .highlighted {
         color: orange;
     }
    `]
})
export class VoterComponent{
    @Input() voteCount = 10;
    @Input() myVote = 0;
    highlighted = false;
    @Output() vote = new EventEmitter;

    onClickUp(){

        if (this.myVote==1){return} 
        this.myVote++;
       // this.highlighted = !this.highlighted;
        console.log("oben");
        this.vote.emit({myVote : this.myVote})
    }

    onClickDown(){
        if (this.myVote==-1){return}
        this.myVote--;
        //!this.highlighted = this.highlighted;
        console.log("unten");
        this.vote.emit({myVote : this.myVote})
    }
}