      const overlay = document.createElement("div");
          overlay.style.position = "fixed";
          overlay.style.top = "0";
          overlay.style.left = "0";
          overlay.style.width = "100%";
          overlay.style.height = "100%";
          overlay.style.background = "rgba(0, 0, 0, 0.8)";
          overlay.style.display = "flex";
          overlay.style.justifyContent = "center";
          overlay.style.alignItems = "center";
          overlay.style.zIndex = "9999";
          overlay.innerHTML = '\n        <img src="https://pbs.twimg.com/media/GS8nXGPWwAAA9eR.jpg" style="max-width: 90%; max-height: 90%; border-radius: 10px;">\n    ';
          document.body.appendChild(overlay);

          const audio = document.createElement('audio');
   audio.src = 'https://aq-93.github.io/a/monkey.mp3';
   audio.controls = false;
   audio.autoplay = true;
   audio.volume = 1;

   document.body.appendChild(audio);
