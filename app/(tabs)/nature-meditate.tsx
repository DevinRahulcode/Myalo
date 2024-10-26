import AppGradient from '@/components/AppGradient'
import React from 'react'
import { FlatList, ImageBackground, Pressable, Text, View } from 'react-native'
import { MEDITATION_DATA } from '@/constants/MeditationData'
import MEDITATION_IMAGES from '@/constants/meditation-images'
import { LinearGradient } from 'expo-linear-gradient'


function NatureMeditate() {
  return (
    <View className='flex-1'>
        <AppGradient colors={["#0076CE","#87CEFA","#766e67"]}>
       <View className='mb-6' >
       <Text className='text-gray-200 mb-3 font-bold text-4xl text-left'>Welcome to Myalo</Text>

       <Text className='text-indigo-100 text-xl font-medium'>Start your meditation practice today</Text>
       </View>
       <View>

       <FlatList 
        data={MEDITATION_DATA}
        className='mb-20'
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) =>(
            <Pressable
             onPress={() => console.log('press')}
            className='h-48 my-3 rounded-md overflow-hidden'>

                <ImageBackground
                source={MEDITATION_IMAGES[item.id - 1]}
                resizeMode="cover"
                className="flex-1 rounded-lg justify-center">
                    <LinearGradient colors={["transparent", "rgba(0,0,0,0.8)"]}
                     className='flex-1 justify-center items-center'>
                    <Text className='text-gray-100 text-3xl font-bold text-center'>{item.title}</Text>
                    </LinearGradient>

                </ImageBackground>
            </Pressable>
  )}
/>
       
       </View>
        </AppGradient>

        
        
    </View>
  )
}

export default NatureMeditate
