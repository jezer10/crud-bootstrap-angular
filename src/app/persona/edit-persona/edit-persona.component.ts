import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/persona.service';
import { TipoDocumento } from 'src/app/tipo-documento';
import { TipoDocumentoService } from 'src/app/tipo-documento.service';
import Swal from 'sweetalert2';
import { Persona } from '../persona';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {
  personas:any;
  persona:Persona=new Persona();
  tipodocumentos:TipoDocumento[];
  sexos: any = [{ idsexo: "M", nombre: "Masculino" }, { idsexo: "F", nombre: 'Femenino' }];
  constructor(private personaService:PersonaService,private activatedRoute:ActivatedRoute,private router:Router,private tipodocumentoService:TipoDocumentoService) { }

  ngOnInit(): void {
    this.tipodocumentoService.getTipodocumentos().subscribe(
      (data)=>{
        this.tipodocumentos = data;
      }
    );
    this.cargarPersona();
  }

  cargarPersona():void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.personaService.getPersona(id).subscribe(
          (data)=>{
          this.personas=data['CURSOR_PERSONA'];
          this.persona.id_persona=this.personas[0].ID_PERSONA; 
          this.persona.nombres=this.personas[0].NOMBRES;
          this.persona.apellidos=this.personas[0].APELLIDOS;
          this.persona.sexo=this.personas[0].SEXO;
          this.persona.n_doc=this.personas[0].N_DOC;
          this.persona.id_tipo_doc=this.personas[0].ID_TIPO_DOC;
          this.persona.estado=this.personas[0].ESTADO;
        })
      }
    })
  }
  
  modificarPersona():void{
    this.personaService.updatePersona(this.persona).subscribe(
      response=>{
        Swal.fire({
          title: 'Estas seguro?',
          text: "No podras revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, update it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/listpersona'])
            Swal.fire(
              'Actualizado!',
              'El registro ha sido Modificado.',
              'success'
            )
          }
        })    
    })
  }

}
