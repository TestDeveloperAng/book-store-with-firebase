import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses/courses.component";
import { CourseComponent } from "./courses/course/course.component";
import { CartComponent } from "./cart/cart.component";

import { Routes, RouterModule, Router } from "@angular/router";

const appRoutes: Routes = [
  { path: "", component: CoursesComponent },
  { path: "cart", component: CartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CartComponent,
    CourseComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
