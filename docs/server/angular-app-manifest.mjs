
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/Sian"
  }
],
  assets: new Map([
['index.csr.html', {size: 9522, hash: '3e3e1a22ab1795374581242d1452d32459443c3707ecbf9c34736e377d6a427b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1289, hash: '116fed02581847f919dde0e4dea2132897a8a30f86a91039554ff31d9d12260a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 47006, hash: '96d529d1611e12b192aa36698f8c5583ef3924687124b942f149591bec80863e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-SNJ427TH.css', {size: 483167, hash: 'ctjJbhWxfLo', text: () => import('./assets-chunks/styles-SNJ427TH_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
