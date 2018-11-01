const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

for (var i=0; i < kuvat.length; i++){
  var li = document.createElement('li');
  var img = document.createElement('img');
  img.src = kuvat[i];

  ul = document.getElementById('asd');

  ul.appendChild(li);
  ul.appendChild(img);
}