import "./Info.scss";

import { getModelById } from "../services/llm.service.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Info = () => {

  const modelId = useParams().id;
  const [loading, setLoading] = useState(true);

  const [modelInfo, setModelInfo] = useState();

  useEffect(() => {

    setLoading(true) 

    const fetchModelData = async () => {
      try {
        const modelData = await getModelById(modelId)
        if (typeof modelData.created_date == "string") {
          modelData.created_date = modelData.created_date.slice(0,10)
        } else {
          modelData.created_date = null
        }
        setModelInfo(modelData)
      } catch (e) {
        console.log(e)
        setModelInfo(null)
      } finally {
        setLoading(false)
      }
    }

    fetchModelData();
    
  }, [modelId])


  return (
    (!loading &&
      <div className="info">
        <h3>{modelInfo.name}</h3>
        <div className="rowOne">
          <div className="infoTitle">
            <span className="infoLabel">Organization</span>
            <span>{modelInfo.organization}</span>
          </div>
          <div className="infoTitle">
            <span className="infoLabel">Date Created</span>
            <span>{modelInfo.created_date}</span>
          </div>
          <div className="infoTitle">
            <span className="infoLabel">Type</span>
            <span>{modelInfo.type}</span>
          </div>
          <div className="infoTitle">
            <span className="infoLabel">Access</span>
            <span>{modelInfo.access}</span>
          </div>
          <div className="infoTitle">
            <span className="infoLabel">License</span>
            <span>{modelInfo.license}</span>
          </div>
        </div>
        <div className="rowTwo">
          <div className="col">
            <h4>Description</h4>
            <span>{modelInfo.description}</span>
          </div>
          <div className="col">
            <span>
              <span className="label">Dependencies:</span> {modelInfo.dependencies.replace("[","").replace("]","")}
            </span>
            <span>
              <span className="label">Size:</span> {modelInfo.size}
            </span>
            <span>
              <span className="label">Input Modality:</span>{" "}
              {modelInfo.input}
            </span>
            <span>
              <span className="label">Output Modality:</span>{" "}
              {modelInfo.output}
            </span>
          </div>
        </div>
      </div>

    )
  );
};
export default Info;
