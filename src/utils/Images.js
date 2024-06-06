import * as RNFS from '@dr.pogodin/react-native-fs'
import ReactNativeBlobUtil from 'react-native-blob-util'

const getBase64FromImage = async (fileURI) => {
  try {
    const res = await RNFS.readFile(fileURI, 'base64')
    return res
  } catch (error) {
    console.error(error)
  }
}

const saveImageToFile = async (base64Data, filePath) => {
  try {
    await ReactNativeBlobUtil.fs.writeFile(filePath, base64Data, 'base64')
    console.log('Image sauvegardée avec succès :', filePath)
  } catch (error) {
    console.error('Erreur lors de la sauvegarde de l\'image :', error)
  }
}

export {
  getBase64FromImage,
  saveImageToFile
}
