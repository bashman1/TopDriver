import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Alert, GestureResponderEvent } from 'react-native';
import { styles } from '../../styles/Styles';
import { Dimensions } from 'react-native';
import { quiz } from '../../intro-data';
import { filter } from '../../services/CommonService';

const screenWidth = Dimensions.get('window').width;

const Questions = ({ navigation, route }: any) => {
    const { ind, header } = route.params;
    const [items, setItems] = useState<any[]>([]);
    const [nextQtnIndex, setNextQtnIndex] = useState(0);
    const [updatedQtn, setUpdatedQtn] = useState(false);

    const filterItems = () => setItems(filter(quiz, ind));

    useEffect(() => {
        navigation.setOptions({ title: header });
        filterItems();
    }, [navigation, header, ind]);

    const showNextQtn = (event: GestureResponderEvent, answer: string, qtnNo: string) => {
        event.stopPropagation();

        setItems((prevItems) => {
            const updatedItems = prevItems.map((quizItem) => {
                if (quizItem.id) {
                    const updatedQtnsList = quizItem.qtnsList.map((question:any) => {
                        if (question.qtnNo === qtnNo) {
                            return { ...question, selectedObjective: answer,status: `${question.correctAnswer === answer ? 'PASSED' : 'FAILED'}` };
                        }

                        return question;
                    });
                    return { ...quizItem, qtnsList: updatedQtnsList };
                }
                return quizItem;
            });
            return updatedItems;
        });
        
        if(nextQtnIndex === (items[0].qtnsList.length -1)){
            navigation.navigate('ResultsScreen', { updatedItems: items });
                return 0;
        }
        setUpdatedQtn(true);
    };

    useEffect(() => {
        if (updatedQtn) {
            console.log(`selectedObjective = ${JSON.stringify(items[0].qtnsList[nextQtnIndex].selectedObjective)} and \n 
                correctObjective =${JSON.stringify(items[0].qtnsList[nextQtnIndex].correctAnswer)} and \n
                status =${JSON.stringify(items[0].qtnsList[nextQtnIndex].status)}`);

            setNextQtnIndex((prevIndex) => {
                const newIndex = prevIndex + 1;
                return newIndex < items[0].qtnsList.length ? newIndex : 0;
            });
            setUpdatedQtn(false);
        }
    }, [updatedQtn, items]);

    if (!items.length) return null; // Handle case when items are not yet initialized

    return (
        <ScrollView>
            <View style={styles.padding}>
                {items.map((element, itemIndex) => (
                    <View key={itemIndex}>
                        <View>
                            <Text style={element.qtnsList[nextQtnIndex].symbol ? styles.qtn15 : styles.qtn}>
                                {element.qtnsList[nextQtnIndex].qtnNo + ' ' + element.qtnsList[nextQtnIndex].question}
                            </Text>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                {element.qtnsList[nextQtnIndex].symbol && (
                                    <Image
                                        style={{ flex: 1, resizeMode: 'contain', width: '50%', height: 200 }}
                                        source={element.qtnsList[nextQtnIndex].symbol}
                                    />
                                )}
                            </View>
                            <Text style={styles.qtnChoose}>Choose your answer from below</Text>
                            {element.qtnsList[nextQtnIndex].suggestions.map((sug) => (
                                <TouchableOpacity
                                    key={sug.id}
                                    style={[styles.card, styles.marginBottom]}
                                    onPress={(event) => showNextQtn(event, sug.objective, element.qtnsList[nextQtnIndex].qtnNo)}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[styles.fontWeightBold, styles.fontSize15, {color:'#808080'}]}>{sug.option}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default Questions;
