import { StyleSheet, Text, View } from "react-native";

export default function Timer ({ timer }) {

    const formattedTime = `${Math.floor( timer / 60).toString().padStart(2,'0')}:${(timer % 60).toString().padStart(2,'0')}`

    return <View style={styles.container}>
        <Text style={styles.time}>{formattedTime}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        padding: 15,
        borderRadius: 15,
        flex: 0.3,
        justifyContent: 'center',
    },
    time: {
        fontSize: 80,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333'
    }
})