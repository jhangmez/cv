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
      title: 'GOTEC',
      url: 'https://gotec.quatu.xyz',
      owner: true,
      online: true,
      description:
        'Tienda especializada en venta de productos tecnológicos al por mayor de INGO TECHNOLOGIES S.A.C.',
      chips: [
        {
          idchip: 1,
          description: 'Carrito de compras',
        },
        {
          idchip: 2,
          description: 'Tienda virtual',
        },
        {
          idchip: 3,
          description: 'Checking',
        },
        {
          idchip: 4,
          description: 'Venta de productos',
        },
        {
          idchip: 5,
          description: 'En desarrollo',
        },
      ],
    },
    {
      id: 2,
      title: 'Quatu',
      url: 'https://quatu.xyz',
      owner: true,
      online: true,
      description: 'Tiendas virtuales como SaaS.',
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
      id: 3,
      title: 'Portafolio',
      url: 'https://jhangmez.xyz',
      owner: true,
      online: true,
      github: 'https://github.com/jhangmez/pagina',
      description: 'Portafolio Web personal.',
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
      id: 4,
      title: 'Currículum',
      url: 'https://cv.jhangmez.xyz',
      owner: true,
      online: true,
      github: 'https://github.com/jhangmez/cv',
      description: 'Currículum listo para imprimir.',
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
      id: 5,
      title: 'InDeportiva',
      url: 'https://deporte.vercel.app',
      owner: true,
      online: false,
      github: 'https://github.com/jhangmez/deporte',
      description:
        'Proyecto de desarrollo y apoyo al talento infantil en la industria deportiva.',
      chips: [
        {
          idchip: 1,
          description: 'Buenas prácticas',
        },
        {
          idchip: 2,
          description: 'Postgresql',
        },
        {
          idchip: 3,
          description: 'Prisma ORM',
        },
      ],
    },
    {
      id: 6,
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
      id: 7,
      title: 'Educa emprededor',
      url: 'https://educaemprendedor.pe',
      owner: false,
      online: true,
      description:
        'Empresa dedicada a la capacitación y especialización de contadores.',
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
      id: 8,
      title: 'Limby',
      url: 'https://limby.vercel.app',
      owner: false,
      online: false,
      description: 'Proyecto de startup enfocada en salud mental',
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
