import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Skills} from '../componentes/skills/skills';

@Injectable({
  providedIn: 'root'
})

export class SkillsService {

    private url:string="http://localhost:8080/api/skill"
    private urlLista:string="http://localhost:8080/api/skill/traer"
    private urlCrear:string="http://localhost:8080/api/skill/crear"
    private urlEliminar:string="http://localhost:8080/api/skill/borrar"
    private urlActualizar:string="http://localhost:8080/api/skill/editar"

    constructor(private http:HttpClient) {}

    //obtener la lista Skills
  getAll():Observable<Skills[]>{
    return this.http.get<Skills[]>(this.urlLista);
  }

  // crear Skill
  create(educacion:Skills):Observable<Skills>{
    return this.http.post<Skills>(this.urlCrear, educacion);
  }

  //Obtener Skill
  get(id:number):Observable<Skills>{
    return this.http.get<Skills>(`${this.url}/${id}`);
  }

  //actualizar Skill
  update(id:number,nombreSkill:String,gradoSkill:number, skill:Skills ):Observable<Skills>{
    return this.http.put<Skills>(`${this.urlActualizar}/${id}?nombre=${nombreSkill}&Grado=${gradoSkill}`, skill);
  }

  //eliminar Skill
  delete(id:number):Observable<Skills>{
    return this.http.delete<Skills>(this.urlEliminar+'/'+id);
  }

}