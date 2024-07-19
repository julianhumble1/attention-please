import LLMList from "../components/LLMList/LLMList.jsx";
import Filter from "../components/Filter/Filter.jsx";
import { useEffect, useState } from "react";
import { getModels } from "../utils/llm.service.js";
import "./Home.scss";

const Home = ({ setInfo }) => {
  const [models, setModels] = useState([]);
  const [accessFilter, setAccessFilter] = useState("all");
  const [sortType, setSortType] = useState("name");

  useEffect(() => {
    handleGet(sortType);
  }, [sortType]);

  const handleGet = async (sortType) => {
    const modelRes = await getModels();
    if (modelRes.status === 200) {
      let sortedModels;
      console.log(modelRes.data);
      if (sortType === "name") {
        sortedModels = modelRes.data.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
        });
      }
      setModels(sortedModels);
    } else {
      console.log(modelRes);
    }
  };

  const handleAccessFilter = (access) => {
    setAccessFilter(access);
  };

  return (
    <div className="home">
      <div className="filterBox">
        <Filter handleAccessFilter={handleAccessFilter} />
      </div>
      <div className="list">
        <LLMList
          models={models}
          setInfo={setInfo}
          accessFilter={accessFilter}
          setSortType={setSortType}
        />
      </div>
    </div>
  );
};
export default Home;
