// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface, Module} from 'react-360-web';

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
    nativeModules:[
      new surfaceModule()
    ]
  });

  // const bundleURL = new URL(bundle);
  //   console.warn(`HotReload on ${bundle}`);
  //   r360.runtime.context.callFunction('HMRClient', 'enable', [
  //     'vr',
  //     bundleURL.pathname.toString().substr(1),
  //     bundleURL.hostname,
  //     bundleURL.port,
  //   ]);
  
  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('kcam_test', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  r360.renderToLocation(
    r360.createRoot('PowerPoint', { /* initial props */ }),
    r360.getDefaultLocation()
  );

  r360.renderToLocation(
    r360.createRoot('Pikachu', {}),
    r360.getDefaultLocation()
  );

  r360.renderToLocation(
    r360.createRoot('Charmander', {}),
    r360.getDefaultLocation()
  );

  r360.renderToLocation(
    r360.createRoot('Charmander', {
      transform: [
        { translate: [-1, -1, 3.5] },
        { scaleX: 0.759 },
        { scaleY: 0.759 },
        { scaleZ: 0.759 },
        { rotateY: -45 }
      ]
    }),
    r360.getDefaultLocation()
  );

  // Travel = r360.renderToLocation(
  //   r360.createRoot('Travel', {}),
  //   r360.getDefaultLocation()
  // );
  // r360.renderToLocation(
  //   r360.createRoot('Pic', { /* initial props */ }),
  //   r360.getDefaultLocation()
  //   )

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('khmeln_park.jpg'));

  // for onClick to post profile -- only line we added
  r360.runtime.executor._worker.addEventListener('message', (e) => onMessage(e, r360));
}

// r360.renderToLocation(
//       r360.createRoot('Pic', { /* initial props */ }),
//       r360.getDefaultLocation()
//       )



class surfaceModule extends Module {
  constructor(){
    super('surfaceModule')
  }
  travel(){
   Travel = r360.renderToLocation(
      r360.createRoot('Travel', { /* initial props */ }),
      r360.getDefaultLocation()
    );
  }
  deTravel(){
    r360.detachRoot(Travel);
    this.dePic();
  }

  pic(val){
    Pic = r360.renderToLocation(
      r360.createRoot('Pic', { url: val }),
      r360.getDefaultLocation()
    );
  }

  dePic(){
    r360.detachRoot(Pic);
  }
  
}

// we also added this
function onMessage(e, r360) {
  if(e.data.type === 'newComponent') {
    //TODO mount here
  }
}
window.React360 = {init};
