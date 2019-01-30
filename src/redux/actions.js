import axios from 'axios'

// Use beeceptor to test API endpoints
const baseUrl = 'https://elpis.free.beeceptor.com'


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
  getNameSuccess: function(data) {
    return { type: 'GET_NAME_SUCCESS', data }
  },
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
  updateNameSuccess: function (data) {
    return { type: 'UPDATE_NAME_SUCCESS', data }
  },
  updateAudioFilesSuccess: function (data) {
    return { type: 'UPDATE_AUDIO_FILES_SUCCESS', data }
  },
  updateTranscriptionFilesSuccess: function (data) {
    return { type: 'UPDATE_TRANSCRIPTION_FILES_SUCCESS', data }
  },
  updateAdditionalWordFilesSuccess: function (data) {
    return { type: 'UPDATE_ADDITIONAL_WORD_FILES_SUCCESS', data }
  },
  updatePronunciationDictionarySuccess: function (data) {
    return { type: 'UPDATE_PRONUNCIATION_DICTIONARY_SUCCESS', data }
  },
  updateSettingsSuccess: function (data) {
    return { type: 'UPDATE_SETTINGS_SUCCESS', data }
  }
}

// Export these actions so they _can_ be used in components

// GET

export const getName = () => {
  const url = baseUrl + '/name'
  return getApi(url, 'getNameSuccess')
}
export const getAudioFiles = () => {
  const url = baseUrl + '/audio-files'
  return getApi(url, 'getAudioFilesSuccess')
}
export const getTranscriptionFiles = () => {
  const url = baseUrl + '/transcription-files'
  return getApi(url, 'getTranscriptionFilesSuccess')
}
export const getAdditionalWordFiles = () => {
  const url = baseUrl + '/additional-word-files'
  return getApi(url, 'getAdditionalWordFilesSuccess')
}
export const getPronunciationDictionary = () => {
  const url = baseUrl + '/pronunciation-dictionary'
  return getApi(url, 'getPronunciationDictionarySuccess')
}
export const getSettings = () => {
  const url = baseUrl + '/settings'
  return getApi(url, 'getSettingsSuccess')
}

// POST
// the postData here is received by the beeceptor endpoint
export const updateName = (postData) => {
  const url = baseUrl + '/name'
  return postApi(url, postData, 'updateNameSuccess')
}
export const updateAudioFiles = (postData) => {
  const url = baseUrl + '/audio-files'
  return postApi(url, postData, 'updateAudioFilesSuccess')
}
export const updateTranscriptionFiles = (postData) => {
  const url = baseUrl + '/transcription-files'
  return postApi(url, postData, 'updateTranscriptionFilesSuccess')
}
export const updateAdditionalWordFiles = (postData) => {
  const url = baseUrl + '/additional-word-files'
  return postApi(url, postData, 'updateAdditionalWordFilesSuccess')
}
export const updatePronunciationDictionary = (postData) => {
  const url = baseUrl + '/pronunciation-dictionary'
  return postApi(url, postData, 'updatePronunciationDictionarySuccess')
}
export const updateSettings = (postData) => {
  const url = baseUrl + '/settings'
  return postApi(url, postData, 'updateSettingsSuccess')
}

