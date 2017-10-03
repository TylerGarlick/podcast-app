import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Podcasts extends Component {

  render() {
    return (
      <div>
        <h1>Podcasts</h1>
      </div>
    )
  }

}


Podcasts.propTypes = {
  podcasts: PropTypes.array
}

export default Podcasts