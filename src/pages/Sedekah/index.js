import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { colors, fonts, windowWidth } from '../../utils'
import { Image } from 'react-native'

export default function Sedekah() {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <View style={{
                flex: 1,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={require('../../assets/qr.png')} style={{
                    width: windowWidth,
                    height: windowWidth
                }} />
                <Text style={{
                    textAlign: 'center',
                    fontFamily: fonts.secondary[600],
                    fontSize: 20,
                }}>MESJID AGUNG BAITUL MAKMUR</Text>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})