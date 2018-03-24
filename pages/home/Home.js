// @flow
import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import { Nav } from '../../components'

type Props = {
  lastUpdate: number,
  light: boolean
}

const mapStateToProps = state => ({})

const Home = (props: Props) => (
  <React.Fragment>
    <style jsx>{`
      .primary-background {
        background-color: #507ce8;
        color: #fff;
        background-image: url('https://anyshortcut.com/static/img/icons-background.svg');
      }
      .navbar > a {
        display: flex;
        align-items: center;
      }
      .title {
        font-size: 20px;
        margin-bottom: 40px;
      }
    `}</style>
    <section className="primary-background">
      <div className="container">
        <Nav />
      </div>
      <section className="section has-text-centered">
        <div className="section">
          <p className="heading has-text-white">Today was quite meaningful.</p>
          <p className="has-text-white title">
            Reading, Watching, Writing and Doing something in your everyday
          </p>
        </div>
      </section>
    </section>
    <section>
      <div className="container">
        <h2 className="section heading has-text-centered">Homepage</h2>
        <div className="section">
          <div className="columns">
            <div className="column">
              <div className="title">Only five important things</div>
              <div className="text">
                It is enough today with five important things to do. You already
                have done a lot of things today.
              </div>
            </div>
            <div className="column">
              <img
                className="image-box border-shadow "
                src="/static/img/shortcut-keyboard.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
)

export default connect(mapStateToProps, null)(Home)
