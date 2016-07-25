import {Component} from 'angular2/core'
import {HeartComponent} from './heart.component'

@Component({
  selector: 'tweet',
  template: 
  `
  <div class="media">
  <div class="media-left">
    <a href="#">
      <img class="media-object" src="http://lorempixel.com/100/100/people/1?" alt="...">
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">Media heading</h4>
    ...
    <heart></heart>
  </div>
</div>
  `,
  directives: [HeartComponent]
})
export class TweetComponent{
  
  getTweets();
}