const sanitizeClarifaiResponse = (response) => {
  const str = response?.outputs[0]?.data?.text?.raw?.replace(/(\r\n|\n|\r)/gm, '').replace('```json', '').replace('```', '')
  return JSON.parse(str)
}

export {
  sanitizeClarifaiResponse
}
