import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorComponent} from './author.component'
import {AutoGrowDirective} from './auto-grow.directive'
import {FavoriteComponent} from './favorite.component'
import {HeartComponent} from './heart.component'
import {VoterComponent} from './voter.component'
import {TweetComponent} from './tweet.component'
import {ContactFormComponent} from './contact-form.component'
@Component({
    selector: 'my-app',
    template: /*
    <h1>My First Angular 2 App</h1>
    <courses></courses>
    <author></author>
    <input type="text"  [value]="title" (input)="title = $event.target.value" />
    <input type="button" (click)="title = ''" value="Clear" />
    Preview: {{ title }}
    
    <input type="text" [(ngModel)]="title" />
    <fav-icon [isFavorite]="post.isFavorite"></fav-icon>
    <fav-icon (change)="onFavoriteChange($event)"></fav-icon>
    <heart></heart>
    <voter></voter>
    <tweet></tweet>*/
    `
    <contact-form></contact-form>

    `
    ,
    directives: [CoursesComponent, AuthorComponent, AutoGrowDirective, FavoriteComponent, HeartComponent, VoterComponent, TweetComponent, ContactFormComponent]

})
export class AppComponent { 
    title = "Angular App";
    post = {
        title: "Title",
        isFavorite: true
    }
    onFavoriteChange($event){
        console.log($event);
        
    }
  
}