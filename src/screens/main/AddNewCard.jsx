import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import CommonTextInput from '../../components/textinput';
import CommonButton from '../../components/button';

export default function AddNewCard() {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 1,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            borderWidth: 1,
            borderRadius: 50,
            padding: 4,
            borderColor: '#EEFD79',
          }}>
          <Icon name="arrow-back" size={23} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            flex: 1,
            textAlign: 'center',
            fontSize: 25,
            fontWeight: '700',
          }}>
          Add New Card
        </Text>
      </View>
      {/* 1 */}
      <View style={{marginTop: hp(6)}}>
        <Text style={{color: '#B8B8B8', marginBottom: hp(1)}}>Card Number</Text>
        <CommonTextInput
          placeholder="Enter Here"
          placeholderTextColor="white"
          customStyle={styles.input}
        />
      </View>
      {/* 1 */}
      <View style={{marginTop: hp(2.5)}}>
        <Text style={{color: '#B8B8B8', marginBottom: hp(1)}}>
          Name on Card
        </Text>
        <CommonTextInput
          placeholder="Enter Here"
          placeholderTextColor="white"
          customStyle={styles.input}
        />
      </View>
      {/* 1 */}
      <View style={{marginTop: hp(2.5)}}>
        <Text style={{color: '#B8B8B8', marginBottom: hp(1)}}>Expiry Date (MM/YY)</Text>
        <CommonTextInput
          placeholder="Enter Here"
          placeholderTextColor="white"
          customStyle={styles.input}
        />
      </View>
      {/* 1 */}
      <View style={{marginTop: hp(2.5)}}>
        <Text style={{color: '#B8B8B8', marginBottom: hp(1)}}>CCV</Text>
        <CommonTextInput
          placeholder="Enter Here"
          placeholderTextColor="white"
          customStyle={styles.input}
        />
      </View>
      <CommonButton
        title="Add card"
        containerStyle={{
          backgroundColor: 'gray',
          position: 'absolute',
          bottom: 5,
          right: 0,
          left: 0,
        }}
        onPress={()=>navigation.navigate("CardSuccess")}
      />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: hp(2),
  },
});
