import React from 'react'
import { FormattedMessage } from 'react-intl'
import Wrapper from './Wrapper'
import messages from './messages'
import mail from '../../../images/correo.jpg'
import github from '../../../images/github.png'
function Footer() {
  return (
    <div className="foot">
      <div className="d-flex border-top align-items-center justify-content-around bg-light">
        <div className="bd-highlight mt-3 mb-5">
          <div className="mb-1 text-secondary">EVENTSFINDER</div>

          <div>
            This website allows you to create events, sign up for them, <br />
            join them as well as see upcoming events and <br />
            access an extensive community of events.
          </div>
        </div>

        <div className="bd-highlight mt-3 mb-5 pb-4 mr-5 pr-5">
          <div className="mb-1 text-secondary">LINK TO THE PROJECT</div>

          <div className="d-flex align-items-center">
            <img
              src={github}
              alt="logoGitHub"
              className="img-responsive img-fluid"
              height="30"
              width="30"
            />

            <a href="https://github.com/SyTW2019/E03" className="ml-1">
              Github's project
            </a>
          </div>
        </div>

        <div className="bd-highlight mt-3 mb-2">
          <div className="mb-1 text-secondary">CONTACT</div>

          <div className="d-flex align-items-center">
            <img
              src={mail}
              alt="logoCorreo"
              className="img-responsive img-fluid ml-1"
              height="15"
              width="15"
            />

            <a href="alu0101061672@ull.edu.es" className="pl-2 small">
              alu0101061672@ull.edu.es
            </a>
          </div>

          <div className="d-flex align-items-center">
            <img
              src={mail}
              alt="logoCorreo"
              className="img-responsive img-fluid ml-1"
              height="15"
              width="15"
            />

            <a href="alu0101029993@ull.edu.es" className="pl-2 small">
              alu0101029993@ull.edu.es
            </a>
          </div>

          <div className="d-flex align-items-center">
            <img
              src={mail}
              alt="logoCorreo"
              className="img-responsive img-fluid ml-1"
              height="15"
              width="15"
            />

            <a href="alu0100954609@ull.edu.es" className="pl-2 small">
              alu0100954609@ull.edu.es
            </a>
          </div>

          <div className="d-flex align-items-center">
            <img
              src={mail}
              alt="logoCorreo"
              className="img-responsive img-fluid ml-1"
              height="15"
              width="15"
            />

            <a href="alu0101028026@ull.edu.es" className="pl-2 small">
              alu0101028026@ull.edu.es
            </a>
          </div>

          <div className="d-flex align-items-center">
            <img
              src={mail}
              alt="logoCorreo"
              className="img-responsive img-fluid ml-1"
              height="15"
              width="15"
            />

            <a href="alu0101045603@ull.edu.es" className="pl-2 small">
              alu0101045603@ull.edu.es
            </a>
          </div>
        </div>
      </div>
    </div>

    // <Wrapper>

    // <section>
    //     <FormattedMessage {...messages.message} />
    // </section>

    // </Wrapper>
  )
}

export default Footer
