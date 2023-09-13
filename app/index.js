import { View, Text, ScrollView, SafeAreaView} from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from "../components";
//* view is like a fragment or div
//* Text is like using a P tag

const Home = () => {
    const router = useRouter();



    return (
     <SafeAreaView styles={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen 
           options={{
            headerStyle: { backgroundColor: COLORS.lightWhite},
            headerShadowVisible: false,
            headerLeft: ()=>(
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            ),
            headerRight: () => (
                <ScreenHeaderBtn iconUrl={images.profile} dimension="85%"/>
            ),
            headerTitle: ''
           }}
           />

        <ScrollView showsHorizontalScrollIndicator={false}>
            <View
            style={{
                flex: 1,
                padding: SIZES.medium
            }}
            >
            <Welcome />
             <Popularjobs />
             <Nearbyjobs />
            </View>
    </ScrollView>
    </SafeAreaView>
    )
}

export default Home;