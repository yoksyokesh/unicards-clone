import { View, Text, Image } from "react-native";

const Section2 = () => {
  return (
    <View
      style={{
        height: 500,
        padding: 50,
        paddingHorizontal: 150,
        backgroundColor: "#FEFEFF",
        gap: 50,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontWeight: "500", fontSize: 40, textAlign: "center" }}>
        {
          "Earn 1% assured cashback on your spends. Get 5X more value than cashback at the Uni Store. Enjoy round the clock Whatsapp support. And it's lifetime free; no joining fee, no annual charges."
        }
      </Text>
      <Image
        alt="section2banner"
        source={require("../../assets/Section2/Section2Pointer.png")}
        resizeMode="contain"
        style={{ height: 170, width: 170 }}
      />
    </View>
  );
};

export default Section2;
