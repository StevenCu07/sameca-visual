import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Seccion {
  titulo: string;
  descripcion: string;
  imagen: string;
  expanded: boolean; // Añadido para controlar la expansión
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secciones: Seccion[] = [
    {
      titulo: 'Inicio de sesión',
      descripcion: 'Diagrama de casos de uso y demás.',
      imagen: 'inicio.png',
      expanded: false
    },
    {
      titulo: 'Consulta de saldo de productos',
      descripcion: 'Casos de uso, clases (Producto, Usuario), despliegue (App ↔ Backend ↔ BD), objetos.',
      imagen: 'saldo.png',
      expanded: false
    },
    {
      titulo: 'Transferencia entre productos propios',
      descripcion: 'Casos de uso, clases (Transferencia, Cuenta), objetos, diagrama de datos.',
      imagen: 'transferencia.png',
      expanded: false
    },
    {
      titulo: 'Cambio de clave de acceso',
      descripcion: 'Casos de uso, clases (Usuario, Seguridad), despliegue (canal móvil ↔ API), datos.',
      imagen: 'cambio-clave.png',
      expanded: false
    },
    {
      titulo: 'Consulta de extractos',
      descripcion: 'Casos de uso, clases (Extracto, Usuario), diagrama de objetos (instancia de extracto), datos.',
      imagen: 'extractos.png',
      expanded: false
    },
    {
      titulo: 'Visualización de movimientos recientes',
      descripcion: 'Casos de uso, clase Movimiento, datos (fecha, tipo, valor).',
      imagen: 'movimientos.png',
      expanded: false
    },
    {
      titulo: 'Gestión de beneficiarios para transferencias',
      descripcion: 'Casos de uso, clase Beneficiario, relaciones con Usuario.',
      imagen: 'beneficiarios.png',
      expanded: false
    },
    {
      titulo: 'Consulta de créditos vigentes',
      descripcion: 'Casos de uso, clase Crédito, estado del crédito, diagrama de objetos.',
      imagen: 'creditos.png',
      expanded: false
    },
    {
      titulo: 'Consulta de CDATs activos',
      descripcion: 'Casos de uso, clases CDAT, Usuario, Objeto CDAT, despliegue.',
      imagen: 'cdats.png',
      expanded: false
    },
    {
      titulo: 'Cierre de sesión',
      descripcion: 'Diagrama de casos de uso, despliegue, datos de sesión, seguridad.',
      imagen: 'cierre.png',
      expanded: false
    }
  ];

  toggleSection(sec: Seccion) {
    sec.expanded = !sec.expanded;
  }
}
