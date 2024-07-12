function rotateFunction() {
  var min = 1024;
  var max = 9999;
  var deg = Math.floor(Math.random() * (max - min)) + min;
  var box = document.getElementById('box');
  if (box) {
      box.style.transform = "rotate(" + deg + "deg)";

      // Calcolo del segmento
      var totalSegments = 8; // Numero totale di segmenti
      var segmentAngle = 360 / totalSegments;
      var normalizedDeg = (deg % 360 + 360) % 360; // Normalizzare l'angolo tra 0 e 360 gradi

      // Correggere l'angolo per l'indicatore in alto
      var correctedAngle = (normalizedDeg + segmentAngle / 2) % 360;
      var segment = Math.floor(correctedAngle / segmentAngle);

      // Mappa dei segmenti ai nomi
      var segmentsMap = [
          "Graphic Designer",
          "Account",
          "Web Designer",
          "Adv Specialist",
          "Project Manager",
          "Copywriter",
          "Social Media",
          "SEO Specialist"
      ];

      setTimeout(function() {
          var selectedSegment = segmentsMap[segment];
          var resultText = "La ruota si è fermata su: " + selectedSegment;

          // Aggiorna l'immagine e il testo del risultato
          var resultImage = document.getElementById('result-image');
          var resultTextElement = document.getElementById('result-text');
          
          if (selectedSegment === "Project Manager") {
              resultImage.src = "/Users/alessandrolibrizzi/Desktop/Wheel/zalone.gif"; // URL della GIF per "Project Manager"
          } else {
              resultImage.src = "/Users/alessandrolibrizzi/Desktop/Wheel/giuseppe.jpg"; // Percorso dell'immagine caricata
          }

          resultImage.style.display = "block";
          resultTextElement.textContent = resultText;
      }, 5000); // Tempo di rotazione della ruota (5 secondi)
  }
}
