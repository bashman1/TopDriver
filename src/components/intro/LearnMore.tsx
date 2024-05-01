import React, { useState, useEffect,useCallback, useMemo, useRef } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';
import { learnMoreData } from '../../intro-data';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
;

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
    
    return (
        <View style={{flex:1,backgroundColor:'white',padding:10}}>
            {items.map(item =>
                        <Image style={{flex:1,resizeMode: 'cover',width: '100%',height:600,marginBottom:5,marginTop:10}}  source={item.img} /> )}
                
                <TouchableOpacity style={styles.touchableButton} onPress={() => handleSnapPress(1)}>
                        <Text  style={styles.healthPalWhite}>Next</Text>
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
                                <View style={{flex:1,alignItems:'center', padding:30, width:"100%", rowGap:30}}>
                                    <Text style={{fontSize:20}}>A one time Fee of 3,500/=</Text>
                                    
                                    <TouchableOpacity style={[styles.touchableButtonCtm,styles.touchbCtmPymnt]} onPress={() => {handleSnapPress(1); props.navigation.navigate('Home')}}>
                                        <Text  style={styles.healthPalWhite}>Pay with Mobile Money</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.touchableButtonCtm} onPress={() => handleSnapPress(1)}>
                                        <Text  style={styles.healthPalWhite}>Enter Access Code</Text>
                                    </TouchableOpacity>

                                    <Text style={{fontSize:15,textAlign:"center", lineHeight:20}}>For more inquiries, contact 0778637224 / 0778637224 (Whatsapp)</Text>
                                </View>
                            </BottomSheetView>
                    </BottomSheet>

        </View>
    )

}
export default LernMore;