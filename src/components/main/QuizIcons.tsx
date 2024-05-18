import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, Button, ScrollView, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';
import { Dimensions } from "react-native";
import { appColor } from '../../services/CommonService'
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { iconImg } from '../../intro-data';
import { filter } from '../../services/CommonService';
import Modal from "react-native-modal";

const screenWidth = Dimensions.get("window").width;
const QuizIcons = (props: any) => {

    const [items, setItems] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});



    const toggleModal = (element: any) => {
        setSelectedItem(element);
        setModalVisible(!isModalVisible);
    };

    const filterItems = () => {
        let mandatory = filter(iconImg, 'MANDATORY_SIGNS')
        let info = filter(iconImg, 'INFORMATION_SIGNS')
        let works = filter(iconImg, 'ROADWORKS_SIGNS')
        let traverse = filter(iconImg, 'TRANSERVE_MARKINGS')
        let otherMarkings = filter(iconImg, 'OTHER_ROAD_MARKINGS')
        let marking = filter(iconImg, 'ROAD_MARKINGS')
        let warning = filter(iconImg, 'WARNING_SIGNS')
        let traffic = filter(iconImg, 'TRAFFIC_SIGNALS')
        let tools = filter(iconImg, 'SIMPLE_MECHANICS_EMERGENCY_TOOLS')

        setItems([...mandatory, ...warning, ...info, ...traffic, ...marking, ...otherMarkings, ...works, ...traverse, ...tools]);
        // setItems(filter(quiz, props.route.params.ind))
    }


    useEffect(() => {
        props.navigation.setOptions({ title: props.route.params.header });
        filterItems()
    }, []);

    return (
        <ScrollView style={styles.backgroundWhite}>
            <View style={styles.padding}>
                <View style={styles.marginBottom10}>
                    <Text style={[styles.healthPalBlue, styles.title]}>Tap to see the answer</Text>
                </View>
            </View>
            <View style={styles.gridContainer}>
                {
                    items.map((element: any, i) =>
                        <View style={[styles.categoryItem, styles.marginBottom10]}>
                            <TouchableOpacity style={[styles.cardWithoutPadding, styles.itemCenter, styles.padding10]} onPress={() => { toggleModal(element) }}>
                                <Image style={[styles.pharmacyCatImg, styles.marginBottom10]} key={i} source={element.img} />
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCard}>
                        <Image style={styles.modalImg} source={selectedItem?.img} />
                        <Text style={[styles.healthPalBlue, styles.itemCenter]}>{selectedItem?.name}</Text>
                        <TouchableOpacity style={styles.modalCloseButton}>
                            <IonIcon  name="close-sharp" color={'black'} onPress={() => { toggleModal({}) }} size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )

}
export default QuizIcons;