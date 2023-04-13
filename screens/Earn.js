import { StyleSheet, Text, View, Dimensions, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React, {useEffect} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { background } from '../assets/theme/color';
import { BannerAd, BannerAdSize, TestIds, InterstitialAd, AdEventType, RewardedAd, RewardedAdEventType} from 'react-native-google-mobile-ads';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Earn = () => {
  // const rewardedAdId = 'ca-app-pub-3734840884788254/1769092607'
  // const adUnitId =  TestIds.INTERSTITIAL;
  // const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  //   requestNonPersonalizedAdsOnly: true,
  //   // keywords: ['fashion', 'clothing'],
  // });

  // const handleCheckIn=()=>{
  //   const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, ()=>{
  //     interstitial.show();
  //     console.log('Show')
  //   });f
  //   interstitial.load();
  //   console.log('load')
  //   return unsubscribe;
  // }
  const adUnitId =  'ca-app-pub-3734840884788254/1769092607'

  const rewarded = RewardedAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
  });

  useEffect(() => {
    console.log('Called')
    const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
        rewarded.show();
        console.log('No')
    });
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        console.log('User earned reward of ', reward);
      },
    );

    // Start loading the rewarded ad straight away
    rewarded.load();

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.daily_checkin_card} onPress={{}}>
        <AntDesign name='carryout' size={65} color={'#4BD7C2'} />
        <View>
        <Text style={styles.title}>
          Daily Check-In
        </Text>
        <Text>
          Get 20 Coins Daily
        </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.hourly_checkin_card} onPress={()=>{handleCheckIn}}>
        <AntDesign name='carryout' size={65} color={'#4BD7C2'} />
        <View>
        <Text style={styles.title}>
          Hourly Check-In
        </Text>
        <Text>
          Get 20 Coins Daily
        </Text>
        </View>
      </TouchableOpacity>

<View    style={styles.bannerAd}>
      <BannerAd 
      size={BannerAdSize.BANNER}
      unitId={TestIds.BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly:true,
      }}
   
      />
</View>
    </SafeAreaView>
  )
}

export default Earn

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  daily_checkin_card:{
    height:windowHeight*0.15,
    backgroundColor:'#FFF',
    marginTop:windowHeight*0.1,
    marginHorizontal:windowWidth*0.08,
    borderRadius:20,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-evenly',
    paddingHorizontal:windowWidth*0.08
  },
  hourly_checkin_card:{
    height:windowHeight*0.15,
    backgroundColor:'#FFF',
    marginTop:windowHeight*0.03,
    marginHorizontal:windowWidth*0.08,
    borderRadius:20,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-evenly',
    paddingHorizontal:windowWidth*0.08
  },
  dail_img:{
    height:windowHeight*0.1,
    width:windowWidth*0.1
  },
  title:{
    fontSize:22,
    fontWeight:'600'
  },
  bottomBanner: {
    position: "absolute",
    bottom: 0
  },
  bannerAd:{
    flex:1,
    alignSelf:'center',
    justifyContent:'flex-end'
  }
})