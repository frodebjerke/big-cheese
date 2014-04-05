var lib = '../lib/';

require.config({
  deps: ['mithril', 'main'],
  paths: {
    underscore: lib + 'underscore-amd/underscore',
    mithril: lib + 'mithril/mithril.min',
  }
});
