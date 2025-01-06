import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import React, { useState, useRef } from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Qosta1() {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const flatListRef = useRef(null);

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, id: messages.length.toString(), sent: true }]);
      setInputText('');
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../../images/back.png")} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Qosta1</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("flightDetails")}>
        <Image source={require("../../images/cal.png")} /></TouchableOpacity>
      </View>
      <View style={styles.messagesContainer}>
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={({ item }) => (
            <View style={[styles.messageContainer, item.sent ? styles.sentMessage : styles.receivedMessage]}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.messagesList}
          inverted
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Message Qosta"
          placeholderTextColor="#aaa"
          value={inputText}
          onChangeText={text => setInputText(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Image source={require("../../images/airplane.png")} />
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '900',
  },
  messagesContainer: {
    flex: 1, // Occupy remaining space above TextInput
    marginBottom:hp(10)
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
  },
  sendButton: {
    marginLeft: wp(2),
  },
  messagesList: {
    paddingHorizontal: hp(1.3),
    paddingBottom: hp(2), // Space for padding at the bottom
  },
  messageContainer: {
    borderRadius: 10,
    padding: hp(1),
    marginVertical: hp(0.5),
    maxWidth: '80%', // Limit the width of messages
  },
  sentMessage: {
    backgroundColor: '#333', // Green background for sent messages
    alignSelf: 'flex-end',
  },
  receivedMessage: {
    backgroundColor: '#333', // Dark background for received messages
    alignSelf: 'flex-start',
  },
  messageText: {
    color: 'white',
    fontSize: 16,
  },
});
