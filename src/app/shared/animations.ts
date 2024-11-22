import { animate, state, style, transition, trigger } from '@angular/animations';

// Timing
const timing = '300ms ease-in';

// Styles
const slideInOutHidden = { right: '-200px' };
const slideInOutVisible = { right: '0.5rem' };

// States (optional, falls du States explizit verwenden möchtest)
export const hiddenState = state('hidden', style(slideInOutHidden));
export const visibleState = state('visible', style(slideInOutVisible));

// Animation Trigger
export const slideInOut = trigger('slideInOut', [
  hiddenState,
  visibleState,
  transition('hidden <=> visible', [animate(timing)]),
]);
