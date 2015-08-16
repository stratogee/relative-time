Package.describe({
  summary: "Nice relative time-ago based on Trello's algorithm and Moment.js",
  version: "1.0.1",
  git: "https://github.com/stratogee/relative-time"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.3');

  api.use([
    'coffeescript',
    'deps',
    'underscore',
    'templating',
    'ui',
    'momentjs:moment@2.10.6'
  ], 'client');/

  api.use(['mizzao:timesync@0.2.2'], ['client', 'server']);

  api.addFiles(['relative-time.coffee'], 'client');
  api.export('RelativeTime', ['client']);

});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('stratogee:relative-time');
  api.addFiles('relative-time-tests.js');
});


