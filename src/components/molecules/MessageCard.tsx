import { modernScale, scale, verticalScale } from "@/src/utils/scaling";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MessageCard = ({name,message,time,count,image,onPress}:{name:string,message:string,time:string,count:number,image:any,onPress:()=>void}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.leftContainer}>
        <Image source={image} style={styles.image} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.time}>{time}</Text>
        {!!count && (
        <View style={styles.messageCountContainer}>
          <Text style={styles.messageCount}>{count}</Text>
        </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: scale(20),
        paddingVertical: verticalScale(15),
    },
    image: {
      height: modernScale(53),
      width: modernScale(53),
      borderRadius: modernScale(53),
    },
    name: {
      fontWeight: "bold",
      fontSize: modernScale(14),
      color: "black",
    },
    message: {
      fontSize: modernScale(13),
      color: "#909090",
      fontWeight: "500",
    },
    time: {
      color: "#909090",
      fontWeight: "bold",
      fontSize: modernScale(12),
    },
    messageCountContainer: {
      backgroundColor: "#36A01F",
      width: modernScale(22),
      height: modernScale(22),
      borderRadius: modernScale(22),
      justifyContent: "center",
      alignItems: "center",
    },
    messageCount: {
        color: "white",
        fontSize: modernScale(12),
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: scale(10),
    },
    rightContainer: {
        alignItems: "flex-end",
        gap: scale(7),
    },
});

export default MessageCard;