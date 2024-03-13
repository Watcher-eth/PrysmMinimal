import { View, Text, Dimensions, Image, Pressable } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { BetType, CardType } from "@/types/FeedTypes";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { AvatarGroup } from "@/components/common/Avatar";
import BetFeed from "@/components/Bet/BetFeed";
import { ScrollView } from "react-native-gesture-handler";
import PollingComponent from "@/components/Bet/BetSlider";
import { ChevronLeft, Share } from "lucide-react-native";
import AnimatedPressable from "@/components/common/AnimatedPressable";
import VoteSideBet from "@/components/Bet/Vote/SideBet";
import { BetModalPropData } from "@/constants/testData";

const Bet = () => {
  const { name, description, image, icon, topic, id } =
    useLocalSearchParams<BetType>();
  const { width, height } = Dimensions.get("window");
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const IMG_HEIGHT = 380;

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, IMG_HEIGHT / 1.5], [0, 1]),
    };
  });
  console.log("route", id, name);
  return (
    <Animated.ScrollView
      ref={scrollRef}
      scrollEventThrottle={16}
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        width: width,

        backgroundColor: "#070707",
      }}
    >
      <AnimatedPressable
        onPress={() => {
          router.back();
        }}
        style={{
          height: 30,
          width: 30,
          backgroundColor: "rgba(100, 100, 100, 0.4)",
          borderRadius: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 40,
          zIndex: 4,
          left: 20,
        }}
      >
        <ChevronLeft height={21} color={"white"} strokeWidth={4} />
      </AnimatedPressable>
      <AnimatedPressable
        onPress={() => {
          router.back();
        }}
        style={{
          height: 30,
          width: 30,
          backgroundColor: "rgba(100, 100, 100, 0.4)",
          borderRadius: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 40,
          zIndex: 4,
          right: 20,
        }}
      >
        <Share height={16} color={"white"} strokeWidth={4} />
      </AnimatedPressable>

      <Animated.Image
        sharedTransitionTag={"shared"}
        source={{
          uri: image,
        }}
        style={[{ width: width, height: IMG_HEIGHT }, imageAnimatedStyle]}
      />

      <LinearGradient
        // Background Linear Gradient
        colors={[
          "transparent",
          "#070707",

          "#070707",
          "#070707",
          "#070707",
          "#070707",
          "#070707",
        ]}
        style={{
          width: width,
          height: IMG_HEIGHT * 3.2,
          position: "absolute",
          top: height * 0.19,
        }}
      />
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          margin: 19,
          marginTop: -72,
        }}
      >
        <Text style={{ fontSize: 36, fontWeight: "700", color: "white" }}>
          {name}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: 10,
            marginTop: 25,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: -5,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#BEBDBD" }}>
              Total Pool
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 28, fontWeight: "700", color: "white" }}>
                $19,325
              </Text>
            </View>
          </View>
          <AvatarGroup
            images={[
              "https://pbs.twimg.com/profile_images/1713576030063972352/qEdjq6VQ_400x400.jpg",
              "data:image/jpeg;base64,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",
              "https://pbs.twimg.com/profile_images/1484575656759472128/4vLR6_4F_400x400.png",
              "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDQ0NEA0NDQ0PDg0NDQ8PEA4PFREWFhYRFxcYHyghGBsxHRUXITEhMTUyLi4uFyAzRD8tNygtLisBCgoKDg0OFw8QFSsgICItKzcxLS8rLS0tMCstKy0tLS8tKysuKy0rLS4rKy01LS0tLi0rNSstLSsrLS0rLS0tLf/AABEIATEApQMBIgACEQEDEQH/xAAcAAEBAAMBAQEBAAAAAAAAAAAAAQUGBwMEAgj/xAA4EAACAgIAAwUFBgUEAwAAAAAAAQIDBBEFEiEGMUFRYRMicYGRBxQyQlKhI2JyscEVM1OSQ5Pw/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAJBEBAQEAAQQBAwUAAAAAAAAAAAECEQMhMVESBDJBM0JxgbH/2gAMAwEAAhEDEQA/AOoAgPlPeoIAKCAC7BABQQAUEAFGyACggAoIAKCACggAAAigAAAAAAAAAAAAAAAAAAAAAAAAAAgICCggAoIAKCAC7GyACjZABdjZABQQAUEAFBABSAAAAFQpABQQEFBAUUEKBAUAQpABSAEFBAUUEAFBARAABQAAAAAAAAAAAAAAAAAAAAAAAAAAQAEAABQAAUEAFBABQQAAAAAAFBABQQBFBABAQBVBABQQEFB+JzUYylJqMYpylKT0opLbbfgjnnGO3ll3PDA1XV70Vkzi3ZPw5oR7oeje36I3nF14S3hvHEOM4uNv7xk01tJvklZHnfwj3s0XiH2jW2TaxKI11J6VmRFysn6qKeo/uaW06nzJt7e5uT25N98m33v1Pe1praPTno5nnu53VbVj9uc6L5pLGtj4xlXKuXylF9PozbuzXamniPNBRlVkVx5p0zae4/qhJfiW/g15dxynHn7rPly7XCdc65ShZGyLhOEnGUX3bTXd3jXSzfB8rHfQYfsnxOWZgY+RZr2jjKFjS1ucJODlrw3y7+ZlzyWcXh0UEAVQQAUEBBQQFAEBBQQoAEZ55FnJCc0t8kJS156W9AaT9pPaCCrnw2p7stjH7zJPpXU2n7P+qS71+l+qOaYVvIpQ3+CTS+B8sOITslKy+TdtsnZOb/NKXVs/E7dT2vFHvxj4zhwuubyy11m4v4HnG7+GvgfJVbtaCfTRtOX1xu0kjwss5pxXhHcn8jxdh+q63LcV+Of4n+iIGw9k+19/D6rqqqK7I23u1StsklFckY6UV/TvezoHZvtvRl8tV6jj5LeowlPmrs8uWelp+j/c5bVVCCS6fAXwhJacYv5I5a6edNTVjvo2aB2B7XKz2fD8qUnak4498nv2qXdXJ/q13Px159+/Hk1m5vFdZeVBCmVAAAAAEAAAABRmE7b5jx+FZ1sd8yolBNd8XNqHN8ubfyM2a/8AaBZy8Izn51Rj/wBrIx/yXH3Rm+K4zwfhs8+2FFa0tblNrpXBd8vX4HUeEdjMCqEYvHjbJd87tzk35+SMP2CxVGh26962Xf8Ayx6JfXmN7xT1b1beDGJJyxs+xXDrO/EhF+dblD+zPF/Zzw5/kvW/K+RtFTPpiSW+1snppb+zTh/evvP/ALk/8Fl9nvD1HlULvj7eW2/PyN0Z5WDm+zienNeJfZxS03j5FsJeCs1OP7aZofEuF3Ylrpu9ya6xffCyP6oy8V+53bJNQ7a8Ojk4s2179O7IPxWvxL6f2Rc7svFTXTlnMcpustq1ZB+/W1OEl3xlF7jJfNJn9HY9jnXCbWnKEJNeTaTaP5yyanHul08md87JznLhnD5WS5pyw8Zyl5t1x6k+o8SufT81lSkB5XUAAUAAQABFAAAMF26rUuEcRT/LiWzX9UFzr94ozpoP2pT4hN4WJhWxhTxCV2NfDlg5S3FNtuS2oqHO+mv7G+lOdyM7vGa+TheasPCxd1zstnXBQqgvenPl3L4Lr3n2w7TZcOsuF2uPnGU3r6QZjMbgGBVTGzKh7blit25ds7H8fefLH5HlkY/Cq5pKh4trSlGdcsjEnrwlvomvJvoeuZjF1r+G5cB7Rxy3OPsbqpVpOSsS5evgn5mxV3I5pDjtuDOELpW5dF2o484xjLI9r4VPuU9rqpejMxX2jy4rc+E5HIv0ZWLZZr+hS7/TZm59NzU47tq4lxanFrdt8+WCaW+WUur7lpdTBT7c4P67X6qqX+TB5faaedKVGBTCUYpfebs+qcaqJb/2nW+s7Om9dEuh+KeHT/8AJn6b/wCHh+JXBfBOLf7lmZ+Wbq/tbBT2mw8hqFd6U5dFGyMobfkm1pv0PxnrcZRfjGS+qNezeBX2Rl7PIwsj+S/Cjj2fK2lpr5po+bD7WVuyGBkVXU5cdVONko2pzS8ZrTba09609omsfnLWd/jXZzrLslZJQri5Tm4xjFd7k3pR+rP6N4VifdsbHx/+Cimrp/JBR/wcR4Tgc3H8aiK2o8QjbpeEIS9t/aJ3jZj6jXiMdOeQAHmdQAAAABAQAUbIALs0/txzrL4TOKb1/qUVrf45YvT58qmbeY3tNgO/BvnXpZOJOnKxZvujbCT6P+Vxcov0kzr0P1J/f+MdX7WJ7PcPhZdTbfpxq5pQrkvd9ptKE38FzfN78Ec07R599isx7qald99tvsyVF/eJTacXU5b6wT7l6R8joXAe0mHLlrvthiZCS5sfLnGp/GMpe7OPk0zK8S7ScMpj/Eyce+38mPj8mVfZLwjGENvf0R7c6s7cOO8zXflzPCw5qHC65uatln2WqDT1GqnHTk/5fesS9W35M6xjcNrlVtp7137NU4ZiWXZVudlQVUpJQqxlytYeMpcyq2u+cpNyl6s3OvLUYacWl5nHqalrt082Zc97K4E77s2lScX/AKpnO6aScoQi17yT6N8vIl4bkn1S0aVxnPouprlGvI++u6crXbNWY6x2t1wht83Mum36S9NdJoyFwvjFs7ZcmHxLkcbm9QpykktSfhGUUuvnEzN3YPAnN2Sobbk5aVklHq96SXh6HbOszvw46zq9uWodksSy7h0sqpyjbiTXPUm3C/HcVLovy2R97TX4kkntva+K6EZ8cdkoL2keGvm2u6xXqCmvXlevkdMWJThUTUOWmiO7LJSlyxXRJybfokvkc+wrFk3ZfElFxqyHCrFUouMnjV7ftGn1XNJuS9NGd2cWtYzZZK/H2f4ifFOIcRm0q6XdjrzU5Sg9/wDWL+p1HZpXYDs4rMPLnbZ733q66NcX7s2orrLfpy/Ns3SK0kvJJHl68ssrpix+tjZAcW12NkAFBAAABFAAAPHKx/arlc7Iwf44wlyqyP6Zeh7Astl5iWctNxsGNvPTNQl7Oc4OFsI2Rbi2t6aMtgcAhUn7NU1J96ophXv/AKpGP4/XLFy1fH/ayNc3krUtNfNLf1Mlj2yuh0lr3W0vDZ6c3mD8cUlHGVTUX7KFm7NLb1p6k/noud2gxXS1GUZSa1GMerb8j4HxNwbjbRPS6OUJc6+mtiOZhQfPFPmflTJSXx3ovC9/TKQ4bHLxI13wi24aanFSTXk0+8w0eA5OGuXGzOIUVrupqthdTH+mNsZOPw3oyGPxj2jUao5Lb7v4fKvrJpGTebKG42d66bRqWzwzrMvmNUyOFO9qWXdmZnK0415c4rHhJfm9lCKUn8do+PjGRyrk3tvvMtxjjHRqP7nl2T4W77Pvly9yDfsU/wA81+f4Lw9fgZ1q+aSSdozfY6MacWytqUcmyUHZCcJRca+9d6/+2ZgA4b6ny4M545AAc2gAAAABAAAAAAAAeGdiQyKp1WLcJr5p+El5M1OiyzAv9hd1XV12d0bYea9fNeBuZ83EMGvJr9nbHa7010lCX6ovwZvG/iljEX+ytXOvxenQ8oY68ei8+h4XcAy6X/AshbDwUn7Ofw8n8do8eTPXR4lnylW1+zO81n2c1nqXVQt7Tfx2zAcZ4wve69XtsseGZ93R1xqT/NZZH+0dsyvC+y9NMlZc/b2rqnNahF+aj4v1f7Eu8xO9YPgvAbMySuyFKGP3qL2p3L08o+vj4eZvFcFGKjFJRikoxS0kl3JIoOGtXSycAAMqAAAAAKCAAAAAAAAAAAAAAAAAAACAACgACAACgAAAGxsgAEAoIAKAAAIAKAQCggAoGxsACACggAoIAAACgAABAAAAEAAFAAAAAAAAAAAAAAABAABQAAAAQAAUAAAAAAAAAAAAAAAAAAABCkAAAAAAIUgAAACkRQIAAAAAFIAKCFAAACIAAAABQQAUEAAFIAAAApCgQAAAAABSACkAFAAEBQBAAAKAAAAAAAAABAAAKAAIUAQAAf/Z",
            ]}
            height={40}
            width={40}
          />
        </View>
        <View
          style={{
            height: 1,
            width: width * 0.9,
            backgroundColor: "gray",
            marginTop: 13,
            marginBottom: 13,
          }}
        />
        <Text style={{ fontSize: 18, fontWeight: "700", color: "#BEBDBD" }}>
          {description}
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          marginTop: -15,
          marginBottom: 5,
          zIndex: 12,
        }}
      >
        <VoteSideBet
          title={name}
          question={description}
          image={image}
          totalPot={2069}
          betId="123"
          options={["No", "Yes"]}
        />
      </View>
      <View
        style={{
          zIndex: 2,
        }}
      >
        <BetFeed />
      </View>
    </Animated.ScrollView>
  );
};

export default Bet;
