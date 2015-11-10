angular.module('YetiService', []).factory('Yeti', ['$http', function($http) {

    return {
        // Call to GET Yeti API - Only RESTful API wired
        get : function() {
            return $http.get('/api/yeti');
        },


        // *Add addition calls here for POST, PUT and DELETE*
        // Call to POST to add new data using Yeti API - Placeholder, will work if Node RESTful API are wired
        create : function(nerdData) {
            return $http.post('/api/yeti', yetiData);
        },

        // Call to PUT to update data using Yeti API - Placeholder, will work if Node RESTful API are wired
        create : function(nerdData) {
            return $http.put('/api/yeti', yetiData);
        },

        // Call to DELETE data using Yeti API - Placeholder, will work if Node RESTful API are wired
        delete : function(id) {
            return $http.delete('/api/yeti/' + id);
        }
    }

}]);
