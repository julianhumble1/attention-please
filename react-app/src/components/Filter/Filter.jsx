import "./Filter.scss";
import { useState } from "react";

const Filter = ({
  handleAccessFilter,
  handleModalityFilter,
  handleNameSearch,
  handleOrgSearch,
}) => {
  const [all, setAll] = useState("active");
  const [open, setOpen] = useState("");
  const [limited, setLimited] = useState("");
  const [closed, setClosed] = useState("");

  const [allMod, setAllMod] = useState("active");
  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [image, setImage] = useState("");
  const [audio, setAudio] = useState("");
  const [video, setVideo] = useState("");

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

  const handleModalilty = (modality) => {
    handleModalityFilter(modality);
    switch (modality) {
      case "allMod":
        if (allMod === "") {
          setAllMod("active");
          setText("");
          setCode("");
          setImage("");
          setAudio("");
          setVideo("");
        }
        break;
      case "text":
        if (text === "") {
          setAllMod("");
          setText("active");
          setCode("");
          setImage("");
          setAudio("");
          setVideo("");
        }
        break;
      case "code":
        if (code === "") {
          setAllMod("");
          setText("");
          setCode("active");
          setImage("");
          setAudio("");
          setVideo("");
        }
        break;
      case "image":
        if (image === "") {
          setAllMod("");
          setText("");
          setCode("");
          setImage("active");
          setAudio("");
          setVideo("");
        }
        break;
      case "audio":
        if (audio === "") {
          setAllMod("");
          setText("");
          setCode("");
          setImage("");
          setAudio("active");
          setVideo("");
        }
        break;
      case "video":
        if (video === "") {
          setAllMod("");
          setText("");
          setCode("");
          setImage("");
          setAudio("");
          setVideo("active");
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
      <h5>Modality</h5>
      <div className="type">
        <div className="typeRow">
          <button onClick={() => handleModalilty("allMod")} className={allMod}>
            All
          </button>
          <button onClick={() => handleModalilty("text")} className={text}>
            Text
          </button>
          <button onClick={() => handleModalilty("code")} className={code}>
            Code
          </button>
        </div>
        <div className="typeRow">
          <button onClick={() => handleModalilty("image")} className={image}>
            Image
          </button>
          <button onClick={() => handleModalilty("audio")} className={audio}>
            Audio
          </button>
          <button onClick={() => handleModalilty("video")} className={video}>
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
