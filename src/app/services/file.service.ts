import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  getAllFiles(): Observable<any> {
    const URL_SERVER = 'http://localhost:8888/Backend/services-angular-archivos/leer-carpeta.php';
    return this.http.get<any>(URL_SERVER);
  }
}
