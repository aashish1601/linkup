import imagePath from "@/src/constants/imagePath";
import { modernScale, scale, verticalScale } from "@/src/utils/scaling";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const router = useRouter();
  const { name } = useLocalSearchParams();
  const userName = (name as string) || "Miya";

  const ProfileHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <View style={styles.coinBadge}>
            <Ionicons name="flash" size={16} color="#FFD700" />
            <Text style={styles.coinText}>100</Text>
          </View>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="ellipsis-vertical" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ProfileHeader />
      <ScrollView style={styles.scrollView}>
        {/* Profile Image Section */}
        <View style={styles.imageSection}>
          <Image source={imagePath.logo} style={styles.profileImage} />
          <Text style={styles.profileName}>{userName}</Text>
          <Text style={styles.profileTagline}>I love filtered deep talk!</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.iconCircle}>
              <Ionicons name="chatbubble-outline" size={24} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.iconCircle}>
              <Ionicons name="mic" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Menu Options */}
        <View style={styles.menuContainer}>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => {
              console.log("Coins button pressed");
              router.push("/(main)/coins");
            }}
          >
            <Text style={styles.menuText}>Coins</Text>
            <Ionicons name="chevron-forward" size={20} color="#8696a0" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Terms & Conditions</Text>
            <Ionicons name="chevron-forward" size={20} color="#8696a0" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Privacy Policy</Text>
            <Ionicons name="chevron-forward" size={20} color="#8696a0" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteText}>Delete chat</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b141a",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#202c33",
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(8),
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(15),
  },
  coinBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3a4a54",
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(6),
    borderRadius: 20,
    gap: scale(4),
  },
  coinText: {
    color: "white",
    fontSize: modernScale(14),
    fontWeight: "600",
  },
  headerIcon: {
    padding: scale(4),
  },
  scrollView: {
    flex: 1,
  },
  imageSection: {
    alignItems: "center",
    paddingVertical: verticalScale(30),
    borderBottomWidth: 1,
    borderBottomColor: "#2a3942",
  },
  profileImage: {
    width: modernScale(200),
    height: modernScale(280),
    borderRadius: 20,
    marginBottom: verticalScale(15),
  },
  profileName: {
    color: "white",
    fontSize: modernScale(24),
    fontWeight: "bold",
    marginBottom: verticalScale(8),
  },
  profileTagline: {
    color: "#8696a0",
    fontSize: modernScale(14),
    textAlign: "center",
    paddingHorizontal: scale(20),
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: scale(30),
    paddingVertical: verticalScale(20),
    borderBottomWidth: 1,
    borderBottomColor: "#2a3942",
  },
  actionButton: {
    alignItems: "center",
  },
  iconCircle: {
    width: modernScale(56),
    height: modernScale(56),
    borderRadius: modernScale(28),
    backgroundColor: "#2a3942",
    justifyContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    paddingTop: verticalScale(10),
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(16),
    backgroundColor: "#202c33",
    marginBottom: verticalScale(1),
  },
  menuText: {
    color: "#e9edef",
    fontSize: modernScale(16),
  },
  deleteButton: {
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(16),
    backgroundColor: "#202c33",
    marginTop: verticalScale(1),
    borderTopWidth: 1,
    borderTopColor: "#2a3942",
  },
  deleteText: {
    color: "#ff4444",
    fontSize: modernScale(16),
  },
});

export default ProfileScreen;

