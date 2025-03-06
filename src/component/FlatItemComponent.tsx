import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinkComponent from './flatItemComponent/LinkComponent';
import CreateComponent from './flatItemComponent/CreateComponent';
import ShareComponent from './flatItemComponent/ShareComponent';
import ChatComponent from './flatItemComponent/ChatComponent';

interface FlatItemComponentProps {
    idx: number;
}

const FlatItemComponent: React.FC<FlatItemComponentProps> = ({ idx }) => {
    switch (idx) {
        case 1:
            return (
                <LinkComponent />
            );
        case 2:
            return (
                <CreateComponent />
            );
        case 3:
            return (
                <ShareComponent />
            );
        case 4:
            return (
                <ChatComponent />
            );
    }
    return (
        <View style={styles.container} />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        // fontFamily: 'NotoSansKR-Light',
        fontFamily: 'NotoSansKR-Bold',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#000',
    },
    inactiveDot: {
        backgroundColor: '#ccc',
    },
});

export default FlatItemComponent;
