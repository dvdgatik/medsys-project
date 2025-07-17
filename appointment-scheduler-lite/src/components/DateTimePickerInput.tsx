import React, { useState } from 'react';
import { View, Text, Pressable, Platform, StyleSheet } from 'react-native';
import { format } from 'date-fns';

type Mode = 'date' | 'time';

interface DateTimePickerInputProps {
    label?: string;
    mode?: Mode;
    value: Date;
    onChange: (date: Date) => void;
    minimumDate?: Date;
    maximumDate?: Date;
}

const DateTimePickerInput: React.FC<DateTimePickerInputProps>  = ({
    label = '',
    mode = 'date',
    value,
    onChange,
    minimumDate,
    maximumDate
}) => {

    const [showPicker, setShowPicker] = useState(false)

    return (

    )
}


export default DateTimePickerInput;


const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
    },
    label: {
        fontSize: 14,
        marginBottom: 4,
        color: '#333',
    },
    input: {
        padding: 12,
        borderRadius: 6,
        backgroundColor: '#f0f0f0',
    },
    text: {
        color: '#000',
        fontSize: 16,
    },
});