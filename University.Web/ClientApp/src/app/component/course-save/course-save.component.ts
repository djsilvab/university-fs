import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/domain/product';
import { Course } from '../../domain/course';
import { Login } from '../../domain/login';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-course-save',
  templateUrl: './course-save.component.html',
  styleUrls: ['./course-save.component.css']
})
export class CourseSaveComponent implements OnInit {

  public course!: Course;
  public showMessage: boolean = false;
  public message!: string;
  public type!: string;
  public product!: Product;
  public login!: Login;

  constructor(public courseService: CourseService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.course = new Course(0, '', 0);
    this.product = new Product(1, 10);
    this.login = new Login("YALBARRACI", "1111");
  }

  public save() {
    console.log(this.course);

    this.courseService.save(this.course).subscribe(data => {
      this.router.navigate(["/course-list"]);
    }, error => {
        console.log(error);
        this.showMessage = true;
        this.message = "An error has ocurred in the procedure";
        this.type = "danger";
    });
  }

  public queryProducts() {
    console.log(this.product);
    this.courseService.getAllProducts(this.product).subscribe(
        data => { 
            console.log(data) },
        error => {
            console.log(error);
            this.showMessage = true;
            this.message = "An error has ocurred in the procedure";
            this.type = "danger";
        }
    );
  }

  public getToken() {
    console.log(this.login);
    this.courseService.getJWT(this.login).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error);
        this.showMessage = true;
        this.message = "An error has ocurred in the procedure";
        this.type = "danger";
      }
    );
  }

}
