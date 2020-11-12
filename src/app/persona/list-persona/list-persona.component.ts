import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/persona.service';
import Swal from 'sweetalert2';
import { Persona } from '../persona';

@Component({
  selector: 'app-list-persona',
  templateUrl: './list-persona.component.html',
  styleUrls: ['./list-persona.component.css']
})
export class ListPersonaComponent implements OnInit {
  personas:any;
  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.personaService.getPersonas().subscribe((data)=>{this.personas = data['CURSOR_PERSONAS'];});
  }
  delPersona(num:number):void{
    this.personaService.deletePersona(num).subscribe(
      response=>{
        Swal.fire({
          title: 'Estas seguro?',
          text: "No podras reverti esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText:'Me Equivoque',
          confirmButtonText: 'Si,Deseo Borrarlo!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.listar()
            Swal.fire('Eliminado!','El registro ha sido eliminado.','success')
          }
        })
      }
    )    
  }

}
