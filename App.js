import { useEffect, useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer';

const colors = ['#F7DC6F', '#A2D9CE', '#D7BDE2']

export default function App() {
  const [ isWorking, setIsWorking ] = useState(false)
  const [ time, setTime ] = useState(25*60)
  const [ currentSection, setCuerrentSection ] = useState("POMO" | "SHORT" | "BREAK")

  function handlePressStartStop () {
    setIsWorking( prev => !prev)
  }

  useEffect(() => {
    let interval = null

    if(isWorking) {
      interval = setInterval(() => {
        setTime(time - 1)
      }, 1000)
    }else clearInterval(interval)

    if( time === 0 ) {
      setIsWorking(false)
      setTime(isWorking ? 300 : 1500)
    }
    
    return () => clearInterval(interval)
  },[ isWorking, time ])

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors[currentSection] }]}>
      <View style={[styles.view, styles.container]}>
        <Text style={styles.text}>Pomodoro</Text>
        <Header 
        currentSection={currentSection} 
        setCurrentSection={setCuerrentSection}
        setTime={setTime}
        ></Header>
        <Timer timer={time}/>
        <TouchableOpacity style={styles.button} onPress={handlePressStartStop}>
          <Text style={styles.buttonItem}>{!isWorking ? 'START' : 'STOP'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    paddingTop: Platform.OS === 'android' && 30,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#333',
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    alignItems: 'center'
  },
  buttonItem: {
    color: 'white',
    fontWeight: 'bold'
  }
});
