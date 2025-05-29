import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-alerta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alerta.html',
  styleUrl: './alerta.scss'
})

export class AlertaComponent {
  @Input() tipo: 'success' | 'danger' | 'warning' | 'info' = 'info';
  @Input() mensaje: string = '';
  @Output() cerrado = new EventEmitter<void>();
  visible = true;

  cerrar() {
    this.visible = false;
    this.cerrado.emit();
  }

  abrir() {
    this.visible = true;
  }

}

