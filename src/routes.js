import Calc from './components/calc/Calc.vue';
import Home from './components/Home.vue';

export const routes = [
  { path: '', component: Home},
  { path: '/calc', component: Calc}
];
