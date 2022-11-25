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
    const [anggota, setAnggota] = useState([]);
    const ref = useRef();

    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused) {
            getDataAnggota();
        }

    }, [isFocused]);



    const getDataAnggota = () => {
        axios.post(apiURL + '1data_hadir.php', {
            fid_acara: route.params.id_acara
        }).then(res => {
            console.log(res.data);
            setAnggota(res.data);
        })
    }



    return (

        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>

            <View style={{
                padding: 10,
                backgroundColor: colors.primary,
            }}>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 30,
                    color: colors.white,
                    textAlign: 'center'
                }}>{item.acara}</Text>
                <Text style={{
                    fontFamily: fonts.secondary[400],
                    fontSize: windowWidth / 35,
                    color: colors.white,
                    textAlign: 'center'
                }}>{item.tanggal}</Text>

                <MyInput placeholder="cari nama anggota" onChangeText={x => {
                    console.log(x);
                    const filtered = anggota.filter(i => i.nama.toLowerCase().indexOf(x.toLowerCase()) > -1);
                    console.log('filtered', filtered.length);
                    setAnggota(filtered);
                    if (x.length == 0) {
                        getDataAnggota()
                    } else {
                        setAnggota(filtered);
                    }
                }} />
            </View>
            <ScrollView style={{
                flex: 1,
            }}>
                {anggota.map(i => {
                    return (
                        <View style={{
                            margin: 5,
                            borderBottomWidth: 1,
                            borderBottomColor: colors.zavalabs,
                            flexDirection: 'row'
                        }}>
                            <Text style={{
                                flex: 0.5,
                                fontFamily: fonts.secondary[400],
                                fontSize: windowWidth / 30,
                                color: colors.primary,
                            }}>{i.pin} </Text>
                            <View style={{
                                flex: 1,
                            }}>
                                <Text style={{

                                    fontFamily: fonts.secondary[600],
                                    fontSize: windowWidth / 28,
                                    color: colors.black,
                                }}>{i.nama} </Text>
                                <Text style={{

                                    fontFamily: fonts.secondary[600],
                                    fontSize: windowWidth / 28,
                                    color: colors.black,
                                }}>{i.telepon} </Text>
                            </View>
                            {i.status == 'Hadir' && <View>
                                <Text style={{
                                    flex: 0.3,
                                    textAlign: 'center',
                                    fontFamily: fonts.secondary[600],
                                    fontSize: windowWidth / 30,
                                    color: colors.black,
                                    paddingHorizontal: 10,


                                    backgroundColor: colors.success
                                }}>{i.status} </Text>
                            </View>}
                            {i.status != 'Hadir' && <Text style={{
                                flex: 0.3,
                                textAlign: 'center',
                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 30,

                                backgroundColor: colors.white
                            }}></Text>}

                        </View>
                    )
                })}
            </ScrollView>


            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderTopWidth: 2,
                borderTopColor: colors.primary,
                paddingVertical: 20,
            }}>

                <TouchableOpacity onPress={() => navigation.navigate('SAdd', {
                    fid_acara: route.params.id_acara
                })} style={{
                    padding: 10,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 5,
                    borderRadius: 20,
                    backgroundColor: colors.primary,
                }}>
                    <Icon type='ionicon' name='create-outline' color={colors.white} size={windowWidth / 8} />
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 25,
                        color: colors.white,
                        textAlign: 'center'
                    }}>INPUT HADIR</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => {




                }} style={{
                    padding: 10,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 5,
                    borderRadius: 20,
                    backgroundColor: colors.primary,
                }}>
                    <Icon type='ionicon' name='qr-code-outline' color={colors.white} size={windowWidth / 8} />
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 25,
                        color: colors.white,
                        textAlign: 'center'
                    }}>SCAN HADIR</Text>
                </TouchableOpacity>


            </View>









        </SafeAreaView>

    )
}

const styles = StyleSheet.create({})