import { Button, Text, View } from 'react-native'
import styles from '../styles/HomeScreenStyle'

function HomeScreen ({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Profile')
  }

  return (
    <View style={styles.container}>
      <Text>HOME SCREEN</Text>
      <Button
        title='Go to profile'
        onPress={handlePress}
      />
    </View>
  )
}

export default HomeScreen
