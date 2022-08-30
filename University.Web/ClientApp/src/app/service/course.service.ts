import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../domain/course';
import { Product } from '../domain/product';
import { environment } from 'src/environments/environment'
import { Login } from '../domain/login';

@Injectable({
    providedIn: 'root'
})
export class CourseService {

  public url: string;
  public urlAcc: string;

    constructor(public httpClient: HttpClient) {
        //this.url = "http://localhost:8099/University.Api/api/courses/";
        //this.url = environment.apiURL + "api/courses/";
      this.url = environment.apiURL + "admin/";
      this.urlAcc = environment.apiURL + "account/"
    }

    public getOne(id: number): Observable<any> {
        return this.httpClient.get(this.url + "getbyid/" + id);
    }

    public getAll(): Observable<any> {
        //return this.httpClient.get(this.url + "getall");
        return this.httpClient.get(this.url + "parameters");
    }

    public save(course: Course): Observable<any> {
        return this.httpClient.post(this.url + "insert", course);
    }

    public getAllProducts(product: Product): Observable<any> {
        return this.httpClient.post(this.url + "products/getall", product);
    }

  public getJWT(login: Login): Observable<any> {
    return this.httpClient.post(this.urlAcc + "login", login);
  }

    public edit(course: Course): Observable<any> {
        return this.httpClient.put(this.url + "update/" + course.CourseID, course);
    }

    public delete(id: number) {
        return this.httpClient.delete(this.url + "delete/" + id);
    }
}
