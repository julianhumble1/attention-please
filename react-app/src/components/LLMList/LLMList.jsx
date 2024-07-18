import "./LMMList.scss";
import LLMCard from "../LLMCard/LLMCard.jsx";
import { useEffect, useState } from "react";

const LLMList = ({ models, setInfo }) => {
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
      />
    ));
    setModelsView(modelCards);
  }, [models]);

  return (
    <div className="LLMListView">
      <h3>Large Language Models</h3>
      <div className="headings">
        <span className="name">Name</span>
        <span className="modality">Modality</span>
        <span className="dateCreated">Date Created</span>
        <span className="access">Access</span>
        <span className="organization">Organization</span>
      </div>
      <div className="LLMList">{modelsView}</div>
    </div>
  );
};
export default LLMList;
