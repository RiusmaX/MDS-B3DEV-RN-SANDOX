import { View } from 'react-native'
import styles from '../styles/ResultStyle'
import { Button, List, Text } from '@ui-kitten/components'

function ResultItem ({ item }) {
  let color = 'black'
  if (item.value > 0.95) {
    color = 'green'
  } else if (item.value > 0.90 && item.value <= 0.95) {
    color = 'orange'
  } else if (item.value <= 0.90) {
    color = 'red'
  }
  return (
    <View style={styles.listItem}>
      <Text style={{ color, fontWeight: 'bold' }}>{item.name}</Text>
      <Text style={{ color, fontWeight: 'bold' }}>{(item.value * 100).toFixed(2)}%</Text>
    </View>
  )
}

function Result ({ result, onExit }) {
  const concepts = result?.outputs[0]?.data?.concepts
  return (
    <>
      <List
        style={styles.container}
        data={concepts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ResultItem item={item} />
        )}
        ListHeaderComponent={() => (
          <View style={styles.listItem}>
            <Text style={{ fontWeight: 'bold' }}>Concept</Text>
            <Text style={{ fontWeight: 'bold' }}>Précision</Text>
          </View>
        )}
      />
      <Button onPress={onExit}>Retour</Button>
      {/* <Text>{JSON.stringify(result, null, 2)}</Text> */}
    </>
  )
}

export default Result
