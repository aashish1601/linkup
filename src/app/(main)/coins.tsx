import { modernScale, scale, verticalScale } from "@/src/utils/scaling";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CoinsScreen = () => {
  const router = useRouter();

  const coinPacks = [
    { coins: 80, bonus: "+158 COINS", price: "₹29", sale: "50% OFF" },
    { coins: 240, bonus: "+158 COINS", price: "₹69", sale: "50% OFF" },
    { coins: 360, bonus: "+240 COINS", price: "₹119", sale: "50% OFF" },
    { coins: 480, bonus: "+258 COINS", price: "₹190", sale: "50% OFF" },
    { coins: 720, bonus: "+368 COINS", price: "₹249", sale: "50% OFF" },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Coin Balance */}
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>COIN BALANCE</Text>
          <View style={styles.balanceRow}>
            <View style={styles.coinIcon}>
              <Ionicons name="flash" size={20} color="#FFD700" />
            </View>
            <Text style={styles.balanceAmount}>0</Text>
            <Ionicons name="chevron-forward" size={20} color="#8696a0" />
          </View>
        </View>

        {/* Coin Packs Section */}
        <View style={styles.packsContainer}>
          <Text style={styles.packsTitle}>Coin Packs</Text>

          {coinPacks.map((pack, index) => (
            <View key={index} style={styles.packItem}>
              <View style={styles.packLeft}>
                <View style={styles.saleTag}>
                  <Text style={styles.saleText}>{pack.sale}</Text>
                </View>
                <View style={styles.coinRow}>
                  <View style={styles.packCoinIcon}>
                    <Ionicons name="flash" size={18} color="#FFD700" />
                  </View>
                  <Text style={styles.coinAmount}>{pack.coins}</Text>
                  <Text style={styles.bonusText}>{pack.bonus}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.priceText}>{pack.price}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* About Coins */}
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>About Coins</Text>
          <View style={styles.aboutContent}>
            <Text style={styles.aboutText}>
              • Your coins never expire - they are yours for life
            </Text>
            <Text style={styles.aboutText}>
              • Use your coins to talk and chat more
            </Text>
            <Text style={styles.aboutText}>
              • Buying coins is safe and secure for millions of users
            </Text>
            <Text style={styles.aboutText}>
              • Coins cannot be transferred between accounts
            </Text>
            <Text style={styles.aboutText}>
              • You can also earn coins by watching ads
            </Text>
          </View>
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
    backgroundColor: "#202c33",
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(12),
  },
  scrollView: {
    flex: 1,
  },
  balanceContainer: {
    backgroundColor: "#202c33",
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(15),
    marginBottom: verticalScale(2),
  },
  balanceTitle: {
    color: "#8696a0",
    fontSize: modernScale(12),
    fontWeight: "600",
    marginBottom: verticalScale(8),
    letterSpacing: 0.5,
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(8),
  },
  coinIcon: {
    width: modernScale(28),
    height: modernScale(28),
    borderRadius: modernScale(14),
    backgroundColor: "#3a4a54",
    justifyContent: "center",
    alignItems: "center",
  },
  balanceAmount: {
    color: "white",
    fontSize: modernScale(20),
    fontWeight: "bold",
    flex: 1,
  },
  packsContainer: {
    backgroundColor: "#202c33",
    paddingVertical: verticalScale(15),
    marginBottom: verticalScale(2),
  },
  packsTitle: {
    color: "white",
    fontSize: modernScale(16),
    fontWeight: "600",
    paddingHorizontal: scale(20),
    marginBottom: verticalScale(12),
  },
  packItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: "#2a3942",
  },
  packLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(12),
  },
  saleTag: {
    backgroundColor: "#3a4a54",
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(4),
    borderRadius: 4,
  },
  saleText: {
    color: "#8696a0",
    fontSize: modernScale(10),
    fontWeight: "600",
  },
  coinRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(6),
  },
  packCoinIcon: {
    width: modernScale(24),
    height: modernScale(24),
    borderRadius: modernScale(12),
    backgroundColor: "#3a4a54",
    justifyContent: "center",
    alignItems: "center",
  },
  coinAmount: {
    color: "white",
    fontSize: modernScale(18),
    fontWeight: "bold",
  },
  bonusText: {
    color: "#00a884",
    fontSize: modernScale(12),
    fontWeight: "600",
  },
  buyButton: {
    backgroundColor: "#2a3942",
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(8),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#3a4a54",
  },
  priceText: {
    color: "white",
    fontSize: modernScale(14),
    fontWeight: "600",
  },
  aboutContainer: {
    backgroundColor: "#202c33",
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(20),
  },
  aboutTitle: {
    color: "white",
    fontSize: modernScale(16),
    fontWeight: "600",
    marginBottom: verticalScale(12),
  },
  aboutContent: {
    gap: verticalScale(8),
  },
  aboutText: {
    color: "#8696a0",
    fontSize: modernScale(14),
    lineHeight: modernScale(20),
  },
});

export default CoinsScreen;

