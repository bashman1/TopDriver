
const introData = [
    {
        id:1,
        title:"Road Signs & Symbols",
        description:"They help ensure all road users are safe from potential driving hazards",
        img:require("./assets/introduction_signs/road_signs.jpg")   ,
    },
    {
        id:2,
        title:"Road Safety Precautions",
        description:"Means, methods and measures aimed at reducing the likelihood road accidents",
        img:require("./assets/introduction_signs/road_rules.jpg"),
    },
    {
        id:2,
        title:"Practice Quizzes & Test",
        description:"Now get your order delivered at your door steps",
        img:require("./assets/introduction_signs/exam.jpeg"),
    }
]

export default introData;

export const getStarted = [
    {
        id:1,
        title:"Road Signs & Symbols",
        description:"Learn more about",
        details:[
            {
                id:1,
                detailsTitle:"a) Warning Signs",
                iconsDescription:[
                    {
                        img:require("./assets/introduction_signs/road_signs/bendleft.png"),
                        text:"Bend Left"
                    },
                    {
                        img:require("./assets/introduction_signs/road_signs/roadnarrowsfromleft.png"),
                        text:"Road Narrows from Left"
                    },
                    {
                        img:require("./assets/introduction_signs/road_signs/slipperyroad.png"),
                        text:"Slippery Roads"
                    }
                ]
            },
            {
                id:2,
                detailsTitle:"b) Manadatory Road Signs",
                iconsDescription:[
                    {
                        img:require("./assets/introduction_signs/road_signs/noturnright.png"),
                        text:"Bend Left"
                    },
                    {
                        img:require("./assets/introduction_signs/road_signs/noentryforpedestrians.png"),
                        text:"Road Narrows from Left"
                    },
                    {
                        img:require("./assets/introduction_signs/road_signs/roadclosed.png"),
                        text:"Slippery Roads"
                    }
                ]
            },
            {
                id:3,
                detailsTitle:"c) Information Road Signs",
                iconsDescription:[
                    {
                        img:require("./assets/introduction_signs/road_signs/hospital.png"),
                        text:"Bend Left"
                    },
                    {
                        img:require("./assets/introduction_signs/road_signs/hotel.png"),
                        text:"Road Narrows from Left"
                    },
                    {
                        img:require("./assets/introduction_signs/road_signs/fillingstation.png"),
                        text:"Slippery Roads"
                    }
                ]
            }
        ],
    }
]

export const learnMoreData =[
    {
        id:1,
        img:require("./assets/basic.png")

    }
]

export const menu=[
    { id: 1, component:"Home", param:"ROAD_SIGNS", navigateTo:"details", indicator:'HOME_MENU', type: 'community', icon: "car-key", name: "Road Signs" },
    { id: 2, component:"Home", param:"BASIC_THEORY", navigateTo:"details", indicator:'HOME_MENU', type: 'community', icon: "book", name: "Basic Theory" },
    { id: 3, component:"Home", param:"ROAD_MARKINGS", navigateTo:"icons", indicator:'HOME_MENU', type: 'community', icon: "white-balance-sunny", name: "Road Markings" },
    { id: 4, component:"Home", param:"TRAFFIC_SIGNALS", navigateTo:"icons", indicator:'HOME_MENU', type: 'community', icon: "traffic-light", name: "Traffic Signals" },
    { id: 5, component:"Home", param:"QUIZ", navigateTo:"quiz", indicator:'HOME_MENU', type: 'community', icon: "gavel", name: "Quiz" },
    { id: 6, component:"Home", param:"SETTINGS", navigateTo:"settings", indicator:'HOME_MENU', type: 'ionic', icon: "settings-sharp", name: "Settings" },
    { id: 7, component:"IconsPage", param:"MANDATORY_SIGNS", navigateTo:"", indicator:'ROAD_SIGNS', type: 'ionic', icon: "", name: "Mandatory Signs" },
    { id: 8, component:"IconsPage", param:"WARNING_SIGNS", navigateTo:"", indicator:'ROAD_SIGNS', type: 'ionic', icon: "", name: "Warning Signs" },
    { id: 9, component:"IconsPage", param:"INFORMATION_SIGNS", navigateTo:"", indicator:'ROAD_SIGNS', type: 'ionic', icon: "", name: "Information Signs" },
    { id: 10, component:"IconsPage", param:"ROADWORKS_SIGNS", navigateTo:"", indicator:'ROAD_SIGNS', type: 'ionic', icon: "", name: "Roadworks Signs" },
    { id: 11, component:"IconsPage", param:"TRANSERVE_MARKINGS", navigateTo:"", indicator:'ROAD_SIGNS', type: 'ionic', icon: "", name: "Transerve Markings" },
    { id: 12, component:"IconsPage", param:"OTHER_ROAD_MARKINGS", navigateTo:"", indicator:'ROAD_SIGNS', type: 'ionic', icon: "", name: "Other Road Markings" },
    { id: 12, component:"ItemList", param:"INTRODUCTION_TO_DRIVING", navigateTo:"", indicator:'BASIC_THEORY', type: 'ionic', icon: "", name: "Introduction to driving" },
    { id: 12, component:"ItemList", param:"BASIC_MECHANICS", navigateTo:"", indicator:'BASIC_THEORY', type: 'ionic', icon: "", name: "Basic Mechanics" },
    { id: 12, component:"ItemList", param:"DEFENSIVE_DRIVING", navigateTo:"", indicator:'BASIC_THEORY', type: 'ionic', icon: "", name: "Defensive Driving" },
    { id: 12, component:"ItemList", param:"ROADWORK_SIGNS", navigateTo:"", indicator:'BASIC_THEORY', type: 'ionic', icon: "", name: "Roadworks Signs" },
    { id: 12, component:"ItemList", param:"BASIC_FIRST_AID", navigateTo:"", indicator:'BASIC_THEORY', type: 'ionic', icon: "", name: "Basic first aid" },
    { id: 12, component:"ItemList", param:"BASIC_FIRST_AID", navigateTo:"", indicator:'INTRODUCTION_TO_DRIVING', type: 'ionic', icon: "", name: "Basic first aid" },
    
    {id: 1, name:"Practice Quiz One (164 signs)",  indicator:"QUIZ", param:"PRACTICE_QUIZ_1", description:"Have you learnt all the different road signs and symbols, use this quiz to test yourself."},
    {id: 2, name:"Practice Quiz Two A (70 qns)", indicator:"QUIZ", param:"PRACTICE_QUIZ_2A", description:"This quiz covers the general knowledge you should have as a licensed driver."},
    {id: 2, name:"Practice Quiz Two B (70 qns)", indicator:"QUIZ", param:"PRACTICE_QUIZ_2B", description:"This quiz covers the general knowledge you should have as a licensed driver."},
    {id: 2, name:"Practice Quiz Three A (32 qns)", indicator:"QUIZ", param:"PRACTICE_QUIZ_3A", description:"This quiz covers some of different traffic signals and signs that you will meet on the road."},
    {id: 2, name:"Practice Quiz Three B (45 qns)", indicator:"QUIZ", param:"PRACTICE_QUIZ_3B", description:"This quiz covers some of different traffic signals and signs that you will meet on the road."},
]

export const  iconImg=[
    { id: 1, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/compulsarycycletrack.png"), name: "Compulsory cycle track" },
    { id: 2, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/compulsarypedestrianfootpath.png"), name: "Compulsory pedestrian footpath" },
    { id: 3, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/compulsoryminimumspeed.png"), name: "Compulsory minimum speed" },
    { id: 4, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/compulsoryparkingforthedisabled.png"), name: "Compulsory parking for disabled" },
    { id: 5, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/compulsorytrackforcattle.png"), name: "Compulsory track for cattle" },
    { id: 6, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/directiontobefollowed.png"), name: "Direction to be followed" },
    { id: 7, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/dontdrinkanddrive.png"), name: "Don't drink and drive" },
    { id: 8, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/dontparkonpavements.png"), name: "Don't park on pavement" },
    { id: 9, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/donttextanddrive.png"), name: "Don't text and drive" },
    { id: 10, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/drivingvehicleslessthandistanceshownisprohibited.png"), name: "Driving vehicle less than " },
    { id: 11, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/endofcompulsoryminimumspeed.png"), name: "End of compulsory minimum speed" },
    { id: 12, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/endofprohibitions.png"), name: "End of prohibitions" },
    { id: 13, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/endofspeedlimit.png"), name: "End of speed limit" },
    { id: 14, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/entryforbbidenformotorcycles.png"), name: "Entry forbidden to motorcycle" },
    { id: 15, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/entryforbbidenforpoweroranimaldrivenvehicles.png"), name: "Entry forbidden for power" },
    { id: 16, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/entryforbiddentoallbicycles.png"), name: "Entry forbbiden for bicycle" },
    { id: 17, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/givepriorityforoncomingvehicles.png"), name: "Priority for on-coming traffic" },
    { id: 18, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/giveway.png"), name: "Give way" },
    { id: 19, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/goaheadonly.png"), name: "Go ahead only" },
    { id: 20, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/keepleft.png"), name: "keep left" },
    { id: 21, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforallvehicles.png"), name: "No entry for all vehicles" },
    { id: 22, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforanimaldrivenvehicles.png"), name: "No entry for animal driven" },
    { id: 23, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforbuses.png"), name: "No entry for buses" },
    { id: 24, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforcommercialvehicles.png"), name: "No entry for commercial" },
    { id: 25, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforfarmvehicles.png"), name: "No entry for farm vehicles" },
    { id: 26, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforhandcarts.png"), name: "No entry for hand carts" },
    { id: 27, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforpedestrians.png"), name: "No entry for pedestrians" },
    { id: 28, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforpowerdrivenvehicles.png"), name: "No entry for power driven vehicles" },
    { id: 29, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforvehiclesexceedinglengthshown.png"), name: "No entry for vehicles exceeding the length" },
    { id: 30, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforanimaldrivenvehicles.png"), name: "Entry forbidden for power" },
    { id: 31, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforvehiclesexceedingthisheight.png"), name: "No entry for vehicles exceeding the height" },
    { id: 32, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforanimaldrivenvehicles.png"), name: "Entry forbidden for power" },
    { id: 33, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforvehiclesexceedingthisweight.png"), name: "No entry for vehicles exceeding the weight" },
    { id: 34, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforvehiclesexceedingthiswidth.png"), name: "No entry for vehicles exceeding the width" },
    { id: 35, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noentryforvehiclesexceedingweightshownononecode.png"), name: "No entry for vehicles exceeding the weight" },
    { id: 36, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noovertakingofgoodsvehicles.png"), name: "No overtaking goods vehicles" },
    { id: 37, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noparking.png"), name: "No parking" },
    { id: 38, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/nostoppingforanyreason.png"), name: "No stopping for any reasons" },
    { id: 39, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noturnleft.png"), name: "No left turn" },
    { id: 40, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/noturnright.png"), name: "No right turn" },
    { id: 41, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/no_uturn.png"), name: "No U turn" },
    { id: 42, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/overtakingofvehiclesisprohibited.png"), name: "Overtaking is prohibited" },
    { id: 43, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/passeitherside.png"), name: "Pass ether sides" },
    { id: 44, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/roadclosed.png"), name: "Road closed" },
    { id: 45, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/roundabout.png"), name: "Round About" },
    { id: 46, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/soundingofhornsirensprohibited.png"), name: "No sounding of horn sirens" },
    { id: 47, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/speedlimit.png"), name: "Speed limit" },
    { id: 48, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/stopatcontrolpost.png"), name: "Stop at control post" },
    { id: 49, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/stopchildrencrossing.png"), name: "Stop children crossing" },
    { id: 50, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/turnleftahead.png"), name: "Turn left ahead" },
    { id: 51, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/turnrightahead.png"), name: "Turn right ahead" },
    { id: 52, indicator:'MANDATORY_SIGNS', img: require("./assets/mandatory_signs/vehiclestravelstrightorturnright.png"), name: "Vehicle travel straight or turn" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/airport.png"), name: "Airpot" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/breakdownservice.png"), name: "Break down service" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/busstop.png"), name: "Bus stop" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/campingorcaravansite.png"), name: "Camping or caravan site" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/campsite.png"), name: "Camp site" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/caravansite.png"), name: "Caravan site" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/controlledparkingzone.png"), name: "Controlled parking" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/endofextralane.png"), name: "End of Extra lane" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/endoffreewaymotorway.png"), name: "End of freeway  motorway" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/endofmeterzone.png"), name: "End of meter zone" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/endofpriorityroad.png"), name: "End of priority road" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/ferry.png"), name: "Ferry" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/fillingstation.png"), name: "Filling station" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/firstaid.png"), name: "First Aid" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/freeway.png"), name: "Free motorway" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/hospital.png"), name: "Hospital" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/hotel.png"), name: "Hotel" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/hump.png"), name: "Hump" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/information.png"), name: "Information" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/noroadthrough.png"), name: "No road through" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/nothroughroad.png"), name: "No through road straight" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/nothroughroadontheleft.png"), name: "No through road on the left" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/nothroughroadontheright.png"), name: "No through road on the right" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/nothroughroadstraightahead.png"), name: "No through road straight ahead" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/onewayroad.png"), name: "One way road" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/parking.png"), name: "Parking" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/pedestrianscrossing.png"), name: "Pedestrians Crossing" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/policestation.png"), name: "Police station" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/priorityoveroncomingvehicles.png"), name: "Priority over coming vechicles" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/priorityroad.png"), name: "Priority Road" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/refreshment.png"), name: "Refreshment" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/restarea.png"), name: "Rest Area" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/restaurant.png"), name: "Restaurant" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/telephone.png"), name: "Telephone" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/workshop.png"), name: "Workshop" },
    { id: 52, indicator:'INFORMATION_SIGNS', img: require("./assets/information_signs/zebracrossing.png"), name: "Zebra Crossing" },
    { id: 52, indicator:'ROADWORKS_SIGNS', img: require("./assets/roadwork_signs/barricade.png"), name: "Barricade, No entry" },
    { id: 52, indicator:'ROADWORKS_SIGNS', img: require("./assets/roadwork_signs/changelane.png"), name: "Change Lane" },
    { id: 52, indicator:'ROADWORKS_SIGNS', img: require("./assets/roadwork_signs/laneclosed.png"), name: "Lane Closed" },
    { id: 52, indicator:'ROADWORKS_SIGNS', img: require("./assets/roadwork_signs/roadworks.png"), name: "Roadworks" },
    { id: 52, indicator:'ROADWORKS_SIGNS', img: require("./assets/roadwork_signs/trafficcontrolahead.png"), name: "Traffic control ahead" },
    { id: 52, indicator:'TRANSERVE_MARKINGS', img: require("./assets/transerve_markings/singleuncontrolled.png"), name: "Single Uncontrolled" },
    { id: 52, indicator:'TRANSERVE_MARKINGS', img: require("./assets/transerve_markings/stopline.png"), name: "Stop Line" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/centrelaneguiding.png"), name: "Centre lane marking" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/centrelinemarking.png"), name: "Centre lane marking" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/chevronmarkingdiverging.png"), name: "Chevron marking" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/chevronmarkingemerging.png"), name: "Chevron marking" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/deflectionarrowmoveinthedirectionofthearrow.png"), name: "Deflection arrow-move in" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/divergearrowaheadofleftturnlane.png"), name: "Diverge arrow ahad of left" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/divergearrowaheadofrightturnlane.png"), name: "Diverge arrow ahad of right" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/give_way1.jpg"), name: "Give way to traffic" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/give_way2.jpg"), name: "Give way to traffic" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/give_way3.jpg"), name: "Give way to traffic" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/give_way4.jpg"), name: "Stop line at signals or police" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/give_way5.jpg"), name: "Stop line for pedestrians" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/give_way6.jpg"), name: "Stop line for pedestrians" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/give_way7.jpg"), name: "A borken white line marks" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/give_way8.jpg"), name: "Longer broken white lines" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/give_way9.jpg"), name: "Double solid white lines" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/give_way10.jpg"), name: "If travelling in the left-hand" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/giveway.png"), name: "Give way" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/lanearrowaheadonly.png"), name: "Lane arrow ahead only" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/lanearrowaheadorturnleft.png"), name: "Lane arrow ahead or turn left" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/lanearrowaheadorturnright.png"), name: "Lane arrow ahead or turn right" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/lanearrowturnleft.png"), name: "Lane arrow turn left" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/lanearrowturnright.png"), name: "Lane arrow turn right" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/lanemarkingdualormulti.png"), name: "Lane marking Dual/Multi" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/parkingbay.png"), name: "Parking bay" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/Picture%201.png"), name: "Stop" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/solidline.png"), name: "Solid line-No crossing" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/speedlimitmarking.png"), name: "Speed limit marking" },
    { id: 52, indicator:'OTHER_ROAD_MARKINGS', img: require("./assets/otherroadmarkings/stop.png"), name: "Stop" },
    { id: 52, indicator:'ROAD_MARKINGS', img: require("./assets/road_markings/brokenline.png"), name: "Broken Driving Line (You may" },
    { id: 52, indicator:'ROAD_MARKINGS', img: require("./assets/road_markings/climbinglane.png"), name: "Climbing lane a) slow moving" },
    { id: 52, indicator:'ROAD_MARKINGS', img: require("./assets/road_markings/continousandbrokendividingline.png"), name: "Continous and broken driving" },
    { id: 52, indicator:'ROAD_MARKINGS', img: require("./assets/road_markings/continousdividingline.png"), name: "Continous Driving Line" },
    { id: 52, indicator:'ROAD_MARKINGS', img: require("./assets/road_markings/continuityline.png"), name: "Continuity Line (Marks the edge)" },
    { id: 52, indicator:'ROAD_MARKINGS', img: require("./assets/road_markings/doublecontinousdividingline.png"), name: "Double Continuous" },
    { id: 52, indicator:'ROAD_MARKINGS', img: require("./assets/road_markings/noparking.png"), name: "No parking Line" },
    { id: 52, indicator:'ROAD_MARKINGS', img: require("./assets/road_markings/standardedgeline.png"), name: "Standard Edge line" },
    { id: 52, indicator:'ROAD_MARKINGS', img: require("./assets/road_markings/zigzagline.png"), name: "ZIG ZAG Marking" },
    { id: 53, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/beginningofdualcarriageroad.png"), name: "Road widens ahead" },
    { id: 54, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/bendleft.png"), name: "Bend left" },
    { id: 55, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/bendright.png"), name: "Bend right" },
    { id: 56, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/carriagewaynarrowsbothsides.png"), name: "Carriage way narrows both" },
    { id: 57, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/cattlecrossingahead.png"), name: "Cattle crossing ahead" },
    { id: 58, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/childrencrossing.png"), name: "Children crossing" },
    { id: 59, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/crossingwind.png"), name: "Crossing wind" },
    { id: 60, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/cyclist.png"), name: "Cyclist" },
    { id: 61, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/dangeroffallingrocksahead.png"), name: "Danger of falling rocks" },
    { id: 62, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/electriccablesahead.png"), name: "Electric cable" },
    { id: 63, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/endofdualcarriageroad.png"), name: "End of dual carriage road" },
    { id: 64, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/ferryahead.png"), name: "Ferry ahead" },
    { id: 65, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/give_way.png"), name: "Give way" },
    { id: 66, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/hazardahead.png"), name: "Hazard ahead" },
    { id: 67, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/humbbridgeahead.png"), name: "Hump bridge ahead" },
    { id: 68, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/junctionahead.png"), name: "Junction ahead stop" },
    { id: 69, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/junctionaheadofaccelerationlanewithroadfromtherigh.png"), name: "Junction ahead of acceleration" },
    { id: 70, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/loosesurfaceroads.png"), name: "Loose surface road" },
    { id: 71, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/lowflyingaircraftcrossingahead.png"), name: "Lower flying aircraft" },
    // { id: 72, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/men_at_work.png"), name: "Road work ahead" },
    { id: 73, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/minorroadfromleft.png"), name: "Minor road road left" },
    { id: 74, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/minorroadfromright.png"), name: "Minor road right" },
    { id: 75, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/narrowbridgeahead.png"), name: "Narrow bridge ahead" },
    { id: 76, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/pedestrianscrossing.png"), name: "Pedestrians crossing" },
    { id: 77, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/railwaycrossingwithbarriers.png"), name: "Railway crossing with barrier" },
    { id: 78, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/railwaycrossingwithoutbarriers.png"), name: "Railway crossing without barrier" },
    { id: 79, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/riverbank.png"), name: "River bank" },
    { id: 80, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/riverbendcrossingahead.png"), name: "River bend crossing" },
    { id: 81, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/roadjunctionahead.png"), name: "Road junction ahead" },
    { id: 82, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/roadnarrowsfromleft.png"), name: "Narrow road left" },
    { id: 83, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/roadnarrowsfromright.png"), name: "Narrow road right" },
    { id: 84, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/roadwidensahead.png"), name: "Road widens ahead" },
    { id: 85, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/roadworksahead.png"), name: "Road works ahead" },
    { id: 86, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/roundaboutahead.png"), name: "Round about" },
    { id: 87, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/severebumpahead.png"), name: "Severe hump ahead" },
    { id: 88, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/severedipahead.png"), name: "Severe dipa ahead" },
    { id: 89, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/slipperyroad.png"), name: "Slippery road" },
    { id: 90, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/steepascentahead.png"), name: "Steep ascent head" },
    { id: 91, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/steepdecentahead.png"), name: "Steep descent head" },
    { id: 92, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/stop.png"), name: "Stop" },
    { id: 93, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/successivebendtotheleft.png"), name: "Successive bend left" },
    { id: 94, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/successivebendtotheright.png"), name: "Successive bend right" },
    { id: 95, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/t-junctionahead.png"), name: "T-junction ahead" },
    { id: 96, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/trafficjam.png"), name: "Traffic jam" },
    { id: 97, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/trafficlightsignalahead.png"), name: "Traffic lights ahead" },
    { id: 98, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/twowaytrafficahead.png"), name: "Two way trafic head" },
    { id: 99, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/unevenroadsurfaceahead.png"), name: "Uneven road surface ahead" },
    { id: 100, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/wildaninalscrossing.png"), name: "Game park ahead" },
    { id: 101, indicator:'WARNING_SIGNS', img: require("./assets/warning_signs/yintersectionahead.png"), name: "Y-intersection ahead" },
    { id: 102, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/alternateright_bike.png"), name: "ht" },
    { id: 103, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/ambulance.png"), name: "ht" },
    { id: 104, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/arrowdirection.png"), name: "ht" },
    { id: 105, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/breakdownservice.png"), name: "ht" },
    { id: 106, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/firebrigade.png"), name: "ht" },
    { id: 107, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/frontandbehindstop.png"), name: "ht" },
    { id: 108, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/green.png"), name: "ht" },
    { id: 109, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/greenyescross.png"), name: "ht" },
    { id: 110, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/leftindicator.png"), name: "ht" },
    { id: 111, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/motorbikeslowdown.png"), name: "ht" },
    { id: 112, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/motorbiketurningright.png"), name: "ht" },
    { id: 113, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/motorbiketurnleft.png"), name: "ht" },
    { id: 114, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/orange.png"), name: "ht" },
    { id: 115, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/policelight.png"), name: "ht" },
    { id: 116, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/red.png"), name: "ht" },
    { id: 117, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/redflashing.png"), name: "ht" },
    { id: 118, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/redlights.png"), name: "ht" },
    { id: 119, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/rednocross.png"), name: "ht" },
    { id: 120, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/rightindicator.png"), name: "ht" },
    { id: 121, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/sidevehiclescome.png"), name: "ht" },
    { id: 122, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/slowdown_car.png"), name: "ht" },
    { id: 123, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/stop_bike.png"), name: "ht" },
    { id: 124, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/taxservice.png"), name: "ht" },
    { id: 125, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/turningleft_bike.png"), name: "ht" },
    { id: 126, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/turningleftgo.png"), name: "ht" },
    { id: 127, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/turningright_bike.png"), name: "ht" },
    { id: 128, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/turningrightgo.png"), name: "ht" },
    { id: 129, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/turnleft_car.png"), name: "ht" },
    { id: 130, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/turnright_car.png"), name: "ht" },
    { id: 131, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/vehiclesbehindstop.png"), name: "ht" },
    { id: 132, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/vehiclesfrombehindcome.png"), name: "ht" },
    { id: 133, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/vehiclesfromfrontcome.png"), name: "ht" },
    { id: 134, indicator:'TRAFFIC_SIGNALS', img: require("./assets/traffic_signals/vehiclesfromfrontstop.png"), name: "ht" },

];



export const quiz=[
    {
    id:1, 
    indicator:"PRACTICE_QUIZ_1",
    score:0,
    qtnsList:[
        {
            qtnNo:"Q1.",
            question:"Who is a driver?", 
            correctAnswer:"A",
            suggestions:[
                {id:2, objective:"B", option: "A person who knows how operates a vehicle on the road."},
                {id:3, objective:"C", option: "A person who is willing to learn how to operates a vehicle."},
                {id:4, objective:"D", option: "All of the above."},
            ],
            selectedObjective:""
    
    },
    {
        qtnNo:"Q2.",
        question:"Who is a driver?", 
        correctAnswer:"A",
        suggestions:[
            {id:2, objective:"B", option: "A person who knows how operates a vehicle on the road."},
            {id:3, objective:"C", option: "A person who is willing to learn how to operates a vehicle."},
            {id:4, objective:"D", option: "All of the above."},
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
    id:2, 
    indicator:"PRACTICE_QUIZ_2A",
    score:0,
    qtnsList:[
        {
            qtnNo:"Q1.",
            question:"Who is a driver?", 
            correctAnswer:"A",
            suggestions:[
                {id:2, objective:"B", option: "A person who knows how operates a vehicle on the road."},
                {id:3, objective:"C", option: "A person who is willing to learn how to operates a vehicle."},
                {id:4, objective:"D", option: "All of the above."},
            ],
            selectedObjective:""
    
    },
    {
        qtnNo:"Q2.",
        question:"What is the RULE of the road in Uganda?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Always keep right"},
            {id:2, objective:"B", option: "Always keep left"},
            {id:3, objective:"C", option: "Drive both sides"},
            {id:4, objective:"D", option: "Non of the above."},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q3.",
        question:"On which side do we overtake another vehicle?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "In the Middle "},
            {id:2, objective:"B", option: "Left Side"},
            {id:3, objective:"C", option: "Right Side"},
            {id:4, objective:"D", option: "Any Side"},
        ],
        selectedObjective:""

    }, {
        qtnNo:"Q4.",
        question:"When can you overtake from the LEFT?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "When the vehicle in front is turning right and there is space on the left. Bevery careful in such action."},
            {id:2, objective:"B", option: "When there is an accident and the only place you can overtake is Left."},
            {id:3, objective:"C", option: "Never Overtake ON the Left"},
            {id:4, objective:"D", option: "1 and 2"},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q5.",
        question:"How many seconds does a yellow light last?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "2 - 5 seconds"},
            {id:2, objective:"B", option: "4 - 7 seconds"},
            {id:3, objective:"C", option: "3 - 6 seconds"},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q6.",
        question:"Who is a pedestrian?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "A person riding a motorcycle"},
            {id:2, objective:"B", option: "Road users a foot"},
            {id:3, objective:"C", option: "Anyone driving"},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q7.",
        question:"Name three documents which must ne valid before you are allowed to drive?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Valid driving license"},
            {id:2, objective:"B", option: "valid insurance certificate"},
            {id:3, objective:"C", option: "Valid vehicle inspection certificate"},
            {id:3, objective:"D", option: "All of the Above"},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q8.",
        question:"What important tools must you carry when driving for a safari?",
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
        question:"How many eyes does a driver have?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Two"},
            {id:2, objective:"B", option: "Four"},
            {id:3, objective:"C", option: "Three"},
            {id:3, objective:"D", option: "One"},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q10.",
        question:"If you get a flat tire while driving you should",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Turn on your hazard lights and drive a service station"},
            {id:2, objective:"B", option: "Keep the steering wheel straight, slow down, and pull over"},
            {id:3, objective:"C", option: "Speed up untill you find a sage exit"},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q11.",
        question:"What is a Clearway?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "All vehicles are free to go through"},
            {id:2, objective:"B", option: "An area in which stopping and nparking is prohibited, (except by buses or tazxis) for a period indicated on the Clearway signpost"},
            {id:3, objective:"C", option: "Speed up untill you find a safe place to park"},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q12.",
        question:"If you intend to turn left, are you required to give a signal",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "No, if arrows are marked on the roadway"},
            {id:2, objective:"B", option: "No, if turning left from a lane marked left turn only"},
            {id:3, objective:"C", option: "Yes, if turn signals are fitted to your vechicle"},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q13.",
        question:"Do you have any responsibilities when opening a vechicle door on a roadway?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "No, any following traffic must stop if the door interferes with its progress."},
            {id:2, objective:"B", option: "No, there is no regulation to cover this situation."},
            {id:3, objective:"C", option: "Yes, you must not open a door if you are likely to cause danger to road users or impede traffic."},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q14.",
        question:"Is it an offence to obstruct clear vision of your number plates",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Yes, but is is legal for a towbar or bicycle rack to cover the reat number plate."},
            {id:2, objective:"B", option: "No, you are allowed to cover your numberb plates if you want to"},
            {id:3, objective:"C", option: "Yes, at any time"},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q15.",
        question:"Before driving on a freeway, which of the following should you do?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Take someting to calm your nervers before driving."},
            {id:2, objective:"B", option: "Make sure your vechicle has enough fuel, oil, water and ther correct tyre pressure."},
            {id:3, objective:"C", option: "Take your street directly in case you get lost"},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q16.",
        question:"If you see a sign indicating road repairs are going on, you should -",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Maintain ther same speed."},
            {id:2, objective:"B", option: "Slow down and watch for traffic controllers and instructions."},
            {id:3, objective:"C", option: "Stop immediately and wait for instructions."},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q17.",
        question:"Are you required to carry your driver's licence with you every time you drive?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Yes."},
            {id:2, objective:"B", option: "No it is only needed on long trips."},
            {id:3, objective:"C", option: "No, being licensed is enough."},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q18.",
        question:"If you are driving towards a road works zone and a traffic controller displays a stop sign you must -",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Stop your vehicle and follow the directions of the traffic controller."},
            {id:2, objective:"B", option: "Stop and then proceed if you think it is safe."},
            {id:3, objective:"C", option: "Slow down and continue through the road works zone."},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q19.",
        question:"Do bicyle riders have the same rights and responsibilities as drivers and motorycyle riders? and a traffic controller displays a stop sign you must -",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "No, they must always ride on the footpath."},
            {id:2, objective:"B", option: "Yes."},
            {id:3, objective:"C", option: "Nno, they must give way to cards at all times when riding on the road."},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q20.",
        question:"Before getting our of your vehicle you must?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Check your seatbelt is back in place."},
            {id:2, objective:"B", option: "Check your mirrors and blind spots for pedestrians, bicyles or others vehicles."},
            {id:3, objective:"C", option: "Check your headlights are turned off."},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q21.",
        question:"Before driving a long distance at a fast speed or carrying a full car load, you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Have a large meal and cup of coffee to stay alert."},
            {id:2, objective:"B", option: "Check your tyre pressure, and if necessary, increase it to what the manufacturer recommends."},
            {id:3, objective:"C", option: "Make sure you have a map so that you know where you are going."},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q22.",
        question:"If youare involved in an accident where your car needs to be towed away  but the police doesn't attend the crash scene?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Must report the accident to the police station nearest to where the accident."},
            {id:2, objective:"B", option: "Do not report the accident to the police."},
            {id:3, objective:"C", option: "Only need to report to the police if someone was injured."},
        ],
        selectedObjective:""

    },{
        qtnNo:"Q23.",
        question:"When should you use your right hand indicator?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "When you intend to slow down."},
            {id:2, objective:"B", option: "When you are about to stop."},
            {id:3, objective:"C", option: "When you intent to tuen right at anytime."},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q24.",
        question:"Are you permitted to tow a caravan with a person riding in the caravan?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Yes provided you do not exceed 60km/hr."},
            {id:2, objective:"B", option: "No, not under any circumstances."},
            {id:3, objective:"C", option: "Yes, if the person(s) in the caravan are over 12 years of age."},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q25.",
        question:"You are driving at night with your headlights on high beam. When should you dip your headlights?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "When within 200 metres of an oncoming vehicle only."},
            {id:2, objective:"B", option: "When within 200 metres of the vehicle a head or an oncoming one."},
            {id:3, objective:"C", option: "Never, you are allowed to drive with your lights on high beam at all times."},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q26.",
        question:"If you see a sign indicating road repairs are going on, you should?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Slow down immediatelyy and wait for instructions."},
            {id:2, objective:"B", option: "Maintain the same speed."},
            {id:3, objective:"C", option: "Slow down and watch for traffic controllers and instructions."},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q27.",
        question:"Whenn driving at sunset or dawn on a dark day, what should you do?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Turn on your lights on low beam."},
            {id:2, objective:"B", option: "Keep your sun glasses on to cut down heading glare."},
            {id:3, objective:"C", option: "Turn on your hazard warning lights."},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q28.",
        question:"If you see a horse and rider on the road, what should you do?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Sound your horn to warn the rider."},
            {id:2, objective:"B", option: "Slow down and give them plenty of room."},
            {id:3, objective:"C", option: "Speed up tp pass the horse."},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q29.",
        question:"If you vehicle is involved in an accident and a person is injured what should you do?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Render every assitance and take immediate steps to have an ambulance notified, then call the police."},
            {id:2, objective:"B", option: "Only call the police if the accident also resulted in over 500 Gollars worth of propery damege."},
            {id:3, objective:"C", option: "Report the accident to the police within seven days."},
        ],
        selectedObjective:""

    },
    {
        qtnNo:"Q30.",
        question:"You borrowed a friends car and find that the positon of th drivers seat puts you a long way from teh sreeting wheen an controls. What should you do?",
        correctAnswer:"A",
        suggestions:[
            {id:1, objective:"A", option: "Put up with the discomfor; you should not adjust another person(s) seat."},
            {id:2, objective:"B", option: "Ask your friend for a cushion to place behind your back."},
            {id:3, objective:"C", option: "CAdjust the seat forward so its right for you."},
        ],
        selectedObjective:""

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
]



