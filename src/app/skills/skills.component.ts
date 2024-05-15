import { Component } from '@angular/core';

@Component({
  selector: 'skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills = {
    reactJs: 'React.js',
    nextJs: 'Next.js',
    angular: 'Angular',
    typescript: 'TypeScript',
    css: 'CSS',
    html: 'HTML',
    tailwind: 'Tailwind CSS',
    graphql: 'GraphQL',
    trpc: 'tRPC',
    nodejs: 'Node.js',
    javascript: 'JavaScript',
    nexusjs: 'Nexus.js',
    postgresql: 'PostgreSQL',
    reactNative: 'React Native',
    prisma: 'Prisma',
  };
}
