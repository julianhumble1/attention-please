import './LMMList.scss';
import LLMCard from "../LLMCard/LLMCard.jsx";
import { useEffect, useState } from "react";

const LLMList = ({ models }) => {

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
      />
    ));
    setModelsView(modelCards);
  },[models]);

  const handleModel = () => {
    
  };
  
  return (
    <div className="LLMList">
      <h3>Large Language Models</h3>
      <div className='headings'>
        <span>Name</span>
        <span>Modality</span>
        <span>Organization</span>
      </div>
      {modelsView}

    </div>
  )
}
export default LLMList