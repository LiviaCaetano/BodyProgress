const defaultIconURL = "/icons/png-128x128.png";

if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("/sw.js", {
			scope: "/",
			type: "classic"
		})
		.then(function (reg) {
			console.log("Service Worker registrado com sucesso:", reg.scope);
		})
		.catch(function (err) {
			console.error("Falha ao registrar o Service Worker:", err);
		});
}

self.addEventListener("push", (event) => {
	let payload = {};

	try {
		payload = event.data.json();
	} catch (err) {
		console.error("Failed to parse push event data:", err);
	}

	const options = {
		icon: defaultIconURL,
		body: payload.description || "Você tem uma nova notificação!",
		data: payload,
		title: payload.title || "Nova Notificação"
	};

	event.waitUntil(self.registration.showNotification(options.title, options));
});

self.addEventListener("notificationclick", (event) => {
	const data = event.notification.data;
	event.notification.close();

	const urlToOpen = `https://localhost:5173/${data.url || ""}`;

	event.waitUntil(
		clients
			.matchAll({ type: "window", includeUncontrolled: true })
			.then((windowClients) => {
				for (let i = 0; i < windowClients.length; i++) {
					const client = windowClients[i];
					if (client.url === urlToOpen && "focus" in client) {
						return client.focus();
					}
				}
				if (clients.openWindow) {
					return clients.openWindow(urlToOpen);
				}
			})
	);
});

self.addEventListener("install", (event) => {
	event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
	event.waitUntil(self.clients.claim());
});
