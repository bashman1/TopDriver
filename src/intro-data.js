
const introData = [
    {
        id: 1,
        title: "Road Signs & Symbols",
        description: "They help ensure all road users are safe from potential driving hazards",
        img: require("./assets/introduction_signs/road_signs.jpg"),
    },
    {
        id: 2,
        title: "Road Safety Precautions",
        description: "Means, methods and measures aimed at reducing the likelihood road accidents",
        img: require("./assets/introduction_signs/road_rules.jpg"),
    },
    {
        id: 2,
        title: "Practice Quizzes & Test",
        description: "Now get your order delivered at your door steps",
        img: require("./assets/introduction_signs/exam.jpeg"),
    }
]

export default introData;

export const getStarted = [
    {
        id: 1,
        title: "Road Signs & Symbols",
        description: "Learn more about",
        details: [
            {
                id: 1,
                detailsTitle: "a) Warning Signs",
                iconsDescription: [
                    {
                        img: require("./assets/introduction_signs/road_signs/bendleft.png"),
                        text: "Bend Left"
                    },
                    {
                        img: require("./assets/introduction_signs/road_signs/roadnarrowsfromleft.png"),
                        text: "Road Narrows from Left"
                    },
                    {
                        img: require("./assets/introduction_signs/road_signs/slipperyroad.png"),
                        text: "Slippery Roads"
                    }
                ]
            },
            {
                id: 2,
                detailsTitle: "b) Manadatory Road Signs",
                iconsDescription: [
                    {
                        img: require("./assets/introduction_signs/road_signs/noturnright.png"),
                        text: "Bend Left"
                    },
                    {
                        img: require("./assets/introduction_signs/road_signs/noentryforpedestrians.png"),
                        text: "Road Narrows from Left"
                    },
                    {
                        img: require("./assets/introduction_signs/road_signs/roadclosed.png"),
                        text: "Slippery Roads"
                    }
                ]
            },
            {
                id: 3,
                detailsTitle: "c) Information Road Signs",
                iconsDescription: [
                    {
                        img: require("./assets/introduction_signs/road_signs/hospital.png"),
                        text: "Bend Left"
                    },
                    {
                        img: require("./assets/introduction_signs/road_signs/hotel.png"),
                        text: "Road Narrows from Left"
                    },
                    {
                        img: require("./assets/introduction_signs/road_signs/fillingstation.png"),
                        text: "Slippery Roads"
                    }
                ]
            }
        ],
    }
]

export const learnMoreData = [
    {
        id: 1,
        img: require("./assets/basic.png")

    }
]

