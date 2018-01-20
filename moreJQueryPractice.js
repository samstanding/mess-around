console.log("we're in");

$ (document).ready(readyNow);

function readyNow () {
  console.log('JQ');
  //button click even listeners
  $( '#allButton').on('click', allClicked);
  $( '#oddButton').on('click',oddClicked);
  $( '#evenButton').on('click',evenClicked);
  $( '#firstButton').on('click',firstClicked);
  $( '#lastButton').on('click', lastClicked);
  //classes use .
  $ ('.changer').on('click', changeNow);
} //end readyNow function

function changeNow(e) {
  console.log('in changer click', $( e.target ) );
  $( e.target ).parent().fadeOut();
}

function allClicked() {
  console.log('in allClicked');
  $ ( 'li' ).css( 'color', 'purple');
}

function oddClicked() {
  console.log('in oddClicked');
  $ ('li:odd' ).css('color', 'red');
}

function evenClicked() {
  console.log('in evenClicked');
  $ ( 'li:even' ).css('color', 'blue');
}

function firstClicked() {
  console.log('in firstClicked');
  $ ('li:first').css('color','yellow');
}

function lastClicked() {
  console.log('in lastClicked');
  $ ('li:last').toggle();
}
