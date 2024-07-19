import "./LMMList.scss";
import LLMCard from "../LLMCard/LLMCard.jsx";
import { useEffect, useState } from "react";

const LLMList = ({ models, setInfo, accessFilter, setSortType }) => {
  const [modelsView, setModelsView] = useState([]);

  useEffect(() => {
    const modelCards = models.map((model) => (
      <LLMCard
        key={model._id}
        type={model.type}
        name={model.name}
        organization={model.organization}
        description={model.description}
        created={model.created_date}
        size={model.size}
        modality={model.modality}
        access={model.access}
        license={model.license}
        dependencies={model.dependencies}
        setInfo={setInfo}
        accessFilter={accessFilter}
      />
    ));
    setModelsView(modelCards);
  }, [models, accessFilter]);

  return (
    <div className="LLMListView">
      <h3>Large Language Models</h3>
      <div className="headings">
        <span className="name" onClick={() => setSortType("name")}>
          Name
        </span>
        <span className="modality" onClick={() => setSortType("modality")}>
          Modality
        </span>
        <span className="dateCreated" onClick={() => setSortType("date")}>
          Date Created
        </span>
        <span className="access" onClick={() => setSortType("access")}>
          Access
        </span>
        <span
          className="organization"
          onClick={() => setSortType("organization")}
        >
          Organization
        </span>
      </div>
      <div className="LLMList">{modelsView}</div>
    </div>
  );
};
export default LLMList;
