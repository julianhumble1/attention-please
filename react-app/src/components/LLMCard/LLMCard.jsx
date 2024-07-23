import { useEffect, useState } from "react";
import "./LLMCard.scss";
import { useNavigate } from "react-router-dom";

const LLMCard = ({
  id,
  name,
  organization,
  created,
  inputModality,
  outputModality,
  access,
  accessFilter,
  inputModalityFilter,
  nameSearch,
  orgSearch,
}) => {
  const [dateCreated, setDateCreated] = useState("");
  const [show, setShow] = useState("");
  const [showMod, setShowMod] = useState("");
  const [showOrg, setShowOrg] = useState("");
  const [showName, setShowName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (typeof created == "string") {
      setDateCreated(created.slice(0, 10));
    } else {
      setDateCreated("");
    }
  }, [created]);

  useEffect(() => {
    if (orgSearch === "") {
      setShowOrg("");
    } else if (organization.toLowerCase().includes(orgSearch.toLowerCase())) {
      setShowOrg("");
    } else {
      setShowOrg("hiddenOrg");
    }
    if (nameSearch === "") {
      setShowName("");
    } else if (name.toLowerCase().includes(nameSearch.toLowerCase())) {
      setShowName("");
    } else {
      setShowName("hiddenName");
    }
  }, [orgSearch, nameSearch]);

  useEffect(() => {
    if (accessFilter === "all") {
      setShow("");
    } else if (accessFilter === access) {
      setShow("");
    } else {
      setShow("hidden");
    }
    if (inputModalityFilter === "allMod") {
      setShowMod("");
    } else if (inputModality.includes(inputModalityFilter)) {
      setShowMod("");
    } else {
      setShowMod("hiddenMod");
    }
  }, [accessFilter, inputModalityFilter]);

  const handleInfo = () => {
    navigate(`info/${id}`);
  };

  return (
    <div
      className={`LLMCard ${show} ${showMod} ${showOrg} ${showName}`}
      onClick={() => handleInfo()}
    >
      <span className="name">{name}</span>
      <span className="inputModality">{inputModality}</span>
      <span className="outputModality">{outputModality}</span>
      <span className="dateCreated">{dateCreated}</span>
      <span className="access">{access}</span>
      <span className="organization">{organization}</span>
    </div>
  );
};
export default LLMCard;
