import React from 'react'
import { connect } from 'react-redux'

class SongDetail extends React.Component {
  render () {
    if (!this.props.song) {
      return <div>Select a song</div>
    }
    return <div>song detail</div>
  }
}

const mapStateToProps = state => {
  return { song: state.selectSong }
}

export default connect(mapStateToProps)(SongDetail)
