import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatButtonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss',
})
export class ControlFlowComponent {
  loading: boolean = true;
  fruits: string[] = ['Banana', 'Cherry', 'Strawberry'];
  accessLevel: 'Admin' | 'User' | null = 'Admin';
  levels: { id: number; value: string }[] = [
    {
      id: 1,
      value: 'Admin',
    },
    {
      id: 2,
      value: 'Moderator',
    },
    {
      id: 2,
      value: 'User',
    },
  ];

  toggle() {
    this.loading = !this.loading;
  }
}
