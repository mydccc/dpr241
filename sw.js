self.addEventListener('fetch', function(event) { ❶
if (/\.jpg$/.test(event.request.url)) { ❷
event.respondWith(fetch('/unicorn.jpg’)); ❸
}
});
