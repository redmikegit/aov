import { Component, OnInit, Renderer2 } from '@angular/core';
// import { trigger, animate, transition, style, query, stagger } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { fadeAnimation } from '../../animations';
// import { navAnimation } from '../../animations';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  animations: [
    fadeAnimation, 
    // navAnimation
    
  ],
})

@NgModule({
  imports: [
    BrowserAnimationsModule, 
  ],
})

export class MainNavComponent implements OnInit {
  
  // addDropOutClassStat = true;
  
  constructor(
    private renderer: Renderer2
    
    ) {  }
    
    

  addDropOutClass(){
 
    // var classArr = document.getElementsByClassName('body_bg');
    // document.getElementsByClassName('body_bg').renderer.classList.add("mystyle");

    // this.renderer.addClass(document.body, 'drop_out');
    // this.addDropOutClassStat = true;

           
    // setTimeout(() => {
        
    //     this.addDropOutClassStat = false;
    //   }, 1500);
           
  }
  
  ngOnInit() {
  }
  
}

 