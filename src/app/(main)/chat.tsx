import ChatMenu from "@/src/components/molecules/ChatMenu";
import CoinBalanceSheet from "@/src/components/molecules/CoinBalanceSheet";
import VoiceRecorder from "@/src/components/molecules/VoiceRecorder";
import imagePath from "@/src/constants/imagePath";
import { modernScale, scale, verticalScale } from "@/src/utils/scaling";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
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
  const router = useRouter();
  const { name } = useLocalSearchParams();
  const chatName = (name as string) || "Miya";
  const [showCoinSheet, setShowCoinSheet] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  
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
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.headerProfile}
            onPress={() => router.push({
              pathname: "/profile",
              params: { name: chatName }
            })}
          >
            <Image source={imagePath.logo} style={styles.headerAvatar} />
            <Text style={styles.headerName}>{chatName}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity 
            style={styles.coinBadge}
            onPress={() => setShowCoinSheet(true)}
          >
            <Ionicons name="flash" size={16} color="#FFD700" />
            <Text style={styles.coinText}>100</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="call" size={22} color="white" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.headerIcon}
            onPress={() => setShowMenu(true)}
          >
            <Ionicons name="ellipsis-vertical" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <ChatHeader />
      <CoinBalanceSheet 
        visible={showCoinSheet} 
        onClose={() => setShowCoinSheet(false)} 
      />
      <ChatMenu
        visible={showMenu}
        onClose={() => setShowMenu(false)}
        onDeleteChat={() => {
          // Handle delete chat
          console.log("Delete chat");
        }}
        onTermsConditions={() => {
          // Navigate to terms
          console.log("Terms & Conditions");
        }}
        onPrivacyPolicy={() => {
          // Navigate to privacy policy
          console.log("Privacy Policy");
        }}
      />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={0}
      >
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
        {!isRecording ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Message"
              placeholderTextColor="#8696a0"
              multiline
            />
            <TouchableOpacity 
              style={styles.micButton}
              onPress={() => setIsRecording(true)}
            >
              <Ionicons name="mic" size={24} color="#8696a0" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.sendButton} onPress={onSendMessage}>
              <Ionicons name="send" size={22} color="white" />
            </TouchableOpacity>
          </View>
        ) : (
          <VoiceRecorder
            visible={isRecording}
            onCancel={() => setIsRecording(false)}
            onSend={() => {
              setIsRecording(false);
              // Handle voice message send
            }}
          />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b141a",
  },
  flex: {
    flex: 1,
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
    gap: scale(12),
  },
  headerProfile: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
  },
  headerAvatar: {
    width: modernScale(40),
    height: modernScale(40),
    borderRadius: modernScale(20),
  },
  headerName: {
    color: "white",
    fontSize: modernScale(18),
    fontWeight: "600",
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
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(10),
    backgroundColor: "#202c33",
    alignItems: "center",
    gap: scale(10),
  },
  textInput: {
    flex: 1,
    color: "#e9edef",
    fontSize: modernScale(16),
    backgroundColor: "#2a3942",
    borderRadius: 25,
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(10),
    maxHeight: modernScale(100),
  },
  micButton: {
    width: modernScale(44),
    height: modernScale(44),
    backgroundColor: "#2a3942",
    borderRadius: modernScale(22),
    justifyContent: "center",
    alignItems: "center",
  },
  sendButton: {
    backgroundColor: "#00a884",
    width: modernScale(44),
    height: modernScale(44),
    borderRadius: modernScale(22),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatScreen;

