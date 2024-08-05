import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [MatIconModule, NgClass],
  templateUrl: './standalone.component.html',
  styleUrl: './standalone.component.scss'
})
export class StandaloneComponent {

}
