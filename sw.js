self.addEventListener('fetch', function(event) { ❶
if (/\.jpg$/.test(event.request.url)) { ❷
event.respondWith(fetch('/images/unicorn.jpg’)); ❸
}
});
