import { View, Text, Image } from "react-native";

const Section5 = () => {
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
          Zero Forex Markup. Go international, without any fees.
        </Text>
      </View>
      <Image
        alt="forexGlobe"
        source={{
          uri: "https://www.uni.cards/images/forex_globe.png",
        }}
        resizeMode="contain"
        style={{ height: 450, width: 450 }}
      />
    </View>
  );
};

export default Section5;
