useEffect(() => {
    if (isInView) {
      motionValue.set(valuuseEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, valueuseEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);
, motionValue]);
e)useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);
;import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { fallbackPersonImage, image185, image342 } from '../api/moviedb';
var {width, height} = Dimensions.get('window');

export default function Cast({cast, navigation}) {
  return (
    <View className="my-6">
        <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 15}}
        >
            {
                cast && cast.map((person, index)=>{
                    return (
                        <TouchableOpacity 
                            key={index} 
                            onPress={()=> navigation.navigate('Person', person)} 
                            className="mr-4 items-center">
                            <View 
                                className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                                <Image 
                                    className="rounded-2xl h-24 w-20"
                                    // source={require('../assets/images/castImage1.png')} 
                                    source={{uri: image185(person?.profile_path) || fallbackPersonImage}} 
                                />
                            </View>
                            
                            <Text className="text-white text-xs mt-1">
                                {
                                    person?.character.length>10? person.character.slice(0,10)+'...' : person?.character
                                }
                            </Text>
                            <Text className="text-neutral-400 text-xs">
                                {
                                    person?.original_name.length>10? person.original_name.slice(0,10)+'...' : person?.original_name
                                }
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
            
        </ScrollView>

    </View>
  )
}
import { fallbackPersonImage, image185, image342 } from '../api/moviedb';
var {width, height} = Dimensions.get('window');

export default function Cast({cast, navigation}) {
  return (
    <View className="my-6">
        <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 15}}
        >
            {
                cast && cast.map((person, index)=>{
                    return (
                        <TouchableOpacity 
                            key={index} 
                            onPress={()=> navigation.navigate('Person', person)} 
                            className="mr-4 items-center">
                            <View 
                                className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                                <Image 
                                    className="rounded-2xl h-24 w-20"
                                    // source={require('../assets/images/castImage1.png')} 
                                    source={{uri: image185(person?.profile_path) || fallbackPersonImage}} 
                                />
                            </View>
                            
                            <Text className="text-white text-xs mt-1">
                                {
                                    person?.character.length>10? person.character.slice(0,10)+'...' : person?.character
                                }
                            </Text>
                            <Text className="text-neutral-400 text-xs">
                                {
                                    person?.original_name.length>10? person.original_name.slice(0,10)+'...' : person?.original_name
                                }
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
            
        </ScrollView>

    </View>
  )
}
    }import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { fallbackPersonImage, image185, image342 } from '../api/moviedb';
var {width, height} = Dimensions.get('window');

export default function Cast({cast, navigation}) {
  return (
    <View className="my-6">
        <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 15}}
        >
            {
                cast && cast.map((person, index)=>{
                    return (
                        <TouchableOpacity 
                            key={index} 
                            onPress={()=> navigation.navigate('Person', person)} 
                            className="mr-4 items-center">
                            <View 
                                className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                                <Image 
                                    className="rounded-2xl h-24 w-20"
                                    // source={require('../assets/images/castImage1.png')} 
                                    source={{uri: image185(person?.profile_path) || fallbackPersonImage}} 
                                />
                            </View>
                            
                            <Text className="text-white text-xs mt-1">
                                {
                                    person?.character.length>10? person.character.slice(0,10)+'...' : person?.character
                                }
                            </Text>
                            <Text className="text-neutral-400 text-xs">
                                {
                                    person?.original_name.length>10? person.original_name.slice(0,10)+'...' : person?.original_name
                                }
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
            
        </ScrollView>

    </View>
  )
}
  }, [isInView, value, motionValue]);
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { fallbackPersonImage, image185, image342 } from '../api/moviedb';
var {width, height} = Dimensions.get('window');

export default function Cast({cast, navigation}) {
  return (
    <View className="my-6">
        <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 15}}
        >
            {
                cast && cast.map((person, index)=>{
                    return (
                        <TouchableOpacity 
                            key={index} 
                            onPress={()=> navigation.navigate('Person', person)} 
                            className="mr-4 items-center">
                            <View 
                                className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                                <Image 
                                    className="rounded-2xl h-24 w-20"
                                    // source={require('../assets/images/castImage1.png')} 
                                    source={{uri: image185(person?.profile_path) || fallbackPersonImage}} 
                                />
                            </View>
                            
                            <Text className="text-white text-xs mt-1">
                                {
                                    person?.character.length>10? person.character.slice(0,10)+'...' : person?.character
                                }
                            </Text>
                            <Text className="text-neutral-400 text-xs">
                                {
                                    person?.original_name.length>10? person.original_name.slice(0,10)+'...' : person?.original_name
                                }
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
            
        </ScrollView>

    </View>
  )
}
useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);






















import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skill from "@/components/Skill";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Aditya | About Page</title>
        <meta name="description" content="" />
      </Head>

      <main className="flex w-full flex-col items-start justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 ">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Aditya Palodkar, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 5 months of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-3xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="illusiveZ"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10}  />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                projects completed (Including Personal)
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                Months of experience
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers  />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                 - Aditya Palodkar
                </h2>
              </div>
            </div>
          </div>
          <Skill />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
