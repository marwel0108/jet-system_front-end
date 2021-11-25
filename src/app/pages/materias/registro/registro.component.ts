import { Component, OnInit } from '@angular/core';
import { MateriasService } from 'src/app/shared/services/materias.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  materias: any;
  creditos: number = 0;

  constructor(private  materiasService: MateriasService) { }

  ngOnInit(): void {
    this.materiasService.getMateriasAlumno().subscribe(
      (data: any) => {
        this.materias = data.materias;
        this.creditos = data.creditos.creditos;

        this.materias.forEach((element: any) => {

          if (element.estado == 1) {
            element.estado = false;
          } else {
            element.estado = true;
          }
        });
      }
    )
  }

  alta(id_materia: number){
    this.materiasService.darDeAlta(id_materia).subscribe(
      (data: any) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert(data.msg);
          window.location.reload();
        }
      }
    )
  }

  baja(id_materia: number){
    this.materiasService.darDeBaja(id_materia).subscribe(
      (data: any) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert(data.msg);
          window.location.reload();
        }
      }
    )
  }
}
