import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"]
})
export class CourseComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  code = "C4587";
  enrollStatus = false;
  studentName = "";

  @Input() course;

  detectName(e) {
    this.studentName = (<HTMLInputElement>event.target).value;
    if (this.studentName === "") {
      this.enrollStatus = false;
    }
  }

  enrollCourse(inputName: HTMLInputElement) {
    // console.log(e.value);
    // this.studentName = (<HTMLInputElement>inputName).value;
    this.enrollStatus = true;
  }

  unEnrollCourse(e) {
    this.enrollStatus = false;
  }

  @Output() courseBuyClicked = new EventEmitter();

  buycourse(e) {
    // console.log(e.srcElement.id);
    this.courseBuyClicked.emit(e.srcElement.id);
  }
}
