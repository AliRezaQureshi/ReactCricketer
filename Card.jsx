import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className='card'>
              <div className='top'>
                  <img src={props.img} alt="" />
              </div>
              <div className='center'>
                  <h2>{props.name}</h2>
                  <p>🇮🇳</p>

              </div>
              <div className='bottom'>
                  <div className='data'>
                      <div className='test'>
                        <h3>Test</h3>
                        <div className='runs'>
                          <h3>Runs: {props.testRuns}</h3>
                        </div>
                        <div className='stats'>
                          <div className='fifty'>
                            <h5>50</h5>
                            <h6>{props.test50}</h6>
                          </div>
                          <div className='cent'>
                            <h5>100</h5>
                            <h6>{props.test100}</h6>
                          </div>
                          <div className='wickets'>
                            <h5>wkt</h5>
                            <h6>{props.testWickets}</h6>
                          </div>
                        </div>
                      </div>
                      <div className='odi'>
                      <h3>ODI</h3>
                        <div className='runs'>
                          <h3>Runs: {props.odiRuns}</h3>
                        </div>
                        <div className='stats'>
                          <div className='fifty'>
                            <h5>50</h5>
                            <h6>{props.odi50}</h6>
                          </div>
                          <div className='cent'>
                            <h5>100</h5>
                            <h6>{props.odi100}</h6>
                          </div>
                          <div className='wickets'>
                            <h5>wkt</h5>
                            <h6>{props.odiWickets}</h6>
                          </div>
                        </div>
                      </div>
                      <div className='t20'>
                      <h3>T20</h3>
                        <div className='runs'>
                          <h3>Runs: {props.t20Runs}</h3>
                        </div>
                        <div className='stats'>
                          <div className='fifty'>
                            <h5>50</h5>
                            <h6>{props.t2050}</h6>
                          </div>
                          <div className='cent'>
                            <h5>100</h5>
                            <h6>{props.t20100}</h6>
                          </div>
                          <div className='wickets'>
                            <h5>wkts</h5>
                            <h6>{props.t20Wickets}</h6>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Card
