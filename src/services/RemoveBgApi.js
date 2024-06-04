import ReactNativeBlobUtil from 'react-native-blob-util'

const API_KEY = '9TLto7ZPxUouWQE9FhrUMzwe'

const removeBackground = async (image) => {
  try {
    const resp = await ReactNativeBlobUtil.fetch('POST', 'https://api.remove.bg/v1.0/removebg', {
      'Content-Type': 'multipart/form-data',
      'X-Api-Key': API_KEY
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
