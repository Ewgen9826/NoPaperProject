import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

export const slideMenuLink=trigger('MenuLink', [
    state('showMenuLink', style({
      transform: 'translateY(0)'
    })),
    state('hideMenuLink',   style({
      transform: 'translateY(-100%)'
    })),
    transition('showMenuLink => hideMenuLink', animate('400ms ease-out')),
    transition('hideMenuLink => showMenuLink', animate('400ms ease-in'))
  ]);
  
  export const slideMenuAccount=trigger('MenuAccount', [
    state('showMenuAccount', style({
      transform: 'translateX(0)'
    })),
    state('hideMenuAccount',   style({
      transform: 'translateX(100%)'
    })),
    transition('showMenuAccount => hideMenuAccount', animate('400ms ease-out')),
    transition('hideMenuAccount => showMenuAccount', animate('400ms ease-in'))
  ])

