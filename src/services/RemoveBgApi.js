import ReactNativeBlobUtil from 'react-native-blob-util'

const removeBackground = async (image) => {
  try {
    const resp = await ReactNativeBlobUtil.fetch('POST', process.env.REMOVE_BG_API_URL, {
      'Content-Type': 'multipart/form-data',
      'X-Api-Key': process.env.REMOVE_BG_API_KEY
    }, [
      // append field data from file path
      {
        name: 'image_file',
        filename: image.name,
        data: ReactNativeBlobUtil.wrap(image.path)
      }
    ])
    return resp.base64()
  } catch (error) {
    console.error(error)
  }
}

export {
  removeBackground
}
