Template.configureLoginServiceDialogForSteam.siteUrl = function () {
  return Meteor.absoluteUrl();
};

Template.configureLoginServiceDialogForSteam.fields = function () {
  return [
    {property: 'secret', label: 'Steam Web API Key'}
  ];
};
