import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      title: 'Quatu',
      url: 'https://quatu.xyz',
      online: true,
      github: 'https://github.com/jhangmez/quatu',
      description: 'Proyecto de quatu',
      chips: [
        {
          idchip: 1,
          description: 'Consumo de API',
        },
        {
          idchip: 2,
          description: 'Conexión mediante ORM',
        },
        {
          idchip: 3,
          description: 'Buenas prácticas',
        },
      ],
    },
    {
      id: 2,
      title: 'Quatu',
      url: 'https://quatu.xyz',
      online: false,
      github: 'https://github.com/jhangmez/quatu',
      description: 'Proyecto de quatu Proyecto de quatu Proyecto de quatu',
      chips: [
        {
          idchip: 1,
          description: 'Consumo de API',
        },
        {
          idchip: 2,
          description: 'Conexión mediante ORM',
        },
        {
          idchip: 3,
          description: 'Buenas prácticas',
        },
        {
          idchip: 4,
          description: 'Buenas prácticas',
        },
      ],
    },
  ];
}
