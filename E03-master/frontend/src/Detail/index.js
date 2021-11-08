import React, { Component } from 'react'
import { DetailEvent } from '../_components/DetailEvent'

export class Detail extends Component {
  render() {
    return (
      <div>
        <DetailEvent
          title="Concierto de Calamaro"
          src="/images/concierto.jpg"
          fecha="5 de Agosto de 2020"
          desc="Evento musical del año que tendrá lugar en Santa Cruz de Tenerife, en la playa de las Teresitas"
        />
      </div>
    )
  }
}
