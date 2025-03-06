import React, { useState } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, Image } from 'react-native';
import textTheme from '../../theme/TextTheme';

var width = Dimensions.get('window').width; //full width
const ShareComponent: React.FC = ({ }) => {

    return (
        <View style={styles.container}>
            <Text style={textTheme.noto28_000000_Bold}>폴더를 공유하고</Text>
            <View style={styles.container_text} >
                <Text style={textTheme.noto28_000000_Bold}>싶은 </Text>
                <Text style={textTheme.noto28_5AB7FC_Bold}>친구를</Text>
            </View>
            <View style={styles.container_text} >
                <Text style={textTheme.noto28_5AB7FC_Bold}>초대</Text>
                <Text style={textTheme.noto28_000000_Bold}>해 보세요</Text>
            </View>

            <View style={styles.container_image}>
                <Image style={styles.sample_image} source={require('../../../assets/image/link_sample.png')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width,
        backgroundColor: '#fff',
        flex: 1,
    },
    container_text: {
        flexDirection: 'row',
    },
    container_image: {
        flex: 1,
        alignSelf: 'center',
        resizeMode: 'contain',
        backgroundColor: '#fff',
    },
    sample_image: {
    },
});

export default ShareComponent;
