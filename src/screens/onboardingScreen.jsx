import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../components/screenWrapper';
import { useNavigation } from '@react-navigation/native';
import CommonButton from '../components/button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const data = [
  {
    id: 1,
    source: require("../images/pic1.png"),
    heading: "We bring your ideas alive.",
  },
  {
    id: 3,
    source: require("../images/snap.jpg"),
    heading: "Let’s start your journey",
    styles: {
      image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginBottom: 20,
        alignSelf: 'center',
      },
      heading: {
        fontSize: hp(4),
        color: 'white',
        textAlign: 'center',
        paddingHorizontal:hp(5),
        marginTop:hp(10)
      },
      secondImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: hp(1.5),
        alignSelf:'flex-start'
      }
    }
  },
];

export default function OnboardingScreen() {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleChange = () => {
    if (currentIndex === data.length - 1) {
      navigation.navigate("auth");
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }
  };

  return (
    <ScreenWrapper>
      <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'column'}}>
        {currentIndex === 1 ? (
          <>
            <Text style={data[currentIndex].styles.heading}>{data[currentIndex].heading}</Text>
            <Image source={data[currentIndex].source} style={data[currentIndex].styles.image} />
          </>
        ) : (
          <>
            <Image source={data[currentIndex].source} style={styles.image} />
            <Text style={styles.heading}>{data[currentIndex].heading}</Text>
          </>
        )}
        {currentIndex === 0 && <Image source={require("../images/pic2.png")} style={styles.secondImage}/>}
        <CommonButton title="Get Started" buttonText2Style={{ color: 'black' }} onPress={handleChange} />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  secondImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: hp(2),
    alignSelf:'flex-end'
  },
  heading: {
    fontSize: hp(5),
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  nextButton: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});
