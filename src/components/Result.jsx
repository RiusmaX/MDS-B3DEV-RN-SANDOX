import { ScrollView, Text } from 'react-native'

function Result ({ result }) {
  return (
    <ScrollView style={{ flex: 1 }}>

      <Text>{JSON.stringify(result, null, 2)}</Text>
    </ScrollView>
  )
}

export default Result
