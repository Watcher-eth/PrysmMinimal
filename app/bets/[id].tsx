import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { BetType, CardType } from "@/types/FeedTypes";
import Animated from "react-native-reanimated";

const Bet = () => {
  const { name, description, image, icon, topic, id } =
    useLocalSearchParams<BetType>();
  const { width, height } = Dimensions.get("window");

  console.log("route", name, image);
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        width: width,
        height: height,
        backgroundColor: "#070707",
      }}
    >
      <Animated.Image
        sharedTransitionTag="CardImage"
        source={{
          uri: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
        }}
        style={{ width: width, height: height * 0.45 }}
        resizeMode="cover" // This prop determines how to resize the image when the frame doesn't match the raw image dimensions
      />
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          margin: 19,
          marginTop: -52,
        }}
      >
        <Text style={{ fontSize: 32, fontWeight: "700", color: "white" }}>
          Oppenheimer
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 25,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#BEBDBD" }}>
              Total Price Pool
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 28, fontWeight: "700", color: "white" }}>
                18 GHO
              </Text>
              <Animated.Image
                source={{
                  uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEUgHy3////Ks/nPuP8WFyIdHSrDrfAsKTsAAADOt/7Suv8QEhwdHCvPt/8TFR8AABWHeKhCPFR2aZQAAAgAABgODCAACA8VFCUAAAfo6OkJDRUAABsAABEAABYuLTnJycv09PVHRlCysrUlJDGBgIatmta5pOV1dXpYWGA2NUE/PkiVlJmop6vr6+wYFyeJiY5oZ26lk83Z2dtRSWc5NEpjWHzOztC/v8F6bZhPR2SUg7ewsLNNTFVcU3RrYIaSgbW7sGH2AAAOp0lEQVR4nOWdaWOqOhCGQYkiotYioojVautet2NrTxf7///VRe2ikJ1B6Lnvx3s9rU8zmcxkJomixq5u82k7my6Go9vJ+Kav9G/Gk9vRcDGdbZ+a3fh/vRLnD394mt299VtWpdaybWdumkjZC5nm3LHtVs2zWv23u9nTQ5xfIi7Ch+30rdbwWvbcVGgy53bLa9TeFtu4MOMgfOgNb7yKPaeinWtuV7ybYS8OSmjCbmcx0WsOfeAIw2nX9PFdB/gLwRJ2t8uaZ8vQ/VB6reUW8jtBEm6X7YoTge4L0qmAQkIRru9aEHhfkJ69aAJ9MxjC17EVyTjDQrb11gP5bgCED9NaGxbvqHm7NgVwrpEJm8NKKw6+vcxWZRjZWCMSrpe6HRPeUba+XCdIuF56YN6FKMeLxhiBsLnU4+c7MOrLCLYqTdhdWJfhOzBaC+ksRJZwZsc7/4Ky7dlFCdfjSlz+kySzMpabjlKEd5ZI3gCluXV3IcKOeVkD/ZFtSmQe4oTDxqUN9EdmYxg74bqf1AAeZfdFZ6Mg4dRKbgCPMq1pjITd23bCfHu1b4XWRhHCJ/tyazxNjv0UD+FUT9pCv2TqApbKTzjykgY7kTcCJ+yOk/WhQdlj3snISbhOyRT8kWNzLht8hB0vLVPwR6bHF+BwEc5S42NOZepc6QYP4UxPGoYgLkQOwmkjaRKiGhyrBptwaiXNQRFHCMckTDUgzyiyCGfpBvRHkTUXGYSvaXUyP9JfoxD20g/oI9LrG1TCp98A6CNSUw0a4dpDSX95LqEKbcOYQtg10xjJ4DSfU8JwCuEkbcE2Wc5EhnCUrnSJLpucLxIJp2lKeNnyiCs/ibDzO9zoj3RSLkUgfAAuy8cv0yZUxAmEv8jLfInkbfCEi1rS31dCtQU/4VN6M0KaLGxsgyVUftskPMrs8xIOf9NKeCobV5nCEG4hUkJkIiEB/EpfDUw/HIYw0kKBtLJbb+hFJb+pCmijgRCaDg/hnbSNorLr5t+fX+4HhVJWTMYGZhTtcCE8RLiWtFGtqG+uXwYFo1QqZIRVuAfaLbFCO+EhwrFMEwIqun8/ckZWgu1Txq4MQjgfswhfK+I/VatvfLySNN1BOQ3GTivBbZsgoXiHdrn+fm/ID96XSh91EELT6VIJF6JupuzuBgB8vrJVmEFsLWiETcH5rtV3OQMCL7N3NkAJm/dAIVwKpRRm/c8Aii8D52ycJZlwLfRXLOZXgHx7ATkbfU0kFBlCVN9lIrrPoEovMM7GGZEIRRZ7DUEPYAbO2XhrAqHAENb/QA/gXoV7mMT0bBBPCPlnIdKv4AdwLyhnczoTTwiHvEOIijFY6Kdg8qhTd/pD+MAbr2lokI0LECqy8ZoYwilnOKPlcyAxDF4GjLOxFxhCzpYZbRMnoO9sgAYxTPjKt4GobTJxAoI5m9priHDClReiWE30KJDIZj4JEvKt9sgdxA4I5Gy+k/0vQr7dmfoqhnU+KJjI5nvH5ouQ64Rd4yW2ZeJEhQHEno3ZOifc8iyGxR3fQl8oZY1sJietzA5ib7GyPSPkCUlRlWMOFrLZ3OrqsZpXkCYtAL6fuOZI2OUZQg4vk83eP1frblED28WOoEr3hJDHSOsfrElo5J779XLyaJ/6NFOF10i1P4xJaAwe68XU4CnfZqpwelJUztHtM7drwMwfMH160wNhh9134V5RbdT4KMNkdpA6NoIfCNm7pGhDA8wOqvU02eenjgnGgXDMNFJrRfGjxksxaKBwJcEIMsdfhE3m9oX2l+JmjGf9nEZz3Xy1mq+7SUPqD5+EPWbi1LgnD2H28TxSRvU/q5y/8GdyL0nbbq33ScjcoKENofHonn22vPmu0xSMlZKof3WGn4Q3rGlYJw9hELD4flogLeWqSbpY8+ZI+MBaK1CV6EiNXRAwMNqFapKjuC/S+IRb1sFQ94WUFWY/zrdw0Sb0yVySTnUfuCns1RCVSTYa2jbCmDNUMUJK+xXRJ3xj7NCUr4lGmg8sE0EbPYwzUJuFjOZvB0LWNCT6GWNXDHwSFxeUror4n3sJeXtCVt2XGLAVVsFIoYz93CDBPkCr6RN2GLlh+ZlEGDQ/gs81XPwPvoQqHZ9w1qJ/iBTPlD6C3xw7DX3CfHKtjq2ZT8iIaFCf5Gf6QQ+iPeLHEKjuKSM/qlHUW7orJXztTOElZHzEMUzQmd76hH26DbkveCPFLAKEeZhN0NOYfVVhbbO5A/wQ4mpEde5PXkyVrsJYLFAeH7Flcbu22PAu+5xk8G01FcZiQZhbmRJuGUdV3IeVJJPESkfp0ReL8jN2DAsrrOnVw4NoPCcY0uyTYGVGj7sJjiZ7jTU9hEJjPUhyFvqx90xhlO/r91gjJXUta9XzEnFhEFo1Lyt7qtzRF/wGFjCTI5metjlt1DDuE52Eyr6MqNBDGqRgjZQwDQ//oniVOXZDF4zcrp702RRnqIyoIQ1hES98UNxHUbteDXK5wWrnJr8PPh8pt9S/MqEek6U2TKCya7lu3U1DHcO8VSZ0wnd8IPaehm/PI3OijKmuQNulLl0QExorN9QPlAmECe69COpG6VP/P2EXKraECBXJknNbdD4yYUzrOPpzRda15G5IqsYQKf5aSlDJ+Cvj3vqMeUjyNKx5KFs/LD9SynhSIe6NQq+OkrZe/tK+P3KL+c2m78r0LeiUOp5xLZ6m+L5Ubj18JBsMalQ/cgXDyAyu8uI1Uno5XTzK9ddDekyDCDENPnnaq7xZfdUPS8aLeP2Q1hJREK+B+DENIy4NF5MO3z280fap4t/TYwrZnPDxV1SktLWIOxs/LmXkFgifW5B2l8qBMS9khGMDurMR3bfzcwvJ/BD/t0T50N9iINwGZkE6Gz8/ZOb42F9HCEwxHbbZK9GFGtTZ+Dk+5D4NtqOhIBwdQDobewa61+bi6odZ4fohtYdO0NnUerL7pQXc9HKxnxTf8waMbCodyD1vUv1QvG5BaW8RdDZWE7JuQdjykEhE6M5G5OdVupC1J1IQK5Eu050Nv1Hsa0/M+iE+u8gUQiVg4hhKpBlQzuZQP2R0QBNrwOFVgGBbWZlT6HRnw73EOkufcMqo45NCDMzK1MD94Sm7xzTBpFGtKUcvRhG/IuJmInbOUvIQmtCGdvaBN7I59GIw+2mwRcEMrp8Gb6aSjW0gkc2hn4bdE4VfL/adl8HRqYcPRsnXD10AZ+Px9bWRWobCxoK04PHECFV8gDTqs6+N2ZuokQjDXx8FjpiWBhHOS1KdDZdpfPYmsvtLiY36wf7S/Tno08tAjFWUA6HR06j2sb+0GalHODSK7nPGKPh/ksK+ftiItK8aObLZH1rf93kz4jZqq372MbT6FpXd6j6Xu3951CLWD6Pu2Rwu4ePr1aec6sq+hxCR5tYbFkT9kOZsOI6afvfqc5y3oBw9DJ63AFW0NOr7vAXHmRlCHnz8TcEzM4BCG9qZQFYapTe/zj0xD1woDeq5pxXQwVaMqM5mRXc2h+MWR0L2UXXCzvCnSrnYzv/4MQTlT0t3NscD62DnD0PH14BEnSD0NOrk/CHPaXya487s9+8fYzpDKp1GnZ4hBToHvJOqp7EknUadnQPmOsvNvFAhprPcsmnU2VlurksjeM/jW8fz+GCkSC6N+ro2QuBOBa3Kce0HyJ0KAbnvlF9MdDbndyrA34thFCJcjBG+KYMyiKRNksC9GKrNY1SNj9ju+JIWaRsI2eo5Id+1nhe5n0ZMJMLvu7DSd8eQoEiEoTuGWFvfX4hK/PdEiYlAOL9Vg4SvfI+oon7KEAmE7fBdX2qN8762C9z2JSI8oVlRw4S8d+4hJVVzEU+IvXOP+95EVL6/xIVYnMITYu9NFLj70o3v7kthYQnxd1+K3CKsk7fBLy0sod7EEorcQev+SYu/wRGS7qAVu0dYS4ml4ggt0j3CYndBN3Yx34LJJwwh+S5oifu8k2fEEFLu8xa8kx3V/0LeyQ5FSLuTXfxeff0xacYwodekEKoLRttCmLH+CPQ2AhQh/W0EtSv+voVWf19Ffb4DkJD1voXkGyX5q1xSAxkkZL5RIv/OzFWkd2agCNnvzEi/FYSKen63yhV8zItyBgg53gqK+t7T3+uP1X1O8LmnCDLOLjTgee9J5jGdU0pULrr1Rt7XJn8RnR7cMudhnJjeXRN7dC2STn+txffu2r//dt7vff8QD4P7j//+G5b//juk/4O3ZH/le8CE18f/t286/w/e5fbz/d+0KtpLIgeZ8Dd5G5KXYRBKZMMJKZT1chKqa+933H6BvFDKxEn4Wxwq0Y2yCdXX34CoB/ctRAjVWfojVH1GR2AQqlOgl4hjk8UAZBKq03SPokVc6bkJ0z2KbEAOQnWWXnfDmoOchOn1qAwvyk+o9uJrxo8gpPd4vjwXofrE+TjiJWVWsJsWkoTq2klbGO44tFBNnFDtjtOVTNkTSrAtRaiqozSlxN6I/YWFCdWpnpbJaOrsZVCGUO200jEZHZuaTEQgVB8madhHrU0eRL60EOE+Sk3aUk2OQC0KofrUT9an2n2+VVCeUFWHCQ6j2cBVl6AJ1Y4p2pICpZYp4mLkCVV1Ycm0M0TV3MKXXuIgVNeTiweqpjfhDNNACP2MyrmsqbYcnkwJktA3Ve9y67/jSRloREK1udQvw+joyyb768RA6E/HkRU/o2ON5CYgBOGeMeZxdPRofJEJfcalF1+UY3vLiHwAhP58XHjtONbHedtbRJh/gIS+ercW8EAi23rj2mhiCobQN9ZhuwI3Ix3Phhi+g6AIfW1HXhugqGo6ldoS058mK0BCVe32li0vUp+KaXut5ZZ3k4lLoIR7dRZjvSY1lKZT08d3EtkDXeCEvh56wxuvYov417ld8frDntD2BKfiINzrYbt4aze8ljOnD6c5t1teo/222MZBt1dchAc1O7PhpN+2KrWWbfus5rH8gUxz7th2q1ax2v3b4awD5TaxipXwqG7zaTubLoaj28n4pq/0b8aT29FwMZ1tn5qgPgWv/wBMVoC9YcJ8IQAAAABJRU5ErkJggg==",
                }}
                style={{
                  width: 30,
                  height: 30,
                  marginLeft: 6,
                  borderRadius: 100,
                  overflow: "hidden",
                }}
                resizeMode="cover" // This prop determines how to resize the image when the frame doesn't match the raw image dimensions
              />
            </View>
          </View>
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
          Will Oppenheimer win best picture at the 2024 Academy Awards?
        </Text>
      </View>
    </View>
  );
};

export default Bet;
