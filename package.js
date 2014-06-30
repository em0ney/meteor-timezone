Package.describe({
  summary: "Capture users timezone once per session"
});

Package.on_use(function (api) {
  api.use('templating', 'client');
  api.add_files([
    'meteor-timezone.html',
    'meteor-timezone.js'
  ], 'client');
  api.export('Timezone');
});