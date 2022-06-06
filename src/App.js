import logo from './logo.svg';
import './App.css';
import Records from './assets/JsonData/videoList.json';
import Video from './components/Video'
function App() {
  return (
    <div className="App">
      {
        Records && Records.map(record => {
          return (
            <>
          
            <div key={record.id}>
              {record.isVisible ? (
                <div className='main'>

                  <div className='center'>
                    
                    <video width="750" height="500" controls >
                      <source src={record.link} type="video/mp4" />
                    
                    </video>

                    {record.caption}
                  </div>



                </div>
              ) : null}
            </div>
            </>
          )
        })
      }
    </div>
  );
}

export default App;
