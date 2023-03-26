import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../componentes/proyectos/proyecto';

@Injectable({
    providedIn: 'root'
  })
export class ProyectoService{


    private url:string="http://localhost:8080/api/proyecto";
    private urlLista:string="http://localhost:8080/api/proyecto/traer";
    private urlCrear:string="http://localhost:8080/api/proyecto/crear";
    private urlEliminar:string="http://localhost:8080/api/proyecto/borrar"
    private urlActualizar:string="http://localhost:8080/api/proyecto/editar"

    constructor(private http:HttpClient) {}

    //obtener la lista de proyectos
  getAll():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.urlLista);
  }

  // crear nuevo proyecto
  create(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(this.urlCrear, proyecto);
  }

  //Obtener proyecto
  get(id:number):Observable<Proyecto>{
    return this.http.get<Proyecto>(`${this.url}/${id}`);
  }

  //actualizar Proyecto
  update(id:number,nombreProyecto:String,descripcionProyecto:String,urlProyecto:String,fechaProyecto:string,urlImagen:string, proyecto:Proyecto ):Observable<Proyecto>{
    return this.http.put<Proyecto>(`${this.urlActualizar}/${id}?nombre del proyecto=${nombreProyecto}&Descripcion del proyecto=${descripcionProyecto}&URL del proyecto=${urlProyecto}&fecha del Proyecto=${fechaProyecto}&url de la imagen=${urlImagen}`, proyecto);
  }

  //eliminar proyecto
  delete(id:number):Observable<Proyecto>{
    return this.http.delete<Proyecto>(this.urlEliminar+'/'+id);
  }
}