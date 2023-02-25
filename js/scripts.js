$(document).ready(function() {
    $('.tooltip').tooltipster( {
       repositionOnScroll:'true',
       animation:'grow',
       theme: 'tooltipster-punk',
              'maxWidth': 370, // set max width of tooltip box
       contentAsHTML: true, // set title content to html
       trigger: 'custom', // add custom trigger
       triggerOpen: { // open tooltip when element is clicked, tapped (mobile) or hovered
         click: true,
         tap: true,
         mouseenter: false
       },
       triggerClose: { // close tooltip when element is clicked again, tapped or when the mouse leaves it
         click: true,
         scroll: false, // ensuring that scrolling mobile is not tapping!
         tap: true,
         mouseleave: true
       },
       plugins: ['sideTip', 'scrollableTip']

    });
});