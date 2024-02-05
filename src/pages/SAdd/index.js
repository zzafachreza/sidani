import { Alert, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyGap, MyInput, MyPicker } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import DatePicker from 'react-native-datepicker'
import { maskJs } from 'mask-js';
export default function SAdd({ navigation, route }) {

    const [loading, setLoading] = useState(false);

    const [kirim, setKirim] = useState({
        fid_user: route.params.id,
        tanggal: '',
        waktu: '08.00 - 09.00 WIB',
        oleh: 'Wali Sendiri',
        lokasi: 'Masjid Agung Baitul Makmur Meulaboh'
    });




    const sendServer = () => {
        console.log(kirim);
        axios.post(apiURL + '1cek.php', kirim).then(res => {
            console.log(res.data);
            if (res.data == 404) {
                Alert.alert('SiDani', 'Maaf Tanggal dan Waktu sudah terisi, silahkan ganti tanggal atau waktu yang lain');
            } else {

                axios.post(apiURL + '1cek_tanggal.php', {
                    tanggal: kirim.tanggal,
                    waktu: kirim.waktu
                }).then(res => {
                    if (res.data.status == 404) {
                        navigation.navigate('SAddSuami', kirim);
                        showMessage({ type: 'success', message: 'Tanggal dan waktu tersedia !' })
                    } else if (res.data.status == 200) {

                        Alert.alert('MOHON MAAF', 'Untuk tanggal ' + kirim.tanggal + ' dan waktu ' + kirim.waktu + ' ada kegiatan/acara ' + res.data.data.acara)
                    }
                })
            }
        })
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            padding: 10,
        }}>

            <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 30,
                color: colors.primary,
            }}>Booking Tempat</Text>
            <Text style={{
                fontFamily: fonts.secondary[400],
                fontSize: windowWidth / 30,
                color: colors.primary,
                marginBottom: 10,
            }}>{kirim.lokasi}</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <DatePicker
                    style={{ width: '100%' }}
                    date={kirim.tanggal}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            backgroundColor: colors.zavalabs,
                            borderColor: colors.zavalabs,
                            borderRadius: 10,
                            // borderWidth: 1,
                            paddingLeft: 10,
                            color: colors.black,
                            fontSize: 12,
                            fontFamily: fonts.primary[400],

                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {
                        console.log(date);
                        setKirim({
                            ...kirim,
                            tanggal: date
                        });



                    }}
                />
                <Text style={{
                    marginTop: 20,
                    color: colors.black,
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 32,
                }}>
                    Pagi : (setiap hari kecuali Jum'at)
                </Text>
                <Text style={{
                    color: colors.black,
                    fontFamily: fonts.secondary[400],
                    fontSize: windowWidth / 32,
                }}>08.00 - 09.00 WIB</Text>
                <Text style={{
                    color: colors.black,
                    fontFamily: fonts.secondary[400],
                    fontSize: windowWidth / 32,
                }}>09.00 - 10.00 WIB</Text>
                <Text style={{
                    color: colors.black,
                    fontFamily: fonts.secondary[400],
                    fontSize: windowWidth / 32,
                }}>10.00 - 11.00 WIB</Text>
                <Text style={{
                    color: colors.black,
                    fontFamily: fonts.secondary[400],
                    fontSize: windowWidth / 32,
                }}>11.00 - 12.00 WIB</Text>
                <Text style={{
                    marginTop: 20,
                    color: colors.black,
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 32,
                }}>
                    Sore : (setiap hari)
                </Text>
                <Text style={{
                    color: colors.black,
                    fontFamily: fonts.secondary[400],
                    fontSize: windowWidth / 32,
                }}>14.00 - 15.00 WIB</Text>
                <Text style={{
                    color: colors.black,
                    fontFamily: fonts.secondary[400],
                    fontSize: windowWidth / 32,
                }}>15.00 - 16.00 WIB</Text>
                <Text style={{
                    color: colors.black,
                    fontFamily: fonts.secondary[400],
                    fontSize: windowWidth / 32,
                }}>17.00 - 18.00 WIB</Text>
                <MyGap jarak={10} />
                <MyPicker onValueChange={x => {


                    setKirim({
                        ...kirim,
                        waktu: x
                    });

                }} iconname="time" label="Waktu" data={[
                    {
                        label: '08.00 - 09.00 WIB',
                        value: '08.00 - 09.00 WIB'

                    },
                    {
                        label: '09.00 - 10.00 WIB',
                        value: '09.00 - 10.00 WIB'

                    },
                    {
                        label: '10.00 - 11.00 WIB',
                        value: '10.00 - 11.00 WIB'

                    }, {
                        label: '11.00 - 12.00 WIB',
                        value: '11.00 - 12.00 WIB'

                    },
                    {
                        label: '14.00 - 15.00 WIB',
                        value: '14.00 - 15.00 WIB'

                    },
                    {
                        label: '15.00 - 16.00 WIB',
                        value: '15.00 - 16.00 WIB'

                    },
                    {
                        label: '17.00 - 18.00 WIB',
                        value: '17.00 - 18.00 WIB'

                    },

                ]} />
                <MyGap jarak={10} />
                <MyPicker onValueChange={x => {
                    setKirim({
                        ...kirim,
                        oleh: x
                    })
                }} iconname="person" label="Oleh" data={[

                    {
                        label: 'Wali Sendiri',
                        value: 'Wali Sendiri'

                    },
                    {
                        label: 'KUA Kecamatan',
                        value: 'KUA Kecamatan'

                    },
                    {
                        label: 'Lainnya',
                        value: 'Lainnya'

                    }
                ]} />
                <MyGap jarak={20} />
                {!loading && <MyButton onPress={sendServer} title="Selanjutnya" warna={colors.primary} Icons="person-add" />}

                {loading && <ActivityIndicator size="large" color={colors.primary} />
                }
            </ScrollView>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})