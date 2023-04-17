function countToTen() {
  let count = 0;
  let affichedecompte = document.getElementById('thecount');
  while (count <= 10) {
    affichedecompte.innerHTML += count + '<br>';
    count++;
  }
}
// let count = 0;
// let affichedecompte = document.getElementById("thecount");
// while (count <= 10) {
//     affichedecompte.innerHTML += count + "<br>";
//     count++;
// }
countToTen();