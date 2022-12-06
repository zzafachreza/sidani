import { Alert, StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import 'intl';
import 'intl/locale-data/jsonp/en';

export default function Home({ navigation }) {

  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      __getTransaction();
    }

  }, [isFocused]);

  const __getTransaction = () => {
    getData('user').then(res => {
      setUser(res);
      axios.post(apiURL + '1data_acara.php').then(x => {
        console.log(x.data);
        setData(x.data);
      })
    })
  }

  const __renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('SCek', item)} style={{
        margin: 5,
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.zavalabs
      }}>

        <View style={{
          flex: 1,
        }}>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 30,
            color: colors.primary,
          }}>{item.acara}</Text>
          <Text style={{
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 28,
            color: colors.black,
          }}>{item.tanggal}</Text>
        </View>

        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Icon type='ionicon' name='search' size={windowWidth / 25} color={colors.primary} />
        </View>
      </TouchableOpacity>
    )
  }


  const filterItems = (key, data) => {
    var query = key.toLowerCase();
    return data.filter(function (item) {
      return item.toLowerCase().indexOf(query) >= 0;
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

      <Image source={require('../../assets/slide.png')} style={{
        width: windowWidth,
        height: 200,
      }} />


      <View style={{
        flex: 1,
        paddingTop: 20,
      }}>
        <View style={{
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
          <TouchableOpacity onPress={() => navigation.navigate('TimList')} style={{
            borderRadius: 10,
            backgroundColor: colors.primary,
            width: windowWidth / 4,
            height: windowHeight / 9,
            padding: 15,
          }}>
            <Image source={require('../../assets/A2.png')} style={{
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
            }}>Khutbah Jum'at</Text>
          </TouchableOpacity>
        </View>
      </View>




      <View style={{
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: colors.primary,
      }}>
        <TouchableOpacity onPress={() => {

          navigation.navigate('STentang')
        }} style={{
          padding: 10,
          width: windowWidth / 2,
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
        <TouchableOpacity onPress={() => Alert.alert('SiDani', 'Apakah kamu yakin akan keluar ?', [
          {
            text: 'Tidak',
            type: 'cancel'
          },
          {
            text: 'Keluar',
            onPress: () => {
              storeData(null);
              navigation.replace('Login')
            }
          }
        ])} style={{
          padding: 10,
          width: windowWidth / 2,
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