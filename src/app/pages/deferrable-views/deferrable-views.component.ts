import { AfterViewInit, Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ApiRequestComponent } from './components/api-request/api-request.component';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [MatTabsModule, ApiRequestComponent],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss'
})
export class DeferrableViewsComponent implements AfterViewInit {
  initiallyFalse: boolean = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initiallyFalse = true;
      console.log('set to true');

      setTimeout(() => {
        this.initiallyFalse = false;
        console.log('set to false again');
      }, 5000);
    }, 10000);
  }
}
