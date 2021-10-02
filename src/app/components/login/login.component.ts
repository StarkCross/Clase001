import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '@src/app/interfaces/usuario';
import { UsuarioService } from '@src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private usuarioService: UsuarioService) {
    this.instaciarVariables();
  }
  usuario: Usuario;
  ngOnInit(): void {}

  ingresar(frmAcceso: NgForm) {
    if (frmAcceso.valid) {
      this.usuarioService.acceder(this.usuario);
    } else {
      alert('Llene todos los campos de acceso / Formulario corrompido');
    }
  }

  instaciarVariables() {
    this.usuario = {};
  }
}
