import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { FullWindowOverlay } from 'react-native-screens';
// import { Dimensions } from 'react-native'
// import {useWindowDimensions} from 'react-native';

// const WINDOW_HEIGHT = useWindowDimensions().height;

export const styles = StyleSheet.create(
    {
        healthPalBlue: {
            // color: '#263776',
            color: '#800000',
        },
        healthPalBlueBackground: {
            // backgroundColor: '#263776',  
            backgroundColor: '#ffffff',
        },
        healthPalGreen: {
            color: '#5F9B42',
        },
        healthPalWhite: {
            color: '#ffffff',
        },
        healthPalRed: {
            color: '#e60000',
        },
        flex1: {
            flex: 1,
        },

        itemCenter: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        itemCenterIntro: {
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        marginBottom: {
            marginBottom: 20,

        },
        marginBottomItemList: {
            marginBottom:5
        },
        marginBottomCar: {
            marginBottom: 10,

        },
        screenLogo: {
            height: 100,
            width: '100%',
            borderRadius: 10
        },
        profilePic: {
            height: '50%',
            width: '100%',
            borderRadius: 10
        },
        padding: {
            padding: 10
        },
        marginBottom10: {
            marginBottom: 10,
        },
        marginTop10: {
            marginTop: 10,
        },
        touchableButton: {
            borderWidth: 1,
            borderColor: '#5F9B42',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            height: 45,
            borderRadius: 5,
            backgroundColor: '#5F9B42'
        },
        touchableButtonCtm: {
            borderWidth: 1,
            borderColor: '#5F9B42',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 15,
            borderRadius: 10,
            backgroundColor: '#5F9B42'
        },
        touchbCtmPymnt: {
            backgroundColor: '#00cc33'
        },

        touchableClearButton: {
            // borderWidth: 1,
            // borderColor: '#253674',
            width: '20%',
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            borderRadius: 10,
            backgroundColor: 'rgba(1, 1, 1, .1)'
        },
        buttonCircle: {
            width: 40,
            height: 40,
            backgroundColor: 'rgba(1, 1, 1, .1)',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
        },

        gridContainer: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: 10
        },
        gridContainerHome: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: 5,
            paddingHorizontal:10
        },
        gridItem: {
            width: '48%',
        },
        gridItemNew: {
            width: '48%',
        },
        card: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,
            backgroundColor:"#f5d6d6",
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 5
        },
        cardTheories: {
            shadowOpacity: 0.26,
            backgroundColor:"white",
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 10,
            paddingRight: 10,
        },
        cardItemsList: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 2,
            shadowOpacity: 1,
            elevation: 2,
            backgroundColor:"white",
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 5
        },
        cardHome: {
            shadowColor: '#7f1416',
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: 0,
            shadowOpacity: 1,
            elevation: 1,
            backgroundColor:"#fef0e7",
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 10,
            androidShadow:{
                elevation:10
            }
        },
        cardNew: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,
            backgroundColor: 'white',
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 5
        },
        iconDetails:{
            alignItems:"center",
            justifyContent:"center",
            rowGap:10
        },
        cardWithoutPadding: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,
            backgroundColor: 'white',

            // paddingTop: 20,
            // paddingBottom: 20,
            // paddingLeft: 10,
            // paddingRight: 10,
            borderRadius: 5
        },
        rows: {
            flexDirection: 'row',
            alignItems: 'center',
            // marginRight: 15,
        },

        row: {
            flexDirection: 'row',
        },

        item: {
            width: '48%', // is 50% of container width
        },
        itemHome: {
            width: '48%', // is 50% of container width
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
        },

        categoryItem: {
            width: '32%'
        },
        introText: {
            fontWeight: 'bold',
            fontSize: 20
        },
        heading: {
            fontWeight: 'bold',
            fontSize: 25,
            paddingBottom: 5

        },
        page: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff"
        },
        container: {
            height: '100%',
            width: '100%',
            backgroundColor: "#fff"
        },
        map: {
            flex: 1
        },
        navIconStyle: {
            paddingRight: 10
        },
        drawerContent: {
            flex: 1,
        },
        userInfoSection: {
            paddingLeft: 20,
        },
        title: {
            fontSize: 16,
            marginTop: 3,
            fontWeight: 'bold',
        },
        caption: {
            fontSize: 14,
            lineHeight: 14,
        },
        section: {
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 15,
        },
        paragraph: {
            fontWeight: 'bold',
            marginRight: 3,
        },
        drawerSection: {
            marginTop: 15,
        },
        bottomDrawerSection: {
            marginBottom: 0,
            borderTopColor: '#f4f4f4',
            borderTopWidth: 1
        },
        preference: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 12,
            paddingHorizontal: 16,
        },
        image: {
            width: 70,
            height: 70,
            borderRadius: 70 / 2,
            overflow: "hidden",
            borderWidth: 1,
        },
        passwordWidth: {
            width: '100%'
        },
        showPasswordIcon: {
            width: '15%',
            position: 'absolute',
            right: 0
        },
        loginMarginTop: {
            marginTop: '30%'
        },
        homeScreenIcon: {
            height: 120,
            width: 120,
        },
        homeScreenIcon2: {
            height: 120,
            width: 120,
            objectFit:'contain'
        },
        homeScreenIconNew: {
            height: 100,
            width: 100,
            objectFit:"contain",
            marginBottom:10
        },
        doctorsThumbnail: {
            width: 60,
            height: 60
        },
        borderBottom: {
            borderBottomWidth: 1,
            width: '100%',
            borderBottomColor: '#e6e6e6',
            marginBottom: 2,
        },
        marginRight: {
            marginRight: 10
        },
        fontWeightBold: {
            fontWeight: 'bold',
        },
        greyColorFaint: {
            color: '#8c8c8c'
        },
        pageTitle: {
            fontSize: 25,
            fontWeight: 'bold',
            color: '#263776'

        },
        searchResultTouchable: {
            padding: 10,
            borderBottomColor: '#e6e6e6',
            borderBottomWidth: 1

        },
        searchResults: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.26,
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            borderRadius: 5
        },
        searchResultItem: {
            fontSize: 20
        },
        searchPageMarginTop: {
            marginTop: 10

        },
        appBar: {
            height: 100,
            backgroundColor: '#263776',
            paddingTop: 25,
            paddingLeft: 10,
            paddingRight: 10,
        },
        imageBackGround: {
            width: '100%',
            height: '100%',
        },
        backgroundImageHeight: {
            height: 100,
        },
        pharmacyCatImg: {
            height: 40,
            width: 40,
            overflow: 'hidden'
        },
        padding10: {
            padding: 10
        },
        floatRight: {
            alignItems: 'flex-end',
            marginTop: -20,
        },
        alignRight: {
            textAlign: 'right'
        },
        minFullHeight: {
            minHeight: '100%',
        },
        fontSize5: {
            fontSize: 5
        },
        fontSize: {
                fontSize: 30
            },
        fontSize15: {
            fontSize: 25
        },
        fontSize10: {
            fontSize: 10
        },
        qtn: {
            fontSize: 25,
            color:"black"
        },
        qtn15: {
            fontSize: 15,
            color:"black",
            fontWeight:'bold',
        },
        qtnChoose: {
            fontSize: 15,
            color:"black",
            marginTop:10,
            marginBottom:40,
        },
        fontSize12: {
            fontSize: 12
        },
        fontSize15: {
            fontSize: 15
        },
        fontSize20: {
            fontSize: 20
        },
        textColor: {
            color: "black"
        },
        questCardContainer: { flex:1,flexDirection: 'row', alignItems: 'center', justifyContent:"space-between", paddingVertical:15, paddingRight:10, paddingLeft:20 },
        paddingItemList: {
            paddingVertical: 50
        },
        fontSize25: {
            fontSize: 20
        },
        fontSize40: {
            fontSize: 40
        },
        fontSize50: {
            fontSize: 50
        },
        fontSize60: {
            fontSize: 60
        },
        medicineDetailsImage: {
            width: '98%',
            height: 200
        },
        floatingButton: {
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            position: 'absolute',
            bottom: 10,
            right: 10,
            height: 70,
            backgroundColor: '#fff',
            borderRadius: 100,
        },

        backgroundWhite: {
            backgroundColor: '#ffffff'
        },
        greenTheme: {
            backgroundColor: "#5F9B42"
        },
        darkTheme: {
            backgroundColor: '#333340'
        },
        lightTheme: {
            backgroundColor: '#ffffff'
        },
        selectStyle: {
            borderRadius: 5
        },
        selectTextColor: {
            color: "#000"
        },
        flex09: {
            flex: 0.9
        },
        flex01: {
            flex: 0.1,
            paddingLeft: 2
        },
        flex06: {
            flex: 0.6
        },
        flex04: {
            flex: 0.6,
            paddingLeft: 2
        },
        flex03: {
            flex: 0.3
        },
        flex07: {
            flex: 0.7
        },
        flex05: {
            flex: 0.5
        },

        // cart css 
        container: {
            flex: 1,
            padding: 20,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
        },
        item: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
        },
        
        itemName: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        itemPrice: {
            fontSize: 14,
            marginBottom: 5,
        },
        quantityInput: {
            backgroundColor: '#f0f0f0',
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 5,
            textAlign: 'center',
            minWidth: 40,
            marginBottom: 5,
        },
        subtotal: {
            fontWeight: 'bold',
        },
        itemActions: {},
        actionButton: {
            backgroundColor: 'red',
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 5,
        },
        actionButtonText: {
            color: 'white',
            fontWeight: 'bold',
        },
        emptyText: {
            textAlign: 'center',
        },
        total: {
            textAlign: 'right',
            marginTop: 20,
            fontSize: 18,
            fontWeight: 'bold',
        },
        container: {
            flex: 1,
            padding: 24,
            backgroundColor: 'grey',
        },
        contentContainer: {
            flex: 1,
            alignItems: 'center',
        },
        fontWeightBold:{
            fontWeight: 'bold',
        },
            minWidth:{
            minWidth: '44%',
            width: '44%',
            minHeight:'13%'
        },
            minWidthHome:{
            minWidth: '48%',
            width: '48%',
            minHeight:'13%'
        },
        maxWidth:{
            width: '44%',
            // maxWidth: '44%',
            // minHeight:'18%'
        },
        textWrap:{
            fontSize: 15,
            textAlign: 'center',
            flexWrap: 'wrap',
            marginTop:10
        },
        textWrap:{
            fontSize: 10,
            textAlign: 'center',
            flexWrap: 'wrap',
            marginTop:10
        },
        fullScreenSliderImg: {
            height: 240,
            width: 240,
        },
        introImg:{
            height:"100%"
        },
        textJustified:{
            textAlign: 'justify'
        },
        paymentButtonText:{
            
        },
        modalContainer:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        modalCard:{
            backgroundColor: 'white',
            padding: 10,
            alignItems: 'center',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 2,
            width: '90%',
            paddingTop: 30,
            paddingBottom: 30,
            elevation: 5,
        },
        modalImg:{
            width: 100,
            height: 100,
            marginBottom: 10,
        },
        modalCloseButton:{
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 1,
        }



    }
)