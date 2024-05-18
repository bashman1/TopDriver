import React, { useState, useEffect,useCallback, useMemo, useRef } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';
import { learnMoreData } from '../../intro-data';
import emoji from "../../assets/36807-4-sad-emoji-clipart.png"
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
;

const ResultsScreen = ({ navigation,route }: any) => {
    const [items, setItems] = useState(learnMoreData)

    const { updatedItems } = route.params;

     // Flatten the qtnsList array from all quiz items
     const allQuestions = updatedItems.flatMap((item: any) => item.qtnsList);

     // Filter the questions based on status
     const passedQuestions = allQuestions.filter((question: any) => question.status === 'PASSED');
     const failedQuestions = allQuestions.filter((question: any) => question.status === 'FAILED');
 
     // Count the number of passed and failed questions
     const passedCount = passedQuestions.length;
     const failedCount = failedQuestions.length;

      // Compute the total score in percentage
    const totalQuestions = allQuestions.length;
    const scorePercentage = Math.round((passedCount / totalQuestions) * 100);

    const sheetRef = useRef<BottomSheet>(null);

    

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
                <Image style={{resizeMode: 'contain',width: '60%',height:200,marginBottom:5, marginLeft:'20%',marginRight:'20%', marginTop:"15%"}}  source={emoji} /> 
                
                
                <Text  style={{fontSize:30, textAlign:'center', fontWeight:"bold", marginTop:50}}>Score {scorePercentage}%</Text>

                <View style={{flexDirection:'row', justifyContent:"space-around", marginTop:"15%"}}>
                    <TouchableOpacity style={{}} onPress={() => {handleSnapPress(1)}}>
                        <Text style={{fontSize:20, color:"#008000"}}>Passed ({passedCount})</Text>
                        <Text style={{fontSize:20, color:"#008000"}}>Questions</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} onPress={() => handleSnapPress(1)}>
                        <Text style={{fontSize:20, color:"#ff0000"}}>Failed ({failedCount})</Text>
                        <Text style={{fontSize:20, color:"#ff0000"}}>Questions</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                    <Text  style={{fontSize:23,marginTop:"20%", color:"#6666ff", textAlign:"center"}}>Restart Quiz!</Text>
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
export default ResultsScreen;