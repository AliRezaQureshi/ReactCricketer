import React from 'react'
import Card from './components/Card'

const App = () => {
  
    const stats = [
      {
        name: "Virat Kohli",
        testRuns: 8848,
        testFifties: 29,
        testHundreds: 29,
        testWickets: 0,
    
        odiRuns: 13848,
        odiFifties: 72,
        odiHundreds: 50,
        odiWickets: 4,
    
        t20Runs: 4008,
        t20Fifties: 37,
        t20Hundreds: 1,
        t20Wickets: 0,
    
        image: "https://documents.bcci.tv/resizedimageskirti/164_compress.png"
      },
      {
        name: "Rohit Sharma",
        testRuns: 4137,
        testFifties: 16,
        testHundreds: 12,
        testWickets: 2,
    
        odiRuns: 10709,
        odiFifties: 54,
        odiHundreds: 31,
        odiWickets: 9,
    
        t20Runs: 3853,
        t20Fifties: 29,
        t20Hundreds: 4,
        t20Wickets: 1,
    
        image: "https://documents.bcci.tv/resizedimageskirti/107_compress.png"
      },
      {
        name: "KL Rahul",
        testRuns: 2915,
        testFifties: 13,
        testHundreds: 8,
        testWickets: 0,
    
        odiRuns: 2820,
        odiFifties: 20,
        odiHundreds: 7,
        odiWickets: 0,
    
        t20Runs: 2265,
        t20Fifties: 22,
        t20Hundreds: 2,
        t20Wickets: 0,
    
        image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319942.3.png"
      },
      {
        name: "Shubman Gill",
        testRuns: 1464,
        testFifties: 7,
        testHundreds: 4,
        testWickets: 0,
    
        odiRuns: 2271,
        odiFifties: 13,
        odiHundreds: 6,
        odiWickets: 0,
    
        t20Runs: 335,
        t20Fifties: 1,
        t20Hundreds: 1,
        t20Wickets: 0,
    
        image: "https://documents.bcci.tv/resizedimageskirti/3761_compress.png"
      },
      {
        name: "Suryakumar Yadav",
        testRuns: 43,
        testFifties: 0,
        testHundreds: 0,
        testWickets: 0,
    
        odiRuns: 773,
        odiFifties: 4,
        odiHundreds: 0,
        odiWickets: 0,
    
        t20Runs: 2141,
        t20Fifties: 17,
        t20Hundreds: 4,
        t20Wickets: 0,
    
        image: "https://documents.bcci.tv/resizedimageskirti/1212_compress.png"
      },
      {
        name: "Hardik Pandya",
        testRuns: 532,
        testFifties: 4,
        testHundreds: 1,
        testWickets: 17,
    
        odiRuns: 1769,
        odiFifties: 11,
        odiHundreds: 0,
        odiWickets: 84,
    
        t20Runs: 1348,
        t20Fifties: 3,
        t20Hundreds: 0,
        t20Wickets: 73,
    
        image: "https://documents.bcci.tv/resizedimageskirti/2740_compress.png"
      },
      {
        name: "Ravindra Jadeja",
        testRuns: 2987,
        testFifties: 20,
        testHundreds: 3,
        testWickets: 280,
    
        odiRuns: 2756,
        odiFifties: 13,
        odiHundreds: 0,
        odiWickets: 220,
    
        t20Runs: 480,
        t20Fifties: 0,
        t20Hundreds: 0,
        t20Wickets: 51,
    
        image: "https://documents.bcci.tv/resizedimageskirti/9_compress.png"
      },
      {
        name: "Ravichandran Ashwin",
        testRuns: 3309,
        testFifties: 14,
        testHundreds: 5,
        testWickets: 516,
    
        odiRuns: 707,
        odiFifties: 1,
        odiHundreds: 0,
        odiWickets: 151,
    
        t20Runs: 184,
        t20Fifties: 0,
        t20Hundreds: 0,
        t20Wickets: 72,
    
        image: "https://documents.bcci.tv/resizedimageskirti/8_compress.png"
      },
      {
        name: "Jasprit Bumrah",
        testRuns: 65,
        testFifties: 0,
        testHundreds: 0,
        testWickets: 159,
    
        odiRuns: 67,
        odiFifties: 0,
        odiHundreds: 0,
        odiWickets: 149,
    
        t20Runs: 8,
        t20Fifties: 0,
        t20Hundreds: 0,
        t20Wickets: 74,
    
        image: "https://documents.bcci.tv/resizedimageskirti/1124_compress.png"
      },
      {
        name: "Mohammed Shami",
        testRuns: 771,
        testFifties: 2,
        testHundreds: 0,
        testWickets: 229,
    
        odiRuns: 219,
        odiFifties: 0,
        odiHundreds: 0,
        odiWickets: 195,
    
        t20Runs: 0,
        t20Fifties: 0,
        t20Hundreds: 0,
        t20Wickets: 24,
    
        image: "https://media.sportstiger.com/players/MohammedShami22-06-2021-06-30-34.png"
      }
    ];
    
  
  return (
    <div>
      <div className='parent'>
        {stats.map(function(elem, idx){
          return <div key={idx}>
            <Card name={elem.name} testRuns={elem.testRuns} test50={elem.testFifties} test100={elem.testHundreds} testWickets={elem.testWickets} odiRuns={elem.odiRuns} odi50={elem.odiFifties} odi100={elem.odiHundreds} odiWickets={elem.odiWickets} t20Runs={elem.t20Runs} t2050={elem.t20Fifties} t20100={elem.t20Hundreds} t20Wickets={elem.t20Wickets} img={elem.image} />
          </div>
        })}
          
      </div>
    </div>
  )
}

export default App
