Package.describe({
  summary: "Nice relative time-ago based on Trello's algorithm",
  version: "1.0.0",
  git: "https://github.com/stratogee/relative-time"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');

  api.use([
    'coffeescript',
    'deps',
    'underscore',
    'templating',
    'ui',
    'mrt:moment@2.8.1'
  ], 'client');

  api.use(['mizzao:timesync'], ['client', 'server']);

  api.addFiles(['relative-time.coffee'], 'client');
  api.export('RelativeTime', ['client']);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('stratogee:relative-time');
  api.addFiles('relative-time-tests.js');
});


