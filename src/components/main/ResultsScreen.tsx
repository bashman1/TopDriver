import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import emoji from "../../assets/36807-4-sad-emoji-clipart.png";
import happy from "../../assets/144618-emoji-happy-free-clipart-hd.png";

const ResultsScreen = ({ navigation, route }: any) => {
    const { updatedItems } = route.params;

    // Flatten the qtnsList array from all quiz items
    const allQuestions = updatedItems.flatMap((item: any) => item.qtnsList);

    // Filter the questions based on status
    const passedQuestions = allQuestions.filter((question: any) => question.status === 'PASSED');
    const failedQuestions = allQuestions.filter((question: any) => question.status === 'FAILED');

    // Count the number of passed and failed questions
    const passedCount = passedQuestions.length;
    const failedCount = failedQuestions.length;

    // Compute the total score in percentage and round it to the nearest integer
    const totalQuestions = allQuestions.length;
    const scorePercentage = Math.round((passedCount / totalQuestions) * 100);

    const sheetRef = useRef<BottomSheet>(null);
    const [selectedStatus, setSelectedStatus] = useState<string>('');

    // Variables
    const snapPoints = useMemo(() => ["50%", "90%"], []);

    // Callbacks
    const handleSheetChange = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const handleSnapPress = useCallback((index: number, status: string) => {
        setSelectedStatus(status);
        sheetRef.current?.snapToIndex(index);
    }, []);

    const renderBackdrop = useCallback(
        (props: React.JSX.IntrinsicAttributes & BottomSheetBackdropProps) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={2}
            />
        ),
        []
    );

    const getDetailResults = (status: string): any[] => {
        return status === 'PASSED' ? passedQuestions : failedQuestions;
    };

    const renderItem = useCallback(
        (item: any, index: number) => {
            const correctOption = item.suggestions.find((s: any) => s.objective === item.correctAnswer);
            const wrongOption = item.suggestions.find((s: any) => s.objective === item.selectedObjective);
    
            return (
                <>
                 <View key={index} style={styles.questionContainer}>
                    <Text style={styles.questionText}>{item.qtnNo} - {item.question}</Text>
                    <Text style={[styles.answerText, wrongOption && { color: 'red' }, correctOption && { color: 'green' }]}>
                        Your Answer: {correctOption ? correctOption.option : wrongOption.option}
                    </Text>

                </View>
                </>
               
            );
        },
        [selectedStatus]
    );
    

    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>
            <Image
                style={styles.emoji}
                source={ scorePercentage > 50  ? happy : emoji}
            />

            <Text style={styles.scoreText}>Score {scorePercentage}%</Text>

            <View style={styles.statusContainer}>
                <TouchableOpacity style={styles.statusButton} onPress={() => handleSnapPress(1, 'PASSED')}>
                    <Text style={styles.passedText}>Passed ({passedCount})</Text>
                    <Text style={styles.passedText}>Questions</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.statusButton} onPress={() => handleSnapPress(1, 'FAILED')}>
                    <Text style={styles.failedText}>Failed ({failedCount})</Text>
                    <Text style={styles.failedText}>Questions</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.restartButton} onPress={() => navigation.goBack()}>
                <Text style={styles.restartText}>Restart Quiz!</Text>
            </TouchableOpacity>

            <BottomSheet
                ref={sheetRef}
                snapPoints={snapPoints}
                onChange={handleSheetChange}
                enablePanDownToClose={true}
                backdropComponent={renderBackdrop}
                index={-1}
            >
                <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={{color:"black", fontSize:30, fontWeight:"bold"}}>{selectedStatus === 'PASSED' ? 'Questions Passed' : 'Questions Failed' }</Text>
                    {getDetailResults(selectedStatus).map(renderItem)}
                </BottomSheetScrollView>
            </BottomSheet>
        </View>
    );
}

const styles = StyleSheet.create({
    emoji: {
        resizeMode: 'contain',
        width: '60%',
        height: 200,
        marginBottom: 5,
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: "15%"
    },
    scoreText: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: "bold",
        marginTop: 50
    },
    statusContainer: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: "15%"
    },
    statusButton: {
        alignItems: 'center'
    },
    passedText: {
        fontSize: 20,
        color: "#008000"
    },
    failedText: {
        fontSize: 20,
        color: "#ff0000"
    },
    restartButton: {
        marginTop: "20%"
    },
    restartText: {
        fontSize: 23,
        color: "#6666ff",
        textAlign: "center"
    },
    contentContainer: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,
    },
    questionContainer: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 20
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    answerText: {
        fontSize: 16,
        marginBottom: 5
    }
});

export default ResultsScreen;
