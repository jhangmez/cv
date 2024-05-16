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
      owner: true,
      online: true,
      github: 'https://github.com/jhangmez/quatu',
      description: 'Tiendas virtuales como SaaS',
      chips: [
        {
          idchip: 1,
          description: 'API Graphql',
        },
        {
          idchip: 2,
          description: 'Tienda virtual',
        },
        {
          idchip: 3,
          description: 'Seguridad punto a punto',
        },
        {
          idchip: 4,
          description: 'Tailwind',
        },
        {
          idchip: 5,
          description: 'En desarrollo',
        },
      ],
    },
    {
      id: 2,
      title: 'Portafolio',
      url: 'https://jhangmez.xyz',
      owner: true,
      online: true,
      github: 'https://github.com/jhangmez/pagina',
      description: 'Portafolio Web',
      chips: [
        {
          idchip: 1,
          description: 'Typescript',
        },
        {
          idchip: 2,
          description: 'React',
        },
        {
          idchip: 3,
          description: 'Next.js',
        },
        {
          idchip: 4,
          description: 'Image generator',
        },
        {
          idchip: 5,
          description: 'Open graph',
        },
        {
          idchip: 6,
          description: 'Tailwind',
        },
        {
          idchip: 7,
          description: 'En desarrollo',
        },
      ],
    },
    {
      id: 3,
      title: 'Currículum',
      url: 'https://cv.jhangmez.xyz',
      owner: true,
      online: true,
      github: 'https://github.com/jhangmez/cv',
      description: 'Cv listo para imprimir',
      chips: [
        {
          idchip: 1,
          description: 'Typescript',
        },
        {
          idchip: 2,
          description: 'Angular',
        },
        {
          idchip: 3,
          description: 'Tailwind',
        },
      ],
    },
    {
      id: 4,
      title: 'InDeportiva',
      url: 'https://deporte.vercel.app',
      owner: true,
      online: false,
      github: 'https://github.com/jhangmez/deporte',
      description:
        'Desarrollo y apoyo el talento infantil en la industria deportiva',
      chips: [
        {
          idchip: 1,
          description: 'Buenas prácticas',
        },
      ],
    },
    {
      id: 5,
      title: 'Datrack',
      url: 'https://datrack.vercel.app',
      owner: false,
      online: false,
      description: 'Datrack',
      chips: [
        {
          idchip: 1,
          description: 'Typescript',
        },
        {
          idchip: 2,
          description: 'React',
        },
        {
          idchip: 3,
          description: 'Next.js',
        },
        {
          idchip: 4,
          description: 'Tailwind',
        },
      ],
    },
    {
      id: 6,
      title: 'Educa emprededor',
      url: 'https://educaemprendedor.pe',
      owner: false,
      online: true,
      description: 'Educa emprededor',
      chips: [
        {
          idchip: 1,
          description: 'Typescript',
        },
        {
          idchip: 2,
          description: 'React',
        },
        {
          idchip: 3,
          description: 'Next.js',
        },
        {
          idchip: 4,
          description: 'Image generator',
        },
        {
          idchip: 5,
          description: 'Open graph',
        },
        {
          idchip: 6,
          description: 'Tailwind',
        },
      ],
    },
    {
      id: 7,
      title: 'Limby',
      url: 'https://limby.vercel.app',
      owner: false,
      online: false,
      description: 'Limby',
      chips: [
        {
          idchip: 1,
          description: 'Javascript',
        },
        {
          idchip: 2,
          description: 'React',
        },
        {
          idchip: 3,
          description: 'Next.js',
        },
      ],
    },
  ];
}
