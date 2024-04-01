import { View, Text, Image } from "react-native";

const Section3 = () => {
  return (
    <View
      style={{
        height: 800,
        padding: 50,
        paddingHorizontal: 150,
        backgroundColor: "#FEFEFF",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <View style={{ gap: 20, width: 600 }}>
        <Text style={{ fontSize: 45, fontWeight: "bold" }}>
          {
            "1% assured cashback on your spends.The more you spend, the more you earn."
          }
        </Text>
        <Text>
          Not applicable on fuel purchase, rent & wallet transfers, ATM
          withdrawals & international transactions.
        </Text>
      </View>
      <Image
        alt="onePercent"
        source={{
          uri: "https://www.uni.cards/images/one_percent_cashback.png",
        }}
        resizeMode="contain"
        style={{ height: 450, width: 450 }}
      />
    </View>
  );
};

export default Section3;
