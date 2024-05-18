import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';
import { learnMoreData } from '../../intro-data';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet'; import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';

import { PayWithFlutterwave } from 'flutterwave-react-native';
import { FlutterwaveButton } from 'flutterwave-react-native';
import { WebView } from 'react-native-webview';


const LernMore = (props: any) => {
  const sheetRef = useRef<BottomSheet>(null);

  const [items, setItems] = useState(learnMoreData)

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

  //   const handleClosePress = useCallback(() => {
  //     sheetRef.current?.close();
  //   }, []);

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

  //     // flutter wave things

  interface RedirectParams {
    status: 'successful' | 'cancelled';
    transaction_id?: string;
    tx_ref: string;
  }

  /* An example function called when transaction is completed successfully or canceled */
  const handleOnRedirect = (data: RedirectParams) => {
    console.log("************* the payment is successfully **************************************")
    // {"status": "successful", "transaction_id": "5124345", "tx_ref": "flw_tx_ref_nyNpycZSC7"}
    console.log(data);
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
                authorization: 'FLWPUBK_TEST-df60c74914535e1eec791280afddbcf6-X',
                // authorization: 'FLWPUBK-4ea57f63e0a191a65be991b7c19e720d-X',
                customer: {
                  email: 'nendebosco7@gmail.com'
                },
                amount: 2000,
                currency: 'UGX',
                payment_options: 'card, mobilemoneyuganda'
              }}
            />



            <Text style={{ fontSize: 20 }}>A one time Fee of 3,500/=</Text>

            <TouchableOpacity style={[styles.touchableButtonCtm, styles.touchbCtmPymnt]} onPress={() => { handleSnapPress(1); props.navigation.navigate('Home') }}>
              <Text style={styles.healthPalWhite}>Pay with Mobile Money</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableButtonCtm} onPress={() => handleSnapPress(1)}>
              <Text style={styles.healthPalWhite}>Enter Access Code</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 15, textAlign: "center", lineHeight: 20 }}>For more inquiries, contact 0778637224 / 0778637224 (Whatsapp)</Text>
          </View>
        </BottomSheetView>
      </BottomSheet>

    </View>
  )

}
export default LernMore;