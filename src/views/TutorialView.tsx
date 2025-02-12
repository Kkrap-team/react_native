// views/TutorialView.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet } from 'react-native';

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
            <FlatList
                data={tutorialData}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.page, { width }]}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                )}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
            />
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
        </View>
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

export default TutorialView;
