const progress = document.querySelectorAll('.progress-done');

var i;
for (i = 0; i < progress.length; i++) {
    progress[i].style.width = progress[i].getAttribute('data-done') + '%';
    progress[i].style.opacity = 1;
  }
