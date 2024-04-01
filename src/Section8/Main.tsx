import { View, Text, Image } from "react-native";

const Section8 = () => {
  return (
    <View
      style={{
        padding: 50,
        paddingHorizontal: 150,
        backgroundColor: "#010100",
      }}
    >
      <Image
        style={{ height: 100, width: 100, resizeMode: "contain" }}
        alt="unicard_logo"
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/1/12/Uni_Cards_Logo.jpg",
        }}
      />
      <Text style={{ fontSize: 15, color: "gray" }}>
        {
          "Indiqube Sigma No.3/B,\nNexus Koramangala 3rd Block SBI Colony,\nKoramangala, Bengaluru, Karnataka\n560034\n\nContact Us: 080 68216821\nEmail: care@uni.club"
        }
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "white" }}>Instagram</Text>
        <Text style={{ color: "white" }}>Twitter</Text>
        <Text style={{ color: "white" }}>Facebook</Text>
        <Text style={{ color: "white" }}>Whatsapp</Text>
      </View>
    </View>
  );
};

export default Section8;
