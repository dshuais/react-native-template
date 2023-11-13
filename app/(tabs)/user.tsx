import { StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Link } from 'expo-router';

export default function User() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />

      <Link href='/screens/detail' asChild>
        <Text style={styles.title}>detail</Text>
      </Link>

      <Link href='https://www.baidu.com' hrefAttrs={{ target: '_blank' }} onPress={(e) => {
        e.preventDefault();
        WebBrowser.openBrowserAsync('https://www.baidu.com')
      }}>
        <Text style={styles.title}>baidu</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
