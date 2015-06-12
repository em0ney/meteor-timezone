Package.describe({
  name: 'mrt:timezone',
  summary: 'DEPRECATED: USE em0ney:timezone',
  version: '0.0.2'
});

Package.on_use(function (api) {
  api.use('templating', 'client');
  api.add_files([
    'meteor-timezone.html',
    'meteor-timezone.js'
  ], 'client');
  api.export('Timezone');
});
