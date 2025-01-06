import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import CommonTextInput from '../../components/textinput';
import CommonButton from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";

export default function NewPassword() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScreenWrapper>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
        <Image source={require("../../images/Q.png")} />
        <Text style={{ color: 'white', fontWeight: '900', fontSize: 25, textAlign: 'center' }}>
          Create A New Password
        </Text>
        <CommonTextInput placeholder="Password" placeholderTextColor="gray" customStyle={styles.input} />
        <CommonTextInput placeholder="Confirm Password" placeholderTextColor="gray" customStyle={styles.input} />
      </View>
      <CommonButton title="Reset Password" onPress={toggleModal} containerStyle={{ margin: 0 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 1, marginVertical: 17 }}>
        <Text style={{ color: 'white' }}>Remembered your password?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("login2")}>
          <Text style={{ color: '#EEFD79' }}>Sign in</Text>
        </TouchableOpacity>
      </View>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
            <Image source={require("../../images/Q.png")}/>
            <Text style={{color:'white' ,fontWeight:'800',fontSize:20,marginTop:6}}>Changed SuccessFully</Text>
          <Text style={styles.modalText}>Your password has been Changed successfully!</Text>
          <CommonButton title="Sign in" containerStyle={{width:"100%"}} onPress={()=>navigation.navigate("login2")}/>
        </View>
        
      </Modal>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 19,
    width: "100%",
  },
  modalContent: {
    backgroundColor: 'black',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: "#EEFD79",
    borderWidth:1
  },
  modalText: {
    fontSize: 18,
    marginBottom: 12,
    color:'white',
    textAlign:'center',
    marginTop:10
  },
});
