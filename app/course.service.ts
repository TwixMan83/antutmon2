import {Component} from 'angular2/core'


export class CourseService{
    getCourses() : string [] {
        return ["Course1", "Course2", "Course3"];
    }
}