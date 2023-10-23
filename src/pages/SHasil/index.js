import { Alert, StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
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
import ViewShot from "react-native-view-shot";
import Share from 'react-native-share';
import Orientation from 'react-native-orientation-locker';
import { ImageBackground } from 'react-native';

export default function TimSetDetail({ navigation, route }) {
    const i = route.params;
    const ref = useRef();

    const isFocused = useIsFocused();
    const [link, setLink] = useState('');

    useEffect(() => {
        ref.current.capture().then(uri => {
            console.log("do something with ", uri);
            setLink(uri);
        });
    }, [])



    return (
        <>
            <ViewShot style={{
                flex: 1,
            }} ref={ref} options={{ fileName: i.kode, format: "png", quality: 1 }}>
                <ImageBackground style={{
                    flex: 1,
                    opacity: 1,
                    backgroundColor: colors.white,
                }}>
                    <View style={{
                        backgroundColor: '#EFF0F4',
                        padding: 20,
                    }}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image source={require('../../assets/logo.png')} style={{
                                width: 50,
                                height: 50,
                                resizeMode: 'contain'
                            }} />
                            <View style={{
                                marginTop: 5,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Icon type='ionicon' name='checkmark-circle' color={colors.success} />
                                <Text style={{
                                    fontFamily: fonts.secondary[800],
                                    left: 5,
                                    fontSize: 20,
                                    color: colors.success
                                }}>Berhasil</Text>
                            </View>
                            <Text style={{
                                marginTop: 5,
                                fontFamily: fonts.secondary[400],
                                fontSize: 15,
                                color: colors.black
                            }}>{i.tanggal} Pukul {i.waktu}</Text>
                        </View>

                    </View>

                    <View style={{
                        padding: 20,
                    }}>
                        <Text style={{
                            marginTop: 10,
                            fontFamily: fonts.secondary[400],
                            fontSize: 15,
                            color: '#73777A'
                        }}>No. Referensi</Text>
                        <Text style={{
                            marginTop: 10,
                            fontFamily: fonts.secondary[400],
                            fontSize: 15,
                            color: colors.black
                        }}>{i.kode}</Text>
                        <Text style={{
                            marginTop: 20,
                            fontFamily: fonts.secondary[400],
                            fontSize: 15,
                            color: '#73777A'
                        }}>Tipe Transaksi</Text>
                        <Text style={{
                            marginTop: 10,
                            fontFamily: fonts.secondary[400],
                            fontSize: 15,
                            color: colors.black
                        }}>Pembayaran</Text>
                        <Text style={{
                            marginTop: 20,
                            fontFamily: fonts.secondary[400],
                            fontSize: 15,
                            color: '#73777A'
                        }}>Jenis Pembayaran</Text>
                        <Text style={{
                            marginTop: 10,
                            fontFamily: fonts.secondary[400],
                            fontSize: 15,
                            color: colors.black
                        }}>{i.pembayaran}</Text>

                        <View style={{
                            borderBottomWidth: 1,
                            marginTop: 20,
                            borderBottomColor: '#D9D9D9'
                        }} />

                        <Text style={{
                            marginTop: 20,
                            fontFamily: fonts.secondary[600],
                            fontSize: 15,
                            color: '#4B2F81'
                        }}>Detail Pembayaran</Text>
                        <View style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Text style={{

                                fontFamily: fonts.secondary[400],
                                fontSize: 15,
                                flex: 1,
                                color: '#73777A'
                            }}>Jenis Pembayaran</Text>
                            <Text style={{

                                fontFamily: fonts.secondary[600],
                                fontSize: 15,
                                color: colors.black
                            }}>{i.biaya}</Text>
                        </View>

                        <View style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Text style={{

                                fontFamily: fonts.secondary[600],
                                fontSize: 15,
                                flex: 1,
                                color: '#73777A'
                            }}>Total</Text>
                            <Text style={{

                                fontFamily: fonts.secondary[600],
                                fontSize: 20,
                                color: colors.black
                            }}>{i.biaya}</Text>
                        </View>

                    </View>


                </ImageBackground>
            </ViewShot>
            <View style={{

                padding: 10,
            }}>

                <MyButton title="Bagikan Resi Pembayaran" warna={colors.black} onPress={() => {
                    Share.open({
                        url: link,
                        title: 'Resi Pembayaran SiDani',
                        message: 'Resi Pembayaran SiDani',

                    }).then(s => {
                        console.log(s)
                    })
                }} />




            </View >
        </>
    )
}

const styles = StyleSheet.create({})