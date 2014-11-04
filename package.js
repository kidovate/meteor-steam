Package.describe({
  summary: "Steam OAuth flow, used by accounts-steam",
  name: 'kidovate:steam',
  version: '1.0.0',
  git: 'git@github.com:paralin/meteor-accounts-steam.git',
  internal: true
});

Package.on_use(function(api) {
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use(['underscore', 'service-configuration'], ['client', 'server']);
  api.use(['random', 'templating'], 'client');

  api.export('Steam');

  api.add_files(
    ['steam_configure.html', 'steam_configure.js'],
    'client');

  api.add_files('steam_server.js', 'server');
  api.add_files('steam_client.js', 'client');
});
