import { useEffect, useState } from "react";
import "./LLMCard.scss";
import { useNavigate } from "react-router-dom";

const LLMCard = ({
  id,
  // type,
  name,
  organization,
  // description,
  created,
  // size,
  modality,
  access,
  // license,
  // dependencies,
  // setInfo,
  accessFilter,
}) => {
  const [dateCreated, setDateCreated] = useState("");
  const [show, setShow] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (typeof created == "string") {
      setDateCreated(created.slice(0, 10));
    } else {
      setDateCreated("");
    }
  }, [created]);

  useEffect(() => {
    
    if (accessFilter === "all") {
      setShow("");
    } else if (accessFilter === access) {
      setShow("");
    } else {
      setShow("hidden");
    }
  }, [accessFilter]);

  const handleInfo = () => {
    // setInfo({
    //   id: id,
    //   type: type,
    //   name: name,
    //   organization: organization,
    //   description: description,
    //   created: dateCreated,
    //   size: size,
    //   modality: modality,
    //   access: access,
    //   license: license,
    //   dependencies: dependencies,
    // });
    navigate(`info/${id}`);
  };

  return (
    <div className={`LLMCard ${show}`} onClick={() => handleInfo()}>
      <span className="name">{name}</span>
      <span className="modality">{modality.replace(";", ", ")}</span>
      <span className="dateCreated">{dateCreated}</span>
      <span className="access">{access}</span>
      <span className="organization">{organization}</span>
    </div>
  );
};
export default LLMCard;
