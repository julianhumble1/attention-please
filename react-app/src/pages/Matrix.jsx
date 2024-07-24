import "./Matrix.scss";
import { ScatterChart } from "@mui/x-charts/ScatterChart";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { getModels } from "../services/llm.service.js";
import { useNavigate } from "react-router-dom";

const Matrix = () => {
  const newTheme = createTheme({ palette: { mode: "dark" } });

  const [series, setSeries] = useState([]);

  const [modelData, setModelData] = useState([]);

  const [showAmount, setShowAmount] = useState(185);

  const [fullData, setFullData] = useState([]);

  const navigate = useNavigate();
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

  const [aFilter, setAFilter] = useState("all");
  const [inputFilter, setInputFilter] = useState("allMod");
  const [outputFilter, setOutputFilter] = useState("allMod");

  const handleAccess = (access) => {
    setAFilter(access);
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
    setInputFilter(modality);
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
    setOutputFilter(modality);
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

  useEffect(() => {
    const fetchModelData = async () => {
      const modelRes = await getModels();
      let data = modelRes.data.filter((data) => {
        if (aFilter === "all") {
          return data;
        } else if (aFilter === data.access) {
          return data;
        } else {
          return;
        }
      });
      data = data.filter((data) => {
        if (inputFilter === "allMod") {
          return data;
        } else if (data.input) {
          if (data.input.includes(inputFilter)) {
            return data;
          }
        } else {
          return;
        }
      });
      data = data.filter((data) => {
        if (outputFilter === "allMod") {
          return data;
        } else if (data.output) {
          if (data.output.includes(outputFilter)) {
            return data;
          }
        } else {
          return;
        }
      });

      data = data.filter((data) => {
        if (searchOrg === "") {
          return data;
        } else if (
          data.organization.toLowerCase().includes(searchOrg.toLowerCase())
        ) {
          return data;
        } else {
          return;
        }
      });

      data = data.filter((data) => {
        if (searchName === "") {
          return data;
        } else if (data.name.toLowerCase().includes(searchName.toLowerCase())) {
          return data;
        } else {
          return;
        }
      });

      setModelData(data);
      setFullData(data);
    };

    fetchModelData();
  }, [aFilter, inputFilter, outputFilter, searchName, searchOrg]);

  useEffect(() => {
    const shown = fullData.slice(0, showAmount);
    setModelData(shown);
  }, [showAmount]);

  const sortData = (data) => {
    data.filter((data) => {
      if (aFilter === "all") {
        return data;
      } else if (aFilter === data.access) {
        return data;
      } else {
        return;
      }
    });
  };

  useEffect(() => {
    // let dataArray = [];

    // for (let i = 0; i < 25; i++){
    //   let negativeX, negativeY;
    //   if (Math.random() > 0.5) {
    //       negativeX = -1
    //   } else {
    //       negativeX = 1
    //   }
    //   if (Math.random() > 0.5) {
    //       negativeY = -1
    //   } else {
    //       negativeY = 1
    //   }
    //   dataArray[i] = {
    //       id: `data${i}`,
    //       x: Math.random() * negativeX,
    //       y: Math.random() * negativeY
    //   }
    // }

    // let seriesData = dataArray.map((dataPoint) => {
    // if (dataPoint.x >= 0 && dataPoint.y >= 0) {
    //   return ({
    //     label: dataPoint.id,
    //     data: [{
    //       x: dataPoint.x,
    //       y: dataPoint.y,
    //       id: dataPoint.id
    //     }],
    //     color: "#1f77b4"
    //   })
    // } else if (dataPoint.x < 0 && dataPoint.y >= 0) {
    //   return ({
    //     label: dataPoint.id,
    //     data: [{
    //       x: dataPoint.x,
    //       y: dataPoint.y,
    //       id: dataPoint.id
    //     }],
    //     color: "#ff7f0e"
    //   })
    // } else if (dataPoint.x < 0 && dataPoint.y < 0) {
    //   return ({
    //     label: dataPoint.id,
    //     data: [{
    //       x: dataPoint.x,
    //       y: dataPoint.y,
    //       id: dataPoint.id
    //     }],
    //     color: "#d62728"
    //   })
    // } else {
    //   return ({
    //     label: dataPoint.id,
    //     data: [{
    //       x: dataPoint.x,
    //       y: dataPoint.y,
    //       id: dataPoint.id
    //     }],
    //     color: "#2ca02c"
    //   })
    // }

    let seriesData = modelData.map((dataPoint) => {
      if (dataPoint.business_readiness >= 0 && dataPoint.business_value >= 0) {
        return {
          label: dataPoint.name,
          id: dataPoint._id,
          data: [
            {
              x: dataPoint.business_readiness,
              y: dataPoint.business_value,
              id: dataPoint._id,
            },
          ],
          color: "#1f77b4",
        };
      } else if (
        dataPoint.business_readiness < 0 &&
        dataPoint.business_value >= 0
      ) {
        return {
          label: dataPoint.name,
          id: dataPoint._id,
          data: [
            {
              x: dataPoint.business_readiness,
              y: dataPoint.business_value,
              id: dataPoint._id,
            },
          ],
          color: "#ff7f0e",
        };
      } else if (
        dataPoint.business_readiness < 0 &&
        dataPoint.business_value < 0
      ) {
        return {
          label: dataPoint.name,
          id: dataPoint._id,
          data: [
            {
              x: dataPoint.business_readiness,
              y: dataPoint.business_value,
              id: dataPoint._id,
            },
          ],
          color: "#d62728",
        };
      } else {
        return {
          label: dataPoint.name,
          id: dataPoint._id,
          data: [
            {
              x: dataPoint.business_readiness,
              y: dataPoint.business_value,
              id: dataPoint._id,
            },
          ],
          color: "#2ca02c",
        };
      }
    });
    setSeries(seriesData);
  }, [modelData]);

  useEffect(() => {
    if (fullData.length < showAmount) {
      setShowAmount(fullData.length);
    }
  }, [fullData]);

  return (
    <div className="matrix">
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
            }}
          />
        </div>
        <h5>Input Modality</h5>
        <div className="type">
          <div className="typeRow">
            <button
              onClick={() => handleInputModality("allMod")}
              className={allInputMod}
            >
              All
            </button>
            <button
              onClick={() => handleInputModality("text")}
              className={inputText}
            >
              Text
            </button>
            <button
              onClick={() => handleInputModality("code")}
              className={inputCode}
            >
              Code
            </button>
          </div>
          <div className="typeRow">
            <button
              onClick={() => handleInputModality("image")}
              className={inputImage}
            >
              Image
            </button>
            <button
              onClick={() => handleInputModality("audio")}
              className={inputAudio}
            >
              Audio
            </button>
            <button
              onClick={() => handleInputModality("video")}
              className={inputVideo}
            >
              Video
            </button>
          </div>
        </div>
        <h5>Output Modality</h5>
        <div className="type">
          <div className="typeRow">
            <button
              onClick={() => handleOutputModality("allMod")}
              className={allOutputMod}
            >
              All
            </button>
            <button
              onClick={() => handleOutputModality("text")}
              className={outputText}
            >
              Text
            </button>
            <button
              onClick={() => handleOutputModality("code")}
              className={outputCode}
            >
              Code
            </button>
          </div>
          <div className="typeRow">
            <button
              onClick={() => handleOutputModality("image")}
              className={outputImage}
            >
              Image
            </button>
            <button
              onClick={() => handleOutputModality("audio")}
              className={outputAudio}
            >
              Audio
            </button>
            <button
              onClick={() => handleOutputModality("video")}
              className={outputVideo}
            >
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
      <div className="graphCol">
        <div className="graph">
          <div className="row">
            <span>
              <div className="chall" />
              Challengers
            </span>
            <span>
              <div className="lead" />
              Leaders
            </span>
          </div>
          <div className="outline">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="leftText">Business Value</div>
          <ThemeProvider theme={newTheme}>
            <ScatterChart
              width={600}
              height={600}
              series={series}
              slotProps={{ legend: { hidden: true } }}
              leftAxis={null}
              bottomAxis={null}
              xAxis={[{ min: -1, max: 1 }]}
              yAxis={[{ min: -1, max: 1 }]}
              voronoiMaxRadius={10}
              className="scatter"
              onItemClick={(event, d) => {
                navigate(`/info/${d.seriesId}`);
              }}
            />
          </ThemeProvider>

          <div className="bottomText">Business Readiness</div>
          <div className="row">
            <span>
              <div className="play" />
              Contenders
            </span>
            <span>
              <div className="vision" />
              Established
            </span>
          </div>
        </div>
        <span>Number of results shown: {showAmount}</span>
        <input
          type="range"
          min={1}
          max={fullData.length}
          value={showAmount}
          onChange={(e) => setShowAmount(e.target.value)}
          className="slider"
        />
      </div>
    </div>
  );
};
export default Matrix;
