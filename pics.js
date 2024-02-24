export function showPics(element) {
    // Funktion määrittäminen kuvien hakemiseksi ja käsittelyksi
    async function getPics() {
      try {
        // Haetaan kuvat JSON-tiedostosta
        const response = await fetch('pics.json');
        if (!response.ok) throw new Error('Kuvien haku epäonnistui');
        const images = await response.json();
  
        // Luodaan kuvat dynaamisesti jokaisen kuvan tiedoista
        images.forEach(imageData => {
          // Luodaan uusi figure-elementti
          const figure = document.createElement('figure');
  
          // Luodaan kuvaelementti ja asetetaan sen attribuutit
          const image = document.createElement('img');
          image.src = imageData.address;
          image.alt = imageData.name;
  
          // Luodaan figcaption-elementti ja asetetaan sen sisältö
          const figcaption = document.createElement('figcaption');
          figcaption.textContent = imageData.description;
  
          // Lisätään kuva ja figcaption figure-elementtiin
          figure.appendChild(image);
          figure.appendChild(figcaption);
  
          // Lisätään figure-elementti sivulle
          document.querySelector('#cards').appendChild(figure);
        });
      } catch (error) {
        console.error('Virhe kuvien haussa:', error);
      }
    }
  
    // Lisätään tapahtumankäsittelijä, joka käynnistää kuvien haun klikatessa
    element.addEventListener('click', getPics);
  }
  