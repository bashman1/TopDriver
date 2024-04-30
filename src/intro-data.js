
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

}
      
    ]
    },
]



