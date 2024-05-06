
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
    { id: 12, component: "ItemList", param: "INTRODUCTION_TO_DRIVING", navigateTo: "", indicator: 'BASIC_THEORY', type: 'ionic', icon: "", name: "Introduction to driving" },
    { id: 12, component: "ItemList", param: "BASIC_MECHANICS", navigateTo: "", indicator: 'BASIC_THEORY', type: 'ionic', icon: "", name: "Basic Mechanics" },
    { id: 12, component: "TheoryDetails", param: "DEFENSIVE_DRIVING", navigateTo: "", indicator: 'BASIC_THEORY', type: 'ionic', icon: "", name: "Defensive Driving" },
    // { id: 12, component: "ItemList", param: "ROADWORK_SIGNS", navigateTo: "", indicator: 'BASIC_THEORY', type: 'ionic', icon: "", name: "Roadworks Signs" },
    { id: 12, component: "TheoryDetails", param: "BASIC_FIRST_AID", navigateTo: "", indicator: 'BASIC_THEORY', type: 'ionic', icon: "", name: "Basic first aid" },
    { id: 12, component: "TheoryDetails", param: "GET_STARTED_WITH_DRIVING", navigateTo: "", indicator: 'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Get started with driving" },
    { id: 12, component: "TheoryDetails", param: "RULES_OF_THE_ROAD", navigateTo: "", indicator: 'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Rules of the road" },
    { id: 12, component: "TheoryDetails", param: "GET_STARTED_WITH_DRIVING", navigateTo: "", indicator: 'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Important car parts" },
    { id: 12, component: "TheoryDetails", param: "GET_STARTED_WITH_DRIVING", navigateTo: "", indicator: 'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Steering wheel usage" },
    { id: 12, component: "TheoryDetails", param: "GET_STARTED_WITH_DRIVING", navigateTo: "", indicator: 'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Automatic and manual cars" },
    { id: 12, component: "TheoryDetails", param: "GET_STARTED_WITH_DRIVING", navigateTo: "", indicator: 'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Speed on the road" },
    { id: 12, component: "TheoryDetails", param: "GET_STARTED_WITH_DRIVING", navigateTo: "", indicator: 'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Car lights and when to use them" },
    { id: 12, component: "TheoryDetails", param: "GET_STARTED_WITH_DRIVING", navigateTo: "", indicator: 'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Road offenses and punishment" },
    { id: 12, component: "TheoryDetails", param: "GET_STARTED_WITH_DRIVING", navigateTo: "", indicator: 'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Important road signs/categories" },
    { id: 12, component: "TheoryDetails", param: "GET_STARTED_WITH_DRIVING", navigateTo: "", indicator: 'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Other important aspect on the road" },

    { id: 12, component: "TheoryDetails", param: "GET_STARTED_WITH_DRIVING", navigateTo: "", indicator: 'BASIC_MECHANICS', type: 'ionic', icon: "", name: "Introduction to simple mechanics" },
    { id: 12, component: "TheoryDetails", param: "GET_STARTED_WITH_DRIVING", navigateTo: "", indicator: 'BASIC_MECHANICS', type: 'ionic', icon: "", name: "Simple mechanics emergency tools" },
    { id: 12, component: "TheoryDetails", param: "GET_STARTED_WITH_DRIVING", navigateTo: "", indicator: 'BASIC_MECHANICS', type: 'ionic', icon: "", name: "How to fix a car tire" },
    { id: 12, component: "TheoryDetails", param: "GET_STARTED_WITH_DRIVING", navigateTo: "", indicator: 'BASIC_MECHANICS', type: 'ionic', icon: "", name: "Jumpstart your car" },
    { id: 12, component: "TheoryDetails", param: "GET_STARTED_WITH_DRIVING", navigateTo: "", indicator: 'BASIC_MECHANICS', type: 'ionic', icon: "", name: "Change oil" },
    { id: 12, component: "TheoryDetails", param: "GET_STARTED_WITH_DRIVING", navigateTo: "", indicator: 'BASIC_MECHANICS', type: 'ionic', icon: "", name: "Replace brake pads" },
    { id: 12, component: "TheoryDetails", param: "GET_STARTED_WITH_DRIVING", navigateTo: "", indicator: 'BASIC_MECHANICS', type: 'ionic', icon: "", name: "Replace air filter" },
    { id: 12, component: "TheoryDetails", param: "GET_STARTED_WITH_DRIVING", navigateTo: "", indicator: 'BASIC_MECHANICS', type: 'ionic', icon: "", name: "Replace headlights or tailights" },
    { id: 12, component: "TheoryDetails", param: "GET_STARTED_WITH_DRIVING", navigateTo: "", indicator: 'BASIC_MECHANICS', type: 'ionic', icon: "", name: "Change wiper blades" },
    { id: 12, component: "TheoryDetails", param: "GET_STARTED_WITH_DRIVING", navigateTo: "", indicator: 'BASIC_MECHANICS', type: 'ionic', icon: "", name: "Change the battery" },

    { id: 1, name: "Practice Quiz One (164 signs)", indicator: "QUIZ", param: "PRACTICE_QUIZ_1", description: "Have you learnt all the different road signs and symbols, use this quiz to test yourself." },
    { id: 2, name: "Practice Quiz Two A (70 qns)", indicator: "QUIZ", param: "PRACTICE_QUIZ_2A", description: "This quiz covers the general knowledge you should have as a licensed driver." },
    { id: 2, name: "Practice Quiz Two B (70 qns)", indicator: "QUIZ", param: "PRACTICE_QUIZ_2B", description: "This quiz covers the general knowledge you should have as a licensed driver." },
    { id: 2, name: "Practice Quiz Three A (32 qns)", indicator: "QUIZ", param: "PRACTICE_QUIZ_3A", description: "This quiz covers some of different traffic signals and signs that you will meet on the road." },
    { id: 2, name: "Practice Quiz Three B (45 qns)", indicator: "QUIZ", param: "PRACTICE_QUIZ_3B", description: "This quiz covers some of different traffic signals and signs that you will meet on the road." },
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
        qtnNo:"Q48.",
        question:"When crossing at a Zebra crossing as a pedestrian you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "Walk straight across, but keep looking both ways and listen"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q48.",
        question:"When crossing at a Zebra crossing as a pedestrian you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "Walk straight across, but keep looking both ways and listen"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q48.",
        question:"When crossing at a Zebra crossing as a pedestrian you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "Walk straight across, but keep looking both ways and listen"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q48.",
        question:"When crossing at a Zebra crossing as a pedestrian you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "Walk straight across, but keep looking both ways and listen"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q48.",
        question:"When crossing at a Zebra crossing as a pedestrian you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "Walk straight across, but keep looking both ways and listen"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q48.",
        question:"When crossing at a Zebra crossing as a pedestrian you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "Walk straight across, but keep looking both ways and listen"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q48.",
        question:"When crossing at a Zebra crossing as a pedestrian you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "Walk straight across, but keep looking both ways and listen"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q48.",
        question:"When crossing at a Zebra crossing as a pedestrian you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "Walk straight across, but keep looking both ways and listen"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q48.",
        question:"When crossing at a Zebra crossing as a pedestrian you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "Walk straight across, but keep looking both ways and listen"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q48.",
        question:"When crossing at a Zebra crossing as a pedestrian you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "Walk straight across, but keep looking both ways and listen"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q48.",
        question:"When crossing at a Zebra crossing as a pedestrian you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "Walk straight across, but keep looking both ways and listen"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q48.",
        question:"When crossing at a Zebra crossing as a pedestrian you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "Walk straight across, but keep looking both ways and listen"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q48.",
        question:"When crossing at a Zebra crossing as a pedestrian you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "Walk straight across, but keep looking both ways and listen"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q48.",
        question:"When crossing at a Zebra crossing as a pedestrian you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "Walk straight across, but keep looking both ways and listen"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q48.",
        question:"When crossing at a Zebra crossing as a pedestrian you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "Walk straight across, but keep looking both ways and listen"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q48.",
        question:"When crossing at a Zebra crossing as a pedestrian you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "Walk straight across, but keep looking both ways and listen"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q48.",
        question:"When crossing at a Zebra crossing as a pedestrian you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "Walk straight across, but keep looking both ways and listen"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q48.",
        question:"When crossing at a Zebra crossing as a pedestrian you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "Walk straight across, but keep looking both ways and listen"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q48.",
        question:"When crossing at a Zebra crossing as a pedestrian you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "Walk straight across, but keep looking both ways and listen"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

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
        qtnNo:"Q31.",
        question:"You are approaching the top of a hill on a narrow road, the safest procedure is to?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Keep to the left and slow down."},
            {id:2, objective:"B", option: "Flash your headlights to warn oncoming traffic."},
            {id:3, objective:"C", option: "Increase your speed and sound your horn."},
            {id:4, objective:"D", option: "All of the Above."},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q32.",
        question:"When driving near parked vehicles, you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Stop, if you se a car with its right-indicator on."},
            {id:2, objective:"B", option: "Sound your horn and flash our headlights to warn drivers not to pull out."},
            {id:3, objective:"C", option: "Check for parked vehicles with turn signals on, or children about to step out."},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q33.",
        question:"On a single laned road, you are allowed to overtake another vehicle on its right except when?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "You are travelling at more than 80km/hr"},
            {id:2, objective:"B", option: "The other vehicle is going slower than you."},
            {id:3, objective:"C", option: "The other vehicle is turning right."},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q34.",
        question:"When entering or leaving a drive you must?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give way to bicycles, vehicles and pedestrians"},
            {id:2, objective:"B", option: "Blow your horn to warn other road users."},
            {id:3, objective:"C", option: "Stop and give way only to vehicles."},
            {id:4, objective:"D", option: "Increase speed to overtake other vehicles."},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q35.",
        question:"A driver behind you signals their intention to overtake your car. What should you do?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Speed up so that the driver will not have to overtake you"},
            {id:2, objective:"B", option: "Signal the driver to remain behind you if it is travelling to fast.."},
            {id:3, objective:"C", option: "Keep to the left and let the driver overtake you.."},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q36.",
        question:"If you are not sure you have enough distance to overtake a vehicle ahead, you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Put the vehicle in a lower gear and speed up"},
            {id:2, objective:"B", option: "Wait for a better opportunity with more distance to overtake."},
            {id:3, objective:"C", option: "Sound your horn to signal the driver ahead to slow down."},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q37.",
        question:"If you are convicted for driving under the influence of alcohol, you could loose your drivers licence. You may also?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Be restricted to driving an automatic vehicle"},
            {id:2, objective:"B", option: "Have a personal speed limit imposed on you."},
            {id:3, objective:"C", option: "Be sent to prison."},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q38.",
        question:"If you are caught over speeding in a road works zone, you will?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Be liable for a speeding fine."},
            {id:2, objective:"B", option: "Receive a warning letter in the mail."},
            {id:3, objective:"C", option: "Not receive any penalty as road works speed limits are only advisory."},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q39.",
        question:"Which statement is true?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "You must give way to pedestrians only at marked crossings."},
            {id:2, objective:"B", option: "Pedestrians have no special rights on the roads."},
            {id:3, objective:"C", option: "You must give way to pedestrians if there is any danger of hitting them."},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q40.",
        question:"If elderly people or children are on the pedestrian crossing you will probably need to?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Drive around them so you dont hold up traffic."},
            {id:2, objective:"B", option: "Wait extra time to allow them to cross safely"},
            {id:3, objective:"C", option: "Sound your horn to hurry them up."},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q41.",
        question:"When driving near children playing or walking near the edge of the road?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Continue at same speed and drive around them."},
            {id:2, objective:"B", option: "Slow down and be ready to make a safe stop."},
            {id:3, objective:"C", option: "Sound your horn to warn them of your presence"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q42.",
        question:"When driving in wet weather, you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Drive in the middle of the road to avoid splashing pedestrians on the foot path."},
            {id:2, objective:"B", option: "Watch out for pedestrians, who may hurry and take risks."},
            {id:3, objective:"C", option: "Stop and help aged pedestrians acress the road."},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q43.",
        question:"If you hold a learner or provisional license class what is the Blood Alcohol Concentration limit?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Zero."},
            {id:2, objective:"B", option: "0.02."},
            {id:3, objective:"C", option: "0.05."},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q44.",
        question:"If you are taking several medications and you want to drive?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Ask your doctor if the combination of drugs will make it dangerous to drive."},
            {id:2, objective:"B", option: "Drive carefully around your local streets to see if you are affected."},
            {id:3, objective:"C", option: "Ask your passengers to let you know if you are not driving as well as you should."},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q45.",
        question:"Is it an offence to refuse to take a POLICE breath test?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "No, if you are a learner driver"},
            {id:2, objective:"B", option: "No, if you say you havent been drinking alcohol"},
            {id:3, objective:"C", option: "Yes always."},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q46.",
        question:"During pre-trip inspection, a daily walk-round check includes:",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Items which are checked when the driver is inside a vehicle"},
            {id:2, objective:"B", option: "Items which are checked when the driver is outside a vehicle"},
            {id:3, objective:"C", option: "Items which are checked when the driver is within a vehicle"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q47.",
        question:"Which of the following actions does NOT damage the road?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Blocking the road drains"},
            {id:2, objective:"B", option: "Letting waste water or farm water flow over the road"},
            {id:3, objective:"C", option: "Under loading the vehicle"},
            {id:4, objective:"D", option: "Spilling diesel or oil on the road"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q48.",
        question:"When crossing at a Zebra crossing as a pedestrian you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "Walk straight across, but keep looking both ways and listen"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q50.",
        question:'Which of the following statements clearly describes Group/ class "B" driving license in uganda?',
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "These are small cars"},
            {id:2, objective:"B", option: "These are the small trucks that carry 2 tons of load and the small cars that carry 4 passengers"},
            {id:3, objective:"C", option: "These are motor vehicles that carry up to 3500kg and carry not more than 7 passengers including the driver"},
            {id:4, objective:"D", option: "Motor vehicles, having a permissible maximum mass not exceeding 3500kg and not more than 8 seats in"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q51.",
        question:"Orange/yellow warning lights on the dash board means:",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "The vehicle does not need to be serviced or repaired soon"},
            {id:2, objective:"B", option: "The vehicle needs to be serviced or repaired soon."},
            {id:3, objective:"C", option: "The vehicle needs to be serviced or repaired later"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q52.",
        question:"Beaming your headlights in full at night is dangerous because",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "You cannot stop within the distance that you can see."},
            {id:2, objective:"B", option: "Your headlights may become over worked and then stop working at all."},
            {id:3, objective:"C", option: "You may blind oncoming traffic."},
            {id:4, objective:"D", option: "You won't be able to see if it becomes foggy."},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q53.",
        question:"The disadvantage of not carrying out proper vehicle maintenance is",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "High vehicles operating cost"},
            {id:2, objective:"B", option: "High possibility of road crash"},
            {id:3, objective:"C", option:'Both "a" and "b" are correct'},
            {id:4, objective:"D", option: "None of the above is correct"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q54.",
        question:"You should avoid driving through deep puddles or flowing water. But if you must, which of these steps can help keep your brakes working",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Apply hard pressure on both the brake pedal and accelerator after coming out of the water."},
            {id:2, objective:"B", option: "Gently pressing the brake pedal while driving through the water"},
            {id:3, objective:"C", option: "Turning on your brake heater"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q55.",
        question:"You are following a long vehicle approaching a crossroads. What should you do if the driver signals right but moves close to the left-hand pavement?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Warn the driver about the wrong signal."},
            {id:2, objective:"B", option: "Wait behind the long vehicle."},
            {id:3, objective:"C", option: "Report the driver to the police"},
            {id:4, objective:"D", option: "Overtake on the right-hand side"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q57.",
        question:"You are driving behind a large goods vehicle. What should you do if it signals left but steers to the right?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Slow down and let the vehicle turn"},
            {id:2, objective:"B", option: "Overtake on the right of it"},
            {id:3, objective:"C", option: "Drive on, keeping to the left"},
            {id:4, objective:"D", option: "Hold your speed and sound your horn"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q58.",
        question:"Water can be used to extinguish which of the following fires",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Tires"},
            {id:2, objective:"B", option: "Keep in the middle of the road"},
            {id:3, objective:"C", option: "Swing out to the right just before turning"},
            {id:4, objective:"D", option: "Keep well to the left of the road"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q59.",
        question:"Head lamps and parking lights are used",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "To illuminate the road ahead of the vehicle"},
            {id:2, objective:"B", option: "To show your presence on the road"},
            {id:3, objective:"C", option: 'Both "a" and "b" are correct'},
            {id:4, objective:"D", option: "None of the above is correct"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q60.",
        question:"Your mobile rings while you are driving your vehicle. When is it appropriate for you to accept the call?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Once you have parked your vehicle in a safe place."},
            {id:2, objective:"B", option: "Drivers are required by law to stop, once you have stepped onto the crossing, but do not cross until they have stopped."},
            {id:3, objective:"C", option: "If you are confident that your ability to drive will not be compromised by the distraction"},
            {id:4, objective:"D", option: "While you are stuck in the traffic jam in the city"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q61.",
        question:"When the engine coolant is unable to circulate, the engine will",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Consume less fuel"},
            {id:2, objective:"B", option: "Be too cool"},
            {id:3, objective:"C", option: "Consume the same amount of fuel"},
            {id:4, objective:"D", option: "Be too hot"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q62.",
        question:"A Red light on the dash board means:",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "The vehicle needs to take action immediately with repairs"},
            {id:2, objective:"B", option: "The vehicle does not need to be repaired"},
            {id:3, objective:"C", option: "Keep well to the left of the road"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q63.",
        question:"How can you use your vehicles engine to control your speed?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "By changing to a lower gear"},
            {id:2, objective:"B", option: "By selecting reverse gear"},
            {id:3, objective:"C", option: "By changing to a higher gear"},
            {id:4, objective:"D", option: "By selecting neutral"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q64.",
        question:"If your brakes fail, what should you do?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Pump the foot brake several times"},
            {id:2, objective:"B", option: "Lightly apply the handbrake"},
            {id:3, objective:"C", option: "Shift into lower gear to slow down the vehiclen"},
            {id:4, objective:"D", option: "All the above"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q65.",
        question:"Who has priority at a roundabout? Choose the best answer",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "The vehicles that are parked on the roundabout"},
            {id:2, objective:"B", option: "Lightly apply the handbrake"},
            {id:3, objective:"C", option: "You must give right of way to traffic already on a roundabout"},
            {id:4, objective:"D", option: "None of the above"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q66.",
        question:"What should you do if you are dazzled by another vehicle's headlights?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Slow down & stop if necessary."},
            {id:2, objective:"B", option: "If the dazzle is from an oncoming vehicle, avoid it by looking towards its left edge until the vehicle has passed."},
            {id:3, objective:"C", option: "Also dazzle back by putting on you full headlights"},
            {id:4, objective:"D", option: "A and B are the correct answers."},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q67.",
        question:"Before driving through a flooded area, what should you do?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Stop the vehicle and check the tires"},
            {id:2, objective:"B", option: "Test your brakes to see they are functioning normally"},
            {id:3, objective:"C", option: "Stop the vehicle and dry your brakes"},
            {id:4, objective:"D", option: "Check your exhaust"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q68.",
        question:"The only effective way to deal with driver fatigue is to",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Give drivers plenty of time to see you and to stop before you start to cross."},
            {id:2, objective:"B", option: "Prevent it by being well rested and taking regular breaks"},
            {id:3, objective:"C", option: "Listen to the radio and open the windows"},
            {id:4, objective:"D", option: "Drink plenty of strong, black coffee"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q69.",
        question:"If your brakes fail, what should you do?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Pump the foot brake several times"},
            {id:2, objective:"B", option: "Lightly apply the handbrake"},
            {id:3, objective:"C", option: "Shift into lower gear to slow down the vehicle"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q70.",
        question:"When driving, when should you dip your headlights?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "When meeting other traffic."},
            {id:2, objective:"B", option: "When following close behind another vehicle."},
            {id:3, objective:"C", option: "On continuously lit roads"},
            {id:4, objective:"D", option: "All the above is true"},
            
        ],
        selectedObjective:""

    }
    
    ]
    },
    {
        id:2, 
        indicator:"PRACTICE_QUIZ_2B",
        score:0,
        qtnsList:[
            {
                qtnNo:"Q1.",
                question:"Alcohol is a depressant, what does this mean?", 
                correctAnswer:"A",
                suggestions:[
                    {id:2, objective:"B", option: "It makes you calm down and think more clearly"},
                    {id:3, objective:"C", option: "It makes your brain work slower"},
                    {id:4, objective:"D", option: "it speeds your brain up so you can work better"},
                ],
                selectedObjective:""
        
        },
        {
            qtnNo:"Q2.",
            question:"Why is it dangerous to travel too close to the vehicle ahead?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Your engine will overheat"},
                {id:2, objective:"B", option: "Your mirrors will need adjusting"},
                {id:3, objective:"C", option: "Your view of the road ahead will be restricted"},
                {id:4, objective:"D", option: "The driver in the front will not be seeing you in his mirrors"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q3.",
            question:"What should you do if your anti-lock brakes (ABS) warning light stays on?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Check the brake-fluid level"},
                {id:2, objective:"B", option: "Check the footbrake free play"},
                {id:3, objective:"C", option: "Check that the parking brake is released"},
                {id:4, objective:"D", option: "Have the brakes checked immediately"},
            ],
            selectedObjective:""
    
        }, {
            qtnNo:"Q4.",
            question:"In the majority of vehicles, the parking brakes acts",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "On the rear wheels"},
                {id:2, objective:"B", option: "On the front wheels"},
                {id:3, objective:"C", option: "On all the four wheels"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q5.",
            question:"In wet weather when it comes hard for you to see, you should",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Reaction time"},
                {id:2, objective:"B", option: "Road condition"},
                {id:3, objective:"C", option: "Speed"},
                {id:3, objective:"C", option: "All the above"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q6.",
            question:"In wet weather when it comes hard for you to see, you should",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Flash your headlights to warn other drivers."},
                {id:2, objective:"B", option: "Turn on your headlights, slow down and double your following distance behind the vehicle in front"},
                {id:3, objective:"C", option: "Turn your headlights on high beam"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q7.",
            question:"In a collusion, what does a properly adjusted headrest prevent?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Back injuries."},
                {id:2, objective:"B", option: "Shoulder injuries"},
                {id:3, objective:"C", option: "Neck injuries"},
                {id:3, objective:"D", option: "All of the Above"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q8.",
            question:"WHAT IS ",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Spare tyre, Car jack, whistle"},
                {id:2, objective:"B", option: "Car jack, Flash light, Spare tyre"},
                {id:3, objective:"C", option: "Flash light, whistle"},
                {id:3, objective:"D", option: "None of the Above"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q9.",
            question:"When can you put on the lights during the day?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "when its foggy."},
                {id:2, objective:"B", option: "when its misty"},
                {id:3, objective:"C", option: "During heavy rain"},
                {id:3, objective:"D", option: "All the above"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q10.",
            question:"When changing lanes, you should?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Check your mirrors and your blind spot and then proceed."},
                {id:2, objective:"B", option: "Check your mirrors, signal, check your blind spot and then proceed"},
                {id:3, objective:"C", option: "Check your mirrors, signal and then proceed"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q11.",
            question:"Name two documents which must be valid before you are allowed to drive",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Third party insurance certificate and Driving license"},
                {id:2, objective:"B", option: "Comprehensive insurance certificate and third party insurance"},
                {id:3, objective:"C", option: "Driving license and Driving Permit"},
                {id:3, objective:"C", option: "Third party insurance certificate and Driving Permit"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q12.",
            question:"A driver must acquire defensive driving skills which include:",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "The knowledge of you and your vehicles capabilities and limitations"},
                {id:2, objective:"B", option: "The ability to survey what is on and near the road"},
                {id:3, objective:"C", option: "The capacity to assess potential hazards and their potential impact."},
                {id:3, objective:"D", option: "All the above"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q13.",
            question:"If you are walking along a highway, always walk on the shoulder:",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "With the traffic flow."},
                {id:2, objective:"B", option: "Facing the traffic flow"},
                {id:3, objective:"C", option: "Going in any direction you choose"},
                {id:3, objective:"C", option: "None of the above"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q14.",
            question:"Which of these Vehicles has no the right of way",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Bullion van with siren."},
                {id:2, objective:"B", option: "Ambulance with Siren"},
                {id:3, objective:"C", option: "Presidential Convey with Siren"},
                {id:4, objective:"D", option: "Fire tender with siren"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q15.",
            question:"You should always adjust the driver's seat before making mirror adjustments",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "True"},
                {id:2, objective:"B", option: "False"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q16.",
            question:"If you adjust your mirrors properly you will not have to worry about blind spots",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "True"},
                {id:2, objective:"B", option: "False"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q17.",
            question:"Factors contributing to a vehicles excessive fuel consumption are",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Preventive maintenance, bad driving behaviour"},
                {id:2, objective:"B", option: "Defective vehicle, improper maintenance and bad driving behaviour.."},
                {id:3, objective:"C", option: "Defective vehicle, preventive maintenance improper maintenance"},
                {id:3, objective:"D", option: "Improper break down maintenance and average driving speed"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q18.",
            question:"The essential procedures to be followed in any vehicles crash or breakdown are:",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Stop immediately and turn off the engine"},
                {id:2, objective:"B", option: "Switch on your hazard warning lights"},
                {id:3, objective:"C", option: 'Both "a" and "b"'},
                {id:4, objective:"D", option: "None of the above"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q19.",
            question:"Minor maintenance of a battery involves",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Measuring the voltage across terminals"},
                {id:2, objective:"B", option: "Checking of battery terminals, Battery mounting and post for corrosion."},
                {id:3, objective:"C", option: "Topping the acid level"},
                {id:3, objective:"C", option: "None of the above is correct"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q20.",
            question:"A driver should check their mirrors and gauges ____",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Every 5 to 8 seconds."},
                {id:2, objective:"B", option: "To make sure another vehicle does't enter into the blind spot behind your vehicle."},
                {id:3, objective:"C", option: 'To prevent getting into the "blind stare."'},
                {id:3, objective:"C", option: 'All the above'},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q21.",
            question:"Chain reaction accidents occur because _______",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "The lead driver has an accident without time to apply their brakes, so the next vehicle has no warning."},
                {id:2, objective:"B", option: 'The second driver has failed to scan, check mirrors, and has fallen into a "blind stare."'},
                {id:3, objective:"C", option: "All are following too close"},
                {id:4, objective:"D", option: "All of the above"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q22.",
            question:"When are you not allowed to drive despite having the valid required documents?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "When sick and on medication"},
                {id:2, objective:"B", option: "When drank with alcohol"},
                {id:3, objective:"C", option: "Both A and B are correct"},
                {id:4, objective:"D", option: "When you are sick but doctor advised otherwise"},
            ],
            selectedObjective:""
    
        },{
            qtnNo:"Q23.",
            question:"Do not try to drive more than ____ hours in any one day.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: 2},
                {id:2, objective:"B", option: 8},
                {id:3, objective:"C", option: 16},
                {id:3, objective:"D", option: 11},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q24.",
            question:"When do windscreen pillars cause a serious obstruction to your view?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "When youre driving on a motorway."},
                {id:2, objective:"B", option: "When youre driving on a dual carriageway"},
                {id:3, objective:"C", option: "When youre approaching a one-way street"},
                {id:3, objective:"C", option: "When youre approaching bends and junctions"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q25.",
            question:"When changing lanes, you should?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Signal and then proceed."},
                {id:2, objective:"B", option: "Check your mirrors and your blind spot and then proceed."},
                {id:3, objective:"C", option: "Check your mirrors, signal, check your blind spot and then proceed"},
                {id:3, objective:"C", option: "Check your mirrors, signal and then proceed"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q26.",
            question:"When conducting a pre-trip inspection, it is better to:",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Vary the way you do things so you don't get bored"},
                {id:2, objective:"B", option: "Use the same method every time for quicker and more accurate inspections"},
                {id:3, objective:"C", option: "Repeat the procedures several times focusing on each individual aspect of the inspection (safety, security, fluids, etc.)"},
                {id:3, objective:"C", option: "Assume that all safety-related features are tip-top)"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q27.",
            question:"You see another driver driving in an unsafe manner.What is the most important thing that you can do to avoid being involved in an accident?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Flash your headlights"},
                {id:2, objective:"B", option: "Sound your horn"},
                {id:3, objective:"C", option: "Use your 4-way flashers"},
                {id:3, objective:"C", option: "Give them the right of way"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q28.",
            question:"When caught driving in heavy rain",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Your brakes may pull unevenly"},
                {id:2, objective:"B", option: "Brake effectiveness may be greatly reduced"},
                {id:3, objective:"C", option: 'Apply slight brake pressure to "dry out" brakes'},
                {id:3, objective:"C", option: 'All the above'},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q29.",
            question:"It is illegal to park",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "On a side walk"},
                {id:2, objective:"B", option: "On a bridge or in a tunnel"},
                {id:3, objective:"C", option: "At a roundabout"},
                {id:4, objective:"D", option: "All the above"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q30.",
            question:"Which is the maximum speed limit in town?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "30 kmph"},
                {id:2, objective:"B", option: "50 kmph"},
                {id:3, objective:"C", option: "10 kmph"},
                {id:3, objective:"C", option: "20 kmph"},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q31.",
            question:"What is the Highway Code",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "A booklet checked and passed by the parliament for rules of road users."},
                {id:2, objective:"B", option: "A booklet checked and passed by the traffic police for rules of road users."},
                {id:3, objective:"C", option: "A booklet checked and passed by the president for rules of road users."},
                {id:4, objective:"D", option: "A booklet checked and passed by the cabinet for rules of road users."},
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q32.",
            question:"If an oncoming vehicle crosses the centre line and is coming straight at you and you cannot stop, you should:",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Brake, look for room to move to the left"},
                {id:2, objective:"B", option: "Slow down and hope that the driver will turn away"},
                {id:3, objective:"C", option: "Drive onto the wrong side of the road and hope the other vehicle does not do the same"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q33.",
            question:"Dashed white lines between lanes of traffic mean",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "You may cross the lines to pass or change lanes if it is safe to do so."},
                {id:2, objective:"B", option: "Neither side can pass."},
                {id:3, objective:"C", option: "You are going the wrong way."},
                {id:4, objective:"D", option: "You are going the right way."},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q34.",
            question:"The major cause of impatience on our road is choose the best answer",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Smooth and clear roads"},
                {id:2, objective:"B", option: "Poor journey planning"},
                {id:3, objective:"C", option: "Failure to keep time"},
                {id:4, objective:"D", option: "Both B and C"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q35.",
            question:"Lines along the side of the road show you where the edge of the road is located. A ________ line indicates the right edge of the traffic lane on a road.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Solid yellow"},
                {id:2, objective:"B", option: "Solid white."},
                {id:3, objective:"C", option: "Solid green"},
                {id:3, objective:"C", option: "None of these"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q36.",
            question:"If you are not sure you have enough distance to overtake a vehicle ahead, you should?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Put the vehicle in a lower gear and speed up"},
                {id:2, objective:"B", option: "Wait for a better opportunity with more distance to overtake."},
                {id:3, objective:"C", option: "Sound your horn to signal the driver ahead to slow down."},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q37.",
            question:"What must you Not do when being overtaken?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "You should not accelerate"},
                {id:2, objective:"B", option: "You should not warn the driver overtaking you about the traffic police ahead."},
                {id:3, objective:"C", option: "You should not put double indication."},
                {id:3, objective:"C", option: "None of the above"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q38.",
            question:"When do we dim our lights at night?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "When meeting on coming vehicle, when meeting a pedestrian and on a well lit area"},
                {id:2, objective:"B", option: "When meeting on going traffic and at traffic lights"},
                {id:3, objective:"C", option: "When at traffic lights, pedestrian crossings and zebra crossings"},
                {id:4, objective:"D", option: "none of the above"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q39.",
            question:"The safest drivers exhibit a healthy lifestyle that includes freedom from legal and illegal substances, sufficient rest, and control over personal stress.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "True"},
                {id:2, objective:"B", option: "False"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q40.",
            question:"Unbalanced wheels on the a car may cause",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "The steering to pull on one side"},
                {id:2, objective:"B", option: "The steering to vibrate"},
                {id:3, objective:"C", option: "The brakes to fail."},
                {id:3, objective:"C", option: "The tires to deflate."},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q41.",
            question:"If you are going out and going to drink alcohol, what is the best way to avoid drinking and driving?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Before drinking, organise a way of getting home where you are not the driver"},
                {id:2, objective:"B", option: "Wait for one hour after your last drink before you drive home"},
                {id:3, objective:"C", option: "After you have had a few drinks, start to think how you will reach home"},
                {id:4, objective:"D", option: "First pray then drive straight to home without making corners"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q42.",
            question:"When driving, if you find animals cutting in on the road, what should you do?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Voluntarily reduce speed or stop to yield"},
                {id:2, objective:"B", option: "Honk to drive them away"},
                {id:3, objective:"C", option: "Speed up and bypass"},
                {id:3, objective:"C", option: "Reduce speed and use the vehicle to drive them away"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q43.",
            question:"What should you do if you think the driver of the vehicle in front has forgotten to cancel their right indicator?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Flash your lights to alert the driver."},
                {id:2, objective:"B", option: "Sound your horn before overtaking."},
                {id:3, objective:"C", option: "Overtake on the left if theres room."},
                {id:4, objective:"D", option: "Stay behind and dont overtake"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q44.",
            question:"What do you do before getting out of the vehicle?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Look over your left shoulder and right side mirror"},
                {id:2, objective:"B", option: "Check the side mirror and look over your right shoulder"},
                {id:3, objective:"C", option: "Check your inside view mirror and look over your left shoulder"},
                {id:4, objective:"D", option: "None of the above"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q45.",
            question:"How do you hold the steering wheel clockwise?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "10 to 2 position and 1/4 to 3 position"},
                {id:2, objective:"B", option: "No, if you say you havent been drinking alcohol"},
                {id:3, objective:"C", option: "Yes always."},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q46.",
            question:"Where does the law require you to stop?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "At the stop sign"},
                {id:2, objective:"B", option: "When ordered by the police"},
                {id:3, objective:"C", option: "When the traffic lights changes to red"},
                {id:4, objective:"D", option: "All the above are correct"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q47.",
            question:"Which are the common mistakes made when approaching a round about?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Approaching the roundabout with wrong lane and changing lanes on the roundabout"},
                {id:2, objective:"B", option: "Leaving the roundabout in the wrong lane and observing traffic from wrong side"},
                {id:3, objective:"C", option: "Only B is correct"},
                {id:4, objective:"D", option: "Both A and b are correct"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q48.",
            question:"What distance should you keep between two moving vehicles in town?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "The distance for you to see the behind wheels of the vehicle infront"},
                {id:2, objective:"B", option: "The distance for you to see the number plate of the vehicle infront"},
                {id:3, objective:"C", option: "Only A is correct"},
                {id:4, objective:"D", option: "Both A and B are correct"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q49.",
            question:'The Highway Code explains how to use our roads safely. It has been written for',
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Passengers, cyclists, motorcyclists, and drivers."},
                {id:2, objective:"B", option: "Pedestrians, cyclists, motorcyclists, and drivers"},
                {id:3, objective:"C", option: "Pedestrians, passengers, motorcyclists, and drivers."},
                {id:4, objective:"D", option: "Pedestrians, passengers, cyclists, motorcyclists, and drivers."},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q50.",
            question:'The road is most slippery when',
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Immediately after the rain."},
                {id:2, objective:"B", option: "Two hours after the rain"},
                {id:3, objective:"C", option: "The next day"},
                {id:4, objective:"D", option: "During the rain"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q51.",
            question:"Q51. On a road designated as one way, which of the following holds true?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Parking is prohibited"},
                {id:2, objective:"B", option: "Overtaking is prohibited"},
                {id:3, objective:"C", option: "Should not drive in reverse gear"},
                {id:3, objective:"C", option: "Stopping is prohibited"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q52.",
            question:"It is important to scan while driving so you can see everything that is happening on the road. What does scanning mean?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Continually looking ahead, to the sides and using all mirrors while driving"},
                {id:2, objective:"B", option: "Looking further ahead down the road"},
                {id:3, objective:"C", option: "Looking at the wind view screen mirror"},
                {id:4, objective:"D", option: "Looking in the rear and side mirrors continually when driving."},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q53.",
            question:"Youre in a built-up area at night and the road is well lit. Why should you use dipped headlights?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "So that you can see further along the road"},
                {id:2, objective:"B", option: "So that you can go at a much faster speed"},
                {id:3, objective:"C", option:'So that you can switch to main beam quickly'},
                {id:4, objective:"D", option: "So that you can be easily seen by others"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q54.",
            question:"driver should always stop for",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Pedestrians"},
                {id:2, objective:"B", option: "Stray dogs."},
                {id:3, objective:"C", option: "None of the above"},
                {id:4, objective:"D", option: "Leaner Drivers with L plates"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q55.",
            question:"According to the Traffic and Road safety Act 1998, which of the following best describes group B of vehicles.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "These are vehicles that carry up to 3500kgs and also carry up to 8 passengers including the driver."},
                {id:2, objective:"B", option: "These are vehicles that carry up to 3500kgs and also carry up to 7 passengers including the driver."},
                {id:3, objective:"C", option: "These are vehicles that carry up to 2000kgs and carry 2 passengers"},
                {id:4, objective:"D", option: "These are the usual saloon cars or my cars"},
                
            ],
            selectedObjective:""
    
        },{
            qtnNo:"Q56.",
            question:"It is important to scan while driving so you can see everything that is happening on the road. What does scanning mean?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "You may enter the box junction if the green light has shown even though it wont clear."},
                {id:2, objective:"B", option: "The box junction works independent of the traffic lights"},
                {id:3, objective:"C", option: "You must not enter a yellow box junction unless you can clear it without stopping"},
                {id:4, objective:"D", option: "You only enter the box junction when you can clear"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q57.",
            question:"What should you do if you start to feel tired while driving?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Take an energy drive and carry on with your journey"},
                {id:2, objective:"B", option: "Pull over at a safe place and rest"},
                {id:3, objective:"C", option: "Put the hazard lights to indicate to the other road users and keep driving."},
                {id:4, objective:"D", option: "Drive slowly but steadily"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q58.",
            question:"Whats the main benefit of driving a four-wheel-drive vehicle?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Improved grip on the road"},
                {id:2, objective:"B", option: "Lower fuel consumption"},
                {id:3, objective:"C", option: "Shorter stopping distances"},
                {id:4, objective:"D", option: "Improved passenger comfort"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q59.",
            question:"A single broken yellow line is used to mark the centerline where there is(are) only _______ of traffic.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "four lanes"},
                {id:2, objective:"B", option: "two lanes"},
                {id:3, objective:"C", option: 'one lane'},
                {id:4, objective:"D", option: "None of the above"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q60.",
            question:"Driving is a _______ not a right.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Right"},
                {id:2, objective:"B", option: "Privilege"},
                {id:3, objective:"C", option: "Law"},
                {id:4, objective:"D", option: "None of the above"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q61.",
            question:"Which of these is an indication that your tyres require replacement ?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "When the remaining tread depth is less than 1.6mm"},
                {id:2, objective:"B", option: "When the remaining tread depth is higher than the tread wear indicator bars"},
                {id:3, objective:"C", option: "When the remaining tread depth is lower than the tread wear indicator bars"},
                {id:4, objective:"D", option: "A and C are correct"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q62.",
            question:"When a vehicle goes downhill, you should properly control the speed through gear and fully use the engine to brake.",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "true"},
                {id:2, objective:"B", option: "false"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q63.",
            question:"When can you overtake on the left?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "When you want to go straight ahead & the driver in front of you has moved out and signaled that they intend to turn right."},
                {id:2, objective:"B", option: "When traffic in both lanes is moving slowly & traffic in the left-hand lane is moving more quickly than the traffic in the right-hand lane"},
                {id:3, objective:"C", option: "When you have signaled that you intend to turn left."},
                {id:4, objective:"D", option: "Both A and B are correct"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q64.",
            question:"If your brakes fail, what should you do?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Ease off the accelerator, hold the steering wheel firmly, and vert lightly brake to a stop"},
                {id:2, objective:"B", option: "Brake firmly to slow the vehicle quickly"},
                {id:3, objective:"C", option: "Accelerate lightly to hold the vehicle on track"},
                {id:4, objective:"D", option: "None of the above"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q65.",
            question:"Excessive or uneven tire wear can be caused by faults in which of the following",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Cooling system"},
                {id:2, objective:"B", option: "Gearbox"},
                {id:3, objective:"C", option: "Suspension"},
                {id:4, objective:"D", option: "Exhaust system"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q66.",
            question:"What do signs containing a red circle generally mean?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Providing a warning"},
                {id:2, objective:"B", option: "Giving an order"},
                {id:3, objective:"C", option: "Providing information"},
                {id:4, objective:"D", option: "Providing directions."},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q67.",
            question:"Before driving through a flooded area, what should you do?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Stop the vehicle and check the tires"},
                {id:2, objective:"B", option: "Test your brakes to see they are functioning normally"},
                {id:3, objective:"C", option: "Stop the vehicle and dry your brakes"},
                {id:4, objective:"D", option: "Check your exhaust"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q68.",
            question:"What are the speed limits in built up areas?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "100 kmph"},
                {id:2, objective:"B", option: "30 kmph"},
                {id:3, objective:"C", option: "50 kmph"},
                {id:4, objective:"D", option: "None of the above"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q69.",
            question:"Rectangular road signs provide",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Orders"},
                {id:2, objective:"B", option: "Warnings"},
                {id:3, objective:"C", option: "Information and directions"},
                {id:4, objective:"D", option: "Details of a hazard ahead"},
                
            ],
            selectedObjective:""
    
        },
        {
            qtnNo:"Q70.",
            question:"What does this chevron road sign mean?",
            correctAnswer:"A",
            suggestions:[
                {id:1, objective:"A", option: "Sharp deviation in the road to the right"},
                {id:2, objective:"B", option: "Keep to the right."},
                {id:3, objective:"C", option: "Turn right only"},
                {id:4, objective:"D", option: "Road closed! Traffic follow signs for diversion"},
                
            ],
            selectedObjective:""
    
        }
        
        ]
        },
]


export const theories=[
    {
        id:1,
        indicator: 'GET_STARTED_WITH_DRIVING',
        theory:[
            {element: "header", content: "Driving definition"},
            {element: "image", content: require("./assets/basic_theory/driving_car.png")},
            {element: "paragraph", content: "Driving is the controlled operation and movement of a vehicle, including cars, motorcycles, trucks, buses, and bicycles. "},
            {element: "paragraph", content: "One requires permission to drive on public highways which is granted based on a set of conditions being met."},
            {element: "paragraph", content: "Drivers are required to follow the established road and traffic laws in the location they are driving. "},
            {element: "header", content: "Who is a driver? "},
            {element: "paragraph", content: "A driver is a person who operates a vehicle. He/She has skills and driving license that permits him or her to operate the vehicle while following the rules and regulations of the highway code. "},
            {element: "paragraph", content: "A vehicle is a piece of mechanize equipment that can be used as a means of transport. It may be cars, trains, hand carts, animal-driven carts, trucks, buses, wagons, motorbikes, bicycles, boats, etc "},
            {element: "paragraph", content: "Saloon cars include sedan, hatchback, coupe, wagon, and convertible while non- saloon cars are MPV, SUV, Pick-up truck and van.... Non-saloon cars have different base rates and progressive rates"},
            {element: "header", content: "Why do people drive? "},
            {element: "bullets", content: [
                "It is an employment opportunity where people offer transportation services",
                "To quicken transportation means",
                "For sports purposes",
                "Save time compared to walking"
            ]},
            {element: "header", content: "Driving skills"},
            {element: "image", content: require("./assets/basic_theory/driving_skills.png")},
            {element: "paragraph", content: "Driving in traffic is more than just knowing how to operate the mechanisms which control the vehicle; it requires knowing how to apply the rules of the road (which ensures safe and efficient sharing with  other users). "},
            {element: "paragraph", content: "An effective driver also has an intuitive understanding of the basics of vehicle handling and can drive responsibly. "},
            {element: "paragraph", content: "Driving skills required include physical skills to enable driver control direction,  acceleration, and deceleration whereas the mental skills enable driver to avoid or successfully handle an emergency driving situation cognitively. "},
            {element: "header", content: "Physical Skills "},
            {element: "bullets", content: [
                "Proper hand placement and seating position ",
                "Starting the vehicle's engine with the starting system ",
                "Setting the transmission to the correct gearDepressing the  pedals with one's feet to accelerate, slow and stop the vehicle and if the vehicle is  equipped with a manual transmission, to modulate the clutch ",
                "Steering the vehicle's direction with the steering wheel ",
                "Applying brake pressure to slow or stop the vehicle ",
                "Operating other important ancillary devices such as the indicators, headlights, parking brake and windshield wipers. ",
                "Speed and Skid control",
            ]},
            {element: "header", content: "Mental Skills "},
            {element: "bullets", content: [
                "Observing the environment for road signs, driving conditions, and hazards",
                "Awareness of surroundings, especially in heavy and city traffic",
                " Making good and quick decisions based on factors such as road and traffic conditions ",
                "Evasive maneuvering",
                "Understanding vehicle dynamics",
                "Left- and right-hand traffic ",
            ]},
            {element: "paragraph", content: "In some countries like Uganda, both practical and theoretical basic knowledge of the rules of the road is assessed with a driving test(s) and those who pass are issued with a driving license. "},
            {element: "header", content: "Documents required while driving on the road"},
            {element: "bullets", content: [
                "Valid driving licence ",
                "Valid car road licence ",
                "Copy of car logbook card",
                "Inspection certificate",
            ]},
            {element: "header", content: "Driving License"},
            {element: "image", content: require("./assets/basic_theory/permit_specimen.png")},
            {element: "image", content: require("./assets/basic_theory/permit_specimen_back.png")},
            {element: "paragraph", content: "A driver's license is a legal authorization, or the official document confirming such an authorization, for a specific individual to operate one or more types of motorized vehicles-such as motorcycles, cars, trucks, or buses- on a public road. Such licenses are often plastic and the size of a credit card as shown in the image above"},
            {element: "paragraph", content: "In Uganda, a learner is required to have a Learner Driving Licence (LDL) to have provisions of the Traffic and Road Safety Act, 1998 (as amended) 2020 (Cap 361) and is hereby authorized to undertake instructions from a licenced instructor. From here, a learner can obtain his or her driving licence after being assessed by the IOV"},
        ]
    },
    {
        id: 2,
        indicator: 'RULES_OF_THE_ROAD',
        theory:[
            {element: "image", content: require("./assets/basic_theory/ruleofroad.png")},
            {element: "paragraph", content: "The rule of the road in Uganda is to keep left. Other countries that keep left include kenya, South Africa, Australia, the Caribbean, India, Japan. With this, one should overtake another vehicle on the right hand side.Countries like Rwanda, Burundi, and the DRC keep right"},
            {element: "header", content: "When can one overtake from the left?"},
            {element: "bullets", content: [
                "When a vehicle is turning right or making a U-turn from the centre of the road and is indicating right",
                "When driving on a multi-lane road and the vehicle can be overtaken in a marked lane to the left of the vehicle",
                "When the front vehicle is stationary or accident ahead where its the only option to pass from the left",
            ]},
            {element: "header", content: "Places where one should never overtake"},
            {element: "bullets", content: [
                " When approaching a sharp corner. You may not see oncoming vehicles",
                " When approaching zebra crossing. You may knock down pedestrians crossing",
                " When approaching brow of a hill. You may not see on coming vehicles",
                " When approaching a junction. You may crash in the crossing train",
                " When approaching a railway crossing. You need to first take note of the direction of the different vehicles",
                " When approaching a humb bridge ahead.",
                " When the road sign marks no overtaking area.",
                " When the road is narrow.",
            ]},
            {element: "header", content: "When should one stop while on the road?"},
            {element: "bullets", content: [
                "At stop signs",
                "When traffic light signals red",
                "When you get an accident",
                "When signaled by a uniformed traffic officer",
                "School children crossing signals",
                "At pedestrian crossing area",
                "At the junction joining the main road",
                "While joining a roundabout",
            ]},
            {element: "header", content: "Places where one shouldn't park"},
            {element: "bullets", content: [
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
            ]},
            {element: "header", content: "Vehicles that should be given priority when driving"},
            {element: "bullets", content: [
                "Head of state or presidential convoy",
                "Ambulance",
                "Police patrol",
                "Fire brigades"
            ]},
            {element: "header", content: "Places where you should not use the horn"},
            {element: "image", content: require("./assets/mandatory_signs/soundingofhornsirensprohibited.png")},
            {element: "bullets", content: [
                "At no horn sign",
                "Inside schools",
                "In game parks",
                "At courts of law",
                " On a pedestrian crossing",
                "Late hours of resident areas",
                "When it is not necessary to use the horn",
            ]},
            // {element: "paragraph", content: "Driving"},
            // {element: "paragraph", content: "Driving"},
     
        ]

    }
]


