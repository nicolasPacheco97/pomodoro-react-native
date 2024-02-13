import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"]

export default function Header ({ currentSection, setCurrentSection, setTime }) {

    function handlePress( ind = 0 ){
        let settingTime = 25

        if( ind === 1 ) settingTime = 5
        if( ind === 2 ) settingTime = 15

        setTime(settingTime * 60)
        setCurrentSection(ind)
    }

    return <View style={styles.viewStyle}>
        {options.map((item, index) => {
            return <TouchableOpacity 
            key={index} 
            style={[styles.itemStyle, currentSection !== index && { borderColor: 'transparent' }]} 
            onPress={() => handlePress(index)}>
                <Text style={{ fontWeight: 'bold' }}>{item}</Text>
            </TouchableOpacity>
        })}
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row'
    },

    itemStyle: {
        borderWidth: 3,
        padding: 5,
        width: '33.33%',
        borderRadius: 10,
        alignItems: 'center',
        borderColor: 'white',
        marginVertical: 20,
    }
})