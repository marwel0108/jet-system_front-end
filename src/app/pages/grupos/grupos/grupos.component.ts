import { Component, OnInit } from '@angular/core';
import { GruposService } from 'src/app/shared/services/grupos.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  isw: any = [];
  ilt: any = [];
  im: any = [];

  alumnos: any;

  constructor(
    private gruposService: GruposService
  ) { }

  ngOnInit(): void {
    this.gruposService.getGrupos().subscribe(
      (data: any) => {
        if (localStorage.getItem('user_type') == '1') {
          data.isw.forEach((element: any) => {
            this.isw.push(element)
          });
          data.ilt.forEach((element: any) => {
            this.ilt.push(element)
          });
          data.im.forEach((element: any) => {
            this.im.push(element)
          });
        } else {
          this.alumnos = data;
        }
      }
    )
  }

}
