import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IFile} from "../interfaces/IFile";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  getAllFiles(): Observable<IFile[]> {
    const URL_SERVER = 'http://localhost:8888/Backend/services-angular-archivos/leer-carpeta.php';
    return this.http.get<IFile[]>(URL_SERVER);
  }

  deleteFile(file: IFile): Observable<any> {
    const URL_SERVER = 'http://localhost:8888/Backend/services-angular-archivos/borrar-archivo.php';
    let data = {'archivo': file.ruta + '/' + file.nombre}
    return this.http.get<any>(URL_SERVER, {params: data});
  }
}
