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
            headerStyle: { backgroundColor: COLORS.lightWhite}
           }}
           />
        </SafeAreaView>
    )
}

export default Home;