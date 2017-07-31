import { StudentDetailPage } from './../student-detail/student-detail';
import { StudentService } from './../../app/services/student.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: "students-page",
    templateUrl: "students.html",
    providers: [StudentService]
})

export class StudentsPage {
    students: any;
    constructor(public navController: NavController, private studentService: StudentService){

    }
    ngOnInit(){
        this.loadStudents();
    }
    loadStudents(){
        this.studentService.getStudents().subscribe(students=>{
            this.students = students.data;
        })
    }
    viewStudentDetail(studentId) {
        this.navController.push(StudentDetailPage, {studentId: studentId});
    }
}