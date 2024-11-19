document.getElementById("showLyrics").addEventListener("click", function() {
  const lyricsDiv = document.getElementById("lyrics");
  lyricsDiv.innerHTML = "";

  for (let i = 99; i >= 0; i--) {
    let line = "";

    if (i > 1) {
      line = `${i} bottles of beer on the wall, ${i} bottles of beer. Take one down, pass it around, ${i - 1} bottles of beer on the wall.`;
    } else if (i == 1) {
      line = `1 bottle of beer on the wall, 1 bottle of beer. Take one down, pass it around, no more bottles of beer on the wall.`;
    } else {
      line = `No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.`;
    }

    const p = document.createElement("p");
    p.textContent = line;
    lyricsDiv.appendChild(p);
  }
});
