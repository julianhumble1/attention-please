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
  modalityFilter,
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
    } else if (organization.includes(orgSearch)) {
      setShowOrg("");
    } else {
      setShowOrg("hiddenOrg");
    }
    if (nameSearch === "") {
      setShowName("");
    } else if (name.includes(nameSearch)) {
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
    if (modalityFilter === "allMod") {
      setShowMod("");
    } else if (modality.includes(modalityFilter)) {
      setShowMod("");
    } else {
      setShowMod("hiddenMod");
    }
  }, [accessFilter, modalityFilter]);

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
    <div
      className={`LLMCard ${show} ${showMod} ${showOrg} ${showName}`}
      onClick={() => handleInfo()}
    >
      <span className="name">{name}</span>
      <span className="modality">{modality.replace(";", ", ")}</span>
      <span className="dateCreated">{dateCreated}</span>
      <span className="access">{access}</span>
      <span className="organization">{organization}</span>
    </div>
  );
};
export default LLMCard;
