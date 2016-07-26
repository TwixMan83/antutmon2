System.register(['angular2/core', './courses.component', './author.component', './auto-grow.directive', './favorite.component', './heart.component', './voter.component', './tweet.component', './contact-form.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, author_component_1, auto_grow_directive_1, favorite_component_1, heart_component_1, voter_component_1, tweet_component_1, contact_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (author_component_1_1) {
                author_component_1 = author_component_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Angular App";
                    this.post = {
                        title: "Title",
                        isFavorite: true
                    };
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
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
                        <tweet></tweet>*/ "\n    <contact-form></contact-form>\n\n    ",
                        directives: [courses_component_1.CoursesComponent, author_component_1.AuthorComponent, auto_grow_directive_1.AutoGrowDirective, favorite_component_1.FavoriteComponent, heart_component_1.HeartComponent, voter_component_1.VoterComponent, tweet_component_1.TweetComponent, contact_form_component_1.ContactFormComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map