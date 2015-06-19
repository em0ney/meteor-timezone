Package.describe({
  name: 'em0ney:timezone',
  summary: 'Package to set the user\'s timezone on their user profile',
  git: 'https://github.com:em0ney/meteor-timezone.git',
  version: '0.1.3'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.use([
    'tracker@1.0.7',
    'session'
  ], 'client');

  api.addFiles([
    'meteor-timezone.js'
  ]);

  api.export('Timezone');
});
