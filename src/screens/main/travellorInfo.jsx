import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CountryPicker } from "react-native-country-codes-picker";
import CommonTextInput from '../../components/textinput';
import DropDownPicker from 'react-native-dropdown-picker';
import Feather from 'react-native-vector-icons/Feather';
import CommonButton from '../../components/button';

export default function TravellorInfo() {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState({ code: '', flag: '', dial_code: '' });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ]);

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left-circle" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Travellor Info</Text>
        <TouchableOpacity
          style={styles.iconButton}
        >
          <Icon name="pencil" size={18} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:hp(3)}}>
      {/* First Name Input */}
      <View style={{ marginTop: hp(5) }}>
        <Text style={styles.label}>First Name</Text>
        <TextInput placeholder="Enter your first name" placeholderTextColor="#FBFAF7" style={styles.input} />
      </View>
      {/* Last Name Input */}
      <View style={{ marginTop: hp(2) }}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput placeholder="Enter your last name" placeholderTextColor="#FBFAF7" style={styles.input} />
      </View>
      {/* Country Code and Phone Number Input */}
      <View style={{ marginTop: hp(2) }}>
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.phoneInputContainer}>
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={styles.countryPicker}
          >
            <Text style={styles.countryCodeText}>
              {country.flag} {country.dial_code}
            </Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Enter your phone number"
            placeholderTextColor="#FBFAF7"
            style={styles.phoneInput}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>
        <CountryPicker
          show={show}
          pickerButtonOnPress={(item) => {
            setCountry({ flag: item.flag, dial_code: item.dial_code });
            setShow(false);
          }}
        />
      </View>
      {/* Date of Birth Input */}
      <View style={{ marginTop: hp(2.5) }}>
        <Text style={styles.label}>Date of Birth</Text>
        <CommonTextInput placeholder="YYYY-MM-DD" placeholderTextColor="white" customStyle={styles.customInput} />
      </View>
      {/* Gender Dropdown */}
      <View style={{ marginTop: hp(2.5) }}>
        <Text style={styles.label}>Gender</Text>
        <DropDownPicker
          open={open}
          value={gender}
          items={items}
          setOpen={setOpen}
          setValue={setGender}
          setItems={setItems}
          placeholder="Select your gender"
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          dropDownContainerStyle={styles.dropdownContainer}
          ArrowDownIconComponent={({ style }) => <Feather name="chevron-down" size={20} color="#EEFD79" />}
        />
      </View>
      <View style={{marginTop:hp(3)}}>
        <Text style={{color:'white',fontSize:23,fontWeight:'900'}}>ID Details</Text>
      </View>
      <View style={{marginTop:hp(3)}}>
        <Text style={styles.label}> passport number</Text>
        <CommonTextInput placeholder="Enter your passport number" placeholderTextColor="white" customStyle={styles.customInput}/>
      </View>
      <View style={{marginTop:hp(3)}}>
        <Text style={styles.label}> passport expiry date</Text>
        <CommonTextInput placeholder="YYYY-MM-DD" placeholderTextColor="white" customStyle={styles.customInput}/>
      </View>
      </ScrollView>
      <CommonButton title="Submit" containerStyle={{backgroundColor:'gray'}}/>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 1,
  },
  iconButton: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 6,
    borderColor: '#EEFD79',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
  },
  label: {
    color: '#B8B8B8',
    fontSize: 12,
    marginBottom: hp(1),
  },
  input: {
    padding: hp(2),
    color: 'white',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 18,
    backgroundColor: '#22212fbf',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#22212fbf',
  },
  countryPicker: {
    padding: hp(2),
    backgroundColor: '#22212fbf',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  countryCodeText: {
    color: 'white',
    fontSize: 18,
  },
  phoneInput: {
    flex: 1,
    color: 'white',
    padding: hp(2),
    fontSize: 18,
  },
  customInput: {
    padding: hp(2),
    height: hp(7),
  },
  dropdown: {
    backgroundColor: '#22212fbf',
    height: hp(7),
    paddingLeft: hp(2),
  },
  dropdownText: {
    color: 'white',
    fontSize: 18,
  },
  dropdownContainer: {
    backgroundColor: '#22212fbf',
    borderColor: 'gray',
  }
});
