import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public router: Router, public _api: UserService,) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    window.location.reload();
    this.router.navigate(['']);
  }
}
