define([
  'landing/landing',
  'competition/competition'
  ],
function (landingModule, competitionModule) {
  m.route(document.body, '/', {
    "/": landingModule,
    "/competition/:id": competitionModule
  });

  m.route.mode = 'search';
});
