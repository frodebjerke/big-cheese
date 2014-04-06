define([
  'landing/landing',
  'competition/competition'
  ],
function (landingModule, competitionModule) {
  m.route(document.getElementById("main"), '/', {
    "/": landingModule,
    "/competition/:id": competitionModule
  });

  m.route.mode = 'search';
});
