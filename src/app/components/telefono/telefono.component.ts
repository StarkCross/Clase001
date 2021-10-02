import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import * as _ from 'lodash';

import { Usuario } from '@src/app/interfaces/usuario';
import { UsuarioService } from '@src/app/services/usuario.service';


@Component({
  selector: 'telefono',
  templateUrl: './telefono.component.html',
  styleUrls: ['./telefono.component.scss']
})
export class TelefonoComponent   {
  content: string;
  btnText: string;

  formGroupActions: FormGroup;
  formInitialState: any;
  //nombres: FormControl;
  //apellidos: FormControl;
  correo: FormControl;
  nro_telefono: FormControl;
  clave: FormControl;
  repeatPassword: FormControl;

  //lista de usuarios
  usuario: Usuario;
  usuario_original: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.usuario = {};
    this.usuario_original = {};
    // this.formGroupActions = this.formBuilder.group({
    //   nombres: ['', Validators.required],
    //   clave: ['', Validators.required],
    //   repeatPassword: ['', Validators.required],
    // });
    //this.nombres = new FormControl('', Validators.required);
    //this.apellidos = new FormControl('', Validators.required);
    this.correo = new FormControl('', [
      Validators.required,
      Validators.pattern(this.getRegex('EMAIL')),
    ]);
    this.nro_telefono = new FormControl('', [
      Validators.required,
      Validators.pattern(this.getRegex('PHONE_NUMBER')),
    ]);
    this.clave = new FormControl('');
    // , Validators.required
    this.repeatPassword = new FormControl('');
    // , Validators.required

    this.formGroupActions = new FormGroup({
     // nombres: this.nombres,
      //apellidos: this.apellidos,
      correo: this.correo,
      nro_telefono: this.nro_telefono,
      clave: this.clave,
      repeatPassword: this.repeatPassword,
    });
  }

  getRegex(type_pattern: string) {
    switch (type_pattern) {
      case 'EMAIL':
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      case 'PHONE_NUMBER':
        return /^[0-9]*$/;
      default:
        return null;
    }
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log('params:', params)
    })
    this.usuario = JSON.parse(localStorage.getItem('usuario')) || {};
    localStorage.removeItem('usuario');
    this.mostrarUsuario(this.usuario);
  }

  clickOnButton($event: any) {
    console.log('$event:', $event);
    // alert('click-');
  }

  cLeanForm() {
    this.usuario = {};
    this.formGroupActions.setValue({
     // nombres: '',
      //apellidos: '',
      correo: '',
      nro_telefono: '',
      clave: '',
      repeatPassword: '',
    });
    this.router.navigate(['/home']);
  }
  initialEditForm() {
    // this.usuario_original.repeatPassword
    this.formGroupActions.setValue({
      //nombres: this.usuario_original?.nombres || null,
      //apellidos: this.usuario_original?.apellidos || null,
      correo: this.usuario_original?.correo || null,
      nro_telefono: this.usuario_original?.nro_telefono || null,
      clave: null,
      repeatPassword: null,
    });
  }

  sendFormData() {
    console.log('this.formGroupActions:', this.formGroupActions);
    if (this.formGroupActions.valid) {
     // this.usuario.nombres = this.formGroupActions.get('nombres').value
     // this.usuario.apellidos = this.formGroupActions.get('apellidos').value
      this.usuario.correo = this.formGroupActions.get('correo').value
      this.usuario.nro_telefono = this.formGroupActions.get('nro_telefono').value
      this.usuario.clave = this.formGroupActions.get('clave').value
      let clave_repeat = this.formGroupActions.get('repeatPassword').value

      if (this.usuario.clave == clave_repeat) {
        if (this.usuario.usuario_id) {
          this.usuarioService.actualizarUsuario(this.usuario)
        } else {
          this.usuarioService.registrarUsuario(this.usuario)
        }
        this.cLeanForm();
      } else {
        alert('claves no coinciden');
      }
    }
  }

  mostrarUsuario(usuario: Usuario) {
    // this.form_edit = true;
    this.usuario_original = { ...usuario };
    this.usuario = usuario;
    // this.formGroupActions.get('nombres').setValue(this.usuario.nombres);
    console.log('this.usuario:', this.usuario)
    // this.formGroupActions.setValue(this.usuario);
    this.formGroupActions.setValue({
    //  nombres: this.usuario?.nombres || null,
    //  apellidos: this.usuario?.apellidos || null,
      correo: this.usuario?.correo || null,
      nro_telefono: this.usuario?.nro_telefono || null,
      clave: null,
      repeatPassword: null,
    });

    this.formInitialState = this.formCurrentState;
  }

  get formCurrentState() {
    return { ...this.formGroupActions.value }
  }

  get formChanged() {
    return _.isEqual(this.formInitialState, this.formCurrentState)
  }
  eliminarUsuario(usuario) {
    var respuesta = confirm('Seguro que desea eliminar este registro?');
    if (respuesta) this.usuarioService.eliminarUsuario(usuario)
  }
}
