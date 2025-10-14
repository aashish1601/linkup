import Chats from "@/src/components/molecules/chats";
import { modernScale, scale, verticalScale } from "@/src/utils/scaling";
import { Entypo, Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";




const Main = () => {
  
    const [currentPage, setCurrentPage] = useState("chats");

    const ActivePage = () => {
        switch (currentPage) {
            case "chats":
                return <Chats/>;//only one page for now required
            default:
                return <Chats/>;
        }
    }

    const LinkUpHeader = () => {
        return <View style={styles.LinkupHeader}>
            <Text style={styles.linkupHeaderText}>LinkUp</Text>
            <View style={styles.IconsContainer}>
            <Feather name="search" style={styles.headerIcons}/>
            <Entypo name="dots-three-vertical" style={styles.headerIcons} />
            </View>
        </View>

    }

    return <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#7C3AED" style="light" />
        <LinkUpHeader/>
        <View style={styles.topBarContainer}>
            {["chats","status","calls"].map((item,index)=>{
                return (
                    <TouchableOpacity 
                        key={index} 
                        onPress={()=>setCurrentPage(item)} 
                        style={[
                            styles.topBarbutton, 
                            currentPage === item && styles.topBarButtonActive
                        ]}
                    >
                        <Text style={[
                            styles.topBarText,
                            currentPage === item && styles.topBarTextActive
                        ]}>{item}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
        {ActivePage()}</SafeAreaView>;
  
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5"
    },
    topBarContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: scale(16),
        paddingTop: verticalScale(12),
        backgroundColor: "#7C3AED",
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    topBarbutton: {
        flex: 1,
        alignItems: "center",
        paddingVertical: verticalScale(12),
        borderBottomWidth: 3,
        borderBottomColor: "transparent",
    },
    topBarText: {
        fontSize: modernScale(14),
        fontWeight: "600",
        color: "#E9D5FF",
        textTransform: "uppercase",
        letterSpacing: 0.5,
    },
    topBarButtonActive: {
        borderBottomColor: "white",
    },
    topBarTextActive: {
        color: "white",
    },
    headerIcons: {
        fontSize: modernScale(24),
        color: "white",
    },
    LinkupHeader: {
        backgroundColor: "#7C3AED",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: scale(15),
        paddingBottom: verticalScale(17),
        paddingTop: verticalScale(10),
    },
    IconsContainer: {
        flexDirection: "row",
        gap: scale(10),
    },
    linkupHeaderText: {
        fontSize: modernScale(20),
        fontWeight: "600",
        color: "white",
        letterSpacing: 0.5,
    },
    
});

export default Main;