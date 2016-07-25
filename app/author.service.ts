import {Component} from 'angular2/core'

export class AuthorService{
    getAuthors() : string[] {
        return ["Author1", "Author2", "Author3"];
    }
}