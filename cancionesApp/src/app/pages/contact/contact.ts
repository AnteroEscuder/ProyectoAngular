import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertaComponent } from '../../components/alerta/alerta';
import emailjs from '@emailjs/browser';

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

  enviarFormulario(event: Event) {
    event.preventDefault();
    if (this.validarFormulario()) {
      emailjs.sendForm(
        'service_xqn4mdq',
        'template_an6al38',
        event.target as HTMLFormElement,
        'wZoyUVIajkB27a1jd'
      ).then(() => {
        this.sended = true;
        this.nombre = '';
        this.email = '';
        this.mensaje = '';
      }, (error) => {
        console.error('Error al enviar:', error);
        this.errores.push('Error al enviar el formulario. Inténtalo de nuevo más tarde.');
      });
    }
  }

  onAlertaCerrada() {
    this.sended = false;
  }

}
