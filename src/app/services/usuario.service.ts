import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  collection_usuario: string = 'usuarios';
  usuario_actual: Usuario;
  constructor(
    private angularFireStore: AngularFirestore,
    private router: Router
  ) {}

  agregarCodigoID(usuario) {
    let fecha_actual_ms: string = new Date().getTime().toString();
    let code_string: string = usuario.nombres.substring(0, 3);
    return code_string + fecha_actual_ms;
  }

  listarUsuarios() {
    return this.angularFireStore
      .collection(this.collection_usuario)
      .valueChanges();
  }

  registrarUsuario(usuario) {
    usuario.usuario_id = this.agregarCodigoID(usuario);
    return this.angularFireStore
      .doc(this.collection_usuario + '/' + usuario.usuario_id)
      .set(usuario);
  }

  actualizarUsuario(usuario) {
    return this.angularFireStore
      .doc(this.collection_usuario + '/' + usuario.usuario_id)
      .update(usuario);
  }

  eliminarUsuario(usuario_id) {
    return this.angularFireStore
      .doc(this.collection_usuario + '/' + usuario_id)
      .delete();
  }

  acceder(usuario: Usuario) {
    return this.angularFireStore
      .collection(this.collection_usuario, (ref) =>
        ref
          .where('correo', '==', usuario.correo)
          .where('clave', '==', usuario.clave)
          .limit(1)
      )
      .valueChanges()
      .subscribe((usuarios) => {
        //si el arreglo de usuarios es mayor a 0
        //almacenar al usuario de la posicion 0 en el localStorage
        if (usuarios.length > 0) {
          window.localStorage.setItem(
            'USUARIOS_APP_USER',
            JSON.stringify(usuarios[0])
          );
          this.usuario_actual = usuarios[0];
          this.router.navigate(['../home']);
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      });
  }
}
