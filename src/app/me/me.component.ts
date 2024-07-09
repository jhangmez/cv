import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'me',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './me.component.html',
  styleUrl: './me.component.css',
})
export class MeComponent {
  name = 'Jhan Gómez P.';
  city = 'Lambayeque, Perú, PET';
  email = 'jhangmez.pe@gmail.com';
  page = 'https://jhangmez.xyz';
  github = 'https://github.com/jhangmez';
  linkedin = 'https://linkedin.com/in/jhangmez';
  description =
    'Front-end Engineer enfocado en construir productos complejos y de alto tráfico.';
  entries = [
    { label: 'Email', value: this.email },
    { label: 'Página', value: this.page },
    { label: 'GitHub', value: this.github },
  ];
}
