import {StyleSheet, View, Text} from 'react-native';
import React from "react";

export default function Upload() {
    return (
        <View
            style={styles.upload}>
            <Text>Upload</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    upload: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
