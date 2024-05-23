import * as RNFS from '@dr.pogodin/react-native-fs'

const getBase64FromImage = async (fileURI) => {
  try {
    const res = await RNFS.readFile(fileURI, 'base64')
    return res
  } catch (error) {
    console.error(error)
  }
}

export {
  getBase64FromImage
}
