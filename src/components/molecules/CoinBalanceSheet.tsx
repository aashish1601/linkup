import { modernScale, scale, verticalScale } from "@/src/utils/scaling";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface CoinBalanceSheetProps {
  visible: boolean;
  onClose: () => void;
}

const CoinBalanceSheet = ({ visible, onClose }: CoinBalanceSheetProps) => {
  const router = useRouter();
  const coinPlans = [
    { coins: 40, bonus: "+1HR COINS", price: "Watch AD", isAd: true },
    { coins: 80, bonus: "+158 COINS", price: "₹29 / week", isAd: false },
    { coins: 190, bonus: "+158 COINS", price: "₹69 / week", isAd: false },
  ];

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.bottomSheet} onPress={(e) => e.stopPropagation()}>
          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>

          {/* Header */}
          <View style={styles.header}>
            <View style={styles.coinIcon}>
              <Ionicons name="flash" size={24} color="#FFD700" />
            </View>
            <Text style={styles.headerTitle}>Coin Balance Low</Text>
            <Text style={styles.headerSubtitle}>Recharge Now</Text>
          </View>

          {/* Coin Plans */}
          <View style={styles.plansContainer}>
            {coinPlans.map((plan, index) => (
              <View key={index} style={styles.planItem}>
                <View style={styles.planLeft}>
                  {plan.isAd && (
                    <View style={styles.adBadge}>
                      <Text style={styles.adBadgeText}>18% OFF</Text>
                    </View>
                  )}
                  {!plan.isAd && (
                    <View style={styles.offerBadge}>
                      <Text style={styles.offerBadgeText}>50% OFF</Text>
                    </View>
                  )}
                  <View style={styles.coinRow}>
                    <View style={styles.planCoinIcon}>
                      <Ionicons name="flash" size={16} color="#FFD700" />
                    </View>
                    <Text style={styles.coinAmount}>{plan.coins}</Text>
                    <Text style={styles.bonusText}>{plan.bonus}</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={[
                    styles.actionButton,
                    plan.isAd ? styles.adButton : styles.buyButton,
                  ]}
                >
                  <Text
                    style={[
                      styles.actionText,
                      plan.isAd ? styles.adButtonText : styles.buyButtonText,
                    ]}
                  >
                    {plan.price}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* Explore All Plans */}
          <TouchableOpacity 
            style={styles.explorePlans}
            onPress={() => {
              onClose();
              router.push("/(main)/coins");
            }}
          >
            <Text style={styles.explorePlansText}>EXPLORE ALL PLANS</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "flex-end",
  },
  bottomSheet: {
    backgroundColor: "#1a2730",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: verticalScale(30),
    borderWidth: 2,
    borderColor: "#2a9df4",
  },
  closeButton: {
    position: "absolute",
    top: verticalScale(15),
    right: scale(15),
    zIndex: 10,
    padding: scale(5),
  },
  header: {
    alignItems: "center",
    paddingVertical: verticalScale(25),
    paddingHorizontal: scale(20),
  },
  coinIcon: {
    width: modernScale(50),
    height: modernScale(50),
    borderRadius: modernScale(25),
    backgroundColor: "#2a3942",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(12),
  },
  headerTitle: {
    color: "white",
    fontSize: modernScale(20),
    fontWeight: "bold",
    marginBottom: verticalScale(5),
  },
  headerSubtitle: {
    color: "#8696a0",
    fontSize: modernScale(14),
  },
  plansContainer: {
    paddingHorizontal: scale(20),
    gap: verticalScale(12),
  },
  planItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#202c33",
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(15),
    borderRadius: 12,
  },
  planLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(12),
  },
  adBadge: {
    backgroundColor: "#2a3942",
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(4),
    borderRadius: 4,
  },
  adBadgeText: {
    color: "#8696a0",
    fontSize: modernScale(10),
    fontWeight: "600",
  },
  offerBadge: {
    backgroundColor: "#2a3942",
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(4),
    borderRadius: 4,
  },
  offerBadgeText: {
    color: "#8696a0",
    fontSize: modernScale(10),
    fontWeight: "600",
  },
  coinRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(6),
  },
  planCoinIcon: {
    width: modernScale(22),
    height: modernScale(22),
    borderRadius: modernScale(11),
    backgroundColor: "#2a3942",
    justifyContent: "center",
    alignItems: "center",
  },
  coinAmount: {
    color: "white",
    fontSize: modernScale(16),
    fontWeight: "bold",
  },
  bonusText: {
    color: "#00a884",
    fontSize: modernScale(11),
    fontWeight: "600",
  },
  actionButton: {
    paddingHorizontal: scale(18),
    paddingVertical: verticalScale(8),
    borderRadius: 20,
  },
  adButton: {
    backgroundColor: "white",
  },
  buyButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FFD700",
  },
  actionText: {
    fontSize: modernScale(13),
    fontWeight: "600",
  },
  adButtonText: {
    color: "#000",
  },
  buyButtonText: {
    color: "#FFD700",
  },
  explorePlans: {
    marginTop: verticalScale(20),
    paddingVertical: verticalScale(12),
    alignItems: "center",
  },
  explorePlansText: {
    color: "#8696a0",
    fontSize: modernScale(12),
    fontWeight: "600",
    letterSpacing: 1,
  },
});

export default CoinBalanceSheet;

