
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: new Map([
['index.csr.html', {size: 9544, hash: '48cc8d250f3cf2f237f237b745ca4b47ae8f84bec967571e1d4a579e873177d2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1311, hash: 'f033f287b27726647285b004ad8a06932fff6059ee54d055c16d752072b4a4d7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 47040, hash: '8fafd3acbf9733c1d654d6f1e454a2aba03bcdfdac1505992e4270610a672ddb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-SNJ427TH.css', {size: 483167, hash: 'ctjJbhWxfLo', text: () => import('./assets-chunks/styles-SNJ427TH_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
