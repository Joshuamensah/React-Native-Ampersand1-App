import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import log from '../../assets/Ampersand.jpeg'



export default class WrongLogScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    render() {
        return (
            <KeyboardAvoidingView
                behavior='position'
                enabled={true}
                style={styles.KeyView}>
                <View style={styles.Container}>
                    <Image style={styles.Image} source={Ampersand} />

                    <View style={styles.DetailContainer}>
                        <View style={styles.SigninDetail}>
                            <Text style={styles.Text}>Email or Password is incorrect, check and try again</Text>
                            <View style={styles.EmailContainer}>
                                <Text style={styles.InputText}>Email</Text>
                                <TextInput
                                    placeholder='yourname@email.com'
                                    keyboardType={"email-address"}
                                    autoCapitalize='none'
                                    value={this.state.email}
                                    onChangeText={(email) => {
                                        this.setState({ email })
                                    }}
                                    style={styles.Input}
                                />
                            </View>

                            <View style={styles.PassContainer}>
                                <Text style={styles.InputText}>Password</Text>
                                <TextInput
                                    placeholder='******'
                                    autoCapitalize={"none"}
                                    secureTextEntry={true}
                                    value={this.state.password}
                                    onChangeText={(password) => {
                                        this.setState({ password })
                                    }}
                                    style={styles.Input}
                                />
                            </View>

                            <TouchableOpacity style={styles.ButtContainer}>
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


                <StatusBar style="auto" />
            </KeyboardAvoidingView>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Image: {
        width: 415,
        height: 330
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
        width: 125,
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
    },
    Text: {
        fontSize: 15,
        marginBottom: 10,
        color: '#bfc1c2',
        letterSpacing: 1,
        color: '#cd5c5c',
        fontWeight: '500'
    }
});

