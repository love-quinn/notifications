document.addEventListener("DOMContentLoaded", function () {
    handleNotification();
});

function handleNotification() {
  if ("Notification" in window) {
    if (Notification.permission === "granted") {
      notify();
    } else {
      Notification.requestPermission().then((res) => {
        if (res === "granted") {
          notify();
        } else if (res === "denied") {
          console.log("Notifications access denied");
        } else if (res === "default") {
          console.log("Notifications permission not given");
        }
      });
    }
  } else {
    console.error("Notification not supported");
  }
}

function notify() {
    // new Notification("Olá!");

    new Notification("Olá!", {
        body: "Aprenda como usar a Notifications API",
        icon: 'https://images.unsplash.com/photo-1690417330550-9f13e57a9a5f?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        lang: 'pt-BR'
    });
}