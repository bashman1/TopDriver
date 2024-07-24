import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Appearance, TextInput } from 'react-native';
import { styles } from '../../styles/Styles';
import { learnMoreData } from '../../intro-data';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet'; import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';

import { PayWithFlutterwave } from 'flutterwave-react-native';
import { FlutterwaveButton } from 'flutterwave-react-native';
import { WebView } from 'react-native-webview';

import { AuthContext } from '../../services/Context';
import { LoggedInUser, System, GenericInsert, GenericQueryAll, GenericQueryWhere } from '../../databases/allSchemas';
import {createAlert} from "../../services/CommonService";



const LernMore = (props: any) => {
  const sheetRef = useRef<BottomSheet>(null);

  const [items, setItems] = useState(learnMoreData)
  const [accessToken, setAccessToken] = useState(false);
  const { signIn } = React.useContext(AuthContext);
  const [loginToken, setLoginToken]=useState(null);


  useEffect(() => {
  });

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handleSheetChange = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);


  /**
   * On successful payment
   */
  const onSuccessfulPayment = () => {
    let userData = {
      id: Math.floor(Date.now() / 1000),
      age: 18,
      code: "paymentCode",
      contact: "0700000000",
      createdBy: 1,
      createdOn: new Date(),
      email: "email@email.email",
      firstName: "John",
      lastName: "Doe",
      status: "Active",
      token: (Math.floor(Date.now() / 1000)).toString(),
      updatedBy: null,
      updatedOn: null,
      userType: "Premium User",
      tableId: Math.floor(Date.now() / 1000)
    };
    GenericInsert(LoggedInUser, userData).then((loggedInUser) => {
      signIn();
    }).catch((error) => { })
  }

  // renders
  const renderBackdrop = useCallback(
    (props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={2}
      />
    ),
    []
  );


  const toggleAccessToken = (action) => {
    setAccessToken(action);
  }

  interface RedirectParams {
    status: 'successful' | 'cancelled';
    transaction_id?: string;
    tx_ref: string;
  }

  /* An example function called when transaction is completed successfully or canceled */
  const handleOnRedirect = (data: RedirectParams) => {
    if (data?.status == 'successful') {
      onSuccessfulPayment();
    }
    // console.log("************* the payment is successfully **************************************")
    // // {"status": "successful", "transaction_id": "5124345", "tx_ref": "flw_tx_ref_nyNpycZSC7"}
    // // {"status": "cancelled", "tx_ref": "flw_tx_ref_se0JD15Ymb"}
    // console.log(data);
  };

  /* An example function to generate a random transaction reference */
  const generateTransactionRef = (length: number) => {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return `flw_tx_ref_${result}`;
  };

  const loginWithAccessToken =()=>{
      console.log(loginToken)
      if (loginToken == "viQdPUD05E"){
          onSuccessfulPayment();
      }else{
          createAlert('Process Failed', 'Invalid access token')
      }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>
      {items.map(item =>
        <Image style={{ flex: 1, resizeMode: 'cover', width: '100%', height: 600, marginBottom: 5, marginTop: 10 }} source={item.img} />)}


      <TouchableOpacity style={styles.touchableButton} onPress={() => handleSnapPress(1)}>
        <Text style={styles.healthPalWhite}>Next</Text>
      </TouchableOpacity>

      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        index={-1}
      >
        <BottomSheetView style={styles.contentContainer}>
          <View style={{ flex: 1, alignItems: 'center', padding: 30, width: "100%", rowGap: 30 }}>
            <PayWithFlutterwave
              onRedirect={handleOnRedirect}
              options={{
                tx_ref: generateTransactionRef(10),
                authorization: 'FLWPUBK-557d50a348e86180b33dc33cc05ebba5-X',
                customer: {
                  email: 'nendebosco7@gmail.com'
                },
                amount: 3000,
                currency: 'UGX',
                payment_options: 'card, mobilemoneyuganda'
              }}

              customButton={(props) => (
                // <TouchableOpacity
                //   style={styles.paymentButton}
                //   onPress={props.onPress}
                //   isBusy={props.isInitializing}
                //   disabled={props.disabled}>
                //     <Text style={styles.paymentButtonText}>Pay $500</Text>
                // </TouchableOpacity>

<TouchableOpacity style={[styles.touchableButtonCtm, styles.touchbCtmPymnt]} onPress={props.onPress} isBusy={props.isInitializing} disabled={props.disabled}>
<Text style={styles.healthPalWhite}>Pay with Mobile Money</Text>
</TouchableOpacity>
              )}
              
            />
            <Text style={{ fontSize: 20, color:'#808080', }}>A one time Fee of 3,000/=</Text>
            {/* <TouchableOpacity style={[styles.touchableButtonCtm, styles.touchbCtmPymnt]} onPress={() => { handleSnapPress(1); onSuccessfulPayment(); }}>
              <Text style={styles.healthPalWhite}>Pay with Mobile Money</Text>
            </TouchableOpacity> */}
            {
              accessToken ? (
                <View style={styles.inputContainer}>
                              <Text style={{ fontSize: 10, color:'#808080', }}>ACCESS TOKEN</Text>
                  <View style={[styles.marginBottom, styles.inputContainer]}>
                    <TextInput style={styles.input} onChangeText={(loginToken:any)=>setLoginToken(loginToken)}></TextInput>
                  </View>
                  <TouchableOpacity style={[styles.touchableButtonCtm, styles.marginBottom]} onPress={() => {loginWithAccessToken() }}>
                    <Text style={styles.healthPalWhite}>Submit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.touchableButtonCtm} onPress={() => { toggleAccessToken(false) }}>
                    <Text style={styles.healthPalWhite}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity style={styles.touchableButtonCtm} onPress={() => { toggleAccessToken(true) }}>
                  <Text style={styles.healthPalWhite}>Enter Access Code</Text>
                </TouchableOpacity>
              )
            }
            {/* <Text style={{ fontSize: 15, textAlign: "center", lineHeight: 20 }}>For more inquiries, contact 0778637224 / 0778637224 (Whatsapp)</Text> */}
          </View>
        </BottomSheetView>
      </BottomSheet>

    </View>
  )

}
export default LernMore;