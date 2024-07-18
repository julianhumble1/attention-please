import "./Info.scss";

const Info = ({ info }) => {
  return (
    <div className="info">
      <h3>{info.name}</h3>
      <div className="rowOne">
        <div className="infoTitle">
          <span className="infoLabel">Organization</span>
          <span>{info.organization}</span>
        </div>
        <div className="infoTitle">
          <span className="infoLabel">Date Created</span>
          <span>{info.created}</span>
        </div>
        <div className="infoTitle">
          <span className="infoLabel">Type</span>
          <span>{info.type}</span>
        </div>
        <div className="infoTitle">
          <span className="infoLabel">Access</span>
          <span>{info.access}</span>
        </div>
        <div className="infoTitle">
          <span className="infoLabel">License</span>
          <span>{info.license}</span>
        </div>
      </div>
      <div className="rowTwo">
        <div className="col">
          <h4>Description</h4>
          <span>{info.description}</span>
        </div>
        <div className="col">
          <span>
            <span className="label">Dependencies:</span> {info.dependencies}
          </span>
          <span>
            <span className="label">Size:</span> {info.size}
          </span>
          <span>
            <span className="label">Modality:</span>{" "}
            {info.modality.replace(";", ", ")}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Info;
