import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, SafeAreaView, ScrollView, Image, ImageBackground } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';




export default function RegisterScreen({navigation}) {
    const [state, setState] = useState({
        fullname: "",
        email: "",
        phone: "",
        role: "",
        twitter: "",
        linkedin: "",
        image: ""
    })
    
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior='position'
                enabled={true}
                style={styles.KeyView}>
                <ScrollView style={styles.Container}>
                    <ImageBackground
                    value={setState.image}
                    onPress={(image) => {
                        setState({ image })
                    }}
                    source={{ uri: image }} style={styles.UserContainer}>
                        <TouchableOpacity
                            title="Pick an image from camera roll" onPress={pickImage}
                            style={styles.UserContainer}>
                            <AntDesign name="user" size={60} color="black" />
                            <Text style={styles.ProfileText}>ADD PROFILE PHOTO</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                    <View style={styles.InputContainer}>
                        <View style={styles.InputName}>
                            <Text style={styles.InputText}>Full Name</Text>
                            <TextInput
                                placeholder='Your Name'
                                autoCapitalize='none'
                                value={setState.fullname}
                                onChangeText={(fullname) => {
                                    setState({ fullname })
                                }}
                                style={styles.Input}
                            />
                        </View>

                        <View style={styles.InputName}>
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
                        <View style={styles.InputName}>
                            <Text style={styles.InputText}>Phone Number</Text>
                            <TextInput
                                placeholder='xxx-xxx-xxxx'
                                keyboardType={"phone-pad"}
                                maxLength={10}
                                autoCapitalize='none'
                                value={setState.phone}
                                onChangeText={(phone) => {
                                    setState({ phone })
                                }}
                                style={styles.Input}
                            />
                        </View>
                        <View style={styles.InputName}>
                            <Text style={styles.InputText}>Role</Text>
                            <TextInput
                                placeholder='Your Role'
                                keyboardType={"default"}
                                autoCapitalize="none"
                                value={setState.role}
                                onChangeText={(role) => {
                                    setState({ role })
                                }}
                                style={styles.Input}
                            />
                        </View>
                        <View style={styles.InputName}>
                            <Text style={styles.InputText}>Twitter</Text>
                            <TextInput
                                placeholder='@Username'
                                keyboardType={"default"}
                                autoCapitalize="none"
                                value={setState.twitter}
                                onChangeText={(twitter) => {
                                    setState({ twitter })
                                }}
                                style={styles.Input}
                            />
                        </View>
                        <View style={styles.InputName}>
                            <Text style={styles.InputText}>LinkedIn</Text>
                            <TextInput
                                placeholder='/Username'
                                keyboardType={"default"}
                                autoCapitalize="none"
                                value={setState.linkedin}
                                onChangeText={(linkedin) => {
                                    setState({ linkedin })
                                }}
                                style={styles.Input}
                            />
                        </View>

                        <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate('My Profile')
                        }}
                        style={styles.ButtContainer}>
                            <Text style={styles.RegisterText}>REGISTER</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <StatusBar style="auto" />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    UserContainer: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff00"
    },
    ProfileText: {
        fontWeight: '600',
        marginTop: 10,
        fontSize: 16
    },
    InputContainer: {
        margin: 30,
        flexDirection: 'column'
    },
    InputName: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        height: 50,
        alignItems: 'center',
        marginBottom: 10,
        borderBottomColor: '#c0c0c0',
        justifyContent: 'space-between'
    },
    InputText: {
        fontWeight: '500',
        letterSpacing: 1,
        fontSize: 18
    },
    Input: {
        textAlign: 'right',
        height: 40,
        fontSize: 18
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
    RegisterText: {
        color: 'white',
        fontSize: 18,
        letterSpacing: 2
    }
});