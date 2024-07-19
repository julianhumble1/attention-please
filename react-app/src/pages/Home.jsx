import LLMList from "../components/LLMList/LLMList.jsx";
import Filter from "../components/Filter/Filter.jsx";
import { useEffect, useState } from "react";
import { getModels } from "../utils/llm.service.js";
import "./Home.scss";

const Home = ({  }) => {
  const [models, setModels] = useState([]);
  const [accessFilter, setAccessFilter] = useState("all");
  const [sortType, setSortType] = useState("name");

  useEffect(() => {
    handleGet(sortType);
  }, [sortType, accessFilter]);

  const handleGet = async (sortType) => {
    const modelRes = await getModels();
    if (modelRes.status === 200) {
      let sortedModels;
      if (sortType === "name") {
        sortedModels = modelRes.data.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
        });
      }
      if (sortType === "modality") {
        sortedModels = modelRes.data.sort((a, b) => {
          if (a.modality < b.modality) return -1;
          if (a.modality > b.modality) return 1;
        });
      }
      if (sortType === "date") {
        sortedModels = modelRes.data.sort((a, b) => {
          if (a.created_date < b.created_date) return -1;
          if (a.created_date > b.created_date) return 1;
        });
      }
      if (sortType === "access") {
        sortedModels = modelRes.data.sort((a, b) => {
          if (a.access < b.access) return -1;
          if (a.access > b.access) return 1;
        });
      }
      if (sortType === "organization") {
        sortedModels = modelRes.data.sort((a, b) => {
          if (a.organization < b.organization) return -1;
          if (a.organization > b.organization) return 1;
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
          // setInfo={setInfo}
          accessFilter={accessFilter}
          setSortType={setSortType}
        />
      </div>
    </div>
  );
};
export default Home;