export const menu = [
    { id: 1, component: "Home", param: "ROAD_SIGNS", navigateTo: "details", indicator: 'HOME_MENU', type: 'community', icon: "car-key", name: "Road Signs" },
    { id: 2, component: "Home", param: "BASIC_THEORY", navigateTo: "details", indicator: 'HOME_MENU', type: 'community', icon: "book", name: "Basic Theory" },
    { id: 3, component: "Home", param: "ROAD_MARKINGS", navigateTo: "icons", indicator: 'HOME_MENU', type: 'community', icon: "white-balance-sunny", name: "Road Markings" },
    { id: 4, component: "Home", param: "TRAFFIC_SIGNALS", navigateTo: "icons", indicator: 'HOME_MENU', type: 'community', icon: "traffic-light", name: "Traffic Signals" },
    { id: 5, component: "Home", param: "QUIZ", navigateTo: "quiz", indicator: 'HOME_MENU', type: 'community', icon: "gavel", name: "Quiz" },
    { id: 6, component: "Home", param: "SETTINGS", navigateTo: "settings", indicator: 'HOME_MENU', type: 'ionic', icon: "settings-sharp", name: "Settings" },
    { id: 7, component: "IconsPage", param: "MANDATORY_SIGNS", navigateTo: "", indicator: 'ROAD_SIGNS', type: 'ionic', icon: "", name: "Mandatory Signs" },
    { id: 8, component: "IconsPage", param: "WARNING_SIGNS", navigateTo: "", indicator: 'ROAD_SIGNS', type: 'ionic', icon: "", name: "Warning Signs" },
    { id: 9, component: "IconsPage", param: "INFORMATION_SIGNS", navigateTo: "", indicator: 'ROAD_SIGNS', type: 'ionic', icon: "", name: "Information Signs" },
    { id: 10, component: "IconsPage", param: "ROADWORKS_SIGNS", navigateTo: "", indicator: 'ROAD_SIGNS', type: 'ionic', icon: "", name: "Roadworks Signs" },
    { id: 11, component: "IconsPage", param: "TRANSERVE_MARKINGS", navigateTo: "", indicator: 'ROAD_SIGNS', type: 'ionic', icon: "", name: "Transerve Markings" },
    { id: 12, component: "IconsPage", param: "OTHER_ROAD_MARKINGS", navigateTo: "", indicator: 'ROAD_SIGNS', type: 'ionic', icon: "", name: "Other Road Markings" },
    { id: 13, component: "ItemList", param: "INTRODUCTION_TO_DRIVING", navigateTo: "", indicator: 'BASIC_THEORY', type: 'ionic', icon: "", name: "Introduction to driving" },
    { id: 14, component: "ItemList", param: "BASIC_MECHANICS", navigateTo: "", indicator: 'BASIC_THEORY', type: 'ionic', icon: "", name: "Basic Mechanics" },
    { id: 15, component: "TheoryDetails", param: "DEFENSIVE_DRIVING", navigateTo: "", indicator: 'BASIC_THEORY', type: 'ionic', icon: "", name: "Defensive Driving" },
    // { id: 12, component: "ItemList", param: "ROADWORK_SIGNS", navigateTo: "", indicator: 'BASIC_THEORY', type: 'ionic', icon: "", name: "Roadworks Signs" },
    { id: 16, component: "TheoryDetails", param: "BASIC_FIRST_AID", navigateTo: "", indicator: 'BASIC_THEORY', type: 'ionic', icon: "", name: "Basic first aid" },
    { id: 17, component: "TheoryDetails", param: "GET_STARTED_WITH_DRIVING", navigateTo: "", indicator: 'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Get started with driving" },
    { id: 18, component: "TheoryDetails", param: "RULES_OF_THE_ROAD", navigateTo: "", indicator: 'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Rules of the road" },
    { id: 19, component: "TheoryDetails", param: "IMPORTANT_CAR_PARTS", navigateTo: "", indicator: 'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Important car parts" },
    { id: 20, component: "TheoryDetails", param: "STEERING_WHEEL_USAGE", navigateTo: "", indicator: 'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Steering wheel usage" },
    { id: 21, component: "TheoryDetails", param: "AUTOMATIC_AND_MANUAL_CARS", navigateTo: "", indicator: 'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Automatic and manual cars" },
    { id: 22, component: "TheoryDetails", param: "SPEED_ON_THE_ROAD", navigateTo: "", indicator: 'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Speed on the road" },
    { id: 23, component: "TheoryDetails", param: "CAR_LIGHTS_AND_WHEN_TO_USE_THEM", navigateTo: "", indicator: 'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Car lights and when to use them" },
    { id: 24, component: "TheoryDetails", param: "ROAD_OFFENSES_AND_PUNISHMENT", navigateTo: "", indicator: 'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Road offenses and punishment" },
    { id: 25, component: "TheoryDetails", param: "IMPORTANT_ROAD_SIGNS_CATEGORIES", navigateTo: "", indicator: 'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Important road signs/categories" },
    { id: 26, component: "TheoryDetails", param: "OTHER_IMPORTANT_ASPECT_ON_THE_ROAD", navigateTo: "", indicator: 'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Other important aspect on the road" },
    { id: 27, component: "TheoryDetails", param: "INTRODUCTION_TO_SIMPLE_MECHANICS", navigateTo: "", indicator: 'BASIC_MECHANICS', type: 'ionic', icon: "", name: "Introduction to simple mechanics" },
    { id: 28, component: "IconsPage", param: "SIMPLE_MECHANICS_EMERGENCY_TOOLS", navigateTo: "", indicator: 'BASIC_MECHANICS', type: 'ionic', icon: "", name: "Simple mechanics emergency tools" },
    { id: 29, component: "TheoryDetails", param: "HOW_TO_FIX_A_CAR_TIRE", navigateTo: "", indicator: 'BASIC_MECHANICS', type: 'ionic', icon: "", name: "How to fix a car tire" },
    { id: 30, component: "TheoryDetails", param: "HOW_TO_JUMPSTART_YOUR_CAR", navigateTo: "", indicator: 'BASIC_MECHANICS', type: 'ionic', icon: "", name: "Jumpstart your car" },
    { id: 31, component: "TheoryDetails", param: "CHANGE_OIL", navigateTo: "", indicator: 'BASIC_MECHANICS', type: 'ionic', icon: "", name: "Change oil" },
    { id: 32, component: "TheoryDetails", param: "REPLACE_BRAKE_PADS", navigateTo: "", indicator: 'BASIC_MECHANICS', type: 'ionic', icon: "", name: "Replace brake pads" },
    { id: 34, component: "TheoryDetails", param: "REPLACE_FILTER", navigateTo: "", indicator: 'BASIC_MECHANICS', type: 'ionic', icon: "", name: "Replace air filter" },
    { id: 35, component: "TheoryDetails", param: "REPLACE_HEADLIGHTS_OR_LIGHTS", navigateTo: "", indicator: 'BASIC_MECHANICS', type: 'ionic', icon: "", name: "Replace headlights or taillights" },
    { id: 36, component: "TheoryDetails", param: "CHANGE_WIPER_BLADES", navigateTo: "", indicator: 'BASIC_MECHANICS', type: 'ionic', icon: "", name: "Change wiper blades" },
    { id: 37, component: "TheoryDetails", param: "CHANGE_THE_BATTERY", navigateTo: "", indicator: 'BASIC_MECHANICS', type: 'ionic', icon: "", name: "Change the battery" },
    { id: 38, name: "Practice Quiz One (164 signs)", indicator: "QUIZ", param: "PRACTICE_QUIZ_1", description: "Have you learnt all the different road signs and symbols, use this quiz to test yourself." },
    { id: 39, name: "Practice Quiz Two A (70 qns)", indicator: "QUIZ", param: "PRACTICE_QUIZ_2A", description: "This quiz covers the general knowledge you should have as a licensed driver." },
    { id: 40, name: "Practice Quiz Two B (70 qns)", indicator: "QUIZ", param: "PRACTICE_QUIZ_2B", description: "This quiz covers the general knowledge you should have as a licensed driver." },
    { id: 41, name: "Practice Quiz Three A (32 qns)", indicator: "QUIZ", param: "PRACTICE_QUIZ_3A", description: "This quiz covers some of different traffic signals and signs that you will meet on the road." },
    { id: 42, name: "Practice Quiz Three B (45 qns)", indicator: "QUIZ", param: "PRACTICE_QUIZ_3B", description: "This quiz covers some of different traffic signals and signs that you will meet on the road." },
]

export const iconImg = [
    { id: 1, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/compulsarycycletrack.png"), name: "Compulsory cycle track" },
    { id: 2, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/compulsarypedestrianfootpath.png"), name: "Compulsory pedestrian footpath" },
    { id: 3, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/compulsoryminimumspeed.png"), name: "Compulsory minimum speed" },
    { id: 4, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/compulsoryparkingforthedisabled.png"), name: "Compulsory parking for disabled" },
    { id: 5, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/compulsorytrackforcattle.png"), name: "Compulsory track for cattle" },
    { id: 6, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/directiontobefollowed.png"), name: "Direction to be followed" },
    { id: 7, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/dontdrinkanddrive.png"), name: "Don't drink and drive" },
    { id: 8, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/dontparkonpavements.png"), name: "Don't park on pavement" },
    { id: 9, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/donttextanddrive.png"), name: "Don't text and drive" },
    { id: 10, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/drivingvehicleslessthandistanceshownisprohibited.png"), name: "Driving vehicle less than " },
    { id: 11, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/endofcompulsoryminimumspeed.png"), name: "End of compulsory minimum speed" },
    { id: 12, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/endofprohibitions.png"), name: "End of prohibitions" },
    { id: 13, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/endofspeedlimit.png"), name: "End of speed limit" },
    { id: 14, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/entryforbbidenformotorcycles.png"), name: "Entry forbidden to motorcycle" },
    { id: 15, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/entryforbbidenforpoweroranimaldrivenvehicles.png"), name: "Entry forbidden for power" },
    { id: 16, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/entryforbiddentoallbicycles.png"), name: "Entry forbbiden for bicycle" },
    { id: 17, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/givepriorityforoncomingvehicles.png"), name: "Priority for on-coming traffic" },
    { id: 18, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/giveway.png"), name: "Give way" },
    { id: 19, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/goaheadonly.png"), name: "Go ahead only" },
    { id: 20, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/keepleft.png"), name: "keep left" },
    { id: 21, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforallvehicles.png"), name: "No entry for all vehicles" },
    { id: 22, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforanimaldrivenvehicles.png"), name: "No entry for animal driven" },
    { id: 23, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforbuses.png"), name: "No entry for buses" },
    { id: 24, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforcommercialvehicles.png"), name: "No entry for commercial" },
    { id: 25, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforfarmvehicles.png"), name: "No entry for farm vehicles" },
    { id: 26, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforhandcarts.png"), name: "No entry for hand carts" },
    { id: 27, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforpedestrians.png"), name: "No entry for pedestrians" },
    { id: 28, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforpowerdrivenvehicles.png"), name: "No entry for power driven vehicles" },
    { id: 29, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforvehiclesexceedinglengthshown.png"), name: "No entry for vehicles exceeding the length" },
    { id: 30, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforanimaldrivenvehicles.png"), name: "Entry forbidden for power" },
    { id: 31, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforvehiclesexceedingthisheight.png"), name: "No entry for vehicles exceeding the height" },
    { id: 32, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforanimaldrivenvehicles.png"), name: "Entry forbidden for power" },
    { id: 33, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforvehiclesexceedingthisweight.png"), name: "No entry for vehicles exceeding the weight" },
    { id: 34, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforvehiclesexceedingthiswidth.png"), name: "No entry for vehicles exceeding the width" },
    { id: 35, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforvehiclesexceedingweightshownononecode.png"), name: "No entry for vehicles exceeding the weight" },
    { id: 36, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noovertakingofgoodsvehicles.png"), name: "No overtaking goods vehicles" },
    { id: 37, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noparking.png"), name: "No parking" },
    { id: 38, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/nostoppingforanyreason.png"), name: "No stopping for any reasons" },
    { id: 39, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noturnleft.png"), name: "No left turn" },
    { id: 40, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noturnright.png"), name: "No right turn" },
    { id: 41, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/no_uturn.png"), name: "No U turn" },
    { id: 42, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/overtakingofvehiclesisprohibited.png"), name: "Overtaking is prohibited" },
    { id: 43, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/passeitherside.png"), name: "Pass ether sides" },
    { id: 44, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/roadclosed.png"), name: "Road closed" },
    { id: 45, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/roundabout.png"), name: "Round About" },
    { id: 46, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/soundingofhornsirensprohibited.png"), name: "No sounding of horn sirens" },
    { id: 47, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/speedlimit.png"), name: "Speed limit" },
    { id: 48, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/stopatcontrolpost.png"), name: "Stop at control post" },
    { id: 49, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/stopchildrencrossing.png"), name: "Stop children crossing" },
    { id: 50, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/turnleftahead.png"), name: "Turn left ahead" },
    { id: 51, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/turnrightahead.png"), name: "Turn right ahead" },
    { id: 52, indicator: 'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/vehiclestravelstrightorturnright.png"), name: "Vehicle travel straight or turn" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/airport.png"), name: "Airpot" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/breakdownservice.png"), name: "Break down service" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/busstop.png"), name: "Bus stop" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/campingorcaravansite.png"), name: "Camping or caravan site" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/campsite.png"), name: "Camp site" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/caravansite.png"), name: "Caravan site" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/controlledparkingzone.png"), name: "Controlled parking" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/endofextralane.png"), name: "End of Extra lane" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/endoffreewaymotorway.png"), name: "End of freeway  motorway" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/endofmeterzone.png"), name: "End of meter zone" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/endofpriorityroad.png"), name: "End of priority road" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/ferry.png"), name: "Ferry" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/fillingstation.png"), name: "Filling station" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/firstaid.png"), name: "First Aid" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/freeway.png"), name: "Free motorway" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/hospital.png"), name: "Hospital" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/hotel.png"), name: "Hotel" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/hump.png"), name: "Hump" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/information.png"), name: "Information" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/noroadthrough.png"), name: "No road through" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/nothroughroad.png"), name: "No through road straight" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/nothroughroadontheleft.png"), name: "No through road on the left" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/nothroughroadontheright.png"), name: "No through road on the right" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/nothroughroadstraightahead.png"), name: "No through road straight ahead" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/onewayroad.png"), name: "One way road" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/parking.png"), name: "Parking" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/pedestrianscrossing.png"), name: "Pedestrians Crossing" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/policestation.png"), name: "Police station" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/priorityoveroncomingvehicles.png"), name: "Priority over coming vechicles" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/priorityroad.png"), name: "Priority Road" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/refreshment.png"), name: "Refreshment" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/restarea.png"), name: "Rest Area" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/restaurant.png"), name: "Restaurant" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/telephone.png"), name: "Telephone" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/workshop.png"), name: "Workshop" },
    { id: 52, indicator: 'INFORMATION_SIGNS', img: require("./assets/information_signs/zebracrossing.png"), name: "Zebra Crossing" },
    { id: 52, indicator: 'ROADWORKS_SIGNS', img: require("./assets/roadwork_signs/barricade.png"), name: "Barricade, No entry" },
    { id: 52, indicator: 'ROADWORKS_SIGNS', img: require("./assets/roadwork_signs/changelane.png"), name: "Change Lane" },
    { id: 52, indicator: 'ROADWORKS_SIGNS', img: require("./assets/roadwork_signs/laneclosed.png"), name: "Lane Closed" },
    { id: 52, indicator: 'ROADWORKS_SIGNS', img: require("./assets/roadwork_signs/roadworks.png"), name: "Roadworks" },
    { id: 52, indicator: 'ROADWORKS_SIGNS', img: require("./assets/roadwork_signs/trafficcontrolahead.png"), name: "Traffic control ahead" },
    { id: 52, indicator: 'TRANSERVE_MARKINGS', img: require("./assets/transerve_markings/singleuncontrolled.png"), name: "Single Uncontrolled" },
    { id: 52, indicator: 'TRANSERVE_MARKINGS', img: require("./assets/transerve_markings/stopline.png"), name: "Stop Line" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/centrelaneguiding.png"), name: "Centre lane marking" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/centrelinemarking.png"), name: "Centre lane marking" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/chevronmarkingdiverging.png"), name: "Chevron marking" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/chevronmarkingemerging.png"), name: "Chevron marking" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/deflectionarrowmoveinthedirectionofthearrow.png"), name: "Deflection arrow-move in" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/divergearrowaheadofleftturnlane.png"), name: "Diverge arrow ahad of left" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/divergearrowaheadofrightturnlane.png"), name: "Diverge arrow ahad of right" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/give_way1.jpg"), name: "Give way to traffic" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/give_way2.jpg"), name: "Give way to traffic" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/give_way3.jpg"), name: "Give way to traffic" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/give_way4.jpg"), name: "Stop line at signals or police" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/give_way5.jpg"), name: "Stop line for pedestrians" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/give_way6.jpg"), name: "Stop line for pedestrians" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/give_way7.jpg"), name: "A borken white line marks" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/give_way8.jpg"), name: "Longer broken white lines" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/give_way9.jpg"), name: "Double solid white lines" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/give_way10.jpg"), name: "If travelling in the left-hand" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/giveway.png"), name: "Give way" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/lanearrowaheadonly.png"), name: "Lane arrow ahead only" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/lanearrowaheadorturnleft.png"), name: "Lane arrow ahead or turn left" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/lanearrowaheadorturnright.png"), name: "Lane arrow ahead or turn right" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/lanearrowturnleft.png"), name: "Lane arrow turn left" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/lanearrowturnright.png"), name: "Lane arrow turn right" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/lanemarkingdualormulti.png"), name: "Lane marking Dual/Multi" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/parkingbay.png"), name: "Parking bay" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/Picture%201.png"), name: "Stop" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/solidline.png"), name: "Solid line-No crossing" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/speedlimitmarking.png"), name: "Speed limit marking" },
    { id: 52, indicator: 'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/stop.png"), name: "Stop" },
    { id: 52, indicator: 'ROAD_MARKINGS', img: require("./assets/road_markings/brokenline.png"), name: "Broken Driving Line (You may" },
    { id: 52, indicator: 'ROAD_MARKINGS', img: require("./assets/road_markings/climbinglane.png"), name: "Climbing lane a) slow moving" },
    { id: 52, indicator: 'ROAD_MARKINGS', img: require("./assets/road_markings/continousandbrokendividingline.png"), name: "Continous and broken driving" },
    { id: 52, indicator: 'ROAD_MARKINGS', img: require("./assets/road_markings/continousdividingline.png"), name: "Continous Driving Line" },
    { id: 52, indicator: 'ROAD_MARKINGS', img: require("./assets/road_markings/continuityline.png"), name: "Continuity Line (Marks the edge)" },
    { id: 52, indicator: 'ROAD_MARKINGS', img: require("./assets/road_markings/doublecontinousdividingline.png"), name: "Double Continuous" },
    { id: 52, indicator: 'ROAD_MARKINGS', img: require("./assets/road_markings/noparking.png"), name: "No parking Line" },
    { id: 52, indicator: 'ROAD_MARKINGS', img: require("./assets/road_markings/standardedgeline.png"), name: "Standard Edge line" },
    { id: 52, indicator: 'ROAD_MARKINGS', img: require("./assets/road_markings/zigzagline.png"), name: "ZIG ZAG Marking" },
    { id: 53, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/beginningofdualcarriageroad.png"), name: "Road widens ahead" },
    { id: 54, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/bendleft.png"), name: "Bend left" },
    { id: 55, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/bendright.png"), name: "Bend right" },
    { id: 56, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/carriagewaynarrowsbothsides.png"), name: "Carriage way narrows both" },
    { id: 57, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/cattlecrossingahead.png"), name: "Cattle crossing ahead" },
    { id: 58, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/childrencrossing.png"), name: "Children crossing" },
    { id: 59, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/crossingwind.png"), name: "Crossing wind" },
    { id: 60, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/cyclist.png"), name: "Cyclist" },
    { id: 61, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/dangeroffallingrocksahead.png"), name: "Danger of falling rocks" },
    { id: 62, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/electriccablesahead.png"), name: "Electric cable" },
    { id: 63, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/endofdualcarriageroad.png"), name: "End of dual carriage road" },
    { id: 64, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/ferryahead.png"), name: "Ferry ahead" },
    { id: 65, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/give_way.png"), name: "Give way" },
    { id: 66, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/hazardahead.png"), name: "Hazard ahead" },
    { id: 67, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/humbbridgeahead.png"), name: "Hump bridge ahead" },
    { id: 68, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/junctionahead.png"), name: "Junction ahead stop" },
    { id: 69, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/junctionaheadofaccelerationlanewithroadfromtherigh.png"), name: "Junction ahead of acceleration" },
    { id: 70, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/loosesurfaceroads.png"), name: "Loose surface road" },
    { id: 71, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/lowflyingaircraftcrossingahead.png"), name: "Lower flying aircraft" },
    // { id: 72, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/men_at_work.png"), name: "Road work ahead" },
    { id: 73, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/minorroadfromleft.png"), name: "Minor road road left" },
    { id: 74, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/minorroadfromright.png"), name: "Minor road right" },
    { id: 75, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/narrowbridgeahead.png"), name: "Narrow bridge ahead" },
    { id: 76, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/pedestrianscrossing.png"), name: "Pedestrians crossing" },
    { id: 77, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/railwaycrossingwithbarriers.png"), name: "Railway crossing with barrier" },
    { id: 78, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/railwaycrossingwithoutbarriers.png"), name: "Railway crossing without barrier" },
    { id: 79, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/riverbank.png"), name: "River bank" },
    { id: 80, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/riverbendcrossingahead.png"), name: "River bend crossing" },
    { id: 81, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/roadjunctionahead.png"), name: "Road junction ahead" },
    { id: 82, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/roadnarrowsfromleft.png"), name: "Narrow road left" },
    { id: 83, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/roadnarrowsfromright.png"), name: "Narrow road right" },
    { id: 84, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/roadwidensahead.png"), name: "Road widens ahead" },
    { id: 85, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/roadworksahead.png"), name: "Road works ahead" },
    { id: 86, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/roundaboutahead.png"), name: "Round about" },
    { id: 87, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/severebumpahead.png"), name: "Severe hump ahead" },
    { id: 88, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/severedipahead.png"), name: "Severe dipa ahead" },
    { id: 89, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/slipperyroad.png"), name: "Slippery road" },
    { id: 90, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/steepascentahead.png"), name: "Steep ascent head" },
    { id: 91, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/steepdecentahead.png"), name: "Steep descent head" },
    { id: 92, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/stop.png"), name: "Stop" },
    { id: 93, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/successivebendtotheleft.png"), name: "Successive bend left" },
    { id: 94, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/successivebendtotheright.png"), name: "Successive bend right" },
    { id: 95, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/t-junctionahead.png"), name: "T-junction ahead" },
    { id: 96, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/trafficjam.png"), name: "Traffic jam" },
    { id: 97, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/trafficlightsignalahead.png"), name: "Traffic lights ahead" },
    { id: 98, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/twowaytrafficahead.png"), name: "Two way trafic head" },
    { id: 99, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/unevenroadsurfaceahead.png"), name: "Uneven road surface ahead" },
    { id: 100, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/wildaninalscrossing.png"), name: "Game park ahead" },
    { id: 101, indicator: 'WARNING_SIGNS', img: require("./assets/warning_signs/yintersectionahead.png"), name: "Y-intersection ahead" },
    { id: 102, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/alternateright_bike.png"), name: "ht" },
    { id: 103, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/ambulance.png"), name: "ht" },
    { id: 104, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/arrowdirection.png"), name: "ht" },
    { id: 105, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/breakdownservice.png"), name: "ht" },
    { id: 106, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/firebrigade.png"), name: "ht" },
    { id: 107, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/frontandbehindstop.png"), name: "ht" },
    { id: 108, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/green.png"), name: "ht" },
    { id: 109, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/greenyescross.png"), name: "ht" },
    { id: 110, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/leftindicator.png"), name: "ht" },
    { id: 111, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/motorbikeslowdown.png"), name: "ht" },
    { id: 112, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/motorbiketurningright.png"), name: "ht" },
    { id: 113, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/motorbiketurnleft.png"), name: "ht" },
    { id: 114, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/orange.png"), name: "ht" },
    { id: 115, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/policelight.png"), name: "ht" },
    { id: 116, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/red.png"), name: "ht" },
    { id: 117, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/redflashing.png"), name: "ht" },
    { id: 118, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/redlights.png"), name: "ht" },
    { id: 119, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/rednocross.png"), name: "ht" },
    { id: 120, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/rightindicator.png"), name: "ht" },
    { id: 121, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/sidevehiclescome.png"), name: "ht" },
    { id: 122, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/slowdown_car.png"), name: "ht" },
    { id: 123, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/stop_bike.png"), name: "ht" },
    { id: 124, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/taxservice.png"), name: "ht" },
    { id: 125, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/turningleft_bike.png"), name: "ht" },
    { id: 126, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/turningleftgo.png"), name: "ht" },
    { id: 127, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/turningright_bike.png"), name: "ht" },
    { id: 128, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/turningrightgo.png"), name: "ht" },
    { id: 129, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/turnleft_car.png"), name: "ht" },
    { id: 130, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/turnright_car.png"), name: "ht" },
    { id: 131, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/vehiclesbehindstop.png"), name: "ht" },
    { id: 132, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/vehiclesfrombehindcome.png"), name: "ht" },
    { id: 133, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/vehiclesfromfrontcome.png"), name: "ht" },
    { id: 134, indicator: 'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/vehiclesfromfrontstop.png"), name: "ht" },

    { id: 134, indicator: 'SIMPLE_MECHANICS_EMERGENCY_TOOLS', img: require("./assets/simple_mechanics/first_aid.png"), name: "First aid kit" },
    { id: 134, indicator: 'SIMPLE_MECHANICS_EMERGENCY_TOOLS', img: require("./assets/simple_mechanics/flashlight.png"), name: "Flash light" },
    { id: 134, indicator: 'SIMPLE_MECHANICS_EMERGENCY_TOOLS', img: require("./assets/simple_mechanics/sparetire.png"), name: "Spare tire" },
    { id: 134, indicator: 'SIMPLE_MECHANICS_EMERGENCY_TOOLS', img: require("./assets/simple_mechanics/car_jack.jpg"), name: "Car jack" },
    { id: 134, indicator: 'SIMPLE_MECHANICS_EMERGENCY_TOOLS', img: require("./assets/simple_mechanics/jumper_cables.png"), name: "Jumper cable" },
    { id: 134, indicator: 'SIMPLE_MECHANICS_EMERGENCY_TOOLS', img: require("./assets/simple_mechanics/tow_rope.png"), name: "Tow ropes" },
    { id: 134, indicator: 'SIMPLE_MECHANICS_EMERGENCY_TOOLS', img: require("./assets/simple_mechanics/firestop.png"), name: "Fire extiguisher" },
    { id: 134, indicator: 'SIMPLE_MECHANICS_EMERGENCY_TOOLS', img: require("./assets/simple_mechanics/car_repair.png"), name: "Gloves" },
    { id: 134, indicator: 'SIMPLE_MECHANICS_EMERGENCY_TOOLS', img: require("./assets/simple_mechanics/spanner.png"), name: "Spanner" },
    { id: 134, indicator: 'SIMPLE_MECHANICS_EMERGENCY_TOOLS', img: require("./assets/simple_mechanics/war_tri.png"), name: "Warning triangle" },
    { id: 134, indicator: 'SIMPLE_MECHANICS_EMERGENCY_TOOLS', img: require("./assets/simple_mechanics/duct_tape.png"), name: "Duct tape" },

];



export const quiz = [
    {
        id: 1,
        indicator: "PRACTICE_QUIZ_1",
        score: 0,
        qtnsList: [
            {
                qtnNo: "Q1.",
                question: "Who is a driver?",
                correctAnswer: "A",
                suggestions: [
                    { id: 2, objective: "B", option: "A person who knows how operates a vehicle on the road." },
                    { id: 3, objective: "C", option: "A person who is willing to learn how to operates a vehicle." },
                    { id: 4, objective: "D", option: "All of the above." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q2.",
                question: "When crossing at a Zebra crossing as a pedestrian you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "Walk straight across, but keep looking both ways and listen" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q3.",
                question: "When crossing at a Zebra crossing as a pedestrian you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "Walk straight across, but keep looking both ways and listen" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q4.",
                question: "When crossing at a Zebra crossing as a pedestrian you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "Walk straight across, but keep looking both ways and listen" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q5.",
                question: "When crossing at a Zebra crossing as a pedestrian you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "Walk straight across, but keep looking both ways and listen" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q6.",
                question: "When crossing at a Zebra crossing as a pedestrian you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "Walk straight across, but keep looking both ways and listen" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q7.",
                question: "When crossing at a Zebra crossing as a pedestrian you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "Walk straight across, but keep looking both ways and listen" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q8.",
                question: "When crossing at a Zebra crossing as a pedestrian you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "Walk straight across, but keep looking both ways and listen" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q9.",
                question: "When crossing at a Zebra crossing as a pedestrian you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "Walk straight across, but keep looking both ways and listen" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q10.",
                question: "When crossing at a Zebra crossing as a pedestrian you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "Walk straight across, but keep looking both ways and listen" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q10.",
                question: "When crossing at a Zebra crossing as a pedestrian you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "Walk straight across, but keep looking both ways and listen" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q11.",
                question: "When crossing at a Zebra crossing as a pedestrian you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "Walk straight across, but keep looking both ways and listen" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q12.",
                question: "When crossing at a Zebra crossing as a pedestrian you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "Walk straight across, but keep looking both ways and listen" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q13.",
                question: "When crossing at a Zebra crossing as a pedestrian you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "Walk straight across, but keep looking both ways and listen" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q14.",
                question: "When crossing at a Zebra crossing as a pedestrian you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "Walk straight across, but keep looking both ways and listen" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q15.",
                question: "When crossing at a Zebra crossing as a pedestrian you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "Walk straight across, but keep looking both ways and listen" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q16.",
                question: "When crossing at a Zebra crossing as a pedestrian you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "Walk straight across, but keep looking both ways and listen" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q17.",
                question: "When crossing at a Zebra crossing as a pedestrian you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "Walk straight across, but keep looking both ways and listen" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q18.",
                question: "When crossing at a Zebra crossing as a pedestrian you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "Walk straight across, but keep looking both ways and listen" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q19.",
                question: "When crossing at a Zebra crossing as a pedestrian you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "Walk straight across, but keep looking both ways and listen" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            }

        ]
    },

    {
        id: 2,
        indicator: "PRACTICE_QUIZ_2A",
        score: 0,
        qtnsList: [
            {
                qtnNo: "Q1.",
                question: "Who is a driver?",
                correctAnswer: "A",
                suggestions: [
                    { id: 2, objective: "B", option: "A person who knows how operates a vehicle on the road." },
                    { id: 3, objective: "C", option: "A person who is willing to learn how to operates a vehicle." },
                    { id: 4, objective: "D", option: "All of the above." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q2.",
                question: "What is the RULE of the road in Uganda?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Always keep right" },
                    { id: 2, objective: "B", option: "Always keep left" },
                    { id: 3, objective: "C", option: "Drive both sides" },
                    { id: 4, objective: "D", option: "Non of the above." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q3.",
                question: "On which side do we overtake another vehicle?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "In the Middle " },
                    { id: 2, objective: "B", option: "Left Side" },
                    { id: 3, objective: "C", option: "Right Side" },
                    { id: 4, objective: "D", option: "Any Side" },
                ],
                selectedObjective: ""

            }, {
                qtnNo: "Q4.",
                question: "When can you overtake from the LEFT?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "When the vehicle in front is turning right and there is space on the left. Bevery careful in such action." },
                    { id: 2, objective: "B", option: "When there is an accident and the only place you can overtake is Left." },
                    { id: 3, objective: "C", option: "Never Overtake ON the Left" },
                    { id: 4, objective: "D", option: "1 and 2" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q5.",
                question: "How many seconds does a yellow light last?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "2 - 5 seconds" },
                    { id: 2, objective: "B", option: "4 - 7 seconds" },
                    { id: 3, objective: "C", option: "3 - 6 seconds" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q6.",
                question: "Who is a pedestrian?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "A person riding a motorcycle" },
                    { id: 2, objective: "B", option: "Road users a foot" },
                    { id: 3, objective: "C", option: "Anyone driving" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q7.",
                question: "Name three documents which must ne valid before you are allowed to drive?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Valid driving license" },
                    { id: 2, objective: "B", option: "valid insurance certificate" },
                    { id: 3, objective: "C", option: "Valid vehicle inspection certificate" },
                    { id: 3, objective: "D", option: "All of the Above" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q8.",
                question: "What important tools must you carry when driving for a safari?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Spare tyre, Car jack, whistle" },
                    { id: 2, objective: "B", option: "Car jack, Flash light, Spare tyre" },
                    { id: 3, objective: "C", option: "Flash light, whistle" },
                    { id: 3, objective: "D", option: "None of the Above" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q9.",
                question: "How many eyes does a driver have?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Two" },
                    { id: 2, objective: "B", option: "Four" },
                    { id: 3, objective: "C", option: "Three" },
                    { id: 3, objective: "D", option: "One" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q10.",
                question: "If you get a flat tire while driving you should",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Turn on your hazard lights and drive a service station" },
                    { id: 2, objective: "B", option: "Keep the steering wheel straight, slow down, and pull over" },
                    { id: 3, objective: "C", option: "Speed up untill you find a sage exit" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q11.",
                question: "What is a Clearway?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "All vehicles are free to go through" },
                    { id: 2, objective: "B", option: "An area in which stopping and nparking is prohibited, (except by buses or tazxis) for a period indicated on the Clearway signpost" },
                    { id: 3, objective: "C", option: "Speed up untill you find a safe place to park" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q12.",
                question: "If you intend to turn left, are you required to give a signal",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "No, if arrows are marked on the roadway" },
                    { id: 2, objective: "B", option: "No, if turning left from a lane marked left turn only" },
                    { id: 3, objective: "C", option: "Yes, if turn signals are fitted to your vechicle" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q13.",
                question: "Do you have any responsibilities when opening a vechicle door on a roadway?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "No, any following traffic must stop if the door interferes with its progress." },
                    { id: 2, objective: "B", option: "No, there is no regulation to cover this situation." },
                    { id: 3, objective: "C", option: "Yes, you must not open a door if you are likely to cause danger to road users or impede traffic." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q14.",
                question: "Is it an offence to obstruct clear vision of your number plates",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Yes, but is is legal for a towbar or bicycle rack to cover the reat number plate." },
                    { id: 2, objective: "B", option: "No, you are allowed to cover your numberb plates if you want to" },
                    { id: 3, objective: "C", option: "Yes, at any time" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q15.",
                question: "Before driving on a freeway, which of the following should you do?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Take someting to calm your nervers before driving." },
                    { id: 2, objective: "B", option: "Make sure your vechicle has enough fuel, oil, water and ther correct tyre pressure." },
                    { id: 3, objective: "C", option: "Take your street directly in case you get lost" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q16.",
                question: "If you see a sign indicating road repairs are going on, you should -",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Maintain ther same speed." },
                    { id: 2, objective: "B", option: "Slow down and watch for traffic controllers and instructions." },
                    { id: 3, objective: "C", option: "Stop immediately and wait for instructions." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q17.",
                question: "Are you required to carry your driver's licence with you every time you drive?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Yes." },
                    { id: 2, objective: "B", option: "No it is only needed on long trips." },
                    { id: 3, objective: "C", option: "No, being licensed is enough." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q18.",
                question: "If you are driving towards a road works zone and a traffic controller displays a stop sign you must -",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Stop your vehicle and follow the directions of the traffic controller." },
                    { id: 2, objective: "B", option: "Stop and then proceed if you think it is safe." },
                    { id: 3, objective: "C", option: "Slow down and continue through the road works zone." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q19.",
                question: "Do bicyle riders have the same rights and responsibilities as drivers and motorycyle riders? and a traffic controller displays a stop sign you must -",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "No, they must always ride on the footpath." },
                    { id: 2, objective: "B", option: "Yes." },
                    { id: 3, objective: "C", option: "Nno, they must give way to cards at all times when riding on the road." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q20.",
                question: "Before getting our of your vehicle you must?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Check your seatbelt is back in place." },
                    { id: 2, objective: "B", option: "Check your mirrors and blind spots for pedestrians, bicyles or others vehicles." },
                    { id: 3, objective: "C", option: "Check your headlights are turned off." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q21.",
                question: "Before driving a long distance at a fast speed or carrying a full car load, you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Have a large meal and cup of coffee to stay alert." },
                    { id: 2, objective: "B", option: "Check your tyre pressure, and if necessary, increase it to what the manufacturer recommends." },
                    { id: 3, objective: "C", option: "Make sure you have a map so that you know where you are going." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q22.",
                question: "If youare involved in an accident where your car needs to be towed away  but the police doesn't attend the crash scene?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Must report the accident to the police station nearest to where the accident." },
                    { id: 2, objective: "B", option: "Do not report the accident to the police." },
                    { id: 3, objective: "C", option: "Only need to report to the police if someone was injured." },
                ],
                selectedObjective: ""

            }, {
                qtnNo: "Q23.",
                question: "When should you use your right hand indicator?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "When you intend to slow down." },
                    { id: 2, objective: "B", option: "When you are about to stop." },
                    { id: 3, objective: "C", option: "When you intent to tuen right at anytime." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q24.",
                question: "Are you permitted to tow a caravan with a person riding in the caravan?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Yes provided you do not exceed 60km/hr." },
                    { id: 2, objective: "B", option: "No, not under any circumstances." },
                    { id: 3, objective: "C", option: "Yes, if the person(s) in the caravan are over 12 years of age." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q25.",
                question: "You are driving at night with your headlights on high beam. When should you dip your headlights?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "When within 200 metres of an oncoming vehicle only." },
                    { id: 2, objective: "B", option: "When within 200 metres of the vehicle a head or an oncoming one." },
                    { id: 3, objective: "C", option: "Never, you are allowed to drive with your lights on high beam at all times." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q26.",
                question: "If you see a sign indicating road repairs are going on, you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Slow down immediatelyy and wait for instructions." },
                    { id: 2, objective: "B", option: "Maintain the same speed." },
                    { id: 3, objective: "C", option: "Slow down and watch for traffic controllers and instructions." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q27.",
                question: "Whenn driving at sunset or dawn on a dark day, what should you do?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Turn on your lights on low beam." },
                    { id: 2, objective: "B", option: "Keep your sun glasses on to cut down heading glare." },
                    { id: 3, objective: "C", option: "Turn on your hazard warning lights." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q28.",
                question: "If you see a horse and rider on the road, what should you do?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Sound your horn to warn the rider." },
                    { id: 2, objective: "B", option: "Slow down and give them plenty of room." },
                    { id: 3, objective: "C", option: "Speed up tp pass the horse." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q29.",
                question: "If you vehicle is involved in an accident and a person is injured what should you do?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Render every assitance and take immediate steps to have an ambulance notified, then call the police." },
                    { id: 2, objective: "B", option: "Only call the police if the accident also resulted in over 500 Gollars worth of propery damege." },
                    { id: 3, objective: "C", option: "Report the accident to the police within seven days." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q31.",
                question: "You are approaching the top of a hill on a narrow road, the safest procedure is to?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Keep to the left and slow down." },
                    { id: 2, objective: "B", option: "Flash your headlights to warn oncoming traffic." },
                    { id: 3, objective: "C", option: "Increase your speed and sound your horn." },
                    { id: 4, objective: "D", option: "All of the Above." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q32.",
                question: "When driving near parked vehicles, you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Stop, if you se a car with its right-indicator on." },
                    { id: 2, objective: "B", option: "Sound your horn and flash our headlights to warn drivers not to pull out." },
                    { id: 3, objective: "C", option: "Check for parked vehicles with turn signals on, or children about to step out." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q33.",
                question: "On a single laned road, you are allowed to overtake another vehicle on its right except when?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "You are travelling at more than 80km/hr" },
                    { id: 2, objective: "B", option: "The other vehicle is going slower than you." },
                    { id: 3, objective: "C", option: "The other vehicle is turning right." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q34.",
                question: "When entering or leaving a drive you must?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give way to bicycles, vehicles and pedestrians" },
                    { id: 2, objective: "B", option: "Blow your horn to warn other road users." },
                    { id: 3, objective: "C", option: "Stop and give way only to vehicles." },
                    { id: 4, objective: "D", option: "Increase speed to overtake other vehicles." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q35.",
                question: "A driver behind you signals their intention to overtake your car. What should you do?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Speed up so that the driver will not have to overtake you" },
                    { id: 2, objective: "B", option: "Signal the driver to remain behind you if it is travelling to fast.." },
                    { id: 3, objective: "C", option: "Keep to the left and let the driver overtake you.." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q36.",
                question: "If you are not sure you have enough distance to overtake a vehicle ahead, you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Put the vehicle in a lower gear and speed up" },
                    { id: 2, objective: "B", option: "Wait for a better opportunity with more distance to overtake." },
                    { id: 3, objective: "C", option: "Sound your horn to signal the driver ahead to slow down." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q37.",
                question: "If you are convicted for driving under the influence of alcohol, you could loose your drivers licence. You may also?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Be restricted to driving an automatic vehicle" },
                    { id: 2, objective: "B", option: "Have a personal speed limit imposed on you." },
                    { id: 3, objective: "C", option: "Be sent to prison." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q38.",
                question: "If you are caught over speeding in a road works zone, you will?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Be liable for a speeding fine." },
                    { id: 2, objective: "B", option: "Receive a warning letter in the mail." },
                    { id: 3, objective: "C", option: "Not receive any penalty as road works speed limits are only advisory." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q39.",
                question: "Which statement is true?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "You must give way to pedestrians only at marked crossings." },
                    { id: 2, objective: "B", option: "Pedestrians have no special rights on the roads." },
                    { id: 3, objective: "C", option: "You must give way to pedestrians if there is any danger of hitting them." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q40.",
                question: "If elderly people or children are on the pedestrian crossing you will probably need to?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Drive around them so you dont hold up traffic." },
                    { id: 2, objective: "B", option: "Wait extra time to allow them to cross safely" },
                    { id: 3, objective: "C", option: "Sound your horn to hurry them up." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q41.",
                question: "When driving near children playing or walking near the edge of the road?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Continue at same speed and drive around them." },
                    { id: 2, objective: "B", option: "Slow down and be ready to make a safe stop." },
                    { id: 3, objective: "C", option: "Sound your horn to warn them of your presence" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q42.",
                question: "When driving in wet weather, you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Drive in the middle of the road to avoid splashing pedestrians on the foot path." },
                    { id: 2, objective: "B", option: "Watch out for pedestrians, who may hurry and take risks." },
                    { id: 3, objective: "C", option: "Stop and help aged pedestrians acress the road." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q43.",
                question: "If you hold a learner or provisional license class what is the Blood Alcohol Concentration limit?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Zero." },
                    { id: 2, objective: "B", option: "0.02." },
                    { id: 3, objective: "C", option: "0.05." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q44.",
                question: "If you are taking several medications and you want to drive?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Ask your doctor if the combination of drugs will make it dangerous to drive." },
                    { id: 2, objective: "B", option: "Drive carefully around your local streets to see if you are affected." },
                    { id: 3, objective: "C", option: "Ask your passengers to let you know if you are not driving as well as you should." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q45.",
                question: "Is it an offence to refuse to take a POLICE breath test?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "No, if you are a learner driver" },
                    { id: 2, objective: "B", option: "No, if you say you havent been drinking alcohol" },
                    { id: 3, objective: "C", option: "Yes always." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q46.",
                question: "During pre-trip inspection, a daily walk-round check includes:",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Items which are checked when the driver is inside a vehicle" },
                    { id: 2, objective: "B", option: "Items which are checked when the driver is outside a vehicle" },
                    { id: 3, objective: "C", option: "Items which are checked when the driver is within a vehicle" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q47.",
                question: "Which of the following actions does NOT damage the road?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Blocking the road drains" },
                    { id: 2, objective: "B", option: "Letting waste water or farm water flow over the road" },
                    { id: 3, objective: "C", option: "Under loading the vehicle" },
                    { id: 4, objective: "D", option: "Spilling diesel or oil on the road" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q48.",
                question: "When crossing at a Zebra crossing as a pedestrian you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "Walk straight across, but keep looking both ways and listen" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q50.",
                question: 'Which of the following statements clearly describes Group/ class "B" driving license in uganda?',
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "These are small cars" },
                    { id: 2, objective: "B", option: "These are the small trucks that carry 2 tons of load and the small cars that carry 4 passengers" },
                    { id: 3, objective: "C", option: "These are motor vehicles that carry up to 3500kg and carry not more than 7 passengers including the driver" },
                    { id: 4, objective: "D", option: "Motor vehicles, having a permissible maximum mass not exceeding 3500kg and not more than 8 seats in" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q51.",
                question: "Orange/yellow warning lights on the dash board means:",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "The vehicle does not need to be serviced or repaired soon" },
                    { id: 2, objective: "B", option: "The vehicle needs to be serviced or repaired soon." },
                    { id: 3, objective: "C", option: "The vehicle needs to be serviced or repaired later" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q52.",
                question: "Beaming your headlights in full at night is dangerous because",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "You cannot stop within the distance that you can see." },
                    { id: 2, objective: "B", option: "Your headlights may become over worked and then stop working at all." },
                    { id: 3, objective: "C", option: "You may blind oncoming traffic." },
                    { id: 4, objective: "D", option: "You won't be able to see if it becomes foggy." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q53.",
                question: "The disadvantage of not carrying out proper vehicle maintenance is",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "High vehicles operating cost" },
                    { id: 2, objective: "B", option: "High possibility of road crash" },
                    { id: 3, objective: "C", option: 'Both "a" and "b" are correct' },
                    { id: 4, objective: "D", option: "None of the above is correct" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q54.",
                question: "You should avoid driving through deep puddles or flowing water. But if you must, which of these steps can help keep your brakes working",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Apply hard pressure on both the brake pedal and accelerator after coming out of the water." },
                    { id: 2, objective: "B", option: "Gently pressing the brake pedal while driving through the water" },
                    { id: 3, objective: "C", option: "Turning on your brake heater" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q55.",
                question: "You are following a long vehicle approaching a crossroads. What should you do if the driver signals right but moves close to the left-hand pavement?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Warn the driver about the wrong signal." },
                    { id: 2, objective: "B", option: "Wait behind the long vehicle." },
                    { id: 3, objective: "C", option: "Report the driver to the police" },
                    { id: 4, objective: "D", option: "Overtake on the right-hand side" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q57.",
                question: "You are driving behind a large goods vehicle. What should you do if it signals left but steers to the right?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Slow down and let the vehicle turn" },
                    { id: 2, objective: "B", option: "Overtake on the right of it" },
                    { id: 3, objective: "C", option: "Drive on, keeping to the left" },
                    { id: 4, objective: "D", option: "Hold your speed and sound your horn" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q58.",
                question: "Water can be used to extinguish which of the following fires",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Tires" },
                    { id: 2, objective: "B", option: "Keep in the middle of the road" },
                    { id: 3, objective: "C", option: "Swing out to the right just before turning" },
                    { id: 4, objective: "D", option: "Keep well to the left of the road" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q59.",
                question: "Head lamps and parking lights are used",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "To illuminate the road ahead of the vehicle" },
                    { id: 2, objective: "B", option: "To show your presence on the road" },
                    { id: 3, objective: "C", option: 'Both "a" and "b" are correct' },
                    { id: 4, objective: "D", option: "None of the above is correct" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q60.",
                question: "Your mobile rings while you are driving your vehicle. When is it appropriate for you to accept the call?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Once you have parked your vehicle in a safe place." },
                    { id: 2, objective: "B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped." },
                    { id: 3, objective: "C", option: "If you are confident that your ability to drive will not be compromised by the distraction" },
                    { id: 4, objective: "D", option: "While you are stuck in the traffic jam in the city" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q61.",
                question: "When the engine coolant is unable to circulate, the engine will",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Consume less fuel" },
                    { id: 2, objective: "B", option: "Be too cool" },
                    { id: 3, objective: "C", option: "Consume the same amount of fuel" },
                    { id: 4, objective: "D", option: "Be too hot" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q62.",
                question: "A Red light on the dash board means:",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "The vehicle needs to take action immediately with repairs" },
                    { id: 2, objective: "B", option: "The vehicle does not need to be repaired" },
                    { id: 3, objective: "C", option: "Keep well to the left of the road" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q63.",
                question: "How can you use your vehicles engine to control your speed?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "By changing to a lower gear" },
                    { id: 2, objective: "B", option: "By selecting reverse gear" },
                    { id: 3, objective: "C", option: "By changing to a higher gear" },
                    { id: 4, objective: "D", option: "By selecting neutral" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q64.",
                question: "If your brakes fail, what should you do?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Pump the foot brake several times" },
                    { id: 2, objective: "B", option: "Lightly apply the handbrake" },
                    { id: 3, objective: "C", option: "Shift into lower gear to slow down the vehiclen" },
                    { id: 4, objective: "D", option: "All the above" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q65.",
                question: "Who has priority at a roundabout? Choose the best answer",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "The vehicles that are parked on the roundabout" },
                    { id: 2, objective: "B", option: "Lightly apply the handbrake" },
                    { id: 3, objective: "C", option: "You must give right of way to traffic already on a roundabout" },
                    { id: 4, objective: "D", option: "None of the above" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q66.",
                question: "What should you do if you are dazzled by another vehicle's headlights?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Slow down & stop if necessary." },
                    { id: 2, objective: "B", option: "If the dazzle is from an oncoming vehicle, avoid it by looking towards its left edge until the vehicle has passed." },
                    { id: 3, objective: "C", option: "Also dazzle back by putting on you full headlights" },
                    { id: 4, objective: "D", option: "A and B are the correct answers." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q67.",
                question: "Before driving through a flooded area, what should you do?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Stop the vehicle and check the tires" },
                    { id: 2, objective: "B", option: "Test your brakes to see they are functioning normally" },
                    { id: 3, objective: "C", option: "Stop the vehicle and dry your brakes" },
                    { id: 4, objective: "D", option: "Check your exhaust" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q68.",
                question: "The only effective way to deal with driver fatigue is to",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Give drivers plenty of time to see you and to stop before you start to cross." },
                    { id: 2, objective: "B", option: "Prevent it by being well rested and taking regular breaks" },
                    { id: 3, objective: "C", option: "Listen to the radio and open the windows" },
                    { id: 4, objective: "D", option: "Drink plenty of strong, black coffee" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q69.",
                question: "If your brakes fail, what should you do?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Pump the foot brake several times" },
                    { id: 2, objective: "B", option: "Lightly apply the handbrake" },
                    { id: 3, objective: "C", option: "Shift into lower gear to slow down the vehicle" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q70.",
                question: "When driving, when should you dip your headlights?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "When meeting other traffic." },
                    { id: 2, objective: "B", option: "When following close behind another vehicle." },
                    { id: 3, objective: "C", option: "On continuously lit roads" },
                    { id: 4, objective: "D", option: "All the above is true" },

                ],
                selectedObjective: ""

            }

        ]
    },
    {
        id: 2,
        indicator: "PRACTICE_QUIZ_2B",
        score: 0,
        qtnsList: [
            {
                qtnNo: "Q1.",
                question: "Alcohol is a depressant, what does this mean?",
                correctAnswer: "A",
                suggestions: [
                    { id: 2, objective: "B", option: "It makes you calm down and think more clearly" },
                    { id: 3, objective: "C", option: "It makes your brain work slower" },
                    { id: 4, objective: "D", option: "it speeds your brain up so you can work better" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q2.",
                question: "Why is it dangerous to travel too close to the vehicle ahead?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Your engine will overheat" },
                    { id: 2, objective: "B", option: "Your mirrors will need adjusting" },
                    { id: 3, objective: "C", option: "Your view of the road ahead will be restricted" },
                    { id: 4, objective: "D", option: "The driver in the front will not be seeing you in his mirrors" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q3.",
                question: "What should you do if your anti-lock brakes (ABS) warning light stays on?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Check the brake-fluid level" },
                    { id: 2, objective: "B", option: "Check the footbrake free play" },
                    { id: 3, objective: "C", option: "Check that the parking brake is released" },
                    { id: 4, objective: "D", option: "Have the brakes checked immediately" },
                ],
                selectedObjective: ""

            }, {
                qtnNo: "Q4.",
                question: "In the majority of vehicles, the parking brakes acts",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "On the rear wheels" },
                    { id: 2, objective: "B", option: "On the front wheels" },
                    { id: 3, objective: "C", option: "On all the four wheels" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q5.",
                question: "In wet weather when it comes hard for you to see, you should",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Reaction time" },
                    { id: 2, objective: "B", option: "Road condition" },
                    { id: 3, objective: "C", option: "Speed" },
                    { id: 3, objective: "C", option: "All the above" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q6.",
                question: "In wet weather when it comes hard for you to see, you should",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Flash your headlights to warn other drivers." },
                    { id: 2, objective: "B", option: "Turn on your headlights, slow down and double your following distance behind the vehicle in front" },
                    { id: 3, objective: "C", option: "Turn your headlights on high beam" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q7.",
                question: "In a collusion, what does a properly adjusted headrest prevent?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Back injuries." },
                    { id: 2, objective: "B", option: "Shoulder injuries" },
                    { id: 3, objective: "C", option: "Neck injuries" },
                    { id: 3, objective: "D", option: "All of the Above" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q8.",
                question: "WHAT IS ",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Spare tyre, Car jack, whistle" },
                    { id: 2, objective: "B", option: "Car jack, Flash light, Spare tyre" },
                    { id: 3, objective: "C", option: "Flash light, whistle" },
                    { id: 3, objective: "D", option: "None of the Above" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q9.",
                question: "When can you put on the lights during the day?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "when its foggy." },
                    { id: 2, objective: "B", option: "when its misty" },
                    { id: 3, objective: "C", option: "During heavy rain" },
                    { id: 3, objective: "D", option: "All the above" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q10.",
                question: "When changing lanes, you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Check your mirrors and your blind spot and then proceed." },
                    { id: 2, objective: "B", option: "Check your mirrors, signal, check your blind spot and then proceed" },
                    { id: 3, objective: "C", option: "Check your mirrors, signal and then proceed" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q11.",
                question: "Name two documents which must be valid before you are allowed to drive",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Third party insurance certificate and Driving license" },
                    { id: 2, objective: "B", option: "Comprehensive insurance certificate and third party insurance" },
                    { id: 3, objective: "C", option: "Driving license and Driving Permit" },
                    { id: 3, objective: "C", option: "Third party insurance certificate and Driving Permit" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q12.",
                question: "A driver must acquire defensive driving skills which include:",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "The knowledge of you and your vehicles capabilities and limitations" },
                    { id: 2, objective: "B", option: "The ability to survey what is on and near the road" },
                    { id: 3, objective: "C", option: "The capacity to assess potential hazards and their potential impact." },
                    { id: 3, objective: "D", option: "All the above" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q13.",
                question: "If you are walking along a highway, always walk on the shoulder:",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "With the traffic flow." },
                    { id: 2, objective: "B", option: "Facing the traffic flow" },
                    { id: 3, objective: "C", option: "Going in any direction you choose" },
                    { id: 3, objective: "C", option: "None of the above" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q14.",
                question: "Which of these Vehicles has no the right of way",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Bullion van with siren." },
                    { id: 2, objective: "B", option: "Ambulance with Siren" },
                    { id: 3, objective: "C", option: "Presidential Convey with Siren" },
                    { id: 4, objective: "D", option: "Fire tender with siren" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q15.",
                question: "You should always adjust the driver's seat before making mirror adjustments",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "True" },
                    { id: 2, objective: "B", option: "False" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q16.",
                question: "If you adjust your mirrors properly you will not have to worry about blind spots",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "True" },
                    { id: 2, objective: "B", option: "False" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q17.",
                question: "Factors contributing to a vehicles excessive fuel consumption are",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Preventive maintenance, bad driving behaviour" },
                    { id: 2, objective: "B", option: "Defective vehicle, improper maintenance and bad driving behaviour.." },
                    { id: 3, objective: "C", option: "Defective vehicle, preventive maintenance improper maintenance" },
                    { id: 3, objective: "D", option: "Improper break down maintenance and average driving speed" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q18.",
                question: "The essential procedures to be followed in any vehicles crash or breakdown are:",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Stop immediately and turn off the engine" },
                    { id: 2, objective: "B", option: "Switch on your hazard warning lights" },
                    { id: 3, objective: "C", option: 'Both "a" and "b"' },
                    { id: 4, objective: "D", option: "None of the above" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q19.",
                question: "Minor maintenance of a battery involves",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Measuring the voltage across terminals" },
                    { id: 2, objective: "B", option: "Checking of battery terminals, Battery mounting and post for corrosion." },
                    { id: 3, objective: "C", option: "Topping the acid level" },
                    { id: 3, objective: "C", option: "None of the above is correct" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q20.",
                question: "A driver should check their mirrors and gauges ____",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Every 5 to 8 seconds." },
                    { id: 2, objective: "B", option: "To make sure another vehicle does't enter into the blind spot behind your vehicle." },
                    { id: 3, objective: "C", option: 'To prevent getting into the "blind stare."' },
                    { id: 3, objective: "C", option: 'All the above' },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q21.",
                question: "Chain reaction accidents occur because _______",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "The lead driver has an accident without time to apply their brakes, so the next vehicle has no warning." },
                    { id: 2, objective: "B", option: 'The second driver has failed to scan, check mirrors, and has fallen into a "blind stare."' },
                    { id: 3, objective: "C", option: "All are following too close" },
                    { id: 4, objective: "D", option: "All of the above" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q22.",
                question: "When are you not allowed to drive despite having the valid required documents?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "When sick and on medication" },
                    { id: 2, objective: "B", option: "When drank with alcohol" },
                    { id: 3, objective: "C", option: "Both A and B are correct" },
                    { id: 4, objective: "D", option: "When you are sick but doctor advised otherwise" },
                ],
                selectedObjective: ""

            }, {
                qtnNo: "Q23.",
                question: "Do not try to drive more than ____ hours in any one day.",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: 2 },
                    { id: 2, objective: "B", option: 8 },
                    { id: 3, objective: "C", option: 16 },
                    { id: 3, objective: "D", option: 11 },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q24.",
                question: "When do windscreen pillars cause a serious obstruction to your view?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "When youre driving on a motorway." },
                    { id: 2, objective: "B", option: "When youre driving on a dual carriageway" },
                    { id: 3, objective: "C", option: "When youre approaching a one-way street" },
                    { id: 3, objective: "C", option: "When youre approaching bends and junctions" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q25.",
                question: "When changing lanes, you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Signal and then proceed." },
                    { id: 2, objective: "B", option: "Check your mirrors and your blind spot and then proceed." },
                    { id: 3, objective: "C", option: "Check your mirrors, signal, check your blind spot and then proceed" },
                    { id: 3, objective: "C", option: "Check your mirrors, signal and then proceed" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q26.",
                question: "When conducting a pre-trip inspection, it is better to:",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Vary the way you do things so you don't get bored" },
                    { id: 2, objective: "B", option: "Use the same method every time for quicker and more accurate inspections" },
                    { id: 3, objective: "C", option: "Repeat the procedures several times focusing on each individual aspect of the inspection (safety, security, fluids, etc.)" },
                    { id: 3, objective: "C", option: "Assume that all safety-related features are tip-top)" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q27.",
                question: "You see another driver driving in an unsafe manner.What is the most important thing that you can do to avoid being involved in an accident?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Flash your headlights" },
                    { id: 2, objective: "B", option: "Sound your horn" },
                    { id: 3, objective: "C", option: "Use your 4-way flashers" },
                    { id: 3, objective: "C", option: "Give them the right of way" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q28.",
                question: "When caught driving in heavy rain",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Your brakes may pull unevenly" },
                    { id: 2, objective: "B", option: "Brake effectiveness may be greatly reduced" },
                    { id: 3, objective: "C", option: 'Apply slight brake pressure to "dry out" brakes' },
                    { id: 3, objective: "C", option: 'All the above' },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q29.",
                question: "It is illegal to park",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "On a side walk" },
                    { id: 2, objective: "B", option: "On a bridge or in a tunnel" },
                    { id: 3, objective: "C", option: "At a roundabout" },
                    { id: 4, objective: "D", option: "All the above" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q30.",
                question: "Which is the maximum speed limit in town?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "30 kmph" },
                    { id: 2, objective: "B", option: "50 kmph" },
                    { id: 3, objective: "C", option: "10 kmph" },
                    { id: 3, objective: "C", option: "20 kmph" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q31.",
                question: "What is the Highway Code",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "A booklet checked and passed by the parliament for rules of road users." },
                    { id: 2, objective: "B", option: "A booklet checked and passed by the traffic police for rules of road users." },
                    { id: 3, objective: "C", option: "A booklet checked and passed by the president for rules of road users." },
                    { id: 4, objective: "D", option: "A booklet checked and passed by the cabinet for rules of road users." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q32.",
                question: "If an oncoming vehicle crosses the centre line and is coming straight at you and you cannot stop, you should:",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Brake, look for room to move to the left" },
                    { id: 2, objective: "B", option: "Slow down and hope that the driver will turn away" },
                    { id: 3, objective: "C", option: "Drive onto the wrong side of the road and hope the other vehicle does not do the same" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q33.",
                question: "Dashed white lines between lanes of traffic mean",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "You may cross the lines to pass or change lanes if it is safe to do so." },
                    { id: 2, objective: "B", option: "Neither side can pass." },
                    { id: 3, objective: "C", option: "You are going the wrong way." },
                    { id: 4, objective: "D", option: "You are going the right way." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q34.",
                question: "The major cause of impatience on our road is choose the best answer",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Smooth and clear roads" },
                    { id: 2, objective: "B", option: "Poor journey planning" },
                    { id: 3, objective: "C", option: "Failure to keep time" },
                    { id: 4, objective: "D", option: "Both B and C" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q35.",
                question: "Lines along the side of the road show you where the edge of the road is located. A ________ line indicates the right edge of the traffic lane on a road.",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Solid yellow" },
                    { id: 2, objective: "B", option: "Solid white." },
                    { id: 3, objective: "C", option: "Solid green" },
                    { id: 3, objective: "C", option: "None of these" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q36.",
                question: "If you are not sure you have enough distance to overtake a vehicle ahead, you should?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Put the vehicle in a lower gear and speed up" },
                    { id: 2, objective: "B", option: "Wait for a better opportunity with more distance to overtake." },
                    { id: 3, objective: "C", option: "Sound your horn to signal the driver ahead to slow down." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q37.",
                question: "What must you Not do when being overtaken?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "You should not accelerate" },
                    { id: 2, objective: "B", option: "You should not warn the driver overtaking you about the traffic police ahead." },
                    { id: 3, objective: "C", option: "You should not put double indication." },
                    { id: 3, objective: "C", option: "None of the above" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q38.",
                question: "When do we dim our lights at night?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "When meeting on coming vehicle, when meeting a pedestrian and on a well lit area" },
                    { id: 2, objective: "B", option: "When meeting on going traffic and at traffic lights" },
                    { id: 3, objective: "C", option: "When at traffic lights, pedestrian crossings and zebra crossings" },
                    { id: 4, objective: "D", option: "none of the above" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q39.",
                question: "The safest drivers exhibit a healthy lifestyle that includes freedom from legal and illegal substances, sufficient rest, and control over personal stress.",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "True" },
                    { id: 2, objective: "B", option: "False" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q40.",
                question: "Unbalanced wheels on the a car may cause",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "The steering to pull on one side" },
                    { id: 2, objective: "B", option: "The steering to vibrate" },
                    { id: 3, objective: "C", option: "The brakes to fail." },
                    { id: 3, objective: "C", option: "The tires to deflate." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q41.",
                question: "If you are going out and going to drink alcohol, what is the best way to avoid drinking and driving?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Before drinking, organise a way of getting home where you are not the driver" },
                    { id: 2, objective: "B", option: "Wait for one hour after your last drink before you drive home" },
                    { id: 3, objective: "C", option: "After you have had a few drinks, start to think how you will reach home" },
                    { id: 4, objective: "D", option: "First pray then drive straight to home without making corners" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q42.",
                question: "When driving, if you find animals cutting in on the road, what should you do?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Voluntarily reduce speed or stop to yield" },
                    { id: 2, objective: "B", option: "Honk to drive them away" },
                    { id: 3, objective: "C", option: "Speed up and bypass" },
                    { id: 3, objective: "C", option: "Reduce speed and use the vehicle to drive them away" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q43.",
                question: "What should you do if you think the driver of the vehicle in front has forgotten to cancel their right indicator?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Flash your lights to alert the driver." },
                    { id: 2, objective: "B", option: "Sound your horn before overtaking." },
                    { id: 3, objective: "C", option: "Overtake on the left if theres room." },
                    { id: 4, objective: "D", option: "Stay behind and dont overtake" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q44.",
                question: "What do you do before getting out of the vehicle?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Look over your left shoulder and right side mirror" },
                    { id: 2, objective: "B", option: "Check the side mirror and look over your right shoulder" },
                    { id: 3, objective: "C", option: "Check your inside view mirror and look over your left shoulder" },
                    { id: 4, objective: "D", option: "None of the above" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q45.",
                question: "How do you hold the steering wheel clockwise?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "10 to 2 position and 1/4 to 3 position" },
                    { id: 2, objective: "B", option: "No, if you say you havent been drinking alcohol" },
                    { id: 3, objective: "C", option: "Yes always." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q46.",
                question: "Where does the law require you to stop?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "At the stop sign" },
                    { id: 2, objective: "B", option: "When ordered by the police" },
                    { id: 3, objective: "C", option: "When the traffic lights changes to red" },
                    { id: 4, objective: "D", option: "All the above are correct" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q47.",
                question: "Which are the common mistakes made when approaching a round about?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Approaching the roundabout with wrong lane and changing lanes on the roundabout" },
                    { id: 2, objective: "B", option: "Leaving the roundabout in the wrong lane and observing traffic from wrong side" },
                    { id: 3, objective: "C", option: "Only B is correct" },
                    { id: 4, objective: "D", option: "Both A and b are correct" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q48.",
                question: "What distance should you keep between two moving vehicles in town?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "The distance for you to see the behind wheels of the vehicle infront" },
                    { id: 2, objective: "B", option: "The distance for you to see the number plate of the vehicle infront" },
                    { id: 3, objective: "C", option: "Only A is correct" },
                    { id: 4, objective: "D", option: "Both A and B are correct" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q49.",
                question: 'The Highway Code explains how to use our roads safely. It has been written for',
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Passengers, cyclists, motorcyclists, and drivers." },
                    { id: 2, objective: "B", option: "Pedestrians, cyclists, motorcyclists, and drivers" },
                    { id: 3, objective: "C", option: "Pedestrians, passengers, motorcyclists, and drivers." },
                    { id: 4, objective: "D", option: "Pedestrians, passengers, cyclists, motorcyclists, and drivers." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q50.",
                question: 'The road is most slippery when',
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Immediately after the rain." },
                    { id: 2, objective: "B", option: "Two hours after the rain" },
                    { id: 3, objective: "C", option: "The next day" },
                    { id: 4, objective: "D", option: "During the rain" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q51.",
                question: "Q51. On a road designated as one way, which of the following holds true?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Parking is prohibited" },
                    { id: 2, objective: "B", option: "Overtaking is prohibited" },
                    { id: 3, objective: "C", option: "Should not drive in reverse gear" },
                    { id: 3, objective: "C", option: "Stopping is prohibited" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q52.",
                question: "It is important to scan while driving so you can see everything that is happening on the road. What does scanning mean?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Continually looking ahead, to the sides and using all mirrors while driving" },
                    { id: 2, objective: "B", option: "Looking further ahead down the road" },
                    { id: 3, objective: "C", option: "Looking at the wind view screen mirror" },
                    { id: 4, objective: "D", option: "Looking in the rear and side mirrors continually when driving." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q53.",
                question: "Youre in a built-up area at night and the road is well lit. Why should you use dipped headlights?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "So that you can see further along the road" },
                    { id: 2, objective: "B", option: "So that you can go at a much faster speed" },
                    { id: 3, objective: "C", option: 'So that you can switch to main beam quickly' },
                    { id: 4, objective: "D", option: "So that you can be easily seen by others" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q54.",
                question: "driver should always stop for",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Pedestrians" },
                    { id: 2, objective: "B", option: "Stray dogs." },
                    { id: 3, objective: "C", option: "None of the above" },
                    { id: 4, objective: "D", option: "Leaner Drivers with L plates" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q55.",
                question: "According to the Traffic and Road safety Act 1998, which of the following best describes group B of vehicles.",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "These are vehicles that carry up to 3500kgs and also carry up to 8 passengers including the driver." },
                    { id: 2, objective: "B", option: "These are vehicles that carry up to 3500kgs and also carry up to 7 passengers including the driver." },
                    { id: 3, objective: "C", option: "These are vehicles that carry up to 2000kgs and carry 2 passengers" },
                    { id: 4, objective: "D", option: "These are the usual saloon cars or my cars" },

                ],
                selectedObjective: ""

            }, {
                qtnNo: "Q56.",
                question: "It is important to scan while driving so you can see everything that is happening on the road. What does scanning mean?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "You may enter the box junction if the green light has shown even though it wont clear." },
                    { id: 2, objective: "B", option: "The box junction works independent of the traffic lights" },
                    { id: 3, objective: "C", option: "You must not enter a yellow box junction unless you can clear it without stopping" },
                    { id: 4, objective: "D", option: "You only enter the box junction when you can clear" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q57.",
                question: "What should you do if you start to feel tired while driving?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Take an energy drive and carry on with your journey" },
                    { id: 2, objective: "B", option: "Pull over at a safe place and rest" },
                    { id: 3, objective: "C", option: "Put the hazard lights to indicate to the other road users and keep driving." },
                    { id: 4, objective: "D", option: "Drive slowly but steadily" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q58.",
                question: "Whats the main benefit of driving a four-wheel-drive vehicle?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Improved grip on the road" },
                    { id: 2, objective: "B", option: "Lower fuel consumption" },
                    { id: 3, objective: "C", option: "Shorter stopping distances" },
                    { id: 4, objective: "D", option: "Improved passenger comfort" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q59.",
                question: "A single broken yellow line is used to mark the centerline where there is(are) only _______ of traffic.",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "four lanes" },
                    { id: 2, objective: "B", option: "two lanes" },
                    { id: 3, objective: "C", option: 'one lane' },
                    { id: 4, objective: "D", option: "None of the above" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q60.",
                question: "Driving is a _______ not a right.",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Right" },
                    { id: 2, objective: "B", option: "Privilege" },
                    { id: 3, objective: "C", option: "Law" },
                    { id: 4, objective: "D", option: "None of the above" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q61.",
                question: "Which of these is an indication that your tyres require replacement ?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "When the remaining tread depth is less than 1.6mm" },
                    { id: 2, objective: "B", option: "When the remaining tread depth is higher than the tread wear indicator bars" },
                    { id: 3, objective: "C", option: "When the remaining tread depth is lower than the tread wear indicator bars" },
                    { id: 4, objective: "D", option: "A and C are correct" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q62.",
                question: "When a vehicle goes downhill, you should properly control the speed through gear and fully use the engine to brake.",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "true" },
                    { id: 2, objective: "B", option: "false" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q63.",
                question: "When can you overtake on the left?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "When you want to go straight ahead & the driver in front of you has moved out and signaled that they intend to turn right." },
                    { id: 2, objective: "B", option: "When traffic in both lanes is moving slowly & traffic in the left-hand lane is moving more quickly than the traffic in the right-hand lane" },
                    { id: 3, objective: "C", option: "When you have signaled that you intend to turn left." },
                    { id: 4, objective: "D", option: "Both A and B are correct" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q64.",
                question: "If your brakes fail, what should you do?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Ease off the accelerator, hold the steering wheel firmly, and vert lightly brake to a stop" },
                    { id: 2, objective: "B", option: "Brake firmly to slow the vehicle quickly" },
                    { id: 3, objective: "C", option: "Accelerate lightly to hold the vehicle on track" },
                    { id: 4, objective: "D", option: "None of the above" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q65.",
                question: "Excessive or uneven tire wear can be caused by faults in which of the following",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Cooling system" },
                    { id: 2, objective: "B", option: "Gearbox" },
                    { id: 3, objective: "C", option: "Suspension" },
                    { id: 4, objective: "D", option: "Exhaust system" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q66.",
                question: "What do signs containing a red circle generally mean?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Providing a warning" },
                    { id: 2, objective: "B", option: "Giving an order" },
                    { id: 3, objective: "C", option: "Providing information" },
                    { id: 4, objective: "D", option: "Providing directions." },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q67.",
                question: "Before driving through a flooded area, what should you do?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Stop the vehicle and check the tires" },
                    { id: 2, objective: "B", option: "Test your brakes to see they are functioning normally" },
                    { id: 3, objective: "C", option: "Stop the vehicle and dry your brakes" },
                    { id: 4, objective: "D", option: "Check your exhaust" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q68.",
                question: "What are the speed limits in built up areas?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "100 kmph" },
                    { id: 2, objective: "B", option: "30 kmph" },
                    { id: 3, objective: "C", option: "50 kmph" },
                    { id: 4, objective: "D", option: "None of the above" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q69.",
                question: "Rectangular road signs provide",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Orders" },
                    { id: 2, objective: "B", option: "Warnings" },
                    { id: 3, objective: "C", option: "Information and directions" },
                    { id: 4, objective: "D", option: "Details of a hazard ahead" },

                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q70.",
                question: "What does this chevron road sign mean?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Sharp deviation in the road to the right" },
                    { id: 2, objective: "B", option: "Keep to the right." },
                    { id: 3, objective: "C", option: "Turn right only" },
                    { id: 4, objective: "D", option: "Road closed! Traffic follow signs for diversion" },

                ],
                selectedObjective: ""

            }

        ]
    },
    {
        id: 2,
        indicator: "PRACTICE_QUIZ_3A",
        score: 0,
        qtnsList: [
            {
                qtnNo: "Q1.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/red.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 2, objective: "B", option: "Means Get Ready" },
                    { id: 3, objective: "C", option: "Means Go" },
                    { id: 4, objective: "D", option: "Means Stop" },
                    { id: 5, objective: "E", option: "Means Turn Left" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q2.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/green.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Means Get Ready" },
                    { id: 2, objective: "B", option: "Means Go" },
                    { id: 3, objective: "C", option: "Means Stop" },
                    { id: 4, objective: "D", option: "Means Turn Left" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q3.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/orange.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Means Get Ready" },
                    { id: 2, objective: "B", option: "Means Go" },
                    { id: 3, objective: "C", option: "Means Stop" },
                    { id: 4, objective: "D", option: "Means Turn Left" },
                ],
                selectedObjective: ""

            }, {
                qtnNo: "Q4.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/rightindicator.jpg"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Means go slow" },
                    { id: 2, objective: "B", option: "Means someone is turning right" },
                    { id: 3, objective: "C", option: "Means Stop" },
                    { id: 4, objective: "D", option: "Means someone is turning left" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q5.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/turningleftgo.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Means Stop" },
                    { id: 2, objective: "B", option: "Means vehicles turning left are free to go" },
                    { id: 3, objective: "C", option: "Means Go" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q6.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/motorbikeslowdown.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Means Stop" },
                    { id: 2, objective: "B", option: "Means turning right" },
                    { id: 3, objective: "C", option: "Slow Down" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q7.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/turnright_car.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Means Slow Down" },
                    { id: 2, objective: "B", option: "We need to talk" },
                    { id: 3, objective: "C", option: "Turn Right" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q8.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/vehiclesfromfrontstop.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "No way through" },
                    { id: 2, objective: "B", option: "Vehicles approaching from front should STOP" },
                    { id: 3, objective: "C", option: "All vehicles should STOP" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q9.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/redflashing.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Means Stop" },
                    { id: 2, objective: "B", option: "Railway Crossing Signal" },
                    { id: 3, objective: "C", option: "Railway Line Ahead" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q10.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/policelight.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Police Vehicle" },
                    { id: 2, objective: "B", option: "Fire Brigade" },
                    { id: 3, objective: "C", option: "Ambulance" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q11.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/roadworks.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Must obey the signs you find at all times." },
                    { id: 2, objective: "B", option: "Only obey the sign when there are workers" },
                    { id: 3, objective: "C", option: "Only obey the sign during working hours." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q12.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/sidevehiclescome.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Vehicles approaching from the front should COME ON" },
                    { id: 2, objective: "B", option: "Vehicles approaching from the side should COME" },
                    { id: 3, objective: "C", option: "Vehicles approaching from the side should STOP" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q13.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/stop.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "It means slow down, defer to oncoming traffic, stop if necessary, and proceed when it's safe to do so." },
                    { id: 2, objective: "B", option: "It means you need to stop." },
                    { id: 3, objective: "C", option: "This sign is used to indicate a street that you can not turn right onto." },
                    { id: 4, objective: "D", option: "It means do not park here." },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q14.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/roadjunctionahead.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Cross roads ahead" },
                    { id: 2, objective: "B", option: "Level crossing with gate" },
                    { id: 3, objective: "C", option: "Level crossing without gate" },
                    { id: 4, objective: "D", option: "None of the Above" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q15.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/successivebendtotheleft.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Zig-Zag Road" },
                    { id: 2, objective: "B", option: "Country Lane" },
                    { id: 3, objective: "C", option: "Successive/Double bend to the left" },
                    { id: 4, objective: "D", option: "Slippery Road" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q16.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/slipperyroad.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Cross Winds." },
                    { id: 2, objective: "B", option: "Risk of Ice" },
                    { id: 2, objective: "B", option: "Slippery road" },
                    { id: 2, objective: "B", option: "1 and 2" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q17.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/cattlecrossingahead.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Cattle Crossing ahead" },
                    { id: 2, objective: "B", option: "Farm Entrance ahead" },
                    { id: 3, objective: "C", option: "No Vehicle Access" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q18.",
                question: "What does the sign below indicate",
                symbol: require("./assets/quiz_questions/noentryforallvehicles.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Please Stop" },
                    { id: 2, objective: "B", option: "Do not Enter" },
                    { id: 3, objective: "C", option: 'No Parking' },
                    { id: 4, objective: "D", option: "No road markings" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q19.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/pedestrianscrossing.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Pedestrians Crossing" },
                    { id: 2, objective: "B", option: "School Cross Walk" },
                    { id: 3, objective: "C", option: "School crosswalk ahead" },
                    { id: 4, objective: "D", option: "No road markings" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q20.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/twowaytrafficahead.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Divider ahead - keep right" },
                    { id: 2, objective: "B", option: "Maintain Lanes" },
                    { id: 3, objective: "C", option: 'Straight through only' },
                    { id: 3, objective: "C", option: 'Two way traffic' },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q21.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/noturnleft.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "No Right Turn" },
                    { id: 2, objective: "B", option: 'No Passing' },
                    { id: 3, objective: "C", option: "No Left Turn" },
                    { id: 4, objective: "D", option: "No U-Turn" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q22.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/trafficcontrolahead.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Traffic Control Signal ahead" },
                    { id: 2, objective: "B", option: "Too much traffic" },
                    { id: 3, objective: "C", option: "Not a though street" },
                    { id: 4, objective: "D", option: "Divided road" },
                ],
                selectedObjective: ""

            }, {
                qtnNo: "Q23.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/soundingofhornsirensprohibited.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Do not use mobile phone when driving" },
                    { id: 2, objective: "B", option: "Sounding of horn sirens prohibited" },
                    { id: 3, objective: "C", option: "Compulsory sound horn" },
                    { id: 3, objective: "D", option: "You may sound your horn" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q24.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/railwaycrossingwithoutbarriers.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Police Station" },
                    { id: 2, objective: "B", option: "Railway Crossing without barriers" },
                    { id: 3, objective: "C", option: "Bridge ahead" },
                    { id: 4, objective: "D", option: "Guarded Railway Crossing" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q25.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/directiontobefollowed.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "There is no road to the left" },
                    { id: 2, objective: "B", option: "Keep left" },
                    { id: 3, objective: "C", option: "None of these" },
                    { id: 3, objective: "C", option: "Direction to be followed" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q26.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/firstaid.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Hospital" },
                    { id: 2, objective: "B", option: "First Aid" },
                    { id: 3, objective: "C", option: "Stop" },
                    { id: 4, objective: "D", option: "Junction ahead" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q27.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/roundabout.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Hospital" },
                    { id: 2, objective: "B", option: "Round About" },
                    { id: 3, objective: "C", option: "Stop" },
                    { id: 3, objective: "C", option: "Junction ahead" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q28.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/dontdrinkanddrive.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Dont text and drive" },
                    { id: 2, objective: "B", option: "Dont Drive and Drink" },
                    { id: 3, objective: "C", option: 'None of these' },
                    { id: 4, objective: "D", option: 'Dont Drink and Drive' },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q29.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/fillingstation.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Workshop" },
                    { id: 2, objective: "B", option: "No Road Through" },
                    { id: 3, objective: "C", option: "Filling station" },
                    { id: 4, objective: "D", option: "None of these" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q30.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/hotel.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Hospital" },
                    { id: 2, objective: "B", option: "Hotel" },
                    { id: 3, objective: "C", option: "Bed" },
                    { id: 4, objective: "D", option: "None of these" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q31.",
                question: "What does the sign below indicate?",
                symbol: require("./assets/quiz_questions/entryforbiddentoallbicycles.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "No entry" },
                    { id: 2, objective: "B", option: "Entry forbidden to all bicycles" },
                    { id: 3, objective: "C", option: "Entry forbidden to all motorcycles" },
                    { id: 4, objective: "D", option: "No entry for power driven vehicles" },
                ],
                selectedObjective: ""

            },
            {
                qtnNo: "Q32.",
                symbol: require("./assets/quiz_questions/hazardahead.png"),
                question: "What does the sign below indicate?",
                correctAnswer: "A",
                suggestions: [
                    { id: 1, objective: "A", option: "Information" },
                    { id: 2, objective: "B", option: "Hazard ahead" },
                    { id: 3, objective: "C", option: "For your information" },
                    { id: 3, objective: "C", option: "None of the above" },

                ],
                selectedObjective: ""

            },


        ]
    },
    {
        id: 3,
        indicator: "PRACTICE_QUIZ_3B",
        score: 0,
        qtnsList: [
            {
                qtnNo: "Q1.",
                question: "This road sign means?.",
                symbol: require("./assets/quiz_questions/nationalspeetlimit.png"),
                correctAnswer: "A",
                suggestions: [
                    { id: 2, objective: "B", option: "No stopping" },
                    { id: 3, objective: "C", option: "No road access" },
                    { id: 4, objective: "D", option: "Keep clear" },
                    { id: 5, objective: "E", option: "National speed limit applies" },
                ],
                selectedObjective:""
        
        },
        {
            qtnNo:"Q2.",
            question:"What does this road sign mean?.",
            symbol:require("./assets/quiz_questions/goaheadonly.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "One-way street"},
                {id:2, objective:"B", option: "Ahead only"},
                {id:3, objective:"C", option: "Single lane"},
                {id:4, objective:"D", option: "Stay in lane"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q3.",
            question:"From your side of the road, these lines mean.",
            symbol:require("./assets/quiz_questions/overtaking_when_safe.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "You can overtake / cross the lines under specific circumstances"},
                {id:2, objective:"B", option: "You must not overtake / cross the lines under any condition"},
                {id:3, objective:"C", option: "Hazardous road, advisable not to overtake / cross the lines"},
            ],
            selectedObjective:""
    
        }, {
            qtnNo:"Q4.",
            question:"What best describes this sign?.",
            symbol:require("./assets/quiz_questions/lanecrossescarriageway.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Road works, right lane leaves carriageway, maximum speed 30kph"},
                {id:2, objective:"B", option: "Primary route road works, one lane crosses carriageway, 30kph advisory"},
                {id:3, objective:"C", option: "Hazard ahead, move to lane on right, max speed 30kph"},
                {id:4, objective:"D", option: "Motorway road works sign"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q5.",
            question:"What does the road sign ,mean?.",
            symbol:require("./assets/quiz_questions/no_pedal_bike.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Parking place for pedal cycles only"},
                {id:2, objective:"B", option: "Pedal cycle route crossing or joining road ahead"},
                {id:3, objective:"C", option: "Cyclists only"},
                {id:3, objective:"C", option: "Riding of pedal cycles prohibited"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q6.",
            question:"White zigzag lines are used at?.",
            symbol:require("./assets/quiz_questions/zigzagline.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Pedestrian crossings to warn motorists of the hazard ahead"},
                {id:2, objective:"B", option: "Outside of schools to inform motorists not to park"},
                {id:3, objective:"C", option: "Pedestrian crossings to inform motorists not to park"},
                {id:3, objective:"C", option: "Riding of pedal cycles prohibited"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q7.",
            question:"This is a car dash board symbol, what does it represent?.",
            symbol:require("./assets/quiz_questions/oil-pressure-warning-light.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Symbol indicates that there is an issue with your car's oil pressure system"},
                {id:2, objective:"B", option: "Symbol indicates that there is an issue with your car radiator system."},
                {id:3, objective:"C", option: "Symbol indicates that there is an issue with your engine"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q8.",
            question:"What does this road sign mean?.",
            symbol:require("./assets/quiz_questions/one_way_traffic.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Road merging into single lane ahead"},
                {id:2, objective:"B", option: "Motorway ahead Keep straight"},
                {id:3, objective:"C", option: "Left or right turns prohibited"},
                {id:3, objective:"C", option: "One-way traffic"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q9.",
            question:"Blue circular road signs mostly give:.",
            symbol:require("./assets/quiz_questions/mandatory_information.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Information"},
                {id:2, objective:"B", option: "Directions"},
                {id:3, objective:"C", option: "Warning of hazards"},
                {id:3, objective:"C", option: "Postive and/or mandatory instruction."},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q10.",
            question:"What does this road sign mean?.",
            symbol:require("./assets/quiz_questions/minorroadfromleft.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Give way to traffic on right"},
                {id:2, objective:"B", option: "Traffic merging from right"},
                {id:3, objective:"C", option: "Joining major route ahead"},
                {id:4, objective:"D", option: "Traffic merging from left"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q11.",
            question:"What does this sign mean?.",
            symbol:require("./assets/quiz_questions/separates_opposite_flows.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Used to separate opposing flow lanes on a dual carriageway."},
                {id:2, objective:"B", option: "Dedicated lane for motorcyclists only"},
                {id:3, objective:"C", option: "Separates opposite flows of traffic, must not be crossed"},
                {id:4, objective:"D", option: "Separates opposite flows of traffic, advisable not to cross"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q12.",
            question:"The above light on the dash board means..",
            symbol:require("./assets/quiz_questions/abs-warning-light.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Check the vehicle traction system"},
                {id:2, objective:"B", option: "Check the vehicle locking braking system"},
                {id:3, objective:"C", option: "Check the vehicle anti-lock braking system"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q13.",
            question:"What does this signal mean?.",
            symbol:require("./assets/quiz_questions/vehiclesfromfrontcome.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Traffic approaching from the front must stop."},
                {id:2, objective:"B", option: "Traffic approaching from the front may proceed."},
                {id:3, objective:"C", option: "Traffic approaching from behind must stop."},
                {id:4, objective:"D", option: "Traffic approaching from the right may proceed."},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q14.",
            question:"What is this road sign warning drivers of?.",
            symbol:require("./assets/quiz_questions/loosesurfaceroads.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Roadworks ahead"},
                {id:2, objective:"B", option: "Risk of aquaplaning"},
                {id:3, objective:"C", option: "Loose chippings"},
                {id:4, objective:"D", option: "Falling rocks"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q15.",
            question:"What does this blue road sign mean?.",
            symbol:require("./assets/quiz_questions/compulsarycycletrack.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Route for pedal cycles only"},
                {id:2, objective:"B", option: "Pedal cycle route crossing or joining road ahead"},
                {id:3, objective:"C", option: "End of cycle route"},
                {id:4, objective:"D", option: "Parking place for cycles only"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q16.",
            question:"What does this road sign mean?.",
            symbol:require("./assets/quiz_questions/passeitherside.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Road divides into two lanes"},
                {id:2, objective:"B", option: "Choose your lane"},
                {id:2, objective:"B", option: "Vehicles may pass either side to reach same destination"},
                {id:2, objective:"B", option: "Stay in lane"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q17.",
            question:"What is the meaning of this road sign?.",
            symbol:require("./assets/quiz_questions/no_motorvehicle_permitted.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "No overtaking"},
                {id:2, objective:"B", option: "No motor vehicles permitted"},
                {id:3, objective:"C", option: "Only cars and motorcycles permitted"},
                {id:3, objective:"C", option: "No parking"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q18.",
            question:"What does this road sign mean?.",
            symbol:require("./assets/quiz_questions/two-way-traffic-sign-on-route-crossing-ahead.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Road splits ahead"},
                {id:2, objective:"B", option: "No left or right turns"},
                {id:3, objective:"C", option: 'Two way traffic crossing one way road'},
                {id:4, objective:"D", option: "One way traffic merges into two way traffic ahead"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q19.",
            question:"What does this road sign mean?.",
            symbol:require("./assets/quiz_questions/twowaytrafficahead.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Two-way traffic straight ahead"},
                {id:2, objective:"B", option: "Two-way traffic on route crossing ahead"},
                {id:3, objective:"C", option: "Give way to oncoming vehicles"},
                {id:4, objective:"D", option: "Dual carriageway ahead"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q20.",
            question:"which vehicle in the diagram should give way?.",
            symbol:require("./assets/quiz_questions/pic1.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Vehicle P"},
                {id:2, objective:"B", option: "Maintain LanesVehicle 0"},
                {id:3, objective:"C", option: 'Both Vehicles'},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q21.",
            question:"What does this car dash board symbol represent?.",
            symbol:require("./assets/quiz_questions/battery-warning-light.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "This symbol signifies a problem with the vehicle's charging system"},
                {id:2, objective:"B", option: "This symbol signifies a problem with the vehicle's discharging system"},
                {id:3, objective:"C", option: "This symbol signifies a problem with the vehicle's heating system"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q22.",
            question:"What does this road sign mean?.",
            symbol:require("./assets/quiz_questions/priorityoveroncomingvehicles.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "One way traffic only"},
                {id:2, objective:"B", option: "Priority over oncoming vehicles"},
                {id:3, objective:"C", option: "Two way traffic ahead"},
                {id:4, objective:"D", option: "Give priority to oncoming vehicles"},
            ],
            selectedObjective:""
    
        },{
            qtnNo:"Q23.",
            question:"This warning sign is informing drivers of:-.",
            symbol:require("./assets/quiz_questions/slipperyroad.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Wet conditions ahead"},
                {id:2, objective:"B", option: "Uneven road surface ahead"},
                {id:3, objective:"C", option: "Slippery road surface ahead"},
                {id:3, objective:"D", option: "Harsh bends in the road ahead"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q24.",
            question:"What is the meaning of the Police sign provided above?.",
            symbol:require("./assets/quiz_questions/frontandbehindstop.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "STOP Traffic approaching from the front"},
                {id:2, objective:"B", option: "STOP Traffic approaching from behind"},
                {id:3, objective:"C", option: "STOP traffic from the sides"},
                {id:4, objective:"D", option: "STOP Traffic approaching from both front and behind"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q25.",
            question:"What does this road sign mean?.",
            symbol:require("./assets/quiz_questions/giveproiritytooncoming.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "One-way traffic only"},
                {id:2, objective:"B", option: "Oncoming traffic must give way"},
                {id:3, objective:"C", option: "Give priority to oncoming traffic"},
                {id:3, objective:"C", option: "Two-way traffic ahead"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q26.",
            question:"What does this road sign mean?.",
            symbol:require("./assets/quiz_questions/railwaywithoutbarrier.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Railway crossing without barrier"},
                {id:2, objective:"B", option: "No through road"},
                {id:3, objective:"C", option: "Emergency vehicles only"},
                {id:4, objective:"D", option: "Do not cross"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q27.",
            question:"What is this road sign warning road users of?.",
            symbol:require("./assets/quiz_questions/roundabout.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Hump back bridges ahead"},
                {id:2, objective:"B", option: "Steep hills ahead"},
                {id:3, objective:"C", option: "Uneven road"},
                {id:3, objective:"C", option: "Speed bumps in road"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q28.",
            question:"What does this road sign mean?.",
            symbol:require("./assets/quiz_questions/stop_even_clear.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Stop even if it is clear"},
                {id:2, objective:"B", option: "Stop only if traffic is approaching"},
                {id:3, objective:"C", option: 'Give way only as stopping unnecessarily can be dangerous'},
                {id:4, objective:"D", option: 'It is advisable to stop due to dangerous junction'},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q29.",
            question:"Explain what this road sign means?.",
            symbol:require("./assets/quiz_questions/overtakingofvehiclesisprohibited.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "No double parking"},
                {id:2, objective:"B", option: "No overtaking"},
                {id:3, objective:"C", option: "Single File Traffic Only"},
                {id:4, objective:"D", option: "Two traffic lanes ahead"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q30.",
            question:"What should a driver do when approaching traffic lights that change from green to amber?.",
            symbol:require("./assets/quiz_questions/approachingtraffic.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Accelerate to clear the junction."},
                {id:2, objective:"B", option: "Sound the horn while proceeding through the junction."},
                {id:3, objective:"C", option: "Stop, unless it is unsafe to do SO."},
                {id:4, objective:"D", option: "Stop the vehicle immediately"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q31.",
            question:"What does the road sign mean?.",
            symbol:require("./assets/quiz_questions/turnleftahead.png"),
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "No entry"},
                {id:2, objective:"B", option: "Keep left"},
                {id:3, objective:"C", option: "Turn left ahead"},
                {id:4, objective:"D", option: "One-way system on left ahead"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q32.",
            symbol:require("./assets/quiz_questions/highwaycarriage.png"),
            question:"Where would these road markings be located?.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "One-way streets"},
                {id:2, objective:"B", option: "Level / railway crossings"},
                {id:3, objective:"C", option: "Highway and dual carriageways"},
                {id:3, objective:"C", option: "Zebra crossings"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q33.",
            symbol:require("./assets/quiz_questions/44heightprohibited.png"),
            question:"What does this road sign mean?.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Vehicles over 4.4 metres (14 foot 6 inches) in length prohibited"},
                {id:2, objective:"B", option: "Height restriction warning sign"},
                {id:3, objective:"C", option: "Vehicles over 4.4 metres (14 foot 6 inches) in height prohibited"},
                {id:3, objective:"C", option: "High winds! Risk to vehicles exceeding height shown"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q34.",
            symbol:require("./assets/quiz_questions/railwaycrossingwithoutbarriers.png"),
            question:"What is this sign warning road users of?.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Railway crossing ahead with barrier or gate"},
                {id:2, objective:"B", option: "Trams crossing ahead"},
                {id:3, objective:"C", option: "Train station ahead"},
                {id:3, objective:"C", option: "Railway crossing ahead without barrier or gate"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q35.",
            symbol:require("./assets/quiz_questions/highwaycarriage.png"),
            question:"Rectangular road signs provide.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Orders"},
                {id:2, objective:"B", option: "Warnings"},
                {id:3, objective:"C", option: "Information and directions"},
                {id:3, objective:"C", option: "Details of a hazard ahead"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q36.",
            symbol:require("./assets/quiz_questions/sharpdeviation.png"),
            question:"What does this chevron road sign mean?.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Sharp deviation in the road to the right"},
                {id:2, objective:"B", option: "Keep to the right"},
                {id:3, objective:"C", option: "Turn right only"},
                {id:4, objective:"D", option: "Road closed! Traffic follow signs for diversion"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q37.",
            symbol:require("./assets/quiz_questions/roadnarrowsbothsides.png"),
            question:"What does this road sign mean?.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Road narrows both sides"},
                {id:2, objective:"B", option: "End of dual carriageway"},
                {id:3, objective:"C", option: "Two-way traffic ahead"},
                {id:3, objective:"C", option: "Single lane ahead"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q38.",
            symbol:require("./assets/quiz_questions/bendright.png"),
            question:"What does this road sign mean?.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Keep right"},
                {id:2, objective:"B", option: "Warning of a right-hand bend ahead"},
                {id:3, objective:"C", option: "Turn right ahead"},
                {id:3, objective:"C", option: "Junction on the right ahead"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q39.",
            symbol:require("./assets/quiz_questions/keepleft.png"),
            question:"What does this road sign mean?.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Turn left"},
                {id:2, objective:"B", option: "Take the next exit"},
                {id:3, objective:"C", option: "Services on left Keep left"},
                {id:3, objective:"C", option: "Keep left"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q40.",
            symbol:require("./assets/quiz_questions/lorryapproach.png"),
            question:"What should you do as you approach this lorry?.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Slow down and be prepared to wait"},
                {id:2, objective:"B", option: "Make the lorry wait for you"},
                {id:3, objective:"C", option: "Flash your lights at the lorry"},
                {id:3, objective:"C", option: "Move to the right-hand side of the road"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q41.",
            symbol:require("./assets/quiz_questions/carreverse.png"),
            question:"What should you do if the vehicle starts reversing into the driveway?.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Move to the opposite side of the road"},
                {id:2, objective:"B", option: "Drive through as you have priority"},
                {id:3, objective:"C", option: "Sound your horn and be prepared to stop"},
                {id:3, objective:"C", option: "Speed up and drive through quickly"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q42.",
            symbol:require("./assets/quiz_questions/childrencrossing.png"),
            question:"What does this road sign mean?.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Pedestrian crossing ahead"},
                {id:2, objective:"B", option: "Sign warning pedestrians of busy road ahead"},
                {id:3, objective:"C", option: "School crossing patrol ahead"},
                {id:3, objective:"C", option: "Pedestrianized area - no vehicles permitted"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q43.",
            symbol:require("./assets/quiz_questions/yellowlines.png"),
            question:"The yellow criss-cross lines on roads inform?.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "A motorist that the yellow box area must be kept clear at all times"},
                {id:2, objective:"B", option: "May enter the yellow box only when their traffic light turns to green"},
                {id:3, objective:"C", option: "Motorists they are entering a tram crossing area"},
                {id:3, objective:"C", option: "keep the junction clear for crossing traffic, motorists must enter yellow box area if their exit is clear"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q44.",
            symbol:require("./assets/quiz_questions/narrowbridgeahead.png"),
            question:"what is the meaning of the above road sign?.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "it is a warning sign that there is a narrow road ahead."},
                {id:2, objective:"B", option: "It is a warning sign that there is a bridge ahead"},
                {id:3, objective:"C", option: "It is a warning sign that there is a narrow bridge ahead"},
                {id:4, objective:"D", option: "It is a warning sign that the road narrows on both sides ahead"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q45.",
            symbol:require("./assets/quiz_questions/approaching_roundabout.png"),
            question:"Approaching a roundabout you see this line. You must.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Give way to traffic from the left"},
                {id:2, objective:"B", option: "Stop at the line"},
                {id:3, objective:"C", option: "Give way to traffic from the right"},
                {id:3, objective:"C", option: "Continue ahead as other traffic must give way to you"},
                
            ],
            selectedObjective:""
    
        },
        
        ]
    },
]


export const theories = [
    {
        id: 1,
        indicator: 'GET_STARTED_WITH_DRIVING',
        theory: [
            { element: "header", content: "Driving definition" },
            { element: "image", content: require("./assets/basic_theory/driving_car.png") },
            { element: "paragraph", content: "Driving is the controlled operation and movement of a vehicle, including cars, motorcycles, trucks, buses, and bicycles. " },
            { element: "paragraph", content: "One requires permission to drive on public highways which is granted based on a set of conditions being met." },
            { element: "paragraph", content: "Drivers are required to follow the established road and traffic laws in the location they are driving. " },
            { element: "header", content: "Who is a driver? " },
            { element: "paragraph", content: "A driver is a person who operates a vehicle. He/She has skills and driving license that permits him or her to operate the vehicle while following the rules and regulations of the highway code. " },
            { element: "paragraph", content: "A vehicle is a piece of mechanize equipment that can be used as a means of transport. It may be cars, trains, hand carts, animal-driven carts, trucks, buses, wagons, motorbikes, bicycles, boats, etc " },
            { element: "paragraph", content: "Saloon cars include sedan, hatchback, coupe, wagon, and convertible while non- saloon cars are MPV, SUV, Pick-up truck and van.... Non-saloon cars have different base rates and progressive rates" },
            { element: "header", content: "Why do people drive? " },
            {
                element: "bullets", content: [
                    "It is an employment opportunity where people offer transportation services",
                    "To quicken transportation means",
                    "For sports purposes",
                    "Save time compared to walking"
                ]
            },
            { element: "header", content: "Driving skills" },
            { element: "image", content: require("./assets/basic_theory/driving_skills.png") },
            { element: "paragraph", content: "Driving in traffic is more than just knowing how to operate the mechanisms which control the vehicle; it requires knowing how to apply the rules of the road (which ensures safe and efficient sharing with  other users). " },
            { element: "paragraph", content: "An effective driver also has an intuitive understanding of the basics of vehicle handling and can drive responsibly. " },
            { element: "paragraph", content: "Driving skills required include physical skills to enable driver control direction,  acceleration, and deceleration whereas the mental skills enable driver to avoid or successfully handle an emergency driving situation cognitively. " },
            { element: "header", content: "Physical Skills " },
            {
                element: "bullets", content: [
                    "Proper hand placement and seating position ",
                    "Starting the vehicle's engine with the starting system ",
                    "Setting the transmission to the correct gearDepressing the  pedals with one's feet to accelerate, slow and stop the vehicle and if the vehicle is  equipped with a manual transmission, to modulate the clutch ",
                    "Steering the vehicle's direction with the steering wheel ",
                    "Applying brake pressure to slow or stop the vehicle ",
                    "Operating other important ancillary devices such as the indicators, headlights, parking brake and windshield wipers. ",
                    "Speed and Skid control",
                ]
            },
            { element: "header", content: "Mental Skills " },
            {
                element: "bullets", content: [
                    "Observing the environment for road signs, driving conditions, and hazards",
                    "Awareness of surroundings, especially in heavy and city traffic",
                    " Making good and quick decisions based on factors such as road and traffic conditions ",
                    "Evasive maneuvering",
                    "Understanding vehicle dynamics",
                    "Left- and right-hand traffic ",
                ]
            },
            { element: "paragraph", content: "In some countries like Uganda, both practical and theoretical basic knowledge of the rules of the road is assessed with a driving test(s) and those who pass are issued with a driving license. " },
            { element: "header", content: "Documents required while driving on the road" },
            {
                element: "bullets", content: [
                    "Valid driving licence ",
                    "Valid car road licence ",
                    "Copy of car logbook card",
                    "Inspection certificate",
                ]
            },
            { element: "header", content: "Driving License" },
            { element: "image", content: require("./assets/basic_theory/permit_specimen.png") },
            { element: "image", content: require("./assets/basic_theory/permit_specimen_back.png") },
            { element: "paragraph", content: "A driver's license is a legal authorization, or the official document confirming such an authorization, for a specific individual to operate one or more types of motorized vehicles-such as motorcycles, cars, trucks, or buses- on a public road. Such licenses are often plastic and the size of a credit card as shown in the image above" },
            { element: "paragraph", content: "In Uganda, a learner is required to have a Learner Driving Licence (LDL) to have provisions of the Traffic and Road Safety Act, 1998 (as amended) 2020 (Cap 361) and is hereby authorized to undertake instructions from a licenced instructor. From here, a learner can obtain his or her driving licence after being assessed by the IOV" },
        ]
    },
    {
        id: 2,
        indicator: 'RULES_OF_THE_ROAD',
        theory: [
            { element: "image", content: require("./assets/basic_theory/ruleofroad.png") },
            { element: "paragraph", content: "The rule of the road in Uganda is to keep left. Other countries that keep left include kenya, South Africa, Australia, the Caribbean, India, Japan. With this, one should overtake another vehicle on the right hand side.Countries like Rwanda, Burundi, and the DRC keep right" },
            { element: "header", content: "When can one overtake from the left?" },
            {
                element: "bullets", content: [
                    "When a vehicle is turning right or making a U-turn from the centre of the road and is indicating right",
                    "When driving on a multi-lane road and the vehicle can be overtaken in a marked lane to the left of the vehicle",
                    "When the front vehicle is stationary or accident ahead where its the only option to pass from the left",
                ]
            },
            { element: "header", content: "Places where one should never overtake" },
            {
                element: "bullets", content: [
                    " When approaching a sharp corner. You may not see oncoming vehicles",
                    " When approaching zebra crossing. You may knock down pedestrians crossing",
                    " When approaching brow of a hill. You may not see on coming vehicles",
                    " When approaching a junction. You may crash in the crossing train",
                    " When approaching a railway crossing. You need to first take note of the direction of the different vehicles",
                    " When approaching a humb bridge ahead.",
                    " When the road sign marks no overtaking area.",
                    " When the road is narrow.",
                ]
            },
            { element: "header", content: "When should one stop while on the road?" },
            {
                element: "bullets", content: [
                    "At stop signs",
                    "When traffic light signals red",
                    "When you get an accident",
                    "When signaled by a uniformed traffic officer",
                    "School children crossing signals",
                    "At pedestrian crossing area",
                    "At the junction joining the main road",
                    "While joining a roundabout",
                ]
            },
            { element: "header", content: "Places where one shouldn't park" },
            {
                element: "bullets", content: [
                    "On a bend or brow of a hill",
                    "On a bridge",
                    "On or near pedestrian crossing",
                    "On or near a junction",
                    "On a roundabout",
                    "On or near a railway crossing",
                    "On or near the bus station",
                    "While joining a roundabout",
                    "Entrances used by other vehicles",
                    "In the middle of the road",
                    "On pavement",
                    "At No parking signs or No stopping signs"
                ]
            },
            { element: "header", content: "Vehicles that should be given priority when driving" },
            {
                element: "bullets", content: [
                    "Head of state or presidential convoy",
                    "Ambulance",
                    "Police patrol",
                    "Fire brigades"
                ]
            },
            { element: "header", content: "Places where you should not use the horn" },
            { element: "image", content: require("./assets/mandatory_signs/soundingofhornsirensprohibited.png") },
            {
                element: "bullets", content: [
                    "At no horn sign",
                    "Inside schools",
                    "In game parks",
                    "At courts of law",
                    " On a pedestrian crossing",
                    "Late hours of resident areas",
                    "When it is not necessary to use the horn",
                ]
            },


        ]
    },
    {
        id: 3,
        indicator: 'IMPORTANT_CAR_PARTS',
        theory: [
            { element: "header", content: "Dash Board" },
            { element: "image", content: require("./assets/basic_theory/dashboard2.jpg") },
            {
                element: "bullets", content: [
                    "Automobile dashboard: the control panel of a car. Contains gauges used to measure speed, distance traveled, etc. It is generally located in front of the driver.",
                    "Rearview mirror: mirror used for looking backward.",
                    "Mirror: polished glass object that reflects an image.",
                    "Cigarette lighter: device used for lighting cigarette.",
                    "Vent: opening that allows air to circulate in the passenger compartment.",
                    "Glove compartment: storage compartment at the front of the passenger compartment.",
                    "Radio controls: button used to control the radio.",
                    "Accelerator pedal: foot-operated control that accelerates a vehicle.",
                    "Brake pedal: foot-operated control that slows and stops a vehicle.",
                    "Steering column: set of mechanisms used for steering a car.",
                    "Turn signal level: control that operates the turn signals.",
                    "Windshield wiper controls: hand lever controlling the windshield wiper.",
                    "Instrument panel: set of dials and pictograms that give information on the state of a vehicle.",
                    "Sun visor: movable device that shields against the sun."

                ]
            },
            { element: "header", content: "Instrumental panel" },
            { element: "image", content: require("./assets/basic_theory/car_dashboard.jpg") },
            { element: "paragraph", content: "The instrument panel is a cluster of gauges and switches that is mounted on the driver's side of the dashboard." },
            { element: "paragraph", content: "The gauges include the following;" },
            {
                element: "bullets", content: [
                    "Speedometer tells you the speed of your vehicle in MPH and KPH.",
                    "Tachometer shows how many rotations your engine is making per minute.",
                    "Odometer shows how many miles your car has traveled in its lifetime.",
                    "Fuel Gauge shows how much fuel remains in your car's tank.",
                    "Gear Display shows which gear your car is currently in.",
                    "Turn Signal Indicators flash when your turn signals are on; both will flash if you turn on your hazard lights.",
                    "Active System Lights alert you to parts of the vehicle that are activated, such as an open trunk or door.",
                ]
            },
            { element: "header", content: "Dashboard lights" },
            { element: "paragraph", content: "Modern cars have increasingly become computerized with a wide range of sensors that monitor the health and performance of the car." },
            { element: "paragraph", content: "Most car problems or issues are always communicated to the driver through the dashboard lights." },
            { element: "paragraph", content: "The red color means the problem is intense and should be checked immediately whereas the orange color is a warning that may be checked at any time convenient." },
            { element: "paragraph", content: "When you ignite the car, most of the indicator lights on the dashboard light up and stay lighted for a few seconds and then turn off." },
            { element: "paragraph", content: "The worry should only come if the light comes up while driving." },
            { element: "paragraph", content: "The following are the most common light indicators you should always keep in mind;" },
            { element: "header", content: "1) Temperature Warning Light" },
            { element: "image", content: require("./assets/basic_theory/auto-tempreture-warning-light.png") },
            { element: "paragraph", content: "This indicates that your car's engine is overheated and may need more coolant. If this light turns on while you are driving, pull over as soon as possible and turn off your engine." },
            { element: "paragraph", content: "You may need to add coolant to your vehicle's coolant reservoir; however, never open your vehicle's coolant reservoir cap while the engine is still hot." },
            { element: "paragraph", content: "You may need to wait for a while until the engine is cool, then you can open your coolant reservoir cap and add coolant." },
            { element: "header", content: "2) Oil Pressure Warning Light" },
            { element: "image", content: require("./assets/basic_theory/oil-pressure-warning-light.png") },
            { element: "paragraph", content: "This indicates that your oil level may be too low. Check your oil dipstick and add oil if necessary." },
            { element: "paragraph", content: "If your warning light is still lit after adding oil, visit a mechanic." },
            { element: "header", content: "3) Check Engine Warning Light" },
            { element: "image", content: require("./assets/basic_theory/check-engine-light.png") },
            { element: "paragraph", content: "This indicates that there is a serious problem with the engine that requires your immediate attention. You may need to take your vehicle to a mechanic right away." },
            { element: "paragraph", content: "If the engine light comes on in conjunction with other warning lights such as the temperature warning light or oil pressure warning light, pull over and turn off the engine and follow the instructions above for the issues relating to temperature and oil pressure." },
            { element: "header", content: "4) Tire Pressure Warning Light" },
            { element: "image", content: require("./assets/basic_theory/tire-pressure-warning-light.png") },
            { element: "paragraph", content: "This indicates that one or more your vehicle's tires have low pressure." },
            { element: "paragraph", content: "On occasions, this happens when one or more of your tires are getting close to going flat due to possible damage or because you may have driven over a nail or sharp object." },
            { element: "paragraph", content: "If this light comes on while you are driving on the highway at the higher speed, grab your steering wheel firmly, so you can control your car better in case of a tire blowout, start slowing down, and pull over the vehicle as soon as you can." },
            { element: "paragraph", content: "Then take your vehicle to a tire center for tire inspection." },
            { element: "header", content: "5) Brake System Warning Light" },
            { element: "image", content: require("./assets/basic_theory/brake-system-warning-light.png") },
            { element: "paragraph", content: "This indicates that there is a problem with the brake system." },
            { element: "paragraph", content: "Also, you may have left your parking brake on, or you may have low brake fluid." },
            { element: "paragraph", content: "If you do not have your parking brake on, your vehicle's brake fluid is okay, and your brake system Warning Light still comes on, you need to stop driving the vehicle and take the vehicle to a mechanic for repairing the brake system." },
            { element: "header", content: "6) ABS Warning Light" },
            { element: "image", content: require("./assets/basic_theory/abs-warning-light.png") },
            { element: "paragraph", content: "This indicates that your vehicle's anti-lock brake system (ABS) has been deactivated due to an issue with the ABS." },
            { element: "paragraph", content: "However, the standard brake system is working." },
            { element: "paragraph", content: "ABS is important for situations when you need to stop the vehicle suddenly, or you need to brake on a wet or slippery road." },
            { element: "paragraph", content: "Thus, it is recommended to fix the ABS issue as soon as possible." },
            { element: "paragraph", content: "If both the Brake System Warning Light and ABS Warning Light come on while you're driving, pull over immediately - there is a possibility that your brake system is not working. Take your vehicle to a mechanic." },
            { element: "header", content: "7) Electronic Stability Control Light" },
            { element: "image", content: require("./assets/basic_theory/electronic-stability-control-light.png") },
            { element: "paragraph", content: "This indicates that the vehicle's traction control is activated to prevent skidding; this is caused by slippery driving conditions." },
            { element: "header", content: "8) Transmission Temperature Warning Light" },
            { element: "image", content: require("./assets/basic_theory/electronic-stability-control-light.png") },
            { element: "paragraph", content: "This indicates that the transmission's current temperature is higher than normal." },
            { element: "paragraph", content: "Pull over and let the engine cool, and then check the coolant level and transmission fluid level." },
            { element: "paragraph", content: "if both are at the correct level and your transmission temperature warning light is still on, take your vehicle to a mechanic." },
            { element: "header", content: "9) Battery Warning Light" },
            { element: "image", content: require("./assets/basic_theory/battery-warning-light.png") },
            { element: "paragraph", content: "This indicates that your vehicle's charging system is not working correctly, and the engine is not getting enough power." },
            { element: "paragraph", content: "This problem may be caused by your battery's condition or its terminal connections, or your vehicle's alternator or alternator belt." },
            { element: "paragraph", content: "Don't turn off the engine because it may not turn on again and take the vehicle to a nearest part store or mechanic." },
            { element: "paragraph", content: "Part stores usually have a tester that can test the battery and alternator for you at no charge." },
            { element: "header", content: "10) Airbag Warning Light" },
            { element: "image", content: require("./assets/basic_theory/airbag-warning-light.png") },
            { element: "paragraph", content: "This indicates that your vehicle's airbag system is not working properly." },
            { element: "paragraph", content: "Take your vehicle to a mechanic or a dealer to fix this safety issue." },
            { element: "header", content: "11) Door Ajar Warning Light" },
            { element: "image", content: require("./assets/basic_theory/door-ajar-warning-light.png") },
            { element: "paragraph", content: "This indicates that there is a door or the trunk door is open." },
            { element: "paragraph", content: "Make sure that all of the doors and hood and trunk are closed before starting to drive your vehicle." },
            { element: "paragraph", content: "Also, if you leave your door open and the vehicle's light is on, it can drain your battery." },
            { element: "header", content: "12) Fog Lamp" },
            { element: "image", content: require("./assets/basic_theory/fog-lamp.png") },
            { element: "paragraph", content: "This indicates that the vehicle's front lamp is on." },
            { element: "header", content: "Wind Screen Wipers" },
            { element: "image", content: require("./assets/basic_theory/windwipers.jpg") },
            { element: "paragraph", content: "Wipers are one of the few highly visible components which can easily be changed by the DIY motorist." },
            { element: "paragraph", content: "They are essential for removing rain, snow, ice, dust, pollen or other debris from your windscreen so that you have a clear view when driving." },
            { element: "paragraph", content: "As often road accidents are caused by poor visibility, this makes windscreen wipers, along with lights and interior ventilation, vital for driving safety." },
            { element: "header", content: "A windscreen wiper is made of the following parts:" },
            {
                element: "bullets", content: [
                    "Windscreen wiper arm - this is usually made of metal. The arm transfers the movement from the wiper motor to the wiper itself.",
                    "Connectors - these connect the wiper blade to the wiper arm. It's important to use the right type of connector to ensure that the wiper works silently and efficiently.",
                    "Spring flexors (inside or outside the rubber blade) - the spring flexors ensure the rubber blade maintains an even pressure and even wiping action along its entire length. The curvature of the spring flexors matches your windscreen for perfect contact between the blade and the glass.",
                    "Rubber element - made from natural or chloroprene rubber, the edge ensures maximum flexibility as the blade changes angle at the end of each stroke across the windscreen. The rubber element that comes into contact with the glass is surface treated with a special coating and graphite powder to reduce friction and the precision formed profile ensures a smooth change of angle as the wiper cycles up and down the windscreen.",
                    "Spoiler - the spoiler is fitted to the windscreen wiper on the drivers' side to improve aerodynamic efficiency and reduce wind-lift when driving at high speeds.",
                ]
            },
            { element: "paragraph", content: "Out of all these parts, the rubber element is the part that is most subject to wear over time." },
            { element: "paragraph", content: "Especially as rubber deteriorates even without use due to exposure to the sun and weather." },
            { element: "paragraph", content: "The knob or switch of wipers is at the left side of the steering. It moves down words in 3 steps;" },
            {
                element: "bullets", content: [
                    "First step wipes while posing for around 3s. This step is suitable when drizzling",
                    "Second step wipes non-stop. This is suitable in moderate rains",
                    "Third step wipers faster and non- stop. This is suitable in heavy rains and storms"
                ]
            },
            { element: "header", content: "Horn" },
            { element: "paragraph", content: "It is used to alert other drivers." },
            { element: "paragraph", content: "Its switch is at the center of the steering wheel." },
            { element: "paragraph", content: "should be heard from at least 200 ft. away" },
            { element: "header", content: "Brakes" },
            { element: "image", content: require("./assets/basic_theory/car_brakes.jpg") },
            { element: "paragraph", content: "It is located to the left of the accelerator." },
            { element: "paragraph", content: "It's operated with your right foot. Always know what kind of brakes a vehicle has before you begin driving;" },
            { element: "paragraph", content: "Brakes can be;" },
            {
                element: "bullets", content: [
                    "Conventional: pump to stop suddenly; may lock and skid during a sudden stop or on ice.",
                    "Antilock Brake System: press firmly and hold to stop; less risk of skidding; ABS in all four wheels will allow you to steer as you brake; steer gradually and avoid jerking the wheel; steer in the direction you want to go as you check that the path is clear; never pump the pedal in a vehicle with ABS.",
                ]
            },
            { element: "header", content: "Hand Brakes/Parking Brakes" },
            { element: "image", content: require("./assets/basic_theory/handbreak.jpg") },
            { element: "paragraph", content: "It is also called the emergency brake." },
            { element: "paragraph", content: "It may be a pedal for the left foot, a dashboard lever, or a lever to the right of the driver's seat." },
            { element: "paragraph", content: "keeps the vehiclrre from rolling down a hill; can be used in an emergency if regular brakes fail." },

        ]
    },
    {
        id: 4,
        indicator: 'STEERING_WHEEL_USAGE',
        theory: [
            { element: "header", content: "The Steering Wheel:" },
            { element: "image", content: require("./assets/basic_theory/steering-wheels-2.png") },
            {
                element: "bullets", content: [
                    "The steering wheel and associated mechanisms has changed dramatically over the years.",
                    "The size, type of input needed, responsiveness of steering in regarding to directional change, changes in steering ratios and effort needed to turn the wheel have all changed.",
                    "Thus, recommendations relative to hand position on the steering wheel have become more flexible due to these changes",
                    "In order to maximize vehicle control, efficient steering involves balancing the steering wheel to avoid sudden movements and minimize steering wheel reversals.",
                ]
            },
            { element: "header", content: "NHTSA's Hand Position recommendations include:" },
            {
                element: "bullets", content: [
                    "Place both hands on the outside of the steering wheel on opposite sides.",
                    "Maintain a firm-but-gentle grip on the wheel.",
                    "Use your fingers to control the wheel rather than your palms. Keep your thumbs up along the steering wheel's face.",
                    "Don't turn the wheel when you're gripping it from the inside of its rim.",

                ]
            },
            { element: "header", content: "Select The Proper Steering Method For A Given Situation" },
            { element: "paragraph", content: "Your steering wheel technique is perhaps most important when turning your vehicle." },
            { element: "paragraph", content: "There are three standard steering methods that should be used when you're turning your car, according to NHTSA." },
            { element: "header", content: "1) Hand-to-Hand Steering: (commonly called push/pull steering)" },
            { element: "image", content: require("./assets/basic_theory/HandToHandSteering.gif") },
            {
                element: "bullets", content: [
                    "When using this method, your left hand grasps the wheel between 7 and 8 o'clock, and your right hand between 4 and 5 o'clock.",
                    "Depending on the direction you turn, your right or left hand pushes the wheel upand the opposite hand slides up, grasps the wheel and pulls down to turn",
                    "While the pulling hand moves down, the hand that initially pushed up slides back toward its original position to make adjustments as needed.",
                    "The driver should use the area on the wheel between 11 and 8 o'clock with the left hand and the area on the wheel between 1 and 8 o'clock with the right hand regardless of the direction of the turn.",
                    "Simply reverse the process to bring the vehicle back to the desired path.",
                    "Since your hands never cross over the steering wheel, there is less chance of an injury to the face, hands or arms induced by your hands or arms in the event of a frontal crash due to an air bag.",
                    "This is the preferred method of steering. Two and 10 o'clock is not recommended because it can be dangerous in vehicles with smaller steering wheels and equipped with air bags.",
                ]
            },
            { element: "header", content: "2) Hand-over-Hand Steering:" },
            { element: "image", content: require("./assets/basic_theory/HandOverHandSteering.gif") },
            {
                element: "bullets", content: [
                    "Use one hand steering when backing or operating vehicle controls (wipers, flashers, lights, etc) that require a reach from the steering wheel.",
                    "The placement of one hand on the steering wheel is critical to vehicle balance, steering reversals, and potential injury",
                    "When the driver is required to reach for an operating control, it is important to keep the other hand in the normal vehicle operating position of 8-9 o'clock or 3-4 o'clock, depending on steering wheel design. This keeps vehicle stability, reduces steering reversals, and allows for additional steering efforts as needed.",
                    "The only time that 12 o'clock is recommended is when backing a vehicle to the left or right and the driver has to turn in the seat in order to see the path of travel to the rear.",
                    "The way the wheel is turned when backing is the direction the vehicle will move to the rear",
                ]
            },
            { element: "header", content: "3) One Hand Steering:" },
            { element: "image", content: require("./assets/basic_theory/onehandsteering.gif") },
            {
                element: "bullets", content: [
                    "Use this method of steering when the turning at low speeds with limited visibility at an intersection or when parking the vehicle or recovering from a skid.",
                    "When using hand-over-had steering, your left hand grasps the steering wheel between 8 and 9 o'clock and your right hand between 3 and 4 o'clock.",
                    "Depending on the direction of the turn, use the right top third of the steering wheel to more the wheel to the right and use the left top third of the wheel to move the wheel to the left. Your right or left hand grasps the wheel and pushes up, the opposite hand lets go, reaches across the other arm, grasps the wheel and pulls the wheel up, over and down as appropriate.",
                    "Your right or left hand grasps the wheel and pushes up, the opposite hand lets go, reaches across the other arm, grasps the wheel and pulls the wheel up, over and down as appropriate.",
                    "As the wheel is being pulled up, the hand that initiated the pushing motion releases the wheel and returns to its original position.",
                    "Simply reverse the hand-over- hand process to bring the vehicle into your intended path.",
                ]
            },
            { element: "header", content: "Don't Forget About Proper Posture And Positioning" },
            { element: "image", content: require("./assets/basic_theory/adjustingsteeringwheel.gif") },
            { element: "paragraph", content: "Make sure your headrest, seat and mirrors are adjusted property to match your height. You should also be able to adjust your steering wheel position, depending on the vehicle model, according to Driving Tests." },
            { element: "paragraph", content: "Make all of these adjustments before you hit the road. Good posture can also make for a safer and more comfortable drive." },
            { element: "paragraph", content: "Move your tailbone to as close to your seat back as possible for better back support. Don't sit too close to your steering wheel." },
            { element: "paragraph", content: "You want to be close enough to reach the pedals and be able to push them with your whole foot, but not so close that you risk injuring your head, neck or chest in a collision." },
            { element: "paragraph", content: "You should also adjust your rear-view and side mirrors you can see the traffic behind you without having to crane your neck." },
            { element: "paragraph", content: "Save your head turning for when you need to check your blind spots before changing lanes." },

        ]
    },
    {
        id: 5,
        indicator: 'SPEED_ON_THE_ROAD',
        theory: [
            { element: "header", content: "Speed" },
            { element: "paragraph", content: "Drive at a safe speed for the place you are passing through. You MUST NOT drive at a speed which might be dangerous to others." },
            { element: "paragraph", content: "Keep checking your speed. For example; Slow down if you are approaching a bend, narrow bridge or junction or an area with lots of pedestrians." },
            { element: "paragraph", content: "Select the gear which will give you most control and smooth movement." },
            { element: "paragraph", content: "Drive more slowly if the road is wet or if fog or smoke, makes it difficult to see." },
            { element: "paragraph", content: "And drive more slowly at night when it is harder to see pedestrians, cyclists, and animals." },
            { element: "header", content: "Driving on unsealed roads" },
            { element: "paragraph", content: "Always drive more slowly on murrain (unsealed) roads, steer gently and avoid hard breaking. Unsealed road surfaces are slippery even when dry." },
            { element: "paragraph", content: "Your tyres have 50% less grip than on a sealed road, so the risk of loosing control and overturning a vehicle is much greater" },
            { element: "header", content: "Driving so that you can stop in time to avoid a crash" },
            { element: "paragraph", content: "Drive at a speed which will allow you to stop well within the distance you can see to be clear." },
            { element: "paragraph", content: "Leave enough space between you and the vehicle infront, so that you can stop safely if it sudenly slows down or stops." },
            { element: "paragraph", content: "The safe rule is never to get closer than the overall stopping distance." },
            { element: "paragraph", content: "Remember that if you double speed, your stoping distance increases by 3 times." },
            { element: "paragraph", content: "And on wet road and unsealed it may take twice as long to bring your vehicle to a stop." },
            { element: "paragraph", content: "Large vehicles always take longer to stop than lighter vehicles." },
            { element: "header", content: "Obey the speed limits" },
            { element: "paragraph", content: "You MUST NOT exceed the maximum speed limit for your vehicle. Remember that a speed limit does not mean that it is safe to drive at that speed." },
            { element: "paragraph", content: "Road and weather conditions vary and you must drive at a safe speed within the maximum speed limit." },
            { element: "paragraph", content: "Watch out for signs that set special local speed limits." },
            { element: "header", content: "Speed limit in town" },
            { element: "paragraph", content: "The Ministry of Works and Transport says the speed limit for driving in urban areas is 30km per hour. Some towns the speed limit varies to 20km/hr, 25km/hr, 40km/hr or 50km/hr depending on the nature of the town" },
            { element: "paragraph", content: "The driving speed limit along the highway in Uganda is 100 km per hour and away from the urban centers, it is 80 kilometers per hour while around the urban centers you have to maintain a speed of 50 to 30 kilometers per hour." },
            { element: "header", content: "Maximum speed Limits in Kilometers;" },
            { element: "header", content: "1. Motorcycle, Car, Jeep" },
            { element: "paragraph", content: "Paved road         100km/hr" },
            { element: "paragraph", content: "Gravel/unpaved road         80km/hr" },
            { element: "paragraph", content: "Town Areas             50km/hr" },
            { element: "paragraph", content: "Rural Areas         80km/hr" },
            { element: "header", content: "2. Van, Pickup or lighter trucks" },
            { element: "paragraph", content: "Paved road          80km/hr" },
            { element: "paragraph", content: "Gravel/unpaved road          60km/hr" },
            { element: "paragraph", content: "Town Areas          50km/hr" },
            { element: "paragraph", content: "Rural Areas             60km/hr" },
            { element: "header", content: "3. Minibus" },
            { element: "paragraph", content: "Paved road          80km/hr" },
            { element: "paragraph", content: "Gravel/unpaved road          60km/hr" },
            { element: "paragraph", content: "Town Areas          50km/hr" },
            { element: "paragraph", content: "Rural Areas             60km/hr" },
            { element: "header", content: "4. Bus or Coaches" },
            { element: "paragraph", content: "Paved road          80km/hr" },
            { element: "paragraph", content: "Gravel/unpaved road          60km/hr" },
            { element: "paragraph", content: "Town Areas          50km/hr" },
            { element: "paragraph", content: "Rural Areas             60km/hr" },
            { element: "header", content: "5. Truck or vehicles weighing more" },
            { element: "paragraph", content: "Paved road          60km/hr" },
            { element: "paragraph", content: "Gravel/unpaved road          60km/hr" },
            { element: "paragraph", content: "Town Areas          50km/hr" },
            { element: "paragraph", content: "Rural Areas             60km/hr" },
            { element: "header", content: "6. Any vehicle carrying a trailer" },
            { element: "paragraph", content: "Paved road          80km/hr" },
            { element: "paragraph", content: "Gravel/unpaved road          60km/hr" },
            { element: "paragraph", content: "Town Areas          50km/hr" },
            { element: "paragraph", content: "Rural Areas             60km/hr" },
            { element: "header", content: "7. Tractors" },
            { element: "paragraph", content: "Paved road          40km/hr" },
            { element: "paragraph", content: "Gravel/unpaved road          40km/hr" },
            { element: "paragraph", content: "Town Areas          40km/hr" },
            { element: "paragraph", content: "Rural Areas             40km/hr" },
        ]
    },
    {
        id: 6,
        indicator: 'AUTOMATIC_AND_MANUAL_CARS',
        theory: [
            { element: "header", content: "Automatic Car" },
            { element: "paragraph", content: "An automatic car is an automobile with an automatic transmission that doesn't require a driver to shift gears manually." },
            { element: "paragraph", content: "Transmissions, also known as gearboxes, help to direct the rotational force and speed of a car." },
            { element: "paragraph", content: "Therefore, automatic transmissions switch gear ratios as the vehicle moves." },
            { element: "paragraph", content: "Automatic cars can easily be identified by two foot pedals" },
            { element: "image", content: require("./assets/basic_theory/automatic_car.jpg") },
            {
                element: "bullets", content: [
                    "P (PARK) - the gear selector should be in this position when the car is parked as it typically locks the transmission so that the car cannot move. In conjunction with this, the parking brake (hand brake) may also be applied. On most cars, the engine cannot be started unless the lever is in this (or 'N') position.",
                    "R (REVERSE) - selecting this position allows the vehicle to be driven in the reverse (backwards) direction.",
                    "N (NEUTRAL) - in this position, the engine is disconnected from the drive train (gears) and the vehicle will not be propelled in either direction when the gas (accelerator) pedal is pressed. The wheels are not locked and the vehicle will be able to roll downhill if the brake pedal is not pressed.",
                    "D (DRIVE) - this is the position that is typically used when the vehicle is being driven. As the vehicle increases (or decreases) in speed, the automatic gear box will select the correct gear for both speed and road conditions.",
                    "2 (GEAR 2) - typically, automatic gear boxes have 3 of 4 forward gears, so some vehicles may have both 2 and 3 marked on the hear selector. By using this position, the driver 'locks' the transmission in a lower gear so that the engine will run with increased revolutions. This is useful when rapid acceleration is desired. It should be noted that maintaining high revolutions in lower gears will increase the fuel consumption of the vehicle and also the stresses on the vehicle and passengers. It should therefore be used for short periods only.",
                    "L (LOW) - (may be indicated by '1') this is the lowest gear (or 1st gear) available. This position is useful when the vehicle needs to negotiate difficult terrain (such as a steep incline with a poor surface). For downward slopes, the LOW gear provides additional braking through the engine.",
                    "OD (OVERDRIVE) - for vehicles fitted with this option, an extra gear is provided that has a lower ratio than the normal top gear. The power output delivered by this gear is low in comparison to the normal gears and is used for high speed cruising (on interstates / motorways etc). Engine revolutions are reduced, as are noise levels. Fuel consumption is improved",

                ]
            },
            { element: "header", content: "Important things you should know about automatic cars;" },
            {
                element: "bullets", content: [
                    "Engine cannot start or ignite except the gear lever is stationed in parking or neutral",
                    "Gear lever-lock can only enter if the brakes are pressed",
                    "In case you run out of fuel or any other failure, move the gear lever to neutral and roll the car at the roadside as you call for rescue. It is not advisable to leave the car in the middle of the road",
                ]
            },
            { element: "header", content: "How to start moving an automatic car" },
            { element: "paragraph", content: "Although automatic gearboxes are generally very easy to use, the confusion comes when starting and stopping." },
            { element: "paragraph", content: "When you get into a car with an automatic gearbox, it should have been left in 'park(P)'." },
            { element: "paragraph", content: "Put your right foot on the left-hand pedal (the brake) and push down." },
            { element: "paragraph", content: "Lower the handbrakes down (Note: make sure you do not start moving with the handbrake left up)." },
            { element: "paragraph", content: "Start the car using the key or start button, and (with your foot still on the brake), move the shifter to 'D' (if you want to drive forward) or 'R' (if you wish to reverse)." },
            { element: "paragraph", content: "Lifting your foot off the brake will cause most automatic vehicles to 'creep' forwards - this helps with parking or in low-speed traffic." },
            { element: "paragraph", content: "It might need a bit more gas if you're on a hill or want to move off quicker." },
            { element: "paragraph", content: "Once moving, the gearbox will select the correct gear for the situation and do all the hard work for you." },
            { element: "paragraph", content: "When you've finished your journey and the car is stopped, keep your foot on the brake and shift the lever to 'P', lift up the handbrake, turn the ignition off, left the foot brakes and exit the car." },
            { element: "header", content: "Manual Car" },
            { element: "paragraph", content: "Manual cars have a clutch pedal and a shifter the driver uses to manually change gears." },
            { element: "paragraph", content: "A manual car consists of a set of gears along a pair of shafts, called the input and output shafts." },
            { element: "paragraph", content: "With a manual transmission, the driver has to select the proper gear and engage or disengage the clutch." },
            { element: "paragraph", content: "A manual car has 3 pedals with the third one being the clutch." },
            { element: "paragraph", content: "Every time you make a shift of gears, you have to push down the clutch first." },
            { element: "image", content: require("./assets/basic_theory/manual_car.jpg") },
            { element: "header", content: "Gear No.1" },
            {
                element: "bullets", content: [
                    "This gear starts the movement of the car",
                    "It is the strongest gear",
                    "It is the slowest gear",
                    "It consumes fuel most",
                    "It climbs the steepest hills",
                    "It is used in traffic jam",
                    "It is the best in humps and pot holes",
                    "It is engaged by L-movement from the centre(N) shift to left line and then upwards to one (1)",
                ]
            },
            { element: "header", content: "Gear No.2" },
            {
                element: "bullets", content: [
                    "It is engaged after stabilizing on the road with a little speed from gear No.1",
                    "It is the most used gear in traffic jam, pot holes and humps",
                    "It is used at junctions and roundabouts",
                    "It provides a steadily slow speed",
                    "It is engaged by moving the handle straight and downwards from 1 to 2."
                ]
            },
            { element: "header", content: "Gear No.3" },
            {
                element: "bullets", content: [
                    "This is engaged after gear No.2",
                    "It increases speed",
                    "It can also climb some hills if already on speed",
                    "It is engaged by moving back to the centre point (N) then moving straight upwards to 3",
                ]
            },
            { element: "header", content: "Gear No.4" },
            {
                element: "bullets", content: [
                    "This is engaged after gear No.3",
                    "It is a high speed gear",
                    "It can also climb some hills if already on speed from the bottom",
                    "It is engaged by moving from point 3 the pause at centre point (N) then moving straight down to 4",
                ]
            },
            { element: "header", content: "Gear No.5" },
            {
                element: "bullets", content: [
                    "It is a maximum speed gear and runs so fast",
                    "It is engaged after 4",
                    "It works on clear roads like highways",
                    "It is engaged from gear No.4 to the centre(N) shift to right line and then upwards to 5",
                ]
            },
            { element: "header", content: "Reverse Gear-R" },
            {
                element: "bullets", content: [
                    "It moves the car backwards",
                    "It is a strong gear just like gear No.1",
                    "It is engaged from the centre(N) shift to right line and then downwards to R",
                    "Avoid moving directly from point 5 to R while in motion",
                ]
            },
            { element: "header", content: "How does a munual car work?" },
            { element: "paragraph", content: "To effect a gear change, selecting first gear, for example, the driver depresses the clutch, disengaging the input shaft. Using the shift lever, the driver selects first gear, and the linkage moves the shift fork to connect the 1st-2nd locking collar with 1st gear, locking it to the output shaft." },
            { element: "paragraph", content: "Now, when the clutch is released, engaging the input shaft, the output shaft turns because 1st gear is locked to the output shaft by the locking collar." },
            { element: "paragraph", content: "As the driver speeds up, selecting 2nd gear simply involved repeating the process, but moving the shift lever to 2nd gear." },
            { element: "paragraph", content: "The shift shaft moves the shift fork to disengage 1st gear and engage 2nd gear." },
            { element: "paragraph", content: "Releasing the clutch engages the input shaft again, this time routing power through 2nd gear." },
            { element: "paragraph", content: "Changing to 3rd gear involves using a second shift linkage, shift fork, and locking collar, this one between 3rd and 4th gears." },
            { element: "paragraph", content: "Because the countershaft and output shaft turn at different speeds, moving from 1st to 2nd gear, trying to engage a higher gear while the vehicle is moving slower would be like trying to turn the shaft at two different speeds, which is impossible." },
            { element: "paragraph", content: "Synchronizer rings are like tiny clutches, using friction to bring the locking collar and the gear to the same speed, at which point they easily mesh and power can be reapplied." },
        ]
    },
    {
        id: 7,
        indicator: "CAR_LIGHTS_AND_WHEN_TO_USE_THEM",
        theory: [
            { element: "header", content: "Single indicators" },
            { element: "paragraph", content: "When joining the main road or turning left or right. This informs the other road users around I you of your intentions or the direction you are about to take." },
            { element: "paragraph", content: "When intending to overtake and also when allowing or denying others to overtake you." },
            { element: "paragraph", content: "When intending to stop or even slowing down to later stop. Also when one has intention of changing a driving lane." },
            { element: "header", content: "Double indicators" },
            { element: "paragraph", content: "When a vehicle breaks down on the road. This could be employed both at night and during day, most especially if it happens in a bad spot." },
            { element: "paragraph", content: "Denying other vehicles to overtake yours. This could be because there is an emergency or visible danger ahead. Employing double indicators would be a means of informing others not to proceed." },
            { element: "header", content: "Parking lights" },
            { element: "paragraph", content: "These are lit after parking by the roadside, especially after 7pm, or while driving in dusty, smoke or fog/mist conditions." },
            { element: "header", content: "Number plate lights" },
            { element: "paragraph", content: "These are meant to provide light to your number plate in the night. It is punishable by night patrol police if the lights are malfunction." },
            { element: "header", content: "Brake lights" },
            { element: "paragraph", content: "These light up red behind to indicate that the driver in front is intending to reduce speed or stop" },
            { element: "header", content: "Headlights" },
            { element: "image", content: require("./assets/basic_theory/lowbeamvshighbeam.png") },
            { element: "paragraph", content: "While driving through relatively better-lit areas, such as trading centres, one should endeavour to dim their headlights. But as soon as you go through, you can adjust back to full. However, as soon as you see an oncoming vehicle, you must immediately go back to dim and also expect the other driver to do the same." },
            { element: "paragraph", content: "That is best practice. In case you dim your lights and the other driver does not do likewise, then: Go back to full and immediately back to dim. Here, you are trying to 'wake him up." },
            { element: "paragraph", content: "But if he still fails to respond, repeat the process." },
            { element: "paragraph", content: "If he still doesn't respond, give up and slow down to give way. This is because the other driver could be sleepy, a learner or drunk. If you don't act wisely, it could cost you a life." },
            { element: "paragraph", content: "Headlights could also be used during heavy rains during daylight, in heavy fog/ mist or on very dusty roads." },

        ]
    },
    {
        id: 8,
        indicator: "ROAD_OFFENSES_AND_PUNISHMENT",
        theory: [
            { element: "paragraph", content: "It is important to note there are various traffic rules and regulations that have been set by the Ugandan government to ensure a safe and secure road trip to all travelers." },
            { element: "paragraph", content: "Due to some sort of road carelessness by many drivers, the Ugandan government has come up with traffic penalties purposely to enforce a secure road atmosphere." },
            { element: "paragraph", content: "The traffic rules and regulations should be strictly followed otherwise you will be subjected to tough penalties with either jail or fee charges." },
            { element: "paragraph", content: "The following are the top Uganda traffic offenses and penalties you may face failure to obey the traffic rules;" },
            { element: "header", content: "a) Overloading" },
            { element: "paragraph", content: "This is not only dangerous to human life but also to roads so it is strongly prohibited by the Uganda National Road Authority." },
            { element: "paragraph", content: "Failure to do so the maximum fine is 1,200,000(ugx) and the minimum is 300,000(ugx) or imprisonment of not less than two years and six months minimum." },
            { element: "header", content: "b) Driving a vehicle under DMC (Dangerous Mechanical Condition)" },
            { element: "paragraph", content: "Unfortunately, this is one of the regulations that is awfully abused yet it's punishable under the Traffic and Road safety regulations." },
            { element: "paragraph", content: "This roadsigns_category_theory attracts a fee of 300,000/= and 1.2 million ugx or imprisonment of not less than two years or six months minimum." },
            { element: "header", content: "c) Careless driving" },
            { element: "paragraph", content: "This involves driving in a way that puts other road users' lives in danger and your own at risk. It is considered as an abuse of road guidelines." },
            { element: "paragraph", content: "This crime leads to a fine of between 1.2 million ugx and 1.8 million ugx or even imprisonment of two to three years." },
            { element: "header", content: "d) Driving under influence of Alcohol" },
            { element: "paragraph", content: "It's also among the grossly abused regulations but fortunately, the campaign nicknamed ''kawunyemu'' was launched and since 2014, it has been operating." },
            { element: "paragraph", content: "If caught driving under the influence of alcohol, the penalty is imprisonment between six months and two years or 300,000ugx and 1.2 million ugx." },
            { element: "header", content: "e) Driving without a valid driver's license" },
            { element: "paragraph", content: "Many traffic offices categorize this as illegal driving yet you do not qualify." },
            { element: "paragraph", content: "In this case the fine ranges from 600,000ugx to the maximum of 3,000,000ugx or a prison term of between one to five years." },
            { element: "header", content: "f) Failure to report an accident" },
            { element: "paragraph", content: "This is an offence committed either knowingly or unknowingly and many road users just drive off a crime scene not knowing that it's their obligation to stop and report the fatal accident." },
            { element: "paragraph", content: "The fine is 100,000ugx and the maximum is 600,000ugx." },
            { element: "header", content: "g) Exceeding the speed limit" },
            { element: "paragraph", content: "Exceeding demarcated speed limits by the traffic authorities is dangerous and punishable. Speed limits varry according to area (town, densely and sparsely populated areas), tarmac and marram roads, etc" },
            { element: "paragraph", content: "Failure to obey the speed limits may result into a fatal accident." },
            { element: "paragraph", content: "The fine is 300,000ugx and the maximum is 1.2 million ugx or a prison term of between six months to two years." },
            { element: "header", content: "h) Driving unlicensed vehicle" },
            { element: "paragraph", content: "All vehicles should have a road license to be allowed move on the road" },
            { element: "paragraph", content: "Failure to pay is punishable." },
            { element: "paragraph", content: "The fine is 200,000ugx and the maximum is 800,000 ugx or a prison term of between one to two years." },
            { element: "header", content: "i) Causing injury or death through dangerous driving" },
            { element: "paragraph", content: "Any driver should value human life while on the road. Dangerous driving involving violating road rules for example overtaking close to zebra crossing may injury or cause death to crossing pedestrians." },
            { element: "paragraph", content: "The fine to this occurrence is 1.5 million ugx and the maximum is 4 million ugx or a prison term of between two to five years." },
        ]
    },
    {
        id: 9,
        indicator: "IMPORTANT_ROAD_SIGNS_CATEGORIES",
        theory: [
            { element: "paragraph", content: "There are three (3) main categories of road signs namely;" },
            { element: "header", content: "1) Mandatory signs" },
            { element: "paragraph", content: "These are also known as prohibitory or regulatory signs." },
            { element: "paragraph", content: "These are signs which are obligatory on the traffic which uses a specific area of road." },
            { element: "paragraph", content: "These signs indicate what must one do, rather than must not do." },
            { element: "paragraph", content: "Mandatory Road signs are generally round in shape with red border." },
            { element: "paragraph", content: "Examples of regulatory signs include stop, yield, do not enter, no turn on left, no turn on right, no parking, weight limit, speed limit, one way and HOV lane ahead." },
            { element: "paragraph", content: "They are used to regulate the flow of traffic, regulatory signs are arguably the most important type of traffic signs." },
            { element: "paragraph", content: "Violation of these signs attracts heavy fines and punishments." },
            { element: "header", content: "2) Warning signs" },
            { element: "paragraph", content: "These are also known as caution or hazard signs." },
            { element: "paragraph", content: "Warning signs let you know that road changes are coming up on your drive. These can be permanent or temporary traffic hazards and obstacles." },
            { element: "header", content: "Warning signs can warn you about;" },
            {
                element: "bullets", content: [
                    "Merging lanes or added lanes",
                    "Narrowing of the road",
                    "Corners or changes in the direction of the road",
                    "Highway and motorway entry and exits",
                    "Crossings on the road for pedestrians, farm animals, or wildlife",
                    "Roundabouts, stops, or giveways",
                    "Changes to the road's surface or condition, for example, road humps, unsealed roads, rain, hail or ice, or falling rocks.",
                ]
            },
            { element: "header", content: "3) Information signs" },
            { element: "paragraph", content: "These are also known as facility signs." },
            { element: "paragraph", content: "These signs are used to guide road users along routes, inform them about destination and distance, identify points of geographical and historical interest and provide other information that will make the road travel easier, safe and pleasant." },

        ]
    },
    {
        id: 10,
        indicator: "OTHER_IMPORTANT_ASPECT_ON_THE_ROAD",
        theory: [
            { element: "header", content: "Major causes of road accidents" },
            {
                element: "bullets", content: [
                    "Over Speeding",
                    "Driving under influence of drugs",
                    "Careless driving",
                    "Over loading",
                    "Reckless overtaking",
                    "Ignorance of traffic signals",
                    "Driving an un-roadworthy vehicle(A car in DMC)",
                    "Driving when you are sick",
                    "Weather especially heavy storms or fog",
                    "Texting while driving",
                    " Drinking and driving",
                    "Uneven or poor roads",
                ]
            },
            { element: "header", content: "Rules of model town" },
            {
                element: "bullets", content: [
                    "Use the shortest and most correct route without using the parking",
                    "Use the longest and most correct route without using the parking",
                    "Use the parking if there is no other route",
                ]
            },
            { element: "header", content: "Tools you should have in a car" },
            {
                element: "bullets", content: [
                    "Jack",
                    "Spanner",
                    "Jack raiser",
                    "Caution sign",
                    "Spare tyre",
                    "Empty jerrycan",
                    "Jumper cables",
                    "First Aid box",
                ]
            },
            { element: "header", content: "Vehicles a driver should be in charge of;" },
            {
                element: "bullets", content: [
                    "Your own vehicle",
                    "One ahead of you",
                    "One behind you",
                    "One overtaking you",
                    "One opposite",
                ]
            },
            { element: "header", content: "Most vulnerable people on the road" },
            {
                element: "bullets", content: [
                    "The Lame",
                    "The Blind",
                    "Children",
                    "The Aged",
                    "Pregnant women",
                ]
            },
            { element: "header", content: "Driver killers in E.Africa;" },
            {
                element: "bullets", content: [
                    "HIV/AIDS especially among trailer drivers on town stop overs",
                    "Malaria for no sleeping under treated mosquito nets",
                    "Accidents due to reckless driving and over speeding",
                    "Heart related diseases due to over sitting with less exercise",
                ]
            },

        ]
    },
    {
        id: 11,
        indicator: "INTRODUCTION_TO_SIMPLE_MECHANICS",
        theory: [
            { element: "header", content: "Any driver on the road today should know some basic machanics. Why?" },
            { element: "paragraph", content: "1. It can help you identify what could be the problem with your car before you take it to the garage. NOTE, it is very important to visit a mechanical doctor when you know what is wrong than going with blind minds." },
            { element: "paragraph", content: "2. It can help you keep the life of your engine by not just driving even when it is overdue for servicing.3. It is important for drivers to know when you check the following:" },
            { element: "paragraph", content: "- Power Steering Fluid -- Atleast twice a week" },
            { element: "paragraph", content: "-Brake Fluid - Atleast once a week" },
            { element: "paragraph", content: "-Water in the radiator - This should be done daily incase you move long distances" },
            { element: "paragraph", content: "-Oil levels in the engine -- Check atleast every after two weeks." },
            { element: "paragraph", content: "-Water in the batter -- Check atleast every after two weeks" },
            { element: "paragraph", content: "- Indicators and Other lights - Should be checked often as failure for one not to work can easily cause an accident, however small it could be." },
            { element: "paragraph", content: "With that, you will be safer on the road." },
            { element: "header", content: "Parts of A Car" },
            { element: "image", content: require("./assets/simple_mechanics/car_parts.png") },
            { element: "header", content: "Some of the functions or use of these parts." },
            { element: "header", content: "1. Radiator" },
            { element: "paragraph", content: "It works as a cooling system. Top up with coolant mix with normal clean water." },
            { element: "header", content: "2. Battery" },
            { element: "paragraph", content: "Stores and supplies the current to all parts of the electric systems eg self starter. Top up with iodized water" },
            { element: "header", content: "3. Fan" },
            { element: "paragraph", content: "To cool water which circulates in the engine" },
            { element: "header", content: "4. Sump guard" },
            { element: "paragraph", content: "Keeps engine oil" },
            { element: "header", content: "5. Oil filter" },
            { element: "paragraph", content: "Filtering oil which goes to the engine when it is clean." },
            { element: "header", content: "6. Fuel Pump" },
            { element: "paragraph", content: "Lifting fuel from tank to combustion chambers." },
            { element: "header", content: "7. Self Starter" },
            { element: "paragraph", content: "For igniting the engine." },
            { element: "header", content: "8. Gear Box" },
            { element: "paragraph", content: "To engage the gears" },
            { element: "header", content: "9. Distributor" },
            { element: "paragraph", content: "Used to supply power to the spark plugs." },
            { element: "header", content: "10. Alternator" },
            { element: "paragraph", content: "This is power supply which chargers the battery" },
            { element: "header", content: "11. Engine Oil" },
            { element: "paragraph", content: "To lubricate, cooling & cleaning metals. Check using the engine oil-deep-stick." },
            { element: "header", content: "12. Brake Fluid" },
            { element: "paragraph", content: "To respond to the efficeincy of the brakes." },
            { element: "header", content: "13. Spark Plus" },
            { element: "paragraph", content: "Burning fuel and air in the combustion chambers." },
            { element: "header", content: "14. Air Cleaner" },
            { element: "paragraph", content: "To clean fresh air, this goes to the engine." },
            { element: "header", content: "15. Power Steering Fluid" },
            { element: "paragraph", content: "Goes through steering box to make the steering flexible or soften" },

        ]

    },
    {
        id: 12,
        indicator: "HOW_TO_FIX_A_CAR_TIRE",
        theory: [
            { element: "header", content: "Changing a flat is one of the most important vehicle repair skills you can have. Getting a flat tyre is frustrating but replacing it with the spare tyre is not difficult.." },
            { element: "header", content: "STEPS IN REPLACING CAR TYRES" },
            { element: "header", content: "STEP 1" },
            { element: "paragraph", content: "Move the car off the road, try as much as possible to put up hazard or warning plates." },
            { element: "header", content: "STEP 2" },
            { element: "paragraph", content: "Please put a chock before raising the tyre to avoid car being moved ahead or backwards." },
            { element: "header", content: "STEP 3" },
            { element: "paragraph", content: "Loosen the nuts before raising the jack. Car can fall off jack if you loosen them or harden them when raised." },
            { element: "header", content: "STEP 4" },
            { element: "paragraph", content: "When loosening turn anticlockwise and when putting back, turn clockwise." },
            { element: "header", content: "STEP 5" },
            { element: "paragraph", content: "Make sure that your spare tyre is always in a good working condition - ALWAYS." },
            { element: "header", content: "STEP 6" },
            { element: "paragraph", content: "Any disturbances with wheel-caps and specialized tyres inquire and know how to fixyour tyre in 60 seconds." },
            { element: "header", content: "STEP 7" },
            { element: "paragraph", content: "After fixing, do not forget chocks or any of your tools." },

        ]

    },
    {
        id: 13,
        indicator: "HOW_TO_JUMPSTART_YOUR_CAR",
        theory: [
            { element: "header", content: "You will probably need to know how to jumpstart your car at some point and it can save you a lot of time waiting for roadside assistance." },
            { element: "header", content: "STEPS TO JUMPSTART YOUR CAR" },
            { element: "header", content: "STEP 1" },
            { element: "paragraph", content: "Put both vehicles in neutral and turn them off." },
            { element: "header", content: "STEP 2" },
            { element: "paragraph", content: "Attach a red clip to the positive terminal of the battery in your car and the other to the positive battery terminal of the other car." },
            { element: "header", content: "STEP 3" },
            { element: "paragraph", content: "Attach a black clip to the other car's negative battery terminal." },
            { element: "header", content: "STEP 4" },
            { element: "paragraph", content: "Attach the other black clip to an unpainted metal surface on your car." },
            { element: "header", content: "STEP 5" },
            { element: "paragraph", content: "Start the engine and do not turn your car off until you have driven it for a few minutes." },

        ]

    },
    {
        id: 14,
        indicator: "CHANGE_OIL",
        theory: [
            { element: "header", content: "Clean oil helps your car run better and your engine last longer. Check your oil regularly and change it when required." },
            { element: "header", content: "STEPS IN CHANGING THE OIL" },
            { element: "header", content: "STEP 1" },
            { element: "paragraph", content: "Remove the drain plug." },
            { element: "header", content: "STEP 2" },
            { element: "paragraph", content: "Unscrew the oil filter and empty it." },
            { element: "header", content: "STEP 3" },
            { element: "paragraph", content: "Put the plug back." },
            { element: "header", content: "STEP 4" },
            { element: "paragraph", content: "Pour in the new oil." },

        ]

    },
    {
        id: 15,
        indicator: "REPLACE_BRAKE_PADS",
        theory: [
            { element: "header", content: "Your brakes should always be in excellent condition to avoid risking an accident. Changing brake pads is similar to changing a flat tire." },
            { element: "header", content: "STEPS IN REPLACING BRAKE PADS" },
            { element: "header", content: "STEP 1" },
            { element: "paragraph", content: "Use a jack to lift the car." },
            { element: "header", content: "STEP 2" },
            { element: "paragraph", content: "Remove the tyres." },
            { element: "header", content: "STEP 3" },
            { element: "paragraph", content: "Remove the slider bolts." },
            { element: "header", content: "STEP 4" },
            { element: "paragraph", content: "Remove the old brake pads." },
            { element: "header", content: "STEP 5" },
            { element: "paragraph", content: "Put the new brake pads on and secure them with the slider bolts." },
            { element: "header", content: "STEP 6" },
            { element: "paragraph", content: "Put the tires back on." },
        ]
    },
    {
        id: 15,
        indicator: "REPLACE_FILTER",
        theory: [
            { element: "header", content: "Air filters are often overlooked but protect your vehicle's engine from contaminants such as dust." },
            { element: "header", content: "STEPS IN REPLACING AIR FILTERS" },
            { element: "header", content: "STEP 1" },
            { element: "paragraph", content: "Open the hood and find the air filter box. It is the black box with a large hose coming out of its side." },
            { element: "header", content: "STEP 2" },
            { element: "paragraph", content: "Open the air filter box and take out the old filter." },
            { element: "header", content: "STEP 3" },
            { element: "paragraph", content: "Put the new one in and close the box." },

        ]
    },
    {
        id: 16,
        indicator: "REPLACE_HEADLIGHTS_OR_LIGHTS",
        theory: [
            { element: "header", content: "A broken light on your car can be a safety hazard and get you a ticket. Fortunately, it is easy to fix yourself." },
            { element: "header", content: "STEPS IN REPLACING LIGHTS" },
            { element: "header", content: "STEP 1" },
            { element: "paragraph", content: "Remove the screws connecting the frame of the light to the bracket." },
            { element: "header", content: "STEP 2" },
            { element: "paragraph", content: "Disconnect the wires powering the bulb." },
            { element: "header", content: "STEP 3" },
            { element: "paragraph", content: "Replace the old bulb with a new one and put everything back." },
        ]
    },
    {
        id: 17,
        indicator: "CHANGE_WIPER_BLADES",
        theory: [
            { element: "header", content: "Windshield wiper blades are an often forgotten but very important vehicle safety feature. They should always be in perfect shape and you can easily replace them yourself." },
            { element: "header", content: "STEPS TO CHANGE YOUR WIPER BLADES" },
            { element: "header", content: "STEP 1" },
            { element: "paragraph", content: "Lift the wiper up off the windshield and press the tab to take off the old wiper." },
            { element: "header", content: "STEP 2" },
            { element: "paragraph", content: "Put the new one on." },
        ]
    },
    {
        id: 18,
        indicator: "CHANGE_THE_BATTERY",
        theory: [
            { element: "header", content: "Check your battery regularly and know how to replace it to avoid the hassle of your car not starting. Changing your car battery is easy." },
            { element: "header", content: "STEPS IN CHANGING THE CAR BATTERY" },
            { element: "header", content: "STEP 1" },
            { element: "paragraph", content: "Remove the covers." },
            { element: "header", content: "STEP 2" },
            { element: "paragraph", content: "Disconnect the negative cables and remove the clamp from the post." },
            { element: "header", content: "STEP 3" },
            { element: "paragraph", content: "Disconnect the positive cables and clamp." },
            { element: "header", content: "STEP 4" },
            { element: "paragraph", content: "Remove the screws." },
            { element: "header", content: "STEP 5" },
            { element: "paragraph", content: "Replace the old battery with a new one." },
            { element: "header", content: "STEP 6" },
            { element: "paragraph", content: "Put the cable clamps back." },
        ]
    },
    {
        id: 19,
        indicator: "DEFENSIVE_DRIVING",
        theory: [
            { element: "header", content: "Define defensive driving" },
            { element: "paragraph", content: "Defensive driving is essentially driving in a manner that utilises safe driving strategies to enables motorists address identified hazards in a predictable manner." },
            { element: "paragraph", content: "These strategies go beyond instruction on basic traffic laws and procedures." },
            { element: "paragraph", content: "Defensive driving is where you drive to avoid road accidents in spite of the erroneous actions of other road users or the adverse driving conditions." },
            { element: "paragraph", content: "Defensive driving is an advanced driving concept that secures you from being involved in accidents through a strong and safer attitude towards other road users." },
            { element: "paragraph", content: "Defensive driving differs from basic driving because it is all about attitude change towards safety." },
            { element: "paragraph", content: "The aim here is to avoid crashes as much as possible and it includes avoiding crashes, even those caused by the other road users" },
            { element: "header", content: "Principals defensive driving" },
            {
                element: "bullets", content: [
                    "Effective observation",
                    "Good anticipation",
                    "Control of yourself and the car",
                    "Being prepared of the unexpected or predict happenings",
                    "Decide and act"
                ]
            },
            { element: "header", content: "Rules of defensive driving" },
            { element: "header", content: "1. Pay Attention" },

            { element: "paragraph", content: "Paying attention doesn't come naturally, however it can become a habit if you work at it." },
            { element: "paragraph", content: "Make conscious, persistent choices NOT to eat while driving, or text while driving, or whatever you do that takes your attention off the road." },
            { element: "paragraph", content: 'Make an effort to connect your mind to your eyes and work at consciously analyzing what you see while you drive. This is called "situational awareness."' },
            { element: "header", content: "2. Trust NO ONE" },
            { element: "paragraph", content: "On the road, you can never know what other drivers will do." },
            { element: "paragraph", content: "While driving, keep an eye on the cars around you and leave yourself plenty of room." },
            { element: "paragraph", content: "Anticipate the mistakes others might make so you can be ready to react quickly." },
            { element: "header", content: "3. Yield Anyway" },
            {element: "paragraph", content: "Right of way rules are often misunderstood, and there are situations where the rules may not be clear to everyone."},
            {element: "paragraph", content: "If there is uncertainty about which vehicle should have the right of way, give the other driver the road."},
            {element: "paragraph", content: "When it comes to driving safely, it's not the principle, but the outcome, that counts."},
            { element: "header", content: "4. Don't Speed" },
            {element: "paragraph", content: "Consider that speeding usually doesn't save much time."},
            {element: "paragraph", content: 'Driving at a higher than reasonable speed increases your risk in two ways; it cuts your reaction time and results in more "stored" energy (that must be dissipated in any collision).'},
            {element: "paragraph", content: "You should consider if the risks are worth the gain."},
            {element: "paragraph", content: "A defensive driver chooses a speed matching traffic as closely as possible without exceeding speed limits."},
            {element: "paragraph", content: "If traffic is moving at higher speed than you should go, keep to the right and out of the way."},
            {element: "paragraph", content: "This is often a legal requirement as well, if you are traveling at a speed less than the flow of traffic."},
            {element: "paragraph", content: "Also, don't neglect to maintain the correct following distance."},
            { element: "header", content: "5. Don't Be Impaired" },
            {element: "paragraph", content: "We all have the obligation to make sure we are able to drive safely whenever we operate our vehicle."},
            {element: "paragraph", content: "Ask yourself,"},
            {
                element: "bullets", content: [
                    "Am I safe to drive?",
                    "Am I rested?",
                    "Am I ill2",
                    "Have I taken medications that might affect my abilities?",
                    "Has enough time past since I had that alcoholic drink?",
                    "Do I have my glasses on, if needed?",
                ]
            },
            {element: "paragraph", content: "Only if you can answer yes to all these questions should you exercise your privilege to drive."},
            { element: "header", content: "6. Wear Your Seat Belt" },
            {element: "paragraph", content: "Seat belts are the most significant safety device ever invented."},
            {element: "paragraph", content: "Seat belts do several things for you."},
            {element: "paragraph", content: "They provide impact protection, they absorb crash forces, and they keep you from being thrown out of the vehicle."},
            {element: "paragraph", content: 'They hold you in place while the vehicle collapses around your "safe" zone.'},
            {element: "paragraph", content: "Belts help keep you in your place, in control, and better able to avoid a crash."},
            { element: "header", content: "7. Don't Run Red" },
            {element: "paragraph", content: "There are two basic types of red light runners-there's the daydreamer or distracted driver who just doesn't see it, and then there's the driver who's impatient and accelerates on the yellow signal instead of stopping and waiting the average 45 seconds of a signal cycle."},
            {element: "paragraph", content: "Running red lights is too dangerous, both for you and for others, no matter how pressured or late you are."},
            {element: "paragraph", content: "Pay attention to traffic lights, slow down and be patient."},
            { element: "header", content: "8. Drive Precisely" },
            {element: "paragraph", content: "Most everyone knows the basics of the traffic laws, however many drivers ignore them for the sake of expediency every day."},
            {element: "paragraph", content: "Why is it important to follow all the little rules that don't seem to make much difference?"},
            {element: "paragraph", content: "Traffic rules are in place to create the consistency and uniformity that allow us to predict with some degree of confidence what the other driver is going to do, thereby avoiding conflicts and collisions."},
            { element: "header", content: "9. Create Space" },
            {element: "paragraph", content: 'Guard your safety by actively creating space around your vehicle, never allowing yourself to get "boxed in."'},
            {element: "paragraph", content: "Adequate space creates time and helps you avoid collisions."},
            {element: "paragraph", content: "Maintain at least two seconds of following distance."},
            {element: "paragraph", content: "Adjust your position in traffic as necessary to avoid driving in others' blind areas."},
            {element: "paragraph", content: "Don't allow yourself to be tailgated- change lanes or adjust your speed to encourage tailgaters to pass you."},
            { element: "header", content: "10. Always Signal Your Intentions" },
            {element: "paragraph", content: "Be careful not to send the wrong message when you signal."},
            {element: "paragraph", content: "For example, if you are approaching an intersection, and you intend to turn right immediately after the intersection into a service station, be careful not to signal too soon."},
            {element: "paragraph", content: "Oncoming traffic may think you intend to turn at the intersection rather than beyond it, and they may turn left in front of you."},
            {element: "paragraph", content: "Finally, always use your signal before you start a turn or a lane change."},
            { element: "header", content: "11. Know Your Blind Spots" },
            {element: "paragraph", content: "Where are your blind spots? It depends on the vehicle, but a car typically has blind areas at the sides near the rear of the vehicle, meaning you cannot see anything in these areas by looking in your correctly- adjusted mirrors."},
            {element: "paragraph", content: "Other vehicles may be blind to anything that is directly behind."},
            {element: "paragraph", content: "Vehicles in which the driver sits very high may have forward-quarter blind spots- they may not be able to see anything low to the ground in front or to the sides near the front."},
            {element: "paragraph", content: "It is important to check your mirrors every 5 to 8 seconds while driving."},
            {element: "paragraph", content: "At the same time, it's not enough just to check the mirrors."},
            {element: "paragraph", content: "The blind areas on most vehicles are large enough to hide other vehicles."},
            {element: "paragraph", content: "Mirrors may not reveal a vehicle that is changing lanes, so before you switch lanes be sure to turn your head to check for oncoming traffic"},
            {element: "header", content: "12. Avoid Distractions"},
            {element: "paragraph", content: 'When we assume our driving "duties," one of the most important is that we be responsible for our actions and the results of those actions.'},
            {element: "paragraph", content: "In almost every case, a driver involved in a collision had an opportunity to avoid the collision-even when the other driver was responsible for the errors that led to the collision."},
            {element: "paragraph", content: "Some of the most common driving distractions are;"},
            {
                element: "bullets", content: [
                    "eating",
                    "drinking",
                    "applying make-up",
                    "talking on cell phones",
                    "adjusting the radio or changing CD's -dealing with rambunctious or misbehaving kids",
                    "even just talking to passengers."
                ]
            },
            {element: "header", content: "13. Be aware of Intersections"},
            {element: "paragraph", content: "Intersections are one of the most dangerous areas for any driver."},
            {element: "paragraph", content: "Over 80% of all city collisions that result in injury or death occur within signal-light intersections."},
            {element: "paragraph", content: "The majority of collisions at controlled intersections happen within 4 seconds of a light change."},
            {element: "paragraph", content: "To reduce your risk, slow down as you approach a green light and make sure to look left, then right, then left again."},

            {element: "paragraph", content: "The first danger to you is the traffic approaching from your left."},
            {element: "paragraph", content: 'If the intersection is a "blind" one - where you cant see the traffic on the cross street until they are very close, slow down even more.'},
            {element: "header", content: "14. Slow Down in Rain or Snow"},
            {element: "paragraph", content: "The first thing to do when the rain (or snow) starts to fall is slow down."},
            {element: "paragraph", content: "The standard rule of thumb is to slow down by a third in the rain, and by at least half in the snow. Slow more if ice may be present."},
            {element: "paragraph", content: "Make sure your tires are in great shape and that they are inflated properly."},
            {element: "header", content: "15. Be a Safe Passer"},
            {element: "paragraph", content: "If you decide to pass another vehicle, visually clear the road ahead and behind you first."},
            {element: "paragraph", content: "On one-lane roads, make sure you have enough clear space ahead to pass without interfering with oncoming vehicles."},
            {element: "paragraph", content: "Only pass when it is legal to do so."},
            {element: "paragraph", content: "Do not tailgate prior to passing - maintain your following distance so you can see what's ahead."},
            {element: "paragraph", content: "Furthermore, don't speed while passing."},
            {element: "paragraph", content: "Make sure you give the overtaken vehicle enough clearance when returning to your lane -you should be able to see the front of the vehicle and its tires on the pavement in your mirrors."},
            {element: "paragraph", content: "Finally, remember that not all no-passing zones are marked with solid yellow stripes or signs there are places where you are expected to know that passing is not allowed; some of these are near hill crests, approaching bridges, and approaching intersections."},
            //{element: "paragraph", content: ""},
        ]
    },
    {
        id: 15,
        indicator: "BASIC_FIRST_AID",
        theory: [
            {element: "header", content: "Definition of First Aid"},
            {element: "paragraph", content: "It refers to a quick immediate assistance given to a casualty with an emergence or complication or illness using the available resources before taken for advanced treatment As the name suggests, it's the first few things you can do to help before the emergency services arrive."},
            {element: "paragraph", content: "It's not a replacement for professional help, but a vital first step to reduce serious injuries and improve the patient's chances of survival."},
            {element: "paragraph", content: "Using the right techniques in certain situations can make a huge difference to someone who's suffered an injury or become suddenly ill."},
            {element: "header", content: "Why is first aid important?"},
            {element: "paragraph", content: "Well, as a driver or rider, you're going to be spending time on the road."},
            {element: "paragraph", content: "You'll be part of a busy network that's mostly very safe but where, occasionally, things go wrong."},
            {element: "paragraph", content: "Accidents happen, your passengers can become ill and, if you find yourself in such a situation, it's better to know what to do to help than to have to guess."},
            {element: "paragraph", content: "Also, if you're learning to drive or ride, or you're working towards a vocational driving qualification, you'll need to learn about first aid."},
            {element: "paragraph", content: "It's covered in the theory tests for all categories and is a Driver CPC training requirement, so you'll need to know your stuff."},
            {element: "header", content: "Basic First Aid Guide to help include;"},
            {
                element: "bullets", content: [
                    "Call 999",
                    "DO NOT put yourself in danger",
                    "DO NOT move the casualties from their vehicles unless it is essential",
                    "DO NOT give casualties anything to eat or drink",
                    "Always carry a first aid kit in your vehicle. You can do a number of things to save a life, even if you have had no training.",
                    "DO try to make them warm and as comfortable as you can, but avoid unnecessary movement.",
                    "DO keep reassuring the casualty",
                    "Always remember that the casualty may be suffering from shock If possible try not to leave the casualties alone or let them wander into the path of other traffic"
                ]
            },
            {element: "paragraph", content: "If the casualty is unconscious or not breathing, follow the DR ABC code;"},
            {
                element: "bullets", content: [
                    "D- Danger Check that you are not putting yourself in danger",
                    "R- Response- Try to get a response by asking questions and gently shaking their shoulders.",
                    "A- Airways - If they are unconscious check their airway is open and clear. To open the airway, place one hand on the forehand and gently tilt their head back, then lift the chin using 2 fingers only.",
                    "B- Breathing Keeping the airway open, check to see if the breathing is normal. Look along their chest, and listen and feel for breath on your cheek for up to 10 seconds.",
                    "C- Compressions - If they are not breathing, start chest compressions immediately.",
                ]
            },
            {element: "paragraph", content: "How to perform compressions:"},
            {
                element: "bullets", content: [
                    "Place one hand on the centre of their chest. Place the heel of your other hand on top of the first and interlock your fingers, keeping your fingers off their ribs.",
                    "Lean directly over their chest and press down vertically about 5-6cm. Release the pressure, but don't remove your hands.",
                    "Give compressions at a rate of 100-120 per minute until help arrives.",
                ]
            },
            {element: "paragraph", content: "If the casualty's not breathing, you may want to give them mouth-to-mouth resuscitation as follow;"},
            {
                element: "bullets", content: [
                    "Check and, if necessary, clear their mouth and airway.",
                    "Gently tilt back their head as far as possible.",
                    "Pinch their nostrils together.",
                    "Place your mouth over theirs. Give two breaths, each lasting two seconds. Continue with cycles of 30 chest compressions and two breaths until help arrives",
                ]
            },
            {element: "paragraph", content: "If the casualty's unconscious, but breathing, put them on their side in the recovery position, which looks like this:"},
            { element: "image", content: require("./assets/basic_theory/firstaid1.png") },
            {element: "header", content: "Airway"},
            {element: "paragraph", content: "Make sure their airway's still open once you get the casualty into this position. Keep checking on them until the emergency services arrive."},
            {element: "header", content: "Bleeding"},
            {
                element: "bullets", content: [
                    "Check if there's anything in the wound (like glass.) If so, build up padding around it. If not, apply firm pressure over the wound to reduce the bleeding.",
                    "As soon as you can, pad the wound and bandage it (using whatever clean material you can find).",
                    "If a limb's bleeding, but not broken, raise it above the level of the heart to reduce the bleeding.",
                    "Keep checking on the condition Shock of the patient-are they still conscious and breathing? - until help arrives."
                ]
            },
            {element: "header", content: "Shock"},
            {element: "paragraph", content: "In first aid terms, shock is not an emotion, but a medical condition, and it can be very serious."},
            {element: "paragraph", content: "Symptoms include"},
            {
                element: "bullets", content: [
                    "Paleness of the skin",
                    "Clamminess of the skin",
                    "Fast, shallow breathing",
                    "Fast, weak pulse",
                    "Yawning or sighing",
                    "Confusion",
                    "Loss of consciousness (in extreme cases)",
                ]
            },
            {element: "paragraph", content: "This is what you can do to help a person who's suffering from shock;"},
            {
                element: "bullets", content: [
                    "Do not give them anything to eat or drink. They may need surgery later so it'll be better if their stomach's empty.",
                    'Lay them down with their legs raised, to increase blood flow to the head. Call for help. Explain that you think the person\'s in shock and why (heart attack. iniurv etc.)',
                    "Loosen any tight clothing around the person's neck, chest or waist.",
                    "Keep them warm, comfortable and calm.",
                    "Keep checking their breathing, pulse and level of response.",
                    "If they lose consciousness or stop breathing, be prepared to give chest compressions or mouth to mouth.",
                ]
            },
            {element: "header", content: "Burn"},
            {
                element: "bullets", content: [
                    "Cool the burn by dousing it with clean, cold water or similar non-toxic liquid for at least 10 to 20 minutes",
                    "Do not try and remove anything sticking to the burn.",
                ]
            },
        ]
    }
]



