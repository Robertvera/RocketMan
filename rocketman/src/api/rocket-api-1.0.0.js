/**
 * Rocket API client.
 *
 * @version 1.0.0
 */

let rocketApi;

(function () {
    
    "use strict";
    const baseUrl = "https://api.spacexdata.com/v2/"
       

    rocketApi = {
        baseUrl,

        call: function (url) {

            return fetch(url)
                .then(res => res.json())
        },
        /**
         * Searches Rockets.
         */

        searchRockets: function () {

            let path = this.baseUrl + "rockets"

            return this.call(path).then(res => {
                return res
            })  
        },

        /**
         * Searches Capsules.
         */
        searchCapsules: function () {

            let path = this.baseUrl + "capsules"

            return this.call(path).then(res => {
                return res
            })
        },
        /**
         * Searches Launchpads.
         */
        searchLaunchpads: function () {

            let path = this.baseUrl + "launchpads"

            return this.call(path).then(res => {
                return res
            })
        },

        /**
         * Searh Rocket By Id
         */

         searchRocketById: function(id) {
            let path = this.baseUrl + "rockets/" + id

            return this.call(path).then(res => {
                return res
            })
         },

         /**
         * Searh Capsula By Id
         */

        searchCapsuleById: function(id) {
            let path = this.baseUrl + "capsules/" + id

            return this.call(path).then(res => {
                return res
            })
         },

         /**
         * Searches Launchpad By Id.
         */
        searchLaunchpadById: function (id) {

            let path = this.baseUrl + "launchpads/" + id

            return this.call(path).then(res => {
                return res
            })
        }
    };
})();

export default rocketApi;