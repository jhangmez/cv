import { Component } from '@angular/core';

@Component({
  selector: 'education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  college = 'Universidad Nacional Pedro Ruiz Gallo';
  dates = {
    start: new Date('2019-09-23'),
    end: new Date('2024-09-23'),
  };
  title = 'Estudiante de Ingenieria de sistemas';
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
