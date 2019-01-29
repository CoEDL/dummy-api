import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAudioFiles, getTranscriptionFiles } from './redux/actions'

class App extends Component {

  // inputHandler = event => {
  //   const { updateMyName } = this.props
  //   updateMyName(event.target.value)
  // }

  // getTranscriptionFilesHandler = () => {
  //   const { getTranscriptionFiles } = this.props
  //   getTranscriptionFiles()
  // }

  render = () => {
    const {
      audioFiles,
      getAudioFiles,
      transcriptionFiles,
      getTranscriptionFiles
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

      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    name: state.model.name,
    audioFiles: state.model.audioFiles,
    transcriptionFiles: state.model.transcriptionFiles
  }
}
const mapDispatchToProps = dispatch => ({
  getAudioFiles: () => {
    dispatch(getAudioFiles())
  },
  getTranscriptionFiles: () => {
    dispatch(getTranscriptionFiles())
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
