import {StyleSheet, View, Text} from 'react-native';
import React from "react";

export default function Dashboard() {
    return (
        <View
            style={styles.dashboard}>
            <Text>Dashboard</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    dashboard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
