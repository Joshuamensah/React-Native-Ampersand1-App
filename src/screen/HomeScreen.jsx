import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import ProfilePic from "../../assets/ProfilePic.jpeg";
import { QRCode } from "react-native-custom-qr-codes-expo";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <View style={styles.Info}>
          <View style={styles.InfoDetail}>
            <Text style={styles.InfoText}>Exchange Contact Information</Text>
            <Text style={styles.InfoTextGray}>
              Scan this QR below to share your
              {"\n"}contacts
            </Text>
          </View>
          <View style={styles.QRCode}>
            <QRCode codeStyle="square" />
          </View>
          <View style={styles.ProfileDetail}>
            <Image style={styles.ProfileImg} source={ProfilePic} />
            <View style={styles.ProfileText}>
              <Text style={styles.InfoText}>Your Name</Text>
              <Text style={styles.InfoGray}>Your Role</Text>
            </View>
          </View>
        </View>
        <View style={styles.LowerSec}>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            Want to add a new connection?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Scan");
            }}
            style={styles.LowerButton}
          >
            <Text style={{ color: "#8b0000" }}>Scan QR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Info: {
    marginHorizontal: 50,
    flexDirection: "column",
    justifyContent: "space-around",
    flexBasis: "86%",
  },
  InfoDetail: {
    alignContent: "center",
  },
  InfoText: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.9,
    marginBottom: 15,
  },
  InfoTextGray: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.9,
    color: "#bfc1c2",
  },
  ProfileDetail: {
    flexDirection: "row",
  },
  ProfileImg: {
    width: 50,
    height: 50,
  },
  QRCode: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  ProfileText: {
    justifyContent: "space-between",
    marginLeft: 15,
  },
  LowerSec: {
    borderTopWidth: 2,
    borderColor: "#dcdcdc",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: "center",
  },
  LowerButton: {
    borderWidth: 2,
    borderColor: "#ff4500",
    width: 80,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  InfoGray: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.9,
    color: "#bfc1c2",
  },
});
