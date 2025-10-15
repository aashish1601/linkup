import { modernScale, scale, verticalScale } from "@/src/utils/scaling";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface VoiceRecorderProps {
  visible: boolean;
  onCancel: () => void;
  onSend: () => void;
}

const VoiceRecorder = ({ visible, onCancel, onSend }: VoiceRecorderProps) => {
  const [recordingTime, setRecordingTime] = useState(0);
  const pulseAnim = new Animated.Value(1);

  useEffect(() => {
    if (visible) {
      // Start timer
      const interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);

      // Pulse animation for recording indicator
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.2,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
        ])
      ).start();

      return () => {
        clearInterval(interval);
        setRecordingTime(0);
      };
    }
  }, [visible]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (!visible) return null;

  return (
    <View style={styles.container}>
      <View style={styles.recordingBar}>
        {/* Recording Indicator */}
        <Animated.View
          style={[
            styles.recordingIndicator,
            { transform: [{ scale: pulseAnim }] },
          ]}
        >
          <Ionicons name="mic" size={20} color="#ff3b30" />
        </Animated.View>

        {/* Timer */}
        <Text style={styles.timer}>{formatTime(recordingTime)}</Text>

        {/* Slide to cancel */}
        <Text style={styles.slideText}>Slide to cancel</Text>

        {/* Send Button */}
        <TouchableOpacity style={styles.sendButton} onPress={onSend}>
          <Ionicons name="send" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#202c33",
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(12),
  },
  recordingBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(12),
  },
  recordingIndicator: {
    width: modernScale(40),
    height: modernScale(40),
    borderRadius: modernScale(20),
    backgroundColor: "#2a3942",
    justifyContent: "center",
    alignItems: "center",
  },
  timer: {
    color: "white",
    fontSize: modernScale(16),
    fontWeight: "600",
    minWidth: scale(50),
  },
  slideText: {
    flex: 1,
    color: "#8696a0",
    fontSize: modernScale(14),
  },
  sendButton: {
    width: modernScale(44),
    height: modernScale(44),
    borderRadius: modernScale(22),
    backgroundColor: "#00a884",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default VoiceRecorder;

