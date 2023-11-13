/*
 * @Author: dushuai
 * @Date: 2023-11-13 17:20:32
 * @LastEditors: dushuai
 * @LastEditTime: 2023-11-13 17:23:27
 * @description: Detail
 */
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Stack } from 'expo-router'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const Detail = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{
        title: 'Detail',
        headerShadowVisible: false,
        headerStyle: { backgroundColor: 'red' },
        // headerLeft: () => <TabBarIcon name="bars" color="white" />,
      }} />

      <View>
        <Text style={styles.text}>Detail view test</Text>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'SpaceMono',
    color: '#fff',
  }
})

export default Detail