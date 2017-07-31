import { StudentService } from './../../app/services/student.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: "students-detail-page",
    templateUrl: "student-detail.html",
    providers: [StudentService]
})

export class StudentDetailPage {
    studentDetail: any;
    studentId: any;
    constructor(public navController: NavController, private studentService: StudentService, public navParams: NavParams){
        this.studentId = navParams.get("studentId");
    }
    
    ngOnInit(){
        this.getStudentDetail(this.studentId);
    }
    getStudentDetail(studentId){
        this.studentService.getStudentDetail(studentId).subscribe(studentDetail=>{
            this.studentDetail = studentDetail.data;
            this.studentDetail.skill=this.studentDetail.skill.join("-");
            console.log(this.studentDetail);
        })
    }
}