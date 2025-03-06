// views/TutorialView.tsx
import React, { useState } from 'react';
import { View, FlatList, Dimensions, StyleSheet, Button, Image, Text } from 'react-native';
import FlatItemComponent from '../component/FlatItemComponent';
import CustomButton from '../component/CustomButton';
import textTheme from '../theme/TextTheme';

interface TutorialViewProps {
    onComplete: () => void;
}

const { width } = Dimensions.get('window');

const tutorialData = [
    { id: '1', title: 'Welcome to App', description: 'This is tutorial page 1' },
    { id: '2', title: 'Features', description: 'This is tutorial page 2' },
    { id: '3', title: 'Get Started', description: 'This is tutorial page 3' },
    { id: '4', title: 'Enjoy!', description: 'This is tutorial page 4' },
];

const TutorialView: React.FC<TutorialViewProps> = ({ onComplete }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const onViewableItemsChanged = React.useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Image source={require('../../assets/image/logo.png')} />
                <Text style={textTheme.noto14_b3b3b3_Bold}>건너뛰기</Text>
            </View>
            <View style={styles.pageContainer}>
                <FlatList
                    data={tutorialData}
                    style={styles.list}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <FlatItemComponent idx={parseInt(item.id)} />
                    )}
                    onViewableItemsChanged={onViewableItemsChanged}
                    viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
                />
            </View>
            <View style={styles.dotContainer}>
                <Text style={currentIndex === 0 ?
                    [textTheme.noto16_b3b3b3_Bold, styles.textHidden] : textTheme.noto16_b3b3b3_Bold
                }>이전으로</Text>
                <View style={styles.pagination}>
                    {tutorialData.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                currentIndex === index ? styles.activeDot : styles.inactiveDot,
                            ]}
                        />
                    ))}
                </View>
                <Text style={textTheme.noto16_000000_Bold}>다음으로</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 23,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
    },
    pageContainer: {
        flex: 1,
        flexGrow: 1,
        marginTop: 50,
    },
    dotContainer: {
        justifyContent: 'space-between',
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    list: {
        flex: 1,
        paddingHorizontal: 16,
    },
    pagination: {
        marginHorizontal: 54,
        flexDirection: 'row',
    },
    dot: {
        width: 10,
        height: 10,
        alignSelf: 'center',
        marginHorizontal: 12,
        borderRadius: 5,
    },
    activeDot: {
        backgroundColor: '#5AB7FC',
    },
    inactiveDot: {
        backgroundColor: '#B3B3B3',
    },
    textHidden: {
        opacity: 0,
        pointerEvents: 'none',
    },
});

export default TutorialView;
