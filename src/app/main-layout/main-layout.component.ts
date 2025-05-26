import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet,IonicModule,],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {}