import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './servicios/auth.service';

interface Componente {
  name: string;
  redirecTo: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes: Componente[] = [
    {
      name: 'Leer QR',
      redirecTo: '/leer',
      icon: 'qr-code-outline'
    },
    {
      name: 'Feriados/Festivos',
      redirecTo: '/apiferiado',
      icon: 'calendar-outline'
    },
    {
      name: 'Cerrar sesión',
      redirecTo: '/', // Redirige a la página de inicio de sesión u otra página
      icon: 'log-out-outline'
    }
  ];

  constructor(private router: Router, private authService: AuthService) {}

  logoutClicked() {
    this.authService.logout(); // Llama a la función de cierre de sesión en tu servicio
    this.router.navigate(['/']); // Redirige al usuario a la página de inicio de sesión o a donde desees después del cierre de sesión
  }
}

