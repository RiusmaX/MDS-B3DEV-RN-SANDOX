import { Button, Layout, Text } from '@ui-kitten/components'
import { Image, View } from 'react-native'
import { removeBackground } from '../services/RemoveBgApi'
import { useState } from 'react'

function PictureScreen ({ route }) {
  const [base64, setBase64] = useState(null)
  const { image } = route.params
  console.log(image)

  const handleRemoveBackground = async () => {
    console.log('Removing background')
    const _base64 = await removeBackground(image)
    setBase64(_base64)
    // console.log(base64)
    // console.log(_path)
    // setPath(_path)
  }

  return (
    <Layout style={{ flex: 1, justifyContent: 'center' }}>
      {
        base64
          ? <Image
              source={{ uri: `data:image/png;base64,${base64}` }}
              style={{ flex: 4, width: '100%', height: '100%' }}
              width='100%'
              height='auto'
            />
          : <Image
              source={{ uri: image.uri }}
              style={{ flex: 4, width: '100%', height: '100%' }}
              width='100%'
              height='auto'
            />
      }

      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
        <Button onPress={handleRemoveBackground}>Retirer le fond</Button>
        <Button>Reconnaître</Button>
      </View>
    </Layout>
  )
}

export default PictureScreen
