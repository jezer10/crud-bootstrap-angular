import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/persona.service';
import { TipoDocumento } from 'src/app/tipo-documento';
import { TipoDocumentoService } from 'src/app/tipo-documento.service';
import Swal from 'sweetalert2';
import { Persona } from '../persona';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {
  sexos: any = [{ idsexo: "M", nombre: "Masculino" }, { idsexo: "F", nombre: 'Femenino' }];
  personaModel: Persona = new Persona();
  tipodocumentos: TipoDocumento[];
  constructor(private personaService: PersonaService, private tipoDocumentoService: TipoDocumentoService,private router:Router) { }

  ngOnInit(): void {
    this.tipoDocumentoService.getTipodocumentos().subscribe(
      (data) => {
        this.tipodocumentos = data;
      }
    );
  }

  public create(): void {
    this.personaService.addPersona(this.personaModel).subscribe(
      response => {
        console.log(this.personaModel);
        this.router.navigate(['/listpersona']);
        Swal.fire(
          'Nueva Persona',
          `${this.personaModel.nombres} creado con exito`,
          'success'
        );
      }
    )
  }

}
