import React, { Component } from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import { assets } from '../../_helpers/assets'

export class DetailEvent extends Component {
  render() {
    const { title, src, fecha, desc } = this.props
    return (
      <div>
        <CardMedia
          component="img"
          alt="Concierto"
          height="140"
          image={assets(src)}
          title={title}
        />
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{fecha}</p>
            </div>
          </div>

          <div className="content">{desc}</div>
        </div>
      </div>
    )
  }
}
