var lib = '../lib/';

require.config({
  deps: ['mithril', 'config/addevents', 'main'],
  paths: {
    underscore: lib + 'underscore-amd/underscore',
    mithril: lib + 'mithril/mithril',
  }
});
