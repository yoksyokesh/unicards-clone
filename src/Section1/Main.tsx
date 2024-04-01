import {
  View,
  useWindowDimensions,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  Button,
  Pressable,
  TextInput,
} from "react-native";

const Section1 = () => {
  const { height, width } = useWindowDimensions();

  return (
    <View>
      <ImageBackground
        source={require("../../assets/Section1/mainBg.gif")}
        resizeMode="cover"
        style={{
          height: height,
          width: width,
          paddingHorizontal: 150,
          paddingVertical: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Image
            style={{ height: 100, width: 100, resizeMode: "contain" }}
            alt="unicard_logo"
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/1/12/Uni_Cards_Logo.jpg",
            }}
          />
          <Pressable
            style={{
              height: 50,
              width: 150,
              borderRadius: 10,
              backgroundColor: "black",
              opacity: 0.5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "400",
                opacity: 1,
              }}
            >
              Uni Paycheck
            </Text>
          </Pressable>
        </View>
        <View style={{ justifyContent: "center", flex: 1 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flex: 0.5, gap: 30 }}>
              <Text style={{ fontSize: 50 }}>
                <Text style={{ fontWeight: "bold" }}>NX Wave.</Text>
                {"The next-gen credit card for those who love rewards."}
              </Text>
              <Text style={{ fontWeight: "500" }}>
                1% Cashback ✦ 5x Rewards ✦ Zero Forex Markup
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  height: 60,
                  backgroundColor: "black",
                  borderRadius: 10,
                  width: 270,
                  padding: 15,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextInput
                  placeholder="Enter Phone Number"
                  placeholderTextColor={"gray"}
                />
                <Pressable
                  style={{
                    height: 45,
                    backgroundColor: "#FDEE78",
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 5,
                    paddingHorizontal: 15,
                  }}
                >
                  <Text>Apply Now</Text>
                </Pressable>
              </View>
            </View>
            <View style={{ flex: 0.5, alignItems: "flex-end" }}>
              <Image
                alt="Section1_Right_Banner"
                source={{
                  uri: "https://www.uni.cards/images/nx-wave/nx_wave_hero.png",
                }}
                style={{ height: 420, width: 420, resizeMode: "contain" }}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Section1;
