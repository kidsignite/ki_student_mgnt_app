// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  //   .state('app', {
  //   url: '/app',
  //   abstract: true,
  //   templateUrl: 'templates/menu.html',
  //   controller: 'AppCtrl'
  // })

  // .state('app.search', {
  //   url: '/search',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/search.html'
  //     }
  //   }
  // })

  // .state('app.home', {
  //     url: '/home',
  //     views: {
  //       'menuContent': {
  //         templateUrl: 'templates/home.html'
  //       }
  //     }
  //   })
  //   // .state('app.playlists', {
  //   //   url: '/playlists',
  //   //   views: {
  //   //     'menuContent': {
  //   //       templateUrl: 'templates/playlists.html',
  //   //       controller: 'PlaylistsCtrl'
  //   //     }
  //   //   }
  //   // })
  //   .state('app.sessions', {
  //     url: "/sessions",
  //     views: {
  //         'menuContent': {
  //             templateUrl: "templates/sessions.html",
  //             controller: 'SessionsCtrl'
  //         }
  //     }
  //   })

  // // .state('app.single', {
  // //   url: '/playlists/:playlistId',
  // //   views: {
  // //     'menuContent': {
  // //       templateUrl: 'templates/playlist.html',
  // //       controller: 'PlaylistCtrl'
  // //     }
  // //   }
  // // });
  // .state('app.session', {
  //   url: "/sessions/:sessionId",
  //   views: {
  //       'menuContent': {
  //         templateUrl: "templates/session.html",
  //         controller: 'SessionCtrl'
  //       }
  //     }
  // });

  //  .state('app', {
  //   url: '/app',
  //   abstract: true,
  //   templateUrl: 'templates/menu.html',
  //   controller: 'AppCtrl'
  // })

  .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "templates/facts.html"
        }
      }
    })
    .state('tabs.addClient', {
      url: "/addClient",
      views: {
        'home-tab': {
          templateUrl: "templates/addClient.html"
        }
      }
    })
    .state('tabs.InvoicesMain', {
      url: "/InvoicesMain",
      views: {
        'home-tab': {
          templateUrl: "templates/InvoicesMain.html"
        }
      }
    })
    .state('tabs.addProduce', {
      url: "/addProduce",
      views: {
        'home-tab': {
          templateUrl: "templates/addProduce.html"
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "templates/facts2.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/about.html"
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "templates/nav-stack.html"
        }
      }
    })
    .state('tabs.invoicemenu', {
      url: "/invoicemenu",
      views: {
        'contact-tab': {
          templateUrl: "templates/InvoicesMain.html"
        }
      }
    })
    .state('tabs.producemenu', {
      url: "/producemenu",
      views: {
        'contact-tab': {
          templateUrl: "templates/ProduceMain.html"
        }
      }
    })
    .state('tabs.clientmenu', {
      url: "/clientmenu",
      views: {
        'contact-tab': {
          templateUrl: "templates/ClientsMain.html"
        }
      }
    });



  // if none of the above states are matched, use this as the fallback
  // $urlRouterProvider.otherwise('/app/home');
     $urlRouterProvider.otherwise("/tab/home");

})

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
});
