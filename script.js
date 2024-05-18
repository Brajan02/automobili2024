function ispisivanjeNaslova() {
  let naslov = document.getElementById('naslov');
  let tekst = naslov.innerHTML;
  naslov.innerHTML = '';
  let i = 0;
  let brzina = 50; // Brzina ispisivanja u milisekundama (manje = brže)
  function ispis() {
    if (i < tekst.length) {
      naslov.innerHTML += tekst.charAt(i);
      i++;
      setTimeout(ispis, brzina);
    }
  }
  ispis();
}

// Pozivamo funkciju za ispisivanje naslova kada se stranica učita
window.onload = ispisivanjeNaslova;
