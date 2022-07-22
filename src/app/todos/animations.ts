import { animate, state, style, transition, trigger } from '@angular/animations';

export let fade = trigger('fade', [
    state('void', style({opacity:0})),
    transition('void => *', [
      
      animate(500)
    ]),

    transition('* => void', [
      animate(300)
    ])

  ]);

  export let slide = trigger('slide', [
    state('void', style({marginTop: 0})),
    transition('void <=> *', [
      
      animate(500)
    ]),

]);

export let secondSlide = trigger('secondSlide', [
    state('void', style({marginLeft:0})),
    transition('void <=> *', [
      
      animate(500)
    ]),

    

  ]);

 