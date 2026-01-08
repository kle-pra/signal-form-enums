import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

enum ProjectStatus {
  START = 'start',
  ACTIVE = 'active',
  CLOSED = 'closed',
}


type ProjectFormModel = {
  name: string;
  status: ProjectStatus;
};

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  readonly projectFormModel = signal<ProjectFormModel>({ name: '', status: ProjectStatus.START });

  readonly projectForm = form(this.projectFormModel, schemaPath => {
    required(schemaPath.name, { message: 'Obvezno polje.' });
    maxLength(schemaPath.name, 255, { message: 'Največ 255 znakov.' });

    required(schemaPath.status, { message: 'Obvezno polje.' });
  });
}

bootstrapApplication(App);
