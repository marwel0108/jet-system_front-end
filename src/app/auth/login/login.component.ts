import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  CreateForm!: FormGroup;

  constructor(
    private userService: UserService,
    private FBuilder: FormBuilder,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  doSave() {
    this.userService.login(this.CreateForm.value).subscribe(
      (data: any) => {
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('user', data.user.id);
        localStorage.setItem('user_type', data.user.tipo_usuario);
        this.router.navigateByUrl('perfil');
        console.log("Éxito al logear")
      },
      (error) => { alert('Credenciales incorrectas') }
    );
  }

  private buildForm() {
    this.CreateForm = this.FBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}
