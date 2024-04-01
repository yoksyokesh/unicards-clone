import { View, Text, Image } from "react-native";

const Section7 = () => {
  return (
    <View>
      <View
        style={{
          height: 600,
          padding: 50,
          paddingHorizontal: 150,
          backgroundColor: "#222627",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Text
          style={{
            fontSize: 45,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          At Uni, we’re committed to delivering an unmatched credit experience
          for millions of Indians.
        </Text>
        <Text
          style={{
            fontSize: 30,
            // fontWeight: "bold",
            color: "gray",
            textAlign: "center",
          }}
        >
          On this mission, we’ve partnered with some of the best in the
          business.
        </Text>
        <Image
          alt="sbm"
          source={{ uri: "https://www.uni.cards/images/SBM.svg" }}
          style={{
            height: 200,
            width: 250,
            resizeMode: "contain",
            marginTop: 50,
          }}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 30,
          paddingHorizontal: 150,
          backgroundColor: "#010100",
          height: 200,
        }}
      >
        <Text style={{ fontSize: 25, color: "gray", textAlign: "center" }}>
          Please note that to stay compliant with RBI guidelines, we have
          discontinued Pay 1/3rd and Pay 1/2 cards for the time being.
        </Text>
      </View>
    </View>
  );
};

export default Section7;
