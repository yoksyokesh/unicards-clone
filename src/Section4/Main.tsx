import { View, Text, Image } from "react-native";

const Section4 = () => {
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
      <Image
        alt="5x"
        source={{
          uri: "https://www.uni.cards/images/five_x_rewards.png",
        }}
        resizeMode="contain"
        style={{ height: 450, width: 450 }}
      />
      <View style={{ gap: 20, width: 600 }}>
        <Text style={{ fontSize: 45, fontWeight: "bold" }}>
          5x more value than your cashback, only at the Uni Store.
        </Text>
      </View>
    </View>
  );
};

export default Section4;
