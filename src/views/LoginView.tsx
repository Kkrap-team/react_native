import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import textTheme from '../theme/TextTheme';

interface LoginViewProps {
  navigation: any;
}

const LoginView: React.FC<LoginViewProps> = ({ navigation }) => {

  const goHome = () => {
    navigation.replace('Home');
  };


  return (
    <View style={styles.container}>
      <View style={styles.container_title}>
        <Text style={textTheme.noto30_000000_Bold}>일상 속 모든 것을</Text>
        <View style={styles.container_text}>
          <Text style={textTheme.noto30_000000_Bold}>스</Text>
          <Text style={textTheme.noto30_5AB7FC_Bold}>크</Text>
          <Text style={textTheme.noto30_000000_Bold}>랩</Text>
        </View>
        <View style={styles.container_text}>
          <Text style={textTheme.noto30_5AB7FC_Bold}>크</Text>
          <Text style={textTheme.noto30_000000_Bold}>크</Text>
          <Text style={textTheme.noto30_5AB7FC_Bold}>랩</Text>
        </View>
      </View>

      <Image source={require('../../assets/image/logo_big.png')} />
      <View style={styles.container_login}>
        <TouchableOpacity onPress={goHome} activeOpacity={0.7}>
          <Image source={require('../../assets/image/kakao.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 113,
    alignItems: 'center',
  },
  container_title: {
    alignSelf: 'flex-start',
  },
  container_text: {
    flexDirection: 'row',
  },
  container_login: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 51,

  },
});

export default LoginView;
