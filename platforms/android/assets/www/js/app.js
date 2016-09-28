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
})

.controller('BarcodeCtrl', function($scope, $cordovaBarcodeScanner, $http, $state, $ionicLoading) {

      verifyQRCode(2);

       if(!arr){
           $http.get("https://script.google.com/macros/s/AKfycbwym9Io9DP7VJHlcypXa8bJ-5DhfXr-DzrvMszDkVr548a_bqkW/exec?qrcode="+1, {})
    .success(function (response) {
                if (response.hasError) {
                  console.log("Error")
                } else {
                  console.log("Success")
                 arr = [
                    {
                      "question_text" : "What is your name?"
                    },
                    {
                      "question_text" : "What is your age?"
                    },
                    {
                      "question_text" : "What is your height?"
                    },
                    {
                      "question_text" : "What is your sex?"
                    }
                  ];
               
              
                }

            })
    .error(function (response) {
              console.log("Response error")
              console.log(response)
               
            });
       }             
  document.addEventListener("deviceready", function () {
    //openBarcodeScanner();
  }, false);

  $scope.scanBarcode = function() {
    openBarcodeScanner();
   
  };
  
  $scope.gotoSplash = function() {
    $state.go("splash"); 
  };


   $scope.Questions = function() {
     
     $state.go('QA');
    
  };

  function openBarcodeScanner(){
    $cordovaBarcodeScanner
      .scan()
      .then(function(barcodeData) {
        alert(barcodeData.text);
        verifyQRCode(barcodeData.text);
        // Success! Barcode data is here
      }, function(error) {
        // An error occurred
      });

    // NOTE: encoding not functioning yet
    $cordovaBarcodeScanner
      .encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com")
      .then(function(success) {
        // Success!
      }, function(error) {
        // An error occurred
      });
  }

  //
   function verifyQRCode(qrcode) {

    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });

    $http.get("https://script.google.com/macros/s/AKfycbwym9Io9DP7VJHlcypXa8bJ-5DhfXr-DzrvMszDkVr548a_bqkW/exec?qrcode="+qrcode, {})
    .success(function (response) {

                if (response.hasError) {
                  console.log("Error")
                } else {
                  console.log("Success")

                   $ionicLoading.hide();
                 
                   faq = response.infos;
                   console.log(response.infos);
                   $scope.APIresponse = response.infos;
                   console.log(response);
                  
                  
                }

            })
    .error(function (response) {
              console.log("Response error")
              console.log(response)
               
            });
   };

})

.controller('qaCtrl', function($scope, $http,$state) {
 $scope.rating = {};

  $scope.result = arr[count];
  
  $scope.check = function() {
  rating  = $scope.rating;
   
              if(rate.length == 0){
              if(rate[count]== undefined ){
        
        rate.push({question:arr[count],rate :rating});
        $scope.rating = 0;
         console.log("count : " + count  +"rate : " +rate.length);

        count = count +1 ;
        
        $scope.result = arr[count];

              

              } else{ 
                 
         rate[count].rate = rating ;
         console.log("ok r" +rate[count]);
         count = count +1 ;
                    $scope.result = arr[count];
       

}  
      
    }
              else{
                 if(rate[count]== undefined ){
                rate.push({question:arr[count],rate :rating});
                $scope.rating = 0;
                count = count +1 ;
               console.log("count : " + count+"rate : " +rate.length);
               if(count>arr.length-1){
                console.log("big");
                 $state.go('submit');

              } else{
              $scope.result = arr[count];
              }


                 }

                 else{
                   rate[count].rate = rating ;
                   console.log("ok r" +rate[count]);
                   count = count +1 ;
                    $scope.result = arr[count];
                 }
            
               
              
              }
              
            


       

  console.log(rate);
        
      

  };

  $scope.back = function() {

              if(rate.length == 0){
        $scope.result = arr[count];
                  }
              else{
               if(count<0){
                console.log("low");
               


              } else{
                 count = count -1 ;
                 $scope.rating = 0;
              if(count == -1 ){
                  alert("There is no");
              }else{

console.log(rate[count]);
$scope.rating = rate[count].rate;
                
              }
             
              $scope.result = arr[count];
              }
               
              
              }
              
 // console.log(rate);
   console.log(count);     
      

  };
  
 
});
