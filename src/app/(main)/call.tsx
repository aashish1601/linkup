import imagePath from "@/src/constants/imagePath";
import { modernScale, scale, verticalScale } from "@/src/utils/scaling";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CallScreen = () => {
  const router = useRouter();
  const { name } = useLocalSearchParams();
  const callerName = (name as string) || "Miya";
  const [callDuration, setCallDuration] = useState(0);

  useEffect(() => {
    // Start call timer
    const interval = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const endCall = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.coinBadge}>
          <Ionicons name="flash" size={16} color="#FFD700" />
          <Text style={styles.coinText}>100</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Caller Info */}
      <View style={styles.callerInfo}>
        <Image source={imagePath.logo} style={styles.callerImage} />
        <Text style={styles.callerName}>{callerName}</Text>
        <Text style={styles.callStatus}>On Call</Text>
        <Text style={styles.callTimer}>{formatTime(callDuration)}</Text>
      </View>

      {/* Call Controls */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity style={styles.controlButton}>
          <View style={styles.iconCircle}>
            <Ionicons name="mic-off-outline" size={28} color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton}>
          <View style={styles.iconCircle}>
            <Ionicons name="volume-high-outline" size={28} color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.endCallButton} onPress={endCall}>
          <Ionicons name="call" size={32} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(10),
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
  callerInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: verticalScale(40),
  },
  callerImage: {
    width: modernScale(180),
    height: modernScale(180),
    borderRadius: modernScale(90),
    marginBottom: verticalScale(20),
  },
  callerName: {
    color: "white",
    fontSize: modernScale(28),
    fontWeight: "bold",
    marginBottom: verticalScale(8),
  },
  callStatus: {
    color: "#8696a0",
    fontSize: modernScale(16),
    marginBottom: verticalScale(5),
  },
  callTimer: {
    color: "white",
    fontSize: modernScale(18),
    fontWeight: "600",
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: scale(30),
    paddingBottom: verticalScale(50),
  },
  controlButton: {
    alignItems: "center",
  },
  iconCircle: {
    width: modernScale(64),
    height: modernScale(64),
    borderRadius: modernScale(32),
    backgroundColor: "#2a3942",
    justifyContent: "center",
    alignItems: "center",
  },
  endCallButton: {
    width: modernScale(64),
    height: modernScale(64),
    borderRadius: modernScale(32),
    backgroundColor: "#ff3b30",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CallScreen;

