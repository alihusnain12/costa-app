import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CommonTextInput from '../../components/textinput';
import CommonButton from '../../components/button';

export default function TourDetails() {
  const naviagtion = useNavigation();
  const [index, setIndex] = useState(0);

  const handleIncrease = () => {
    setIndex(prevIndex => prevIndex + 1);
  };

  const handleDecrease = () => {
    setIndex(prevIndex => prevIndex - 1);
  };
  return (
    <ScreenWrapper>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 1,
          marginTop: 4,
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 50,
            borderColor: '#EEFD79',
            padding: 6,
          }}
          onPress={() => naviagtion.goBack()}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            flex: 1,
            color: 'white',
            fontSize: 25,
            fontWeight: '900',
          }}>
          Tour Details
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{paddingBottom: hp(5)}}
        showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../images/build.png')}
          style={{width: '100%', borderRadius: 10, marginTop: hp(2)}}
        />
        {/* 1 */}
        <View
          style={{
            backgroundColor: '#3a3939cc',
            padding: hp(2),
            marginTop: hp(2),
            borderRadius: 10,
          }}>
          <Text style={{color: 'white', fontSize: 20}}>
            Hong King Day Trip - Landmarks Visit
          </Text>
          <Text
            style={{
              color: '#EEFD79',
              marginTop: hp(1),
              fontSize: 20,
              fontWeight: '500',
            }}>
            $120
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'gray',
              padding: hp(1),
              borderRadius: 10,
              gap: 10,
              marginTop: hp(1.4),
            }}>
            <Icon name="map-pin" color="#EEFD79" size={12} />
            <Text style={{color: 'white'}}>Departs from Hong Kong</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginTop: hp(1.4),
            }}>
            <Icon name="clock" color="#EEFD79" size={12} />
            <Text style={{color: 'white'}}>Duration : 06 Hours</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginTop: hp(1.4),
            }}>
            <Icon name="clock" color="#EEFD79" size={12} />
            <Text style={{color: 'white'}}>Available from tomorrow</Text>
          </View>
        </View>
        <Text
          style={{
            color: 'white',
            marginTop: hp(2),
            fontSize: 22,
            fontWeight: '700',
          }}>
          Tour Date
        </Text>
        {/* date */}
        <CommonTextInput
          placeholder="Enter Date"
          placeholderTextColor="gray"
          customStyle={styles.input}
        />
        {/*  */}
        <Text
          style={{
            color: 'white',
            marginTop: hp(2),
            fontSize: 22,
            fontWeight: '700',
          }}>
          Guests
        </Text>
        {/*  */}
        <View
          style={{
            backgroundColor: '#3a3939cc',
            borderRadius: 10,
            padding: hp(2),
            width: '100%',
            marginTop: hp(1),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 1,
            }}>
            <Text style={{color: 'white', fontWeight: '400', fontSize: 14}}>
              Adults
            </Text>
            <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                <TouchableOpacity style={{borderWidth:1,borderColor:"#EEFD79",borderRadius:5,paddingHorizontal:hp(1)}} onPress={handleDecrease}>
                    <Text style={{color:'#EEFD79',fontSize:16,fontWeight:'900'}}>-</Text>
                </TouchableOpacity>
                <Text style={{color:'white'}}>{index}</Text>
                <TouchableOpacity  style={{borderWidth:1,borderColor:"#EEFD79",borderRadius:5,paddingHorizontal:hp(1)}} onPress={handleIncrease}>
                    <Text style={{color:'#EEFD79',fontSize:16,fontWeight:'900'}}>+</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#3a3939cc',
            borderRadius: 10,
            padding: hp(2),
            width: '100%',
            marginTop: hp(1),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 1,
            }}>
            <Text style={{color: 'white', fontWeight: '400', fontSize: 14}}>
            Children
            </Text>
            <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                <TouchableOpacity style={{borderWidth:1,borderColor:"#EEFD79",borderRadius:5,paddingHorizontal:hp(1)}} onPress={handleDecrease}>
                    <Text style={{color:'#EEFD79',fontSize:16,fontWeight:'900'}}>-</Text>
                </TouchableOpacity>
                <Text style={{color:'white'}}>{index}</Text>
                <TouchableOpacity  style={{borderWidth:1,borderColor:"#EEFD79",borderRadius:5,paddingHorizontal:hp(1)}} onPress={handleIncrease}>
                    <Text style={{color:'#EEFD79',fontSize:16,fontWeight:'900'}}>+</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#3a3939cc',
            borderRadius: 10,
            padding: hp(2),
            width: '100%',
            marginTop: hp(1),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 1,
            }}>
            <Text style={{color: 'white', fontWeight: '400', fontSize: 14}}>
            Infant
            </Text>
            <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                <TouchableOpacity style={{borderWidth:1,borderColor:"#EEFD79",borderRadius:5,paddingHorizontal:hp(1)}} onPress={handleDecrease}>
                    <Text style={{color:'#EEFD79',fontSize:16,fontWeight:'900'}}>-</Text>
                </TouchableOpacity>
                <Text style={{color:'white'}}>{index}</Text>
                <TouchableOpacity  style={{borderWidth:1,borderColor:"#EEFD79",borderRadius:5,paddingHorizontal:hp(1)}} onPress={handleIncrease}>
                    <Text style={{color:'#EEFD79',fontSize:16,fontWeight:'900'}}>+</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
        {/*  */}
        <Text style={{color:'white',fontSize:22,fontWeight:'700',marginTop:hp(1)}}>Itinerary</Text>
        <View style={{    backgroundColor: '#3a3939cc', padding:hp(2),borderRadius:10,marginTop:hp(2)}}>
            <Text style={{color:'white',fontWeight:'700',fontSize:16}}>Day 01</Text>
            <Text style={{marginTop:hp(.7),color:'white'}}>Meeting point : G/F Main Entrance of the Bank Headquarter, in front of the Central Market. </Text>
            <Text style={{marginTop:hp(1),color:'#B8B8B8',paddingRight:hp(3)}}>Activities & Attractions : Central-Md-Levels Escalators </Text>
            <Text style={{marginTop:hp(1),color:'#B8B8B8',paddingRight:hp(3)}}>Activities & Attractions : Tai Kwun - Centre for Heritage and Arts </Text>
        </View>
        <View style={{backgroundColor: '#3a3939cc', padding:hp(2),borderRadius:10,marginTop:hp(2)}}>
            <Text style={{color:'white',fontWeight:'700',fontSize:16}}>Day 02</Text>
            <Text style={{marginTop:hp(.7),color:'white'}}>Meeting point : G/F Main Entrance of the Bank Headquarter, in front of the Central Market. </Text>
            <Text style={{marginTop:hp(1),color:'#B8B8B8',paddingRight:hp(3)}}>Activities & Attractions : Central-Md-Levels Escalators </Text>
            <Text style={{marginTop:hp(1),color:'#B8B8B8',paddingRight:hp(3)}}>Activities & Attractions : Tai Kwun - Centre for Heritage and Arts </Text>
        </View>
      </ScrollView>
      <View style={{backgroundColor:'#3a3939cc',padding:hp(2),borderRadius:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{color:'white',fontWeight:'700',fontSize:17}}>Total(incl. taxes and fees)</Text>
        <Text style={{color:'#EEFD79',fontWeight:'700',fontSize:17}}>$1,200</Text>
      </View>
      <CommonButton title="Pay & Continue" containerStyle={{margin:0,marginVertical:hp(2)}} onPress={()=>naviagtion.navigate("TourConfirmed")}/>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: hp(2),
    marginTop: hp(1),
    backgroundColor: '#3a3939cc',
  },
});
