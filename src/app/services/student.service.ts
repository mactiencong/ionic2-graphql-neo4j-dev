import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import Rx from 'rxjs/Rx';

@Injectable()
export class StudentService {
    constructor(private http: Http) {}
    getStudents(){
        return Rx.Observable.of({
            data: [
                {
                    id: 1,
                    name: "matico",
                    age: 29
                },
                {
                    id: 2,
                    name: "congmt",
                    age: 18
                }
            ]
        });
    }
    getStudentDetail(studentId){
        return Rx.Observable.of({
            data: {
                id: 1,
                name: "matico",
                age: 29,
                skill: ["php", "javascript", "nodejs", "python", "ionic", "angular", "c#", "java", "css"]
            }
        })
    }
}