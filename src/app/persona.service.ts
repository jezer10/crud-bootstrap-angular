import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private urlPersona: string = 'http://localhost:9090/persona';
  constructor(private http: HttpClient) { }
  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.urlPersona + '/all');
  }
  addPersona(persona:Persona):Observable<number>{
    console.log(persona);
    return this.http.post<number>(this.urlPersona+'/create',persona,{headers:this.httpHeaders});
  }
  deletePersona(id: number): Observable<number>{
    return this.http.delete<number>(this.urlPersona+"/delete/"+id,{headers:this.httpHeaders});
  }
  getPersona(id:number):Observable<Object> {
    return this.http.get(`${this.urlPersona}/${id}`);
  }
  updatePersona(persona: Persona):Observable<number> {
    return this.http.put<number>(`${this.urlPersona}/update/${persona.id_persona}`, persona,{headers:this.httpHeaders});
  }
}
