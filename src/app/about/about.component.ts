import { Component } from '@angular/core';

@Component({
  selector: 'about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  about =
    'Como Frontend Engineer, he realizado proyectos garantizando un entorno fácil de manejar para personas poco experimentadas. Actualmente, trabajo con Typescript, React, Next.js, Angular, Node.js, tRPC y GraphQL. Tengo más de 1 año de experiencia trabajando remoto en empresas y proyectos en Perú.';
}
