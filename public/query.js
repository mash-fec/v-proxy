var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id');

if (!id) {
  id = Math.floor(Math.random() * 100) + 1;
}

window.id = id;