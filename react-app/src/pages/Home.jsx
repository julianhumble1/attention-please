import LLMList from "../components/LLMList/LLMList.jsx";
import Filter from "../components/Filter/Filter.jsx";
import './Home.scss';

const Home = () => {
  return (
      <div className="home">
          <div className="filterBox">
              <Filter/>
          </div>
          <div className="list">
              <LLMList/>
          </div>
    </div>
  )
}
export default Home