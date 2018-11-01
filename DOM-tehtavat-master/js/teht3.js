const kuvat = [
    'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

for (var i=0; i < kuvat.length; i++){
  var li = document.createElement('li');
 // var img = document.createElement('img');
  //img.setAttribute("src", kuvat[i]);
  //document.body.appendChild(img);

  ul = document.getElementById('testi');
  //li.appendChild(li);

  //li.setAttribute('class', kuvat[i]);
  li.innerHTML = "<img src = '"+kuvat[i]+"'>";

  ul.append(li);







}