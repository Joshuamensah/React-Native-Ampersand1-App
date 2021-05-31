import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Entypo } from '@expo/vector-icons';

const { width } = Dimensions.get('screen')
const qrSize = width * 0.7

export default function HomeScreenQR({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = () => {
        setScanned(true);
        navigation.navigate('Member Profile')
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    

    return (
        <SafeAreaView>
            <View style={styles.Container}>
                <View style={styles.Info}>
                    <BarCodeScanner
                        onPress={() => setScanned(false)}
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={StyleSheet.absoluteFillObject}>
                        <View style={styles.QRcontainer}>
                            <View style={styles.QRbutton}>
                                <TouchableOpacity>
                                    <Entypo name="flash" size={24} color="#a9a9a9" />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Entypo name="cross" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Image
                                    style={styles.qr} 
                                />
                                
                                <Text style={styles.QRText}>Place QR code within the Screen</Text>
                            </View>
                        </View>
                    </BarCodeScanner>
                </View>
                <View style={styles.LowerSec}>
                    <Text style={{ fontSize: 15, fontWeight: '500' }}>Want to share your contact?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Ampersand")
                        }}
                        style={styles.LowerButton}>
                        <Text style={{ color: '#8b0000' }}>Send QR</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    Info: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        flexBasis: "86%"
    },
    LowerSec: {
        borderTopWidth: 2,
        borderColor: '#dcdcdc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 20,
        alignItems: 'center'
    },
    LowerButton: {
        borderWidth: 2,
        borderColor: '#ff4500',
        width: 80,
        height: 35,
        alignItems: "center",
        justifyContent: 'center'
    },
    QRText: {
        color: '#ffffff',
        fontSize: 18,
        alignSelf: 'center'
    },
    QRcontainer: {
        marginTop: 40
    },
    QRbutton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30
    },
    qr: {
        marginTop: '20%',
        marginBottom: '20%',
        width: qrSize,
        height: qrSize
      }
})