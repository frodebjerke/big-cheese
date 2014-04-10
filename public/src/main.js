define([
  'landing/landing',
  'competition/competition'
  ],
function (landingModule, competitionModule) {
  m.route(document.getElementById("main"), '/', {
    "/": landingModule,
    "/competition/:competitionId": competitionModule,
  });

  m.route.mode = 'search';
});
