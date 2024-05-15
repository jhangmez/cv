import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'skills',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills = [
    { id: 1, name: 'HTML', icon: 'assets/icons/html.svg' },
    { id: 2, name: 'CSS', icon: 'assets/icons/css.svg' },
    { id: 3, name: 'Git', icon: 'assets/icons/git.svg' },
    { id: 4, name: 'Github', icon: 'assets/icons/github.svg' },
    { id: 5, name: 'React.js', icon: 'assets/icons/react.svg' },
    { id: 6, name: 'React Native', icon: 'assets/icons/reactnative.svg' },
    { id: 7, name: 'Next.js', icon: 'assets/icons/next.svg' },
    { id: 8, name: 'Angular', icon: 'assets/icons/angular.svg' },
    { id: 9, name: 'JavaScript', icon: 'assets/icons/javascript.svg' },
    { id: 10, name: 'TypeScript', icon: 'assets/icons/typescript.svg' },
    { id: 11, name: 'Node.js', icon: 'assets/icons/node.svg' },
    { id: 12, name: 'PostgreSQL', icon: 'assets/icons/postgresql.svg' },
    { id: 13, name: 'MySQL', icon: 'assets/icons/mysql.svg' },
    { id: 14, name: 'Tailwind CSS', icon: 'assets/icons/tailwind.svg' },
    { id: 15, name: 'GraphQL', icon: 'assets/icons/graphql.svg' },
    { id: 16, name: 'Prisma', icon: 'assets/icons/prisma.svg' },
    { id: 17, name: 'tRPC', icon: 'assets/icons/trpc.svg' },
    { id: 18, name: 'Nexus.js', icon: 'assets/icons/nexus.svg' },
  ];
}
