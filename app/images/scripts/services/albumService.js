'use strict';

window.app.factory('albumService', [function () {
  return function () {
    var albums = [
      {
          link: 'events',
          title: 'EVENTS',
          src: 'http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Media%20album%20tiles/events_zpse4083a28.jpg',
          code: '92505062@N04'
      },
      {
          link: 'bottling',
          title: 'BOTTLING',
          src: 'http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Media%20album%20tiles/bottling_zps0d565c68.jpg',
          code: '92505062@N04'
      },
      {
          link: 'tyr',
          title: 'TYR',
          src: 'http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Media%20album%20tiles/tyr_zps8e021095.jpg',
          code: '92505062@N04'
      },
      {
          link: 'team',
          src: 'http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Media%20album%20tiles/team_zpsb0c9bda7.jpg',
          title: 'TEAM',
          code: '92505062@N04'
      },
      {
          link: 'history',
          title: 'HISTORY',
          src: 'http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Media%20album%20tiles/history_zps706fc5b9.jpg',
          code: '92505062@N04'
      },
      {
          link: 'brand',
          title: 'BRAND RESOURCES',
          src: 'http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Media%20album%20tiles/brand_zps8338fb76.jpg',
          code: '92505062@N04'
      }
      ];
      return albums;
  };
}]);
window.app.factory('getAlbum', ['albumService', function (albumService) {
  return function (link) {
    var albums = albumService();
    var album = {};
    albums.forEach(function (obj) {
      if (obj.link === link) { album = obj; }
    });
    return album;
  };
}]);

window.app.factory('getName', [function () {
  return function (link) {
    return link.replace('-',' ');
  };
}]);
