document.addEventListener('DOMContentLoaded', function() {
  var videoBackground = document.getElementById('myVideo');
  var audioBackground = document.getElementById('myAudio');
  var blurredBox = document.getElementById('blurred-box');

  blurredBox.style.display = 'flex';

  if (videoBackground) {
    videoBackground.play().catch(function(e) {
      console.warn('Video autoplay prevented:', e);
    });
  }

  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  document.addEventListener('selectstart', function(e) {
    e.preventDefault();
  });

});
