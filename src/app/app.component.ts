import { Component, Renderer2,   } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// import { trigger, animate, transition, style, query, stagger } from '@angular/animations';

// import { RouterOutlet } from '@angular/router';


import { fadeAnimation } from './animations';
// import { navAnimation } from './animations';

 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeAnimation, 
    // navAnimation
  ],
 
})
export class AppComponent  {
  title = 'Agents Of Value';
  
  
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
 
  
  constructor(
    private router:Router,
    private renderer: Renderer2
    ) {

    

    
  } //constructor
 
 
} //AppComponent
