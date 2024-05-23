import { FlatList, ScrollView, Text, View } from 'react-native'
import styles from '../styles/ResultStyle'

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

function Result ({ result }) {
  const concepts = result?.outputs[0]?.data?.concepts
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={concepts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ResultItem item={item} />
        )}
      />
      {/* <Text>{JSON.stringify(result, null, 2)}</Text> */}
    </ScrollView>
  )
}

export default Result
