import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Reviews from './components/Reviews';

function App() {
  const [reviewList, setReviewList] = useState([]);
  return (
    <div className="App">
      <Header />
      <Reviews reviewList={reviewList} setReviewList={setReviewList} />
    </div>
  );
}

export default App;
