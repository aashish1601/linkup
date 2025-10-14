import imagePath from "@/src/constants/imagePath";
import { modernScale, scale, verticalScale } from "@/src/utils/scaling";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    FlatList,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Message {
  _id: number;
  text: string;
  createdAt: Date;
  user: {
    _id: number;
    name: string;
  };
}

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      _id: 1,
      text: "what is for dinner?",
      createdAt: new Date(),
      user: {
        _id: 1,
        name: "Rohan Nayak",
      },
    },
    {
      _id: 2,
      text: "9:30 seh maati",
      createdAt: new Date(),
      user: {
        _id: 1,
        name: "Rohan Nayak",
      },
    },
    {
      _id: 3,
      text: "what is your name?",
      createdAt: new Date(),
      user: {
        _id: 1,
        name: "Rohan Nayak",
      },
    },
    {
      _id: 4,
      text: "Hi, my name is Rohan",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "Miya",
      },
    },
  ]);
  const [inputText, setInputText] = useState("");

  const onSendMessage = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        _id: messages.length + 1,
        text: inputText,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Miya",
        },
      };
      setMessages([...messages, newMessage]);
      setInputText("");
    }
  };

  const renderMessage = ({ item }: { item: Message }) => {
    const isSentByMe = item.user._id === 2;
    return (
      <View
        style={[
          styles.messageContainer,
          isSentByMe ? styles.sentMessage : styles.receivedMessage,
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.messageTime}>
          {new Date(item.createdAt).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </Text>
      </View>
    );
  };

  const ChatHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Image source={imagePath.logo} style={styles.headerAvatar} />
          <View style={styles.headerInfo}>
            <Text style={styles.headerName}>Miya</Text>
            <Text style={styles.headerStatus}>online</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="videocam" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="call" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="ellipsis-vertical" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ChatHeader />
      <ImageBackground source={imagePath.chat_bg} style={styles.chatBackground}>
        <View style={styles.encryptionBanner}>
          <Ionicons name="lock-closed" size={12} color="#8696a0" />
          <Text style={styles.encryptionText}>
            Messages and calls are end-to-end encrypted
          </Text>
        </View>
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item._id.toString()}
          contentContainerStyle={styles.messagesList}
        />
      </ImageBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={0}
      >
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TouchableOpacity style={styles.emojiButton}>
              <Ionicons name="happy-outline" size={24} color="#8696a0" />
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Message"
              placeholderTextColor="#8696a0"
              multiline
            />
            <TouchableOpacity style={styles.attachButton}>
              <Ionicons name="attach" size={24} color="#8696a0" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cameraButton}>
              <Ionicons name="camera-outline" size={24} color="#8696a0" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.sendButton} onPress={onSendMessage}>
            <Ionicons name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
  },
  headerAvatar: {
    width: modernScale(40),
    height: modernScale(40),
    borderRadius: modernScale(20),
  },
  headerInfo: {
    justifyContent: "center",
  },
  headerName: {
    color: "white",
    fontSize: modernScale(16),
    fontWeight: "600",
  },
  headerStatus: {
    color: "#8696a0",
    fontSize: modernScale(13),
  },
  headerRight: {
    flexDirection: "row",
    gap: scale(20),
  },
  headerIcon: {
    padding: scale(5),
  },
  chatBackground: {
    flex: 1,
    backgroundColor: "#0b141a",
  },
  encryptionBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#182229",
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(12),
    marginVertical: verticalScale(10),
    marginHorizontal: scale(40),
    borderRadius: 8,
    gap: scale(5),
  },
  encryptionText: {
    color: "#8696a0",
    fontSize: modernScale(12),
  },
  messagesList: {
    paddingHorizontal: scale(10),
    paddingBottom: verticalScale(10),
  },
  messageContainer: {
    maxWidth: "75%",
    marginVertical: verticalScale(4),
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(8),
    borderRadius: 8,
  },
  sentMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#005c4b",
    borderTopRightRadius: 0,
  },
  receivedMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#202c33",
    borderTopLeftRadius: 0,
  },
  messageText: {
    color: "#e9edef",
    fontSize: modernScale(14),
    lineHeight: modernScale(20),
  },
  messageTime: {
    color: "#8696a0",
    fontSize: modernScale(11),
    alignSelf: "flex-end",
    marginTop: verticalScale(4),
  },
  inputContainer: {
    flexDirection: "row",
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(8),
    backgroundColor: "#202c33",
    alignItems: "flex-end",
    gap: scale(8),
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#2a3942",
    borderRadius: 25,
    alignItems: "center",
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(8),
  },
  emojiButton: {
    marginRight: scale(5),
  },
  textInput: {
    flex: 1,
    color: "#e9edef",
    fontSize: modernScale(16),
    maxHeight: modernScale(100),
    paddingVertical: 0,
  },
  attachButton: {
    marginLeft: scale(5),
    transform: [{ rotate: "-45deg" }],
  },
  cameraButton: {
    marginLeft: scale(8),
  },
  sendButton: {
    backgroundColor: "#00a884",
    width: modernScale(48),
    height: modernScale(48),
    borderRadius: modernScale(24),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatScreen;
