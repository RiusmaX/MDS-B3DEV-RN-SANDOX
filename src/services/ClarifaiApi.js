import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.clarifai.com/v2',
  headers: {
    Authorization: 'Key 3544b8c405714f1989cba3dce98c7b94',
    'Content-Type': 'application/json'
  }
})

const identifyImage = async (imageBase64) => {
  try {
    const res = await api.post('/users/clarifai/apps/main/models/general-image-recognition/versions/aa7f35c01e0642fda5cf400f543e7c40/outputs', {
      inputs: [
        {
          data: {
            image: {
              base64: imageBase64
            }
          }
        }
      ]
    })
    // console.log(JSON.stringify(res.data, null, 2))
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export {
  identifyImage
}
