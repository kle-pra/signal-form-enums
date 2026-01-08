import { Component, signal } from '@angular/core';
import { form, Field } from '@angular/forms/signals';
import { bootstrapApplication } from '@angular/platform-browser';

enum ProjectStatus {
  ACTIVE = 'active',
  CLOSED = 'closed',
}

type ProjectFormModel = {
  name: string;
  status: ProjectStatus;
};

@Component({
  selector: 'app-root',
  imports: [Field],
  template: `
  <label for="name">Name</label>
  <input
  type="text"
  [field]="projectForm.name"
  id="name" />

  <fieldset>
    <input
      type="radio"
      [field]="projectForm.status"
      [value]="projectStatusEnum.CLOSED"
      id="btnradio2" />
    <label
      class="btn btn-outline-primary"
      for="btnradio2">
      {{ projectStatusEnum.CLOSED }}
    </label>

    <input
      type="radio"
      [field]="projectForm.status"
      [value]="projectStatusEnum.ACTIVE"
      id="btnradio3" />
    <label
      for="btnradio3">
      {{ projectStatusEnum.ACTIVE }}
    </label>
</fieldset>
  `,
})
export class App {
  readonly projectFormModel = signal<ProjectFormModel>({ name: '', status: ProjectStatus.CLOSED });
  readonly projectForm = form(this.projectFormModel);
  projectStatusEnum = ProjectStatus;
}

bootstrapApplication(App);
