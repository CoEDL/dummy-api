import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getAudioFiles,
  getTranscriptionFiles,
  getAdditionalWordFiles,
  getPronunciationDictionary,
  getSettings,
  updateAudioFiles,
  updateTranscriptionFiles,
  updateAdditionalWordFiles,
  updatePronunciationDictionary,
  updateSettings
} from './redux/actions'

class App extends Component {

  render = () => {
    const {
      audioFiles,
      getAudioFiles,
      transcriptionFiles,
      getTranscriptionFiles,
      additionalWordFiles,
      getAdditionalWordFiles,
      pronunciationDictionary,
      getPronunciationDictionary,
      settings,
      getSettings,
      updateAudioFiles,
      updateTranscriptionFiles,
      updateAdditionalWordFiles,
      updatePronunciationDictionary,
      updateSettings,
      response
    } = this.props

    return (
      <div>

        <section>
          <button onClick={getAudioFiles}>get audio files</button>
          <button onClick={() => updateAudioFiles("field-recording.wav")}>update audio file</button>
          {JSON.stringify(audioFiles)}
        </section>

        <section>
          <button onClick={getTranscriptionFiles}>get transcription files</button>
          <button onClick={() => updateTranscriptionFiles("field-recording.eaf")}>update transcription file</button>
          {JSON.stringify(transcriptionFiles)}
        </section>

        <section>
          <button onClick={getAdditionalWordFiles}>get additional word files</button>
          <button onClick={() => updateAdditionalWordFiles("additional-word-file.wav")}>update word file</button>
          {JSON.stringify(additionalWordFiles)}
        </section>

        <section>
          <button onClick={getPronunciationDictionary}>get pron dict file</button>
          <button onClick={() => updatePronunciationDictionary("pron-dict.txt")}>update pron dict</button>
          {JSON.stringify(pronunciationDictionary)}
        </section>

        <section>
          <button onClick={getSettings}>get settings</button>
          <button onClick={() => updateSettings({"someSetting": 123})}>update settings</button>
          {JSON.stringify(settings)}
        </section>

        <section>
          <p>response: {response}</p>
        </section>

      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    response: state.response,
    audioFiles: state.model.audioFiles,
    transcriptionFiles: state.model.transcriptionFiles,
    additionalWordFiles: state.model.additionalWordFiles,
    pronunciationDictionary: state.model.pronunciationDictionary,
    settings: state.model.settings
  }
}
const mapDispatchToProps = dispatch => ({
  getAudioFiles: () => {
    dispatch(getAudioFiles())
  },
  getTranscriptionFiles: () => {
    dispatch(getTranscriptionFiles())
  },
  getAdditionalWordFiles: () => {
    dispatch(getAdditionalWordFiles())
  },
  getPronunciationDictionary: () => {
    dispatch(getPronunciationDictionary())
  },
  getSettings: () => {
    dispatch(getSettings())
  },
  updateAudioFiles: (data) => {
    dispatch(updateAudioFiles(data))
  },
  updateTranscriptionFiles: (data) => {
    dispatch(updateTranscriptionFiles(data))
  },
  updateAdditionalWordFiles: (data) => {
    dispatch(updateAdditionalWordFiles(data))
  },
  updatePronunciationDictionary: (data) => {
    dispatch(updatePronunciationDictionary(data))
  },
  updateSettings: (data) => {
    dispatch(updateSettings(data))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
