
/////////////// ROCKET DATA ///////////////////


// 'https://api.spacexdata.com/v2/rockets/' + id // id -> falcon1, falcon9
// 'https://api.spacexdata.com/v2/rockets/' + name // name -> Falcon 1, Falcon 9


/////////////// CAPSULE DATA ///////////////////

// 'https://api.spacexdata.com/v2/capsules/' + id // id -> dragon1, 
// 'https://api.spacexdata.com/v2/capsules/' + name  // name -> Dragon 1


// https://api.spacexdata.com/v2/launchpads

///////////////////// Para Rockets y Capsules /////////////////////

// let rockets = {
//     'id': 'falcon9',
//     'name': 'Falcon 9',
//     'type': 'rocket',
//     'cost_per_launch': 61200000,
//     'success_rate_pct': 94,
//     'heght': {
//         "meters": 70,
//         "feet": 229.6
//     },
//     "diameter": {
//         "meters": 3.7
//     },
//     "mass": {
//         "kg": 549054
//     }
// }

// let capsules = {
//     'id': 'dragon1',
//     'name': 'Dragon 1',
//     'type': 'capsule',
//     'cost_per_launch': null,
//     'success_rate_pct': null,
//     "height_w_trunk": {
//         "meters": 7.2
//     },
//     "diameter": {
//         "meters": 3.7
//     },
//     "launch_payload_mass": {
//         "kg": 6000
//     }
// }

// ///////////////////// Para Departures Information /////////////////////

// let launchpads = {
//     "id": "ksc_lc_39a",
//     "full_name": "Kennedy Space Center Historic Launch Complex 39A",
//     "location": {
//         "name": "Cape Canaveral",
//         "region": "Florida",
//         "latitude": 28.6080585,
//         "longitude": -80.6039558,
//         "vehicles_launched": [
//             "Falcon 9",
//             "Falcon Heavy"
//         ],
//         "details": "NASA historic launch pad that launched most of the Saturn V and Space Shuttle missions. Initially for Falcon Heavy launches, it is now launching all of SpaceX east coast missions due to the damage from the AMOS-6 anomaly. After SLC-40 repairs are complete, it will be upgraded to support Falcon Heavy, a process which will take about two months. In the future it will launch commercial crew missions and the Interplanetary Transport System."
//     }
// }


rocketApi.searchRockets(showRockets,showError)



function showRockets(rockets) {

    rockets.forEach(element => {
        console.log(element)
    });
    
        
    
}

