# ROCKETMAN
### a small step for man a great step for humanity

## INTRO

Single page application, ecommerce like. RocketMan offers space trips, the customer choses destination, vehicle and launchpad through a process guided by select and click 'next'. At the end of the process the customer will see an information page with all the choices and a checkout button in order to purchase the trip.

## STYLES

- MOCKUP ![alt text](https://raw.githubusercontent.com/Robertvera/RocketMan/rama2/docs/RocketMan-wireframe.png "Mockup") 

- HTML AND CSS ![alt text](https://raw.githubusercontent.com/Robertvera/RocketMan/rama2/docs/RocketMan-design.png "HTML AND CSS") 


## APIS

- ROCKETAPI: fetches information from SPACEX API (https://github.com/r-spacex/SpaceX-API)    
- MAPBOX GLS JS API (https://www.mapbox.com/mapbox-gl-js/api/)

## TECHNOLOGIES

- CSS FRAMEWORK: BOOTSTRAP 4
- REACT
- REACT ROUTER
- JASMINE
- MAPBOX GL JS API

## COMPONENTS

* APP
    * ABOUT-US
    * DESTINATIONS
        * VEHICLES
            * ROCKETS
            * CAPSULES
                * DEPARTURES
                    * CHECKOUT
                        * CONFIRMATION

- APP: main component, renderizes.
- ABOUT-US: static page, info about the company. Only shows when clicked.
- DESTINATIONS: first screen, the customer can select from 4 different destinations.
- VEHICLES: second screen, depending on destination choice, this component will render and retrieve different   vehicles, rockets or capsules. Customer selects one of the vehicles for next step.
    - ROCKETS: collection of rockets, info retrieved from the api.
    - CAPSULES: collection of rockets, info retrieved from the api.
- DEPARTURES: third screen, depending on vehicle choice, this component will render and retrieve different launchpads.
- CHECKOUT: fourth screen, will retrieve the information previously selected by the customer and price is added. Click OK to final checkout.
- CONFIRMATION: last screen, confirmation message.

## DEVELOPERS

- [MARIO MONTALBÁN](https://github.com/Monty4)
- [CARLOS DE MIGUEL](https://github.com/cdemiguel)
- [ROBERT VERA](https://github.com/Robertvera)

PLANNING ---> [TRELLO BOARD](https://trello.com/b/Ov4ZKDtL/rocketmanproject)
