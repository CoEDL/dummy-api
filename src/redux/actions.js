import axios from 'axios'

// Use beeceptor to test API endpoints
const baseUrl = 'https://elpis.free.beeceptor.com/'


const getApi = (url, successFunction) => {
  return dispatch => {
    axios.get(url)
      .then(function(resp) {
        dispatch(successHandler[successFunction](resp.data))
      })
      // add error actions
  }
}

const postApi = (url, postData, successFunction) => {
  return dispatch => {
    axios.post(url, postData)
      .then(function(resp) {
        dispatch(successHandler[successFunction](resp))
      })
      // add error actions
  }
}


// Lets bundle these 'success' actions into an object
// So we can dynamically call them from out API actions
// They don't need to be used directly in components

var successHandler={
  getAudioFilesSuccess: function(data) {
    return { type: 'GET_AUDIO_FILES_SUCCESS', data }
  },
  getTranscriptionFilesSuccess: function (data) {
    return { type: 'GET_TRANSCRIPTION_FILES_SUCCESS', data }
  },
  getAdditionalWordFilesSuccess: function (data) {
    return { type: 'GET_ADDITIONAL_WORD_FILES_SUCCESS', data }
  },
  getPronunciationDictionarySuccess: function (data) {
    return { type: 'GET_PRONUNCIATION_DICTIONARY_SUCCESS', data }
  },
  getSettingsSuccess: function (data) {
    return { type: 'GET_SETTINGS_SUCCESS', data }
  },
  updateSettingsSuccess: function (data) {
    console.log(data)
    return { type: 'UPDATE_SETTINGS_SUCCESS', data }
  }
}

// Export these actions so they _can_ be used in components

export const getAudioFiles = () => {
  const url = baseUrl + 'audio-files'
  return getApi(url, 'getAudioFilesSuccess')
}
export const getTranscriptionFiles = () => {
  const url = baseUrl + 'transcription-files'
  return getApi(url, 'getTranscriptionFilesSuccess')
}
export const getAdditionalWordFiles = () => {
  const url = baseUrl + 'additional-word-files'
  return getApi(url, 'getAdditionalWordFilesSuccess')
}
export const getPronunciationDictionary = () => {
  const url = baseUrl + 'pronunciation-dictionary'
  return getApi(url, 'getPronunciationDictionarySuccess')
}
export const getSettings = () => {
  const url = baseUrl + 'settings'
  return getApi(url, 'getSettingsSuccess')
}


export const updateSettings = (postData) => {
  const url = baseUrl + 'settings'
  return postApi(url, postData, 'updateSettingsSuccess')
}

