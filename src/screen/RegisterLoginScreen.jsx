import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import Ampersand from '../../assets/Ampersand.jpeg'

export default function RegisterLoginScreen({navigation}) {
    return (
        <SafeAreaView>
            <View style={styles.Container}>
                <Image style={styles.Image} source={Ampersand} />

                <View style={styles.LowerContainer}>
                    <View style={styles.TextContainer}>
                        <Text style={styles.Texter}>KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND</Text>
                        <Text style={styles.Text}>Sign in or register with your Ampersand email</Text>
                    </View>
                    <View style={styles.ButtonView}>
                        <TouchableOpacity 
                        onPress={()=>{
                            navigation.navigate('Register')
                        }}
                        style={styles.ButtonContainer}>
                            <Text style={styles.ButtonRegister}>REGISTER</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate('Sign In')
                        }}
                        style={styles.ButtonContainer}>
                            <Text style={styles.ButtonSignin}>SIGN IN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexBasis: '100%'
    },
    Image: {
        width: '100%',
        flexBasis: '50%'
    },
    TextContainer: {
        margin: 25
    },
    Texter: {
        fontSize: 18,
        letterSpacing: 1.5,
        fontWeight: '500'
    },
    Text: {
        fontSize: 15,
        marginTop: 20,
        color: '#bfc1c2',
        letterSpacing: 1
    },
    ButtonView: {
        flexDirection: 'row',
        marginHorizontal: 50,
        justifyContent: 'space-between'
    },
    LowerContainer: {
        flexBasis: '30%',
        justifyContent: 'space-between'
    },
    ButtonContainer: {
        borderBottomColor: '#b22222',
        borderBottomWidth: 2,
        width: 100,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    ButtonRegister: {
        fontSize: 20,
        fontWeight: '500'
    },
    ButtonSignin: {
        fontSize: 20,
        fontWeight: '500',
        alignSelf: 'center'
    }
});