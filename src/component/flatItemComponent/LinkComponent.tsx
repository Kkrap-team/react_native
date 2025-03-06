import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Dimensions } from 'react-native';
import textTheme from '../../theme/TextTheme';

var width = Dimensions.get('window').width; //full width
const LinkComponent: React.FC = ({ }) => {

    return (
        <View style={styles.container}>
            <View style={styles.container_text}>
                <Text style={textTheme.noto28_000000_Bold}>저장하고 싶은</Text>
                <View style={styles.container_row}>
                    <Text style={textTheme.noto28_5AB7FC_Bold}>링크</Text>
                    <Image style={styles.image} source={require('../../../assets/image/link.png')} />
                    <Text style={textTheme.noto28_000000_Bold}>를</Text>
                </View>
                <Text style={textTheme.noto28_000000_Bold}>모두 불러오세요</Text>
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
        flex: 1,
    },
    container_text: {
        margin: 0,
        padding: 0,
        marginVertical: 0,
        paddingVertical: 0,
        lineHeight: 26,
    },
    container_image: {
        flex: 1,
        alignSelf: 'center',
        resizeMode: 'contain',
        backgroundColor: '#fff',
    },
    container_row: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image: {
        width: 24,
        height: 24,
    },
    sample_image: {
    },
});

export default LinkComponent;
