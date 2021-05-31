import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function WelcomeScreen({navigation}) {
    return (
        <SafeAreaView>
            <View style={styles.Container}>
                <View style={styles.InnerContainer}>
                    <MaterialCommunityIcons name="ampersand" size={60} color="black" />
                    <Text style={styles.Innerheader}>AMPERSAND</Text>
                </View>
                <View style={styles.TitleContainer}>
                    <Text style={styles.TitleText} >AMPERSAND {'\n'} CONTACTS</Text>
                </View>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('RegLog')
                }}
                style={styles.ButtonContainer}>
                    <Text style={styles.ButtonText}>GET STARTED</Text>
                </TouchableOpacity>

                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#d1d3c4',
        justifyContent: 'space-around',
        flexBasis: '100%'
    },
    InnerContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    Innerheader: {
        alignSelf: 'flex-end',
        fontSize: 30,
        height: 40,
        fontWeight: 'bold'
    },
    TitleContainer: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    TitleText: {
        fontSize: 20,
        alignContent: 'center',
        letterSpacing: 4,
        fontWeight: '500'
    },
    ButtonContainer: {
        borderBottomColor: '#b22222',
        borderBottomWidth: 2,
        width: 130,
        height: 40,
        alignSelf: 'center'
    },
    ButtonText: {
        fontSize: 20,
        fontWeight: '500'
    }
});