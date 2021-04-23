import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import colors from "../styles/colors";
import userImg from "../assets/rychillie.png";
import { color } from "react-native-reanimated";
import fonts from "../styles/fonts";

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá</Text>
        <Text style={styles.userName}>Rychillie</Text>
      </View>

      <Image source={userImg} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
    paddingTop: 48,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 24,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 28,
  },
  userName: {
    fontSize: 24,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 28,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 40,
  },
});
