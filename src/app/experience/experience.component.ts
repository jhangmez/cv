import { Component } from '@angular/core';

@Component({
  selector: 'experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experiences = [
    {
      id: 1,
      company: 'Bartebi',
      link: 'https://www.linkedin.com/in/edgar-quiquia-garcia/',
      dates: {
        start: new Date('2023-02-14'),
        end: new Date('2023-06-01'),
      },
      rols: [
        {
          idRol: 1,
          nombreRol: 'Junior React Developer',
        },
        {
          idRol: 2,
          nombreRol: 'Junior React Native Developer',
        },
      ],
      description:
        'Se realizó un software para solucionar problemática de transporte de personal para una empresa Agroindustrial.',
      remote: true,
    },
    {
      id: 2,
      company: 'Agencia Consigue Ventas Online',
      link: 'https://www.linkedin.com/company/65487718/',
      dates: {
        start: new Date('2022-09-01'),
        end: new Date('2023-02-13'),
      },
      rols: [
        {
          idRol: 1,
          nombreRol: 'Líder del área de documentación',
        },
        {
          idRol: 2,
          nombreRol: 'Analista de documentación',
        },
      ],
      description:
        'Realicé labores como practicante dando apoyo al área de desarrollo de software, posterior realice acciones de SCRUM master hasta concluir el proyecto de Talento humano el cual se me asigno.',
      remote: true,
    },
  ];
  getYear(date: Date): string {
    return date.getFullYear().toString();
  }

  getMonthText(date: Date): string {
    const monthNames = [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ];
    return monthNames[date.getMonth()];
  }
}
