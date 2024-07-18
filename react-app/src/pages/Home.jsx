import LLMList from "../components/LLMList/LLMList.jsx";
import Filter from "../components/Filter/Filter.jsx";
import { useEffect, useState } from "react";
import { getModels } from "../utils/llm.service.js";
import './Home.scss';

const Home = () => {


  const [models, setModels] = useState([]);

  useEffect(() => {
    handleGet();    
  }, []);

  const handleGet = async () => {
    const modelRes = await getModels();
    if (modelRes.status === 200) {
      setModels(modelRes.data);
    } else{
      console.log(modelRes);
    }
  };

  return (
      <div className="home">
          <div className="filterBox">
              <Filter/>
          </div>
          <div className="list">
        <LLMList models={models} />
          </div>
    </div>
  )
}
export default Home