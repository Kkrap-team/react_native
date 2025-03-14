import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import textTheme from '../../theme/TextTheme';

var width = Dimensions.get('window').width; //full width
const CreateComponent: React.FC = ({ }) => {

    return (
        <View style={styles.container}>
            <Text style={textTheme.noto28_000000_Bold}>저장된 링크들을</Text>
            <Text style={textTheme.noto28_5AB7FC_Bold}>카테고리별</Text>
            <View style={styles.container_text} >
                <Text style={textTheme.noto28_5AB7FC_Bold}>폴더</Text>
                <Text style={textTheme.noto28_000000_Bold}>로 정리해 보세요</Text>
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

export default CreateComponent;
