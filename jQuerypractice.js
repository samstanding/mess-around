console.log('sourced');

$( document ).ready( readyNow);

function readyNow () {
  console.log('JQ');
  $ ( 'h2' ).mouseenter( h2MouseEnter);
  $ (' h2' ).mouseleave ( h2MouseLeave);
  $ ( '#colorChanger' ).on( 'click', changeColors );
  $ ( '#hider' ).on('click', hideH2s);
  $ ( '#shower' ).on('click', showH2s);
  $ ( '#toggler').on('click', toggleH2s);
}

function changeColors () {
  //change all h2 elements to have a bg color of yellow
  $ ( 'h2' ).css( 'background-color', 'yellow' );
} //end changeColors

function h2MouseEnter ( e ) {
  //change the background of this h2 tag to red
  console.log( 'mouse enter h2');
// e is the event
  $ (e.target ).css('font-size', '56px');
} //end h2MouseEnter

function h2MouseLeave ( e ){
  console.log( 'mouse leave h2');
  $(e.target).css( 'font-size', '36px');
  $(e.target).css( 'background-color','white');
} //end h2MouseLeave

function hideH2s () {
  $ (' h2' ).hide();
} //end hideH2s

function showH2s () {
  $ ( 'h2' ).show();
} //end showH2s

function toggleH2s () {
  $ ('h2').toggle();
} //end toggleH2s
