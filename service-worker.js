if ('serviceWorker' in navigator) {
    console.log("Will the service worker register?");
    navigator.serviceWorker.register('https://rawcdn.githack.com/ImranFX/TF-PWA/8a102e996669a6cdac4be540e37ce1e6bb5b70fa/service-worker.js')
      .then(function(reg){
        console.log("Yes, it did.");
     }).catch(function(err) {
        console.log("No it didn't. This happened:", err)
    });
 }
