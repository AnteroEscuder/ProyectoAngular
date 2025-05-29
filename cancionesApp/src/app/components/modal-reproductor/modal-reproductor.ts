import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-reproductor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-reproductor.html',
  styleUrl: './modal-reproductor.scss'
})
export class ModalReproductor {
  @Input() song: any;
  @Input() visible = false;
  @Output() cerrado = new EventEmitter<void>();

  cerrar() {
    this.cerrado.emit();
  }
}
