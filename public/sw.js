self.addEventListener("push", function (event) {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: data.icon || "/icon.png",
      badge: "/badge.png",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: "2",
      },
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

self.addEventListener("notificationclick", async function (event) {
  console.log("Notification click received.");
  event.notification.close();

  const registration = await self.registration;

  await registration.showNotification("Daily Weather Reminder", {
    body: "Check the weather before you wash o!",
    showTrigger: new TimestampTrigger(Date.now() + 10 * 1000),
    tag: "daily-reminder",
  });
});
