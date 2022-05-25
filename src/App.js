import { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = 'https://course-api.com/react-tours-project';
  const getTours = async () => {
    setLoading(true);
    const resp = await fetch(url);
    const data = await resp.json();
    setTours(data);
    setLoading(false);
  };
  const removeTour = id => {
    setTours(prev => {
      return prev.filter(tour => tour.id !== id);
    });
  };
  useEffect(() => {
    getTours();
  }, []);
  if (tours.length === 0) {
    return (
      <>
        <main>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => getTours()}>Refresh all tours</button>
        </main>
      </>
    );
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </main>
  );
}

export default App;
