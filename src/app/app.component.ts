import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Seccion {
  titulo: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Necesario
  imports: [CommonModule], // ✅ para usar *ngFor, *ngIf, etc.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secciones: Seccion[] = [
    {
      titulo: 'Inicio de sesión',
      descripcion: 'Diagrama de casos de uso y demás.',
      imagen: 'inicio.png'
    },
    {
      titulo: 'Consulta de saldo de productos',
      descripcion: 'Casos de uso, clases (Producto, Usuario), despliegue (App ↔ Backend ↔ BD), objetos.',
      imagen: 'saldo.png'
    },
    {
      titulo: 'Transferencia entre productos propios',
      descripcion: 'Casos de uso, clases (Transferencia, Cuenta), objetos, diagrama de datos.',
      imagen: 'transferencia.png'
    },
    {
      titulo: 'Cambio de clave de acceso',
      descripcion: 'Casos de uso, clases (Usuario, Seguridad), despliegue (canal móvil ↔ API), datos.',
      imagen: 'cambio-clave.png'
    },
    {
      titulo: 'Consulta de extractos',
      descripcion: 'Casos de uso, clases (Extracto, Usuario), diagrama de objetos (instancia de extracto), datos.',
      imagen: 'extractos.png'
    },
    {
      titulo: 'Visualización de movimientos recientes',
      descripcion: 'Casos de uso, clase Movimiento, datos (fecha, tipo, valor).',
      imagen: 'movimientos.png'
    },
    {
      titulo: 'Gestión de beneficiarios para transferencias',
      descripcion: 'Casos de uso, clase Beneficiario, relaciones con Usuario.',
      imagen: 'beneficiarios.png'
    },
    {
      titulo: 'Consulta de créditos vigentes',
      descripcion: 'Casos de uso, clase Crédito, estado del crédito, diagrama de objetos.',
      imagen: 'creditos.png'
    },
    {
      titulo: 'Consulta de CDATs activos',
      descripcion: 'Casos de uso, clases CDAT, Usuario, Objeto CDAT, despliegue.',
      imagen: 'cdats.png'
    },
    {
      titulo: 'Cierre de sesión',
      descripcion: 'Diagrama de casos de uso, despliegue, datos de sesión, seguridad.',
      imagen: 'cierre.png'
    }
  ];
}
