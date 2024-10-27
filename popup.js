document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("openUrlButton");
    if (button) {
      button.addEventListener("click", function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          let currentTab = tabs[0];
          if (currentTab) {
            // Modificar la URL actual si es de YouTube
            let modifiedUrl = currentTab.url.replace("www.youtube.com", "www.yout-ube.com");
            // Abrir la URL modificada en una nueva pestaña
            chrome.tabs.create({ url: modifiedUrl });
          }
        });
      });
    }
  });
  