let Musics = [];

class musics {
  constructor(name, artist, genre, image, audio) {
    this.name = name;
    this.artist = artist;
    this.genre = genre;
    this.image = image;
    this.audio = audio;
  }
}

// techno&house
Musics.push(
  new musics(
    "The Rapture pt. |||",
    "&Me, Black Coffee, Keinemusik",
    "techno-house",
    "images/images-app/music/rapture-pt3.jpg",
    "audios/&ME,_Black_Coffee_-_The_Rapture_Pt.III.mp3"
  )
);
Musics.push(
  new musics(
    "7 seconds",
    "Joezi ft.Coco & Pape Diouf",
    "techno-house",
    "images/images-app/music/7-seconds.jpg",
    "audios/Joezi_feat._Coco_&_Pape_Diouf_-_7_Seconds.mp3"
  )
);
Musics.push(
  new musics(
    "Nothing Around us",
    "Mathame",
    "techno-house",
    "images/images-app/music/nothing-around-us.jpg",
    "audios/AL018_-_Mathame_-_Nothing_Around_Us.mp3"
  )
);
Musics.push(
  new musics(
    "More Love remix",
    "Rampa, &Me",
    "techno-house",
    "images/images-app/music/more-love.jpg",
    "audios/More_Love_Rampa_ME_Remix.mp3"
  )
);
Musics.push(
  new musics(
    "Premier Gaou Remix",
    "Francis Mercier, Magic System, Nitefreak",
    "techno-house",
    "images/images-app/music/premier-gaou.jpg",
    "audios/Francis_Mercier_&_Magic_System_-_Premier_Gaou_Nitefreak_Extended_Remix.mp3"
  )
);
Musics.push(
  new musics(
    "Glue",
    "Bicep",
    "techno-house",
    "images/images-app/music/glue.jpg",
    "audios/Bicep_-_Glue.mp3"
  )
);
// ambient
Musics.push(
  new musics(
    "Aglow",
    "Karamel Kel",
    "ambient",
    "images/images-app/music/aglow.jpg",
    "audios/Karamel_Kel_-_aglow.mp3"
  )
);
Musics.push(
  new musics(
    "Black Out Days remix",
    "Future Islands",
    "ambient",
    "images/images-app/music/black-out-days.jpg",
    "audios/Phantogram_-_Black_Out_Days_Future_Islands_Remix.mp3"
  )
);
Musics.push(
  new musics(
    "Runaway",
    "Aurora",
    "ambient",
    "images/images-app/music/runaway.jpg",
    "audios/AURORA_-_Runaway.mp3"
  )
);
Musics.push(
  new musics(
    "Swing Lynn",
    "Utopia Boys",
    "ambient",
    "images/images-app/music/swing-lynn.jpg",
    "audios/Swing_Lynn.mp3"
  )
);
Musics.push(
  new musics(
    "Snowfall",
    "Oneheart, reidenshi",
    "ambient",
    "images/images-app/music/snowfall.jpg",
    "audios/Oneheart_x_reidenshi_-_snowfall.mp3"
  )
);
Musics.push(
  new musics(
    "Green to Blue",
    "daniel.mp3",
    "ambient",
    "images/images-app/music/green-to-blue.jpg",
    "audios/daniel.mp3_-_green_to_blue.mp3"
  )
);

function Search() {
  let input = document.getElementById("search-bar").value.toLowerCase();
  let results = document.getElementById("search-results");
  let html = "";

  let filteredArray = Musics.filter((musics) =>
    musics.name.toLowerCase().includes(input)
  );

  if (filteredArray.length > 0) {
    filteredArray.forEach((result) => {
      html += `
        <button id="result-song-btn" onclick="Music(\`${result.audio}\`,\`${result.name}\`,\`${result.artist}\`,\`${result.image}\`)">
        <div id="result-song">
        <img src=${result.image} alt="song cover image"/>
        <div id="result-names">
        <p>${result.name}</p>
        <p>${result.artist}</p>
        </div>
        </div>
        </button>`;
    });
    results.innerHTML = html;
  } else {
    html = "<h3>This song isnt available.</h3>";
    results.innerHTML = html;
  }
}
document.getElementById("search-bar").addEventListener("input", function () {
  Search();
  document.getElementById("search-results-box").style.visibility = "visible";
});

function closeSearch() {
  document.getElementById("search-results-box").style.visibility = "hidden";
}
