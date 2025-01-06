import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={hp(10)}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: hp(10) }} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View>
              <Text style={styles.headerText}>Hi username, </Text>
              <Text style={styles.headerText}>Glad to see you back!</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={{borderWidth:1,borderRadius:50,borderColor:"white",padding:2}}>
              <Icon name="menu" size={23} color="white" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../../images/pic3.png')}
              style={{
                alignSelf: 'center',
                marginTop: hp(3),
                width: '100%',
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
          <View style={styles.section}>
            <Image source={require('../../images/Background1.png')} style={{ borderRadius: 10 }} />
            <Text style={styles.sectionText}>Curated Choices</Text>
          </View>
          <View style={styles.section}>
            <Image source={require('../../images/Background1.png')} style={{ borderRadius: 10 }} />
            <Text style={styles.sectionText}>Top Bargains</Text>
          </View>
          <Text style={styles.sectionTitle}>Something new!</Text>
          <View style={styles.section}>
            <Image source={require('../../images/Background1.png')} style={{ borderRadius: 10 }} />
            <Text style={styles.sectionText}>Top Bargains</Text>
          </View>
          <View style={styles.section}>
            <Image source={require('../../images/Background1.png')} style={{ borderRadius: 10 }} />
            <Text style={styles.sectionText}>Top Bargains</Text>
          </View>
          <Text style={styles.sectionTitle}>Collaborative Planning</Text>
          <Image source={require("../../images/back2.png")} style={{ width: "100%", borderRadius: 10, marginTop: hp(3) }} />
        </ScrollView>
        <TouchableOpacity style={styles.inputContainer} onPress={() => navigation.navigate("qosta1")}>
          <View style={styles.input}>
            <Text style={{ color: 'white' }}>Message Qosta</Text>
          </View>
          <TouchableOpacity style={styles.sendButton}>
            <Image source={require("../../images/airplane.png")} />
          </TouchableOpacity>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
    fontSize: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#22212fbf',
    padding: hp(1),
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: hp(1.3),
    borderWidth: 1,
    borderColor: '#EEFD79',
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 18,
    padding: 16,
  },
  sendButton: {
    marginLeft: wp(2),
  },
  section: {
    backgroundColor: '#22212fbf',
    padding: hp(1),
    marginTop: hp(3),
    borderRadius: 10,
    flexDirection: 'row',
    gap: hp(10),
    alignItems: 'center',
  },
  sectionText: {
    marginTop: hp(4),
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 30,
    marginTop: hp(2),
    fontWeight: '600',
    color: 'white',
  },
});
