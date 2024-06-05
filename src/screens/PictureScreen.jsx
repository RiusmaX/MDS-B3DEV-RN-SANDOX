import { Layout } from '@ui-kitten/components'
import { Image } from 'react-native'
import { removeBackground } from '../services/RemoveBgApi'
import { useState } from 'react'

import styles from '../styles/PictureScreenStyle'
import PictureActionButtons from '../components/PictureActionButtons'

function PictureScreen ({ route, navigation }) {
  const [base64, setBase64] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { image } = route.params
  console.log(image)

  const handleRemoveBackground = async () => {
    setIsLoading(true)
    console.log('Removing background')
    const _base64 = await removeBackground(image)
    setBase64(_base64)
    // console.log(base64)
    // console.log(_path)
    // setPath(_path)
    setIsLoading(false)
  }

  const handleRecognize = async () => {

  }

  return (
    <Layout style={styles.container}>
      {
        base64
          ? <Image
              source={{ uri: `data:image/png;base64,${base64}` }}
              style={styles.image}
              width='100%'
              height='auto'
            />
          : <Image
              source={{ uri: image.uri }}
              style={styles.image}
              width='100%'
              height='auto'
            />
      }
      <PictureActionButtons
        handleRecognize={handleRecognize}
        handleRemoveBackground={handleRemoveBackground}
        isLoading={isLoading}
        handleRetakePicture={() => { navigation.goBack() }}
      />
    </Layout>
  )
}

export default PictureScreen
