import { AfterViewInit, Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent implements AfterViewInit {
  count: WritableSignal<number> = signal(0);
  quintupleCount: Signal<number> = computed(() => this.count() * 5);
  showCount: WritableSignal<boolean> = signal(false);
  conditionalCount: Signal<string> = computed(() => {
    if (this.showCount()) {
      return `The count is ${this.count()}.`;
    } else {
      return 'Nothing to see here!';
    }
  });

  constructor() {
    const alwaysFalse = false;
    effect(() => {
      console.log(`The current count is: ${this.count()}`);
    });

    effect(() => {
      // Workaround, ALWAYS read the signal, even if we do nothing with it
      // then handle the conditional
      this.count();
      if (alwaysFalse) {
        // These signals will not be read
        // If always false was possible to be changed, even if it was true
        // we would never see this effect happen
        console.log(this.count() * 2);
      }
    })
  }

  increment() {
    this.count.set(this.count() + 1);
    // this.count.update(currentValue => currentValue + 1);
  }

  errorFunction() {
    // This function will not compile if the following line is uncommented
    // this.quintupleCount.set(this.quintupleCount() + 5);
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.showCount.set(true), 2500);
    setTimeout(() => this.showCount.set(false), 5000);
  }
}
