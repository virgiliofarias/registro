// Supervisor (25 nov 2026): service worker mínimo para que el teléfono la instale como app. No guarda datos.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{ if(e.request.mode==='navigate'){ e.respondWith(fetch(e.request).catch(()=>new Response('<meta charset="utf-8"><body style="background:#0B1A2E;color:#fff;font:18px system-ui;padding:28px">Sin internet. Vuelve a abrir cuando tengas señal.</body>',{headers:{'Content-Type':'text/html; charset=utf-8'}}))); } });
