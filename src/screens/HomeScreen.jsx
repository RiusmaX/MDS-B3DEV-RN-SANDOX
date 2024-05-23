import { View } from 'react-native'
import styles from '../styles/HomeScreenStyle'
import CustomCamera from '../components/camera/Camera'
import { useState } from 'react'
import Result from '../components/Result'

function HomeScreen () {
  const [result, setResult] = useState(null)

  return (
    <View style={styles.container}>
      {
        result
          ? <Result result={result} onExit={() => setResult(null)} />
          : <CustomCamera onResult={setResult} />
      }
    </View>
  )
}

export default HomeScreen
