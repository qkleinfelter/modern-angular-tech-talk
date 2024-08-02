import { Routes } from '@angular/router';
import { ControlFlowComponent } from './pages/control-flow/control-flow.component';
import { StandaloneComponent } from './pages/standalone/standalone.component';
import { SignalsComponent } from './pages/signals/signals.component';
import { DeferrableViewsComponent } from './pages/deferrable-views/deferrable-views.component';

export const routes: Routes = [
  {
    title: "Control Flow",
    path: "control-flow",
    component: ControlFlowComponent
  },
  {
    title: "Standalone",
    path: "standalone",
    component: StandaloneComponent
  },
  {
    title: "Signals",
    path: "signals",
    component: SignalsComponent
  },
  {
    title: "Deferrable Views",
    path: "deferrable-views",
    component: DeferrableViewsComponent
  }
];
