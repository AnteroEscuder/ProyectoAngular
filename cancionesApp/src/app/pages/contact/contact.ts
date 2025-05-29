import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertaComponent } from '../../components/alerta/alerta';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, AlertaComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  nombre = '';
  email = '';
  mensaje = '';
  sended = false;
  errores: string[] = [];

  validarFormulario(): boolean {
    this.errores = [];

    if (!this.nombre.trim()) {
      this.errores.push('El nombre es obligatorio.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.email.trim()) {
      this.errores.push('El email es obligatorio.');
    } else if (!emailRegex.test(this.email)) {
      this.errores.push('El email no es válido.');
    }

    if (!this.mensaje.trim()) {
      this.errores.push('El mensaje es obligatorio.');
    } else if (this.mensaje.length < 10) {
      this.errores.push('El mensaje debe tener al menos 10 caracteres.');
    }

    return this.errores.length === 0;
  }

  enviarFormulario() {
    if (this.validarFormulario()) {
      console.log('Formulario enviado:', {
        nombre: this.nombre,
        email: this.email,
        mensaje: this.mensaje
      });

      this.sended = true;
      this.nombre = '';
      this.email = '';
      this.mensaje = '';
    }
  }

  onAlertaCerrada() {
    this.sended = false;
  }

}
