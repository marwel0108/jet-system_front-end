import { Component, OnInit } from '@angular/core';
import { MateriasService } from 'src/app/shared/services/materias.service';

@Component({
  selector: 'app-planes-academicos',
  templateUrl: './planes-academicos.component.html',
  styleUrls: ['./planes-academicos.component.css']
})
export class PlanesAcademicosComponent implements OnInit {

  isw: any = [];
  ilt: any = [];
  im: any = [];

  constructor(
    private materiasService: MateriasService
  ) { }

  ngOnInit(): void {
    this.materiasService.getMaterias().subscribe(
      (data: any) => {
        data.isw.forEach((element: any) => {
          this.isw.push(element)
        });
        data.ilt.forEach((element: any) => {
          this.ilt.push(element)
        });
        data.im.forEach((element: any) => {
          this.im.push(element)
        });
      }
    )
  }

}
