import { Alert, StyleSheet, Text, View, Image, FlatList, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyGap, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import 'intl';
import 'intl/locale-data/jsonp/en';
import MyCarouser from '../../components/MyCarouser';

export default function Home({ navigation }) {

  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  const [slider, setSlider] = useState({});
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      __getTransaction();
      __getSlider();
    }

  }, [isFocused]);

  const __getSlider = async () => {

    axios.post(apiURL + '1slider.php').then(zz => {
      setSlider(zz.data);
    })

  }

  const __getTransaction = () => {
    getData('user').then(res => {
      setUser(res);
      axios.post(apiURL + '1data_acara.php').then(x => {
        // console.log(x.data);
        setData(x.data);
      })
    })
  }



  return (

    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white,
    }}>
      {/* header */}
      <View style={{
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 20,
      }}>

        <View style={{
          flexDirection: 'row',
        }}>
          <View style={{
            flex: 1,
          }}>
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: windowWidth / 28,
              color: colors.white
            }}>Selamat datang, {user.nama_lengkap}</Text>
            <Text style={{
              fontFamily: fonts.secondary[600],
              fontSize: windowWidth / 28,
              color: colors.white
            }}>SI Dani</Text>
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: windowWidth / 35,
              color: colors.white
            }}>Sistem Informasi Pendaftaran Nikah</Text>
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: windowWidth / 35,
              color: colors.white
            }}>Masjid Agung Baitul Makmur</Text>
          </View>

          <View>
            <Image source={require('../../assets/logo.png')} style={{
              width: 80,
              height: 80,
              resizeMode: 'contain'
            }} />
          </View>
        </View>


      </View>

      {/* <Image source={{
        uri: 'https://sidani.zavalabs.com/' + slider.foto
      }} style={{
        width: windowWidth,
        height: 200,
      }} /> */}



      <ImageBackground source={require('../../assets/bck.png')} style={{
        flex: 1,
        paddingTop: 0,
      }}>

        <MyCarouser />

        <View style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('SAdd', user)} style={{
            backgroundColor: colors.primary,
            width: windowWidth / 4,
            height: windowHeight / 9,
            padding: 15,
            borderRadius: 10,
          }}>
            <Image source={require('../../assets/A1.png')} style={{
              width: windowWidth / 5,
              height: windowHeight / 20,
              resizeMode: 'contain'
            }} />
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: windowWidth / 38,
              color: colors.white,
              textAlign: 'center',
              marginTop: '2%'
            }}>Daftar Nikah</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('KhutbahNikah')} style={{
            borderRadius: 10,
            backgroundColor: colors.primary,
            width: windowWidth / 4,
            height: windowHeight / 9,
            padding: 15,
          }}>
            <Image source={require('../../assets/A4.png')} style={{
              width: windowWidth / 5,
              height: windowHeight / 20,
              resizeMode: 'contain'
            }} />
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: windowWidth / 38,
              color: colors.white,
              textAlign: 'center',
              marginTop: '2%'
            }}>Khutbah Nikah</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Sedekah')} style={{
            backgroundColor: colors.primary,
            width: windowWidth / 4,
            height: windowHeight / 9,
            padding: 15,
            borderRadius: 10,
          }}>
            <Image source={require('../../assets/A3.png')} style={{
              width: windowWidth / 5,
              height: windowHeight / 20,
              resizeMode: 'contain'
            }} />
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: windowWidth / 38,
              color: colors.white,
              textAlign: 'center',
              marginTop: '2%'
            }}>Sedekah</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>




      <View style={{
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: colors.primary,
      }}>
        <TouchableOpacity onPress={() => {

          navigation.navigate('STentang')
        }} style={{
          padding: 10,
          width: windowWidth / 3,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Icon color={colors.primary} type='ionicon' name='person-outline' />
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 38,
            color: colors.primary,
          }}>Akun</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {

          navigation.navigate('SCek')
        }} style={{
          padding: 10,
          width: windowWidth / 3,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Icon color={colors.primary} type='ionicon' name='newspaper-outline' />
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 38,
            color: colors.primary,
          }}>Riwayat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('SiDani', 'Apakah kamu yakin akan keluar ?', [
          {
            text: 'Tidak',
            type: 'cancel'
          },
          {
            text: 'Keluar',
            onPress: () => {
              storeData('user', null);
              navigation.replace('Login')
            }
          }
        ])} style={{
          padding: 10,
          width: windowWidth / 3,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Icon color={colors.primary} type='ionicon' name='log-out-outline' />
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 38,
            color: colors.primary,
          }}>Keluar</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView >

  )
}

const styles = StyleSheet.create({
  judul: {
    fontFamily: fonts.secondary[600],
    fontSize: windowWidth / 35
  },
  item: {
    fontFamily: fonts.secondary[400],
    fontSize: windowWidth / 35
  }
})