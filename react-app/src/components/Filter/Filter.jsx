import "./Filter.scss";
import { useState } from "react";

const Filter = ({
  handleAccessFilter,
  setInputModalityFilter,
  setOutputModalityFilter,
  handleNameSearch,
  handleOrgSearch,
}) => {
  const [all, setAll] = useState("active");
  const [open, setOpen] = useState("");
  const [limited, setLimited] = useState("");
  const [closed, setClosed] = useState("");

  const [allInputMod, setAllInputMod] = useState("active");
  const [inputText, setInputText] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [inputImage, setInputImage] = useState("");
  const [inputAudio, setInputAudio] = useState("");
  const [inputVideo, setInputVideo] = useState("");

  const [allOutputMod, setAllOutputMod] = useState("active");
  const [outputText, setOutputText] = useState("");
  const [outputCode, setOutputCode] = useState("");
  const [outputImage, setOutputImage] = useState("");
  const [outputAudio, setOutputAudio] = useState("");
  const [outputVideo, setOutputVideo] = useState("");

  const [searchName, setSearchName] = useState("");
  const [searchOrg, setSearchOrg] = useState("");

  const handleAccess = (access) => {
    handleAccessFilter(access);
    switch (access) {
      case "all":
        if (all === "") {
          setAll("active");
          setOpen("");
          setLimited("");
          setClosed("");
        }
        break;
      case "open":
        if (open === "") {
          setAll("");
          setOpen("active");
          setLimited("");
          setClosed("");
        }
        break;
      case "limited":
        if (limited === "") {
          setAll("");
          setOpen("");
          setLimited("active");
          setClosed("");
        }
        break;
      case "closed":
        if (closed === "") {
          setAll("");
          setOpen("");
          setLimited("");
          setClosed("active");
        }
        break;
    }
  };

  const handleInputModality = (modality) => {
    setInputModalityFilter(modality);
    switch (modality) {
      case "allMod":
        if (allInputMod === "") {
          setAllInputMod("active");
          setInputText("");
          setInputCode("");
          setInputImage("");
          setInputAudio("");
          setInputVideo("");
        }
        break;
      case "text":
        if (inputText === "") {
          setAllInputMod("");
          setInputText("active");
          setInputCode("");
          setInputImage("");
          setInputAudio("");
          setInputVideo("");
        }
        break;
      case "code":
        if (inputCode === "") {
          setAllInputMod("");
          setInputText("");
          setInputCode("active");
          setInputImage("");
          setInputAudio("");
          setInputVideo("");
        }
        break;
      case "image":
        if (inputImage === "") {
          setAllInputMod("");
          setInputText("");
          setInputCode("");
          setInputImage("active");
          setInputAudio("");
          setInputVideo("");
        }
        break;
      case "audio":
        if (inputAudio === "") {
          setAllInputMod("");
          setInputText("");
          setInputCode("");
          setInputImage("");
          setInputAudio("active");
          setInputVideo("");
        }
        break;
      case "video":
        if (inputVideo === "") {
          setAllInputMod("");
          setInputText("");
          setInputCode("");
          setInputImage("");
          setInputAudio("");
          setInputVideo("active");
        }
        break;
    }
  };

  const handleOutputModality = (modality) => {
    setOutputModalityFilter(modality);
    switch (modality) {
      case "allMod":
        if (allOutputMod === "") {
          setAllOutputMod("active");
          setOutputText("");
          setOutputCode("");
          setOutputImage("");
          setOutputAudio("");
          setOutputVideo("");
        }
        break;
      case "text":
        if (outputText === "") {
          setAllOutputMod("");
          setOutputText("active");
          setOutputCode("");
          setOutputImage("");
          setOutputAudio("");
          setOutputVideo("");
        }
        break;
      case "code":
        if (outputCode === "") {
          setAllOutputMod("");
          setOutputText("");
          setOutputCode("active");
          setOutputImage("");
          setOutputAudio("");
          setOutputVideo("");
        }
        break;
      case "image":
        if (outputImage === "") {
          setAllOutputMod("");
          setOutputText("");
          setOutputCode("");
          setOutputImage("active");
          setOutputAudio("");
          setOutputVideo("");
        }
        break;
      case "audio":
        if (outputAudio === "") {
          setAllOutputMod("");
          setOutputText("");
          setOutputCode("");
          setOutputImage("");
          setOutputAudio("active");
          setOutputVideo("");
        }
        break;
      case "video":
        if (outputVideo === "") {
          setAllOutputMod("");
          setOutputText("");
          setOutputCode("");
          setOutputImage("");
          setOutputAudio("");
          setOutputVideo("active");
        }
        break;
    }
  };

  return (
    <div className="filter">
      <h4>Filter LLMs</h4>
      <h5>Name</h5>
      <div className="search">
        <input
          type="search"
          placeholder="Search by name..."
          aria-label="Search"
          value={searchName}
          onChange={(e) => {
            setSearchName(e.target.value);
            handleNameSearch(e.target.value);
          }}
        />
      </div>
      <h5>Organization</h5>
      <div className="search">
        <input
          type="search"
          placeholder="Search by organization..."
          aria-label="Search"
          value={searchOrg}
          onChange={(e) => {
            setSearchOrg(e.target.value);
            handleOrgSearch(e.target.value);
          }}
        />
      </div>
      <h5>Input Modality</h5>
      <div className="type">
        <div className="typeRow">
          <button onClick={() => handleInputModality("allMod")} className={allInputMod}>
            All
          </button>
          <button onClick={() => handleInputModality("text")} className={inputText}>
            Text
          </button>
          <button onClick={() => handleInputModality("code")} className={inputCode}>
            Code
          </button>
        </div>
        <div className="typeRow">
          <button onClick={() => handleInputModality("image")} className={inputImage}>
            Image
          </button>
          <button onClick={() => handleInputModality("audio")} className={inputAudio}>
            Audio
          </button>
          <button onClick={() => handleInputModality("video")} className={inputVideo}>
            Video
          </button>
        </div>
      </div>
      <h5>Output Modality</h5>
      <div className="type">
        <div className="typeRow">
          <button onClick={() => handleOutputModality("allMod")} className={allOutputMod}>
            All
          </button>
          <button onClick={() => handleOutputModality("text")} className={outputText}>
            Text
          </button>
          <button onClick={() => handleOutputModality("code")} className={outputCode}>
            Code
          </button>
        </div>
        <div className="typeRow">
          <button onClick={() => handleOutputModality("image")} className={outputImage}>
            Image
          </button>
          <button onClick={() => handleOutputModality("audio")} className={outputAudio}>
            Audio
          </button>
          <button onClick={() => handleOutputModality("video")} className={outputVideo}>
            Video
          </button>
        </div>
      </div>
      <h5>Access</h5>
      <div className="access">
        <button onClick={() => handleAccess("all")} className={all}>
          All
        </button>
        <button onClick={() => handleAccess("open")} className={open}>
          Open
        </button>
        <button onClick={() => handleAccess("limited")} className={limited}>
          Limited
        </button>
        <button onClick={() => handleAccess("closed")} className={closed}>
          Closed
        </button>
      </div>
    </div>
  );
};
export default Filter;
