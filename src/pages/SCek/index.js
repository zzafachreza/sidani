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
export default function SCek({ navigation, route }) {
    const item = route.params;
    const [data, setData] = useState([]);

    const ref = useRef();

    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused) {
            getDataTransaction();
        }

    }, [isFocused]);



    const getDataTransaction = () => {
        getData('user').then(u => {
            axios.post(apiURL + '1data_nikah.php', {
                fid_user: u.id
            }).then(res => {
                console.log(res.data);
                setData(res.data);
            })
        })
    }



    return (

        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>

            <ScrollView showsVerticalScrollIndicator={false}>
                {data.map(i => {
                    return (
                        <View style={{
                            padding: 10,
                            margin: 10,
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: colors.primary,
                        }} >
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <View style={{
                                    flex: 1,
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>{i.tanggal}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>{i.waktu}</Text>
                                </View>

                                <View style={{

                                }}>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 30,
                                        color: colors.black,
                                    }}>{i.biaya}</Text>

                                    <Text style={{
                                        fontFamily: fonts.secondary[800],
                                        fontSize: windowWidth / 35,
                                        color: colors.secondary,
                                        textAlign: 'right'
                                    }}>{i.pembayaran}</Text>

                                </View>
                            </View>

                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <View style={{
                                    flex: 1,
                                    marginRight: 2,
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                        backgroundColor: colors.primary,
                                        paddingVertical: 10,
                                        textAlign: 'center'
                                    }}>SUAMI</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>Nama</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>{i.suami_nama}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>TTL</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>{i.suami_tempat_lahir}, {i.suami_tanggal_lahir}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>Pekerjaan</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>{i.suami_pekerjaan}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>Telepon</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>{i.suami_telepon}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>Alamat</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>{i.suami_alamat}</Text>
                                </View>

                                <View style={{
                                    flex: 1,
                                    marginLeft: 2,
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                        backgroundColor: colors.primary,
                                        paddingVertical: 10,
                                        textAlign: 'center'
                                    }}>ISTRI</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>Nama</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>{i.istri_nama}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>TTL</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>{i.istri_tempat_lahir}, {i.istri_tanggal_lahir}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>Pekerjaan</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>{i.istri_pekerjaan}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>Telepon</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>{i.istri_telepon}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>Alamat</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: windowWidth / 38,
                                        color: colors.black,
                                    }}>{i.istri_alamat}</Text>

                                </View>


                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('TimSetDetail', i)} style={{
                                marginVertical: 10,
                                borderRadius: 10,
                                backgroundColor: colors.black,
                                padding: 10,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontFamily: fonts.secondary[600],
                                    fontSize: windowWidth / 30,
                                    color: colors.white,
                                }}>Detail</Text>
                            </TouchableOpacity>

                        </View>
                    )
                })}
            </ScrollView>


        </SafeAreaView>

    )
}

const styles = StyleSheet.create({})