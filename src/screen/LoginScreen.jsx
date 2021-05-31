import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, StyleSheet, Image, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import log from '../../assets/images.jpeg'



export default function LoginScreen ({navigation}) {

    const [state, setState] = useState({
        email: "",
        password: ""
    })
        return (
            <SafeAreaView>
                <KeyboardAvoidingView
                    behavior='position'
                    enabled={true}>
                    <View style={styles.Container}>
                        <Image style={styles.Image} source={log} />

                        <View style={styles.DetailContainer}>
                            <View style={styles.SigninDetail}>
                                <View style={styles.EmailContainer}>
                                    <Text style={styles.InputText}>Email</Text>
                                    <TextInput
                                        placeholder='yourname@email.com'
                                        keyboardType={"email-address"}
                                        autoCapitalize='none'
                                        value={setState.email}
                                        onChangeText={(email) => {
                                            setState({ email })
                                        }}
                                        style={styles.Input}
                                    />
                                </View>

                                <View style={styles.PassContainer}>
                                    <Text style={styles.InputText}>Password</Text>
                                    <TextInput
                                        placeholder='******'
                                        autoCapitalize="none"
                                        secureTextEntry={true}
                                        value={setState.password}
                                        onChangeText={(password) => {
                                            setState({ password })
                                        }}
                                        style={styles.Input}
                                    />
                                </View>

                                <TouchableOpacity
                                onPress={()=>{
                                    navigation.navigate('Ampersand')
                                }}
                                style={styles.ButtContainer}>
                                    <Text style={styles.SignInText}>SIGN IN</Text>
                                </TouchableOpacity>

                                <View style={styles.LowdetContainer}>
                                    <Text style={styles.InputText}>Forgot?</Text>
                                    <TouchableOpacity style={styles.LowButton}>
                                        <Text style={styles.ResetText}>Reset Password</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>
                </KeyboardAvoidingView>

                <StatusBar style="auto" />
            </SafeAreaView>
        )
    
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Image: {
        width: '100%',
        height: '50%'
    },
    DetailContainer: {
        top: 50,
        bottom: 50
    },
    SigninDetail: {
        margin: 30,
        flexDirection: 'column'
    },
    EmailContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        height: 50,
        alignItems: 'center',
        marginBottom: 10,
        borderBottomColor: '#c0c0c0',
        justifyContent: 'space-between'
    },
    PassContainer: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    ButtContainer: {
        backgroundColor: '#e8000d',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 40
    },
    LowdetContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Input: {
        textAlign: 'right',
        height: 40,
        fontSize: 18
    },
    InputText: {
        fontWeight: '500',
        letterSpacing: 1,
        fontSize: 18
    },
    LowButton: {
        borderBottomColor: '#b22222',
        borderBottomWidth: 2,
        width: 130,
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 10,
        height: 30
    },
    ResetText: {
        fontSize: 18,
        fontWeight: '500'
    },
    SignInText: {
        color: 'white',
        fontSize: 18,
        letterSpacing: 2
    }
});

