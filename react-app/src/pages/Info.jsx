import "./Info.scss";

import { getModelById, updateModel } from "../services/llm.service.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Info = ({loggedIn}) => {

  const modelId = useParams().id;
  const [loading, setLoading] = useState(true);

  const [modelInfo, setModelInfo] = useState();

  const [editMode, setEditMode] = useState(false)
  const [descriptionText, setDescriptionText] = useState("")
  const [editSuccess, setEditSuccess] = useState("")

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
        setDescriptionText(modelData.description)
      } catch (e) {
        console.log(e)
        setModelInfo(null)
      } finally {
        setLoading(false)
      }
    }

    fetchModelData();
    
  }, [modelId, editSuccess])

  const switchEditMode = () => {
    if (editMode) {
      setEditMode(false)
    } else {
      setEditMode(true)
      setEditSuccess("")
    }
  }

  const handleSubmit = async () => {
    const token = localStorage.getItem("accessToken")
    const userId = localStorage.getItem("user")
    try {
      const response = await updateModel(
        modelInfo._id,
        token,
        userId,
        modelInfo.type,
        modelInfo.name,
        modelInfo.organization,
        descriptionText,
        modelInfo.created_date,
        modelInfo.size,
        modelInfo.size_int,
        modelInfo.modality,
        modelInfo.access,
        modelInfo.license,
        modelInfo.dependencies
      )
      setEditMode(false)
      setEditSuccess("Description successfully updated!")
    } catch (e) {
      console.log(e)
      setEditSuccess(e.message)
    }
  }


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
            <div className="row">
              <span className="col-auto mb-0 fw-bold">Description</span>
              <div className="col-auto align-middle"> 
                {loggedIn &&
                  <button className="p-0" onClick={switchEditMode}>{editMode && "Cancel Edit"}{!editMode && "Edit"}</button>
                  }
              </div>
            </div>
            {!editMode &&
              <span>{modelInfo.description}</span>
            }
            {editMode && 
              <div className="form">
                <textarea className="form-control" type="text" rows="6" onChange={(e) => setDescriptionText(e.target.value)} value={descriptionText}></textarea>
                <button onClick={() => handleSubmit()}>Submit</button>
              </div>
            }
            {(editSuccess === "Description successfully updated!") && 
              <div className="fs-6 text-success">
                {editSuccess}
              </div>
            }
            {((editSuccess !== "Description successfully updated!") && editSuccess) &&
              <div className="fs-6 text-danger">
                {editSuccess}
              </div>
            }
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
