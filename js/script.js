var cdTimer = new Date('Mar 20, 2020 00:00:00').getTime;

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = cdTimer - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    'counter'
  ).innerHTML = `<div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${minutes}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById('counter').innerHTML = 'ATHLETICS TIME!!';
  }
});
