// название кеша
const CACHE_NAME = 'example.com-v1'
// выбираем файлы для кеширования
const cacheAssets = ['index.html', 'about.html', 'js/main.js']
// добавляем обработчик события "install"
window.self.addEventListener('install', e => {
   console.log('Сервис-воркер установлен')
   e.waitUntil(
      caches
         .open(CACHE_NAME)
         .then(cache => {
            console.log('Сообщение от сервис-воркера: файлы кешируются')
            cache.addAll(cacheAssets)
         })
         .then(() => {
            window.self.skipWaiting()
         })
   )
})

// добавляем обработчик события "activate"
window.self.addEventListener('activate', e => {
   console.log('Сервис-воркер активирован')
   e.waitUntil(
      caches.keys().then(cacheNames => {
         return Promise.all(
            cacheNames.map(cache => {
               if (cache !== CACHE_NAME) {
                  console.log('Производится удаление старого кеша')
                  return caches.delete(cache)
               }
            })
         )
      })
   )
})

// добавляем обработчик события "fetch"
window.self.addEventListener('fetch', e => {
   e.respondWith(
      fetch(e.request)
         .then(res => {
            const copyCache = res.clone()
            caches.open(CACHE_NAME).then(cache => {
               cache.put(e.request, copyCache)
            })
            return res
         })
         .catch(error => caches.match(e.request).then(res => res))
   )
})
