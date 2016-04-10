Package.describe({
  summary: "Steam OAuth flow, used by accounts-steam",
  name: 'kidovate:steam',
  version: '1.1.1',
  git: 'git@github.com:paralin/meteor-accounts-steam.git',
  internal: true,
  documentation: null
});

Package.on_use(function(api) {
  api.use('oauth2@1.1.1', ['client', 'server']);
  api.use('oauth@1.1.2', ['client', 'server']);
  api.use('http@1.0.8', ['server']);
  api.use(['underscore@1.0.1', 'service-configuration@1.0.2'], ['client', 'server']);
  api.use(['random@1.0.1', 'templating@1.0.9'], 'client');

  api.export('Steam');

  api.add_files(
    ['steam_configure.html', 'steam_configure.js'],
    'client');

  api.add_files('steam_server.js', 'server');
  api.add_files('steam_client.js', 'client');
});
