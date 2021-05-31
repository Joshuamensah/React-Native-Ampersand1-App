import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import ProfilePic from '../../assets/ProfilePic.jpeg'
import { Entypo, Feather, EvilIcons, Fontisto } from '@expo/vector-icons';


export default function MemberScreen() {
    return (
        <SafeAreaView style={styles.Container} >
            <View style={styles.Incontainer}>
                <View style={styles.ProfileDetail}>
                    <Image
                        style={styles.ProfileImg}
                        source={ProfilePic} />
                    <View style={styles.ProfileText}>
                        <Text style={styles.InfoText}>Your Name</Text>
                        <Text style={styles.InfoGray}>Your Role</Text>
                    </View>
                </View>
                <View style={styles.SocialIcons}>
                    <TouchableOpacity style={styles.Socialbutton}>
                        <Entypo name="twitter-with-circle" size={35} color="#696969" />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Entypo name="linkedin-with-circle" size={35} color="#696969" />
                    </TouchableOpacity>
                </View>
                <View style={styles.Cover}>
                    <View style={styles.Details}>
                        <Feather name="phone" size={24} color="black" style={styles.Socialbutton}/>
                        <Text>+233 (678) 567 0004</Text>
                    </View>
                    <View style={styles.Details}>
                        <Fontisto name="email" size={24} color="black" style={styles.Socialbutton}/>
                        <Text>Jelly@gmail.com</Text>
                    </View>
                    <View style={styles.Details}>
                        <EvilIcons name="location" size={24} color="black" style={styles.Socialbutton}/>
                        <Text>West-mid lands, Coventry</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    Incontainer: {
        margin: 40
    },
    ProfileDetail: {
        flexDirection: 'row'
    },
    ProfileImg: {
        width: 50,
        height: 50
    },
    ProfileText: {
        justifyContent: 'space-between',
        left: 20
    },
    InfoTextGray: {
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.9,
        color: '#bfc1c2',
    },
    InfoGray: {
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.9,
        color: '#bfc1c2',
    },
    SocialIcons: {
        flexDirection: 'row',
        marginVertical: 30
    },
    Details: {
        flexDirection: 'row',
        marginBottom: 20
    },
    Cover: {
        marginVertical: 10
    },
    Socialbutton: {
        marginRight: 10
    }
})