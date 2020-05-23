import { trigger, animate, transition, style, query, stagger, group, keyframes } from '@angular/animations';

    
export const fadeAnimation =

    trigger('fadeAnimation', [

        transition( '* => *', [
            //hide the page before enter
            query(':enter', 
                [
                    style({ 
                        opacity: 0 ,
                        position: 'absolute',
                        transform: 'translateY(-50px)'
                    })
                ], 
                { optional: true }
            ),
           
            //hide the navigations before showing the page content
            // group([
            //     query('.top_nav',[
            //         stagger('.1s', [
            //             animate('.2s ease-in', keyframes([
            //                 style({ opacity: 1 , transform: 'translateY(0)', offset: 0}),
            //                 style({ opacity: 0.5 , transform: 'translateY(20px)', offset: 0.3}),
            //                 style({ opacity: 0 , transform: 'translateY(-50px)', offset: 1})
            //             ]))
            //         ])
            //     ], 
            //     { optional: true }),
            // ]),

            // query('.aov_nav', [
            //     stagger('.1s', [
            //         animate ('.2s .5s ease-in', keyframes([
            //             style({ opacity: 1 , transform: 'translateX(0)', offset: 0}),
            //             style({ opacity: 0.5 , transform: 'translateX(20px)', offset: 0.3}),
            //             style({ opacity: 0 , transform: 'translateX(50px)', offset: 1})

            //         ]))
            //     ])
            // ],{ optional: true }),

            query('.body_bg', [
                animate ('.5s .8s ease-in', style({ opacity: 0 , transform: 'translateY(-500px)',}))
            ],{ optional: true }),
            // query('.aov_logo', [
            //     animate ('.5s .5s ease-in', style({ opacity: 0 , transform: 'translateX(50px)',}))
            // ],{ optional: true }),
 

            


            //hide the page
            query(':leave', 
                [
                     animate('.5s .2s ease-in',  style({ 
                        opacity: 0 ,
                        position: 'relative',
                        transform: 'translateY(-50px)'
                    }))
                 ], 
                { optional: true }
            ),
             
            //show the page content
            query(':enter', 
                [
                     animate('.5s .2s ease-out', style({ 
                        opacity: 1,
                        position: 'absolute',
                        transform: 'translateY(0)'
                    }))
                ], 
                { optional: true }
            ),
            
            
            //show the navigation after the page content
            group([
                query('.body_bg', [
                        animate ('.5s ease-out', style({ opacity: 1, transform: 'translateY(0)',}))
                ],{ optional: true }),
                query('.aov_logo', [
                    animate ('.5s ease-out', style({ opacity: 1 , transform: 'translateX(0)',}))
                ],{ optional: true }),
                // query('.aov_nav', [

                //     stagger('.1s', [
                //         animate ('.5s .5s ease-out', keyframes([
                //             style({ opacity: 0 , transform: 'translateX(-50px)', offset: 0}),
                //             style({ opacity: 0.7 , transform: 'translateX(20px)', offset: 0.3}),
                //             style({ opacity: 1 , transform: 'translateX(0)', offset: 1}),
                             
                //         ]))
                //     ])
                // ],{ optional: true }),

            ]),
            // group([
            //     query('.top_nav',[
            //         stagger('.1s', [
            //             animate('.2s .8s ease-in', keyframes([
            //                 style({ opacity: 0 , transform: 'translateY(-50px)', offset: 0}),
            //                 style({ opacity: 0.5 , transform: 'translateY(20px)', offset: 0.3}),
            //                 style({ opacity: 1 , transform: 'translateY(0)', offset: 1})
            //             ]))
            //         ])
            //     ], 
            //     { optional: true }),
            // ]),

        ]),
 

    ]);

 

    