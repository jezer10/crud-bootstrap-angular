import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoDocumento } from './tipo-documento';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {
  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private urlTipoDocumento: string = 'http://localhost:9090/tipodoc';
  constructor(private http:HttpClient) { }
  getTipodocumentos(): Observable<TipoDocumento[]> {
    return this.http.get<TipoDocumento[]>(this.urlTipoDocumento + '/all');
  }
  
}
