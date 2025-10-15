import { modernScale, scale, verticalScale } from "@/src/utils/scaling";
import React from "react";
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface ChatMenuProps {
  visible: boolean;
  onClose: () => void;
  onDeleteChat: () => void;
  onTermsConditions: () => void;
  onPrivacyPolicy: () => void;
}

const ChatMenu = ({
  visible,
  onClose,
  onDeleteChat,
  onTermsConditions,
  onPrivacyPolicy,
}: ChatMenuProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={[styles.menuItem, styles.deleteItem]}
            onPress={() => {
              onClose();
              onDeleteChat();
            }}
          >
            <Text style={styles.deleteText}>Delete chat</Text>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              onClose();
              onTermsConditions();
            }}
          >
            <Text style={styles.menuText}>Terms & Conditions</Text>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              onClose();
              onPrivacyPolicy();
            }}
          >
            <Text style={styles.menuText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  menuContainer: {
    position: "absolute",
    top: verticalScale(60),
    right: scale(15),
    backgroundColor: "#2a3942",
    borderRadius: 8,
    minWidth: scale(200),
    borderWidth: 2,
    borderColor: "#2a9df4",
    overflow: "hidden",
  },
  menuItem: {
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(15),
  },
  deleteItem: {
    backgroundColor: "#2a3942",
  },
  menuText: {
    color: "#e9edef",
    fontSize: modernScale(15),
  },
  deleteText: {
    color: "#ff4444",
    fontSize: modernScale(15),
  },
  separator: {
    height: 1,
    backgroundColor: "#3a4a54",
  },
});

export default ChatMenu;

