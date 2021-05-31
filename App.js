import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginScreen from "./src/screen/LoginScreen";
import RegisterLoginScreen from "./src/screen/RegisterLoginScreen";
import RegisterScreen from "./src/screen/RegisterScreen";
import WelcomeScreen from "./src/screen/WelcomeScreen";
import WrongLogScreen from "./src/screen/WrongLogScreen";
import HomeScreen from "./src/screen/HomeScreen";
import EditProfile from "./src/screen/EditProfile";
import HomeScreenQR from "./src/screen/HomeScreenQR";
import MemberScreen from "./src/screen/MemberScreen";
import ProfileScreen from "./src/screen/ProfileScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="Welcome"
          component={WelcomeScreen}
        />

        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="RegLog"
          component={RegisterLoginScreen}
        />

        <Stack.Screen
          options={{
            headerStatusBarHeight: 50,
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: "#b22222",
              height: 100,
            },
            headerBackTitle: () => null,
            // headerLeft:()=>(
            //   <TouchableOpacity style={{marginLeft: 20}}>
            //   <MaterialCommunityIcons name="keyboard-backspace" size={30} color="white" />
            //   </TouchableOpacity>
            // )
          }}
          name="Sign In"
          component={LoginScreen}
        />

        <Stack.Screen
          options={{
            headerStatusBarHeight: 50,
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: "#e8000d",
              height: 100,
            },
            headerBackTitle: () => null,
          }}
          name="Register"
          component={RegisterScreen}
        />

        <Stack.Screen
          options={({ navigation, route }) => ({
            headerStyle: {
              backgroundColor: "#b22222",
              height: 100,
            },
            headerTintColor: "#ffffff",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("My Profile");
                }}
                style={{ marginRight: 20 }}
              >
                <AntDesign name="user" size={30} color="white" />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="ampersand"
                  size={34}
                  color="white"
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "700",
                    fontSize: 20,
                    alignSelf: "flex-end",
                  }}
                >
                  AMPERSAND
                </Text>
              </View>
            ),
            headerLeft: null,
          })}
          name="Ampersand"
          component={HomeScreen}
        />

        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="Scan"
          component={HomeScreenQR}
        />

        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#b22222",
              height: 100,
            },
            headerBackTitle: () => null,
            headerTintColor: "#ffffff",
          }}
          name="My Profile"
          component={ProfileScreen}
        />

        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#b22222",
              height: 100,
            },
            headerBackTitle: () => null,
            headerTintColor: "#ffffff",
          }}
          name="Member Profile"
          component={MemberScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
