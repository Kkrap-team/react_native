import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    GestureResponderEvent,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native';

interface CustomButtonProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    style,
    textStyle,
}) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00D6B2',
        borderRadius: 10,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
});

export default CustomButton;
