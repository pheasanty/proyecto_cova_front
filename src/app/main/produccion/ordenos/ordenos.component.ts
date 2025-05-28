import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdenoService } from 'src/app/services/ordeno.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonDatetime } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ordenos',
  templateUrl: './ordenos.component.html',
  styleUrls: ['./ordenos.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,FormsModule,IonDatetime]
})
export class OrdenosComponent  implements OnInit {

  constructor(private ordenoService: OrdenoService) {}

  ngOnInit() {}
  @ViewChild('fechaPicker', { static: false }) fechaPicker!: IonDatetime;
  @ViewChild('horaPicker', { static: false }) horaPicker!: IonDatetime;

  form = {
  vaca_id: '',
  fecha: '',
  hora: '',
  cantidad_litros: '',
  responsable: ''
};


mostrarFecha = false;
mostrarHora = false;


mostrarModalFecha() {
  this.mostrarFecha = true;
}

mostrarModalHora() {
  this.mostrarHora = true;
}

cerrarModalFecha() {
  this.mostrarFecha = false;
}

cerrarModalHora() {
  this.mostrarHora = false;
}

seleccionarFecha(event: any) {
  const fechaISO = event.detail.value;
  this.form.fecha = new Date(fechaISO).toLocaleDateString('es-ES');
}

seleccionarHora(event: any) {
  const horaISO = event.detail.value;
  this.form.hora = new Date(horaISO).toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit'
  });
}



guardarOrdeno() {
  this.ordenoService.registrarOrdeno(this.form).subscribe({
    next: res => {
      alert('Registro exitoso');
      this.form = { vaca_id: '', fecha: '', hora: '', cantidad_litros: '', responsable: '' };
    },
    error: err => {
      console.error(err);
      alert('Error al registrar el ordeño');
    }
  });
}
}
