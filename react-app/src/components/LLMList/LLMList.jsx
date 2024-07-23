import "./LMMList.scss";
import LLMCard from "../LLMCard/LLMCard.jsx";
import { useEffect, useState } from "react";

const LLMList = ({
  models,
  setSortType,
  accessFilter,
  inputModalityFilter,
  outputModalityFilter,
  nameSearch,
  orgSearch,
}) => {
  const [modelsView, setModelsView] = useState([]);

  useEffect(() => {
    const modelCards = models.map((model) => (
      <LLMCard
        key={model._id}
        id={model._id}
        name={model.name}
        organization={model.organization}
        created={model.created_date}
        inputModality={model.input}
        outputModality={model.output}
        access={model.access}
        accessFilter={accessFilter}
        inputModalityFilter={inputModalityFilter}
        outputModalityFilter={outputModalityFilter}
        nameSearch={nameSearch}
        orgSearch={orgSearch}
      />
    ));
    setModelsView(modelCards);
  }, [models]);

  return (
    <div className="LLMListView">
      <h3>Large Language Models</h3>
      <div className="headings">
        <span className="name" onClick={() => setSortType("name")}>
          Name
        </span>
        <span className="inputModality" onClick={() => setSortType("inputModality")}>
          Input Modality
        </span>
        <span className="outputModality">Output Modality</span>
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
