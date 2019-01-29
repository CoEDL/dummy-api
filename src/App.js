import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getAudioFiles,
  getTranscriptionFiles,
  getAdditionalWordFiles,
  getPronunciationDictionary,
  getSettings,
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
      updateSettings,
      response
    } = this.props

    return (
      <div>

        <section>
          <button onClick={getAudioFiles}>get audio files</button>
          {JSON.stringify(audioFiles)}
        </section>

        <section>
          <button onClick={getTranscriptionFiles}>get transcription files</button>
          {JSON.stringify(transcriptionFiles)}
        </section>

        <section>
          <button onClick={getAdditionalWordFiles}>get additional word files</button>
          {JSON.stringify(additionalWordFiles)}
        </section>

        <section>
          <button onClick={getPronunciationDictionary}>get pron dict file</button>
          {JSON.stringify(pronunciationDictionary)}
        </section>

        <section>
          <button onClick={getSettings}>get settings</button>
          {JSON.stringify(settings)}
          <button onClick={() => updateSettings({"someSetting": 123})}>POST settings</button>
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
  updateSettings: (data) => {
    dispatch(updateSettings(data))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
