import { View, Text, Image } from "react-native";

const Section6 = () => {
  return (
    <View>
      <View
        style={{
          height: 700,
          padding: 50,
          paddingHorizontal: 150,
          backgroundColor: "#010100",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={{ gap: 20, width: 600 }}>
          <Text style={{ fontSize: 45, fontWeight: "bold", color: "white" }}>
            We’ve all heard of instant groceries, now say hello to instant
            credit.
          </Text>
          <Text style={{ color: "gray", fontSize: 30 }}>
            0% hassle, 100% paperless. Get your Uni Card instantly.
          </Text>
        </View>
        <Image
          alt="forexGlobe"
          source={require("../../assets/3part.webp")}
          resizeMode="contain"
          style={{ height: 600, width: 450 }}
        />
      </View>
      <View
        style={{
          height: 700,
          padding: 50,
          paddingHorizontal: 150,
          backgroundColor: "#010100",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={{ gap: 20, width: 600 }}>
          <Text style={{ fontSize: 45, fontWeight: "bold", color: "white" }}>
            With Uni, you’re always in control.
          </Text>
          <Text style={{ color: "gray", fontSize: 30 }}>
            Set your own payment limits. Choose how and where you spend. Lock
            and unlock your card. All right from the app.
          </Text>
        </View>
        <Image
          alt="forexGlobe"
          source={require("../../assets/cardBilling.webp")}
          resizeMode="contain"
          style={{ height: 600, width: 450 }}
        />
      </View>
    </View>
  );
};

export default Section6;
