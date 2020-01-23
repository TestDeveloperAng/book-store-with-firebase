import { Component } from "@angular/core";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class CoursesComponent {
  title = "ang-prac";
  viewCourseStatus = true;
  viewCartStatus = false;

  courses = [
    {
      id: 1,
      course_title: "Build Responsive Real World Websites with HTML5 and CSS3",
      course_image: "../../assets/images/html_course.jpg",
      course_price: 2000,
      course_trainer: "Ankit Sharma"
    },
    {
      id: 2,
      course_title: "CSS3",
      course_image: "../../assets/images/css_course.jpg",
      course_price: 3000
    },
    {
      id: 3,
      course_title: "JS",
      course_image: "../../assets/images/js_course.jpg",
      course_price: 5000
    },
    {
      id: 4,
      course_title: "jQuery",
      course_image: "../../assets/images/jquery_course.jpg",
      course_price: 7000
    }
  ];

  coursesPurchased = [];

  coursePurchased(e) {
    // console.log(e);
    this.coursesPurchased.push(this.courses[e]);
  }

  viewCourses() {
    this.viewCourseStatus = true;
    this.viewCartStatus = false;
  }

  viewCart() {
    this.viewCourseStatus = false;
    this.viewCartStatus = true;
  }
}
