Package.describe({
  name: 'mrt:timezone',
  summary: 'DEPRECATED: USE em0ney:timezone',
  version: '0.0.2'
});

Package.on_use(function (api) {
  api.versionsFrom('0.9.0');
  api.use('templating@1.0.4', 'client');
  api.add_files([
    'meteor-timezone.html',
    'meteor-timezone.js'
  ], 'client');
  api.export('Timezone');
});
