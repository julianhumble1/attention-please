import "./Matrix.scss"
import { ScatterChart } from "@mui/x-charts/ScatterChart";
import { ThemeProvider, createTheme, useTheme, } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { cheerfulFiestaPalette } from "@mui/x-charts/colorPalettes";

const Matrix = () => {
    
  const [data, setData] = useState([]);
  const [dataLeaders, setDataLeaders] = useState([]);
  const [dataChallengers, setDataChallengers] = useState([]);
  const [dataVisionaries, setDataVisionaries] = useState([]);
  const [dataPlayers, setDataPlayers] = useState([]);
  const [isHidden, setIsHidden] = useState(true);

  const [colorMode, setColorMode] = useState("dark");
  const newTheme = createTheme({ palette: { mode: colorMode } });

  const [series, setSeries] = useState([]);

  useEffect(() => {
    
    let dataArray = [];
    // let dataLead = [];
    // let dataChall = [];
    // let dataVis = [];
    // let dataPlay = [];

    for (let i = 0; i < 25; i++){
      let negativeX, negativeY;
      if (Math.random() > 0.5) {
          negativeX = -1
      } else {
          negativeX = 1
      }
      if (Math.random() > 0.5) {
          negativeY = -1
      } else {
          negativeY = 1
      }
      dataArray[i] = {
          id: `data${i}`,
          x: Math.random() * negativeX,
          y: Math.random() * negativeY
      }
    }
    

    //   for (let i = 0; i< dataArray.length; i++){
    //     if(dataArray[i].x >= 0 && dataArray[i].y >= 0){
    //       dataLead.push(dataArray[i]);
    //     } else if (dataArray[i].x < 0 && dataArray[i].y >= 0) {
    //       dataChall.push(dataArray[i]);
    //     } else if (dataArray[i].x < 0 && dataArray[i].y < 0) {
    //       dataPlay.push(dataArray[i]);
    //     } else {
    //       dataVis.push(dataArray[i]);
    //     }
    // }
    // setDataLeaders(dataLead);
    // setDataChallengers(dataChall);
    // setDataPlayers(dataPlay);
    // setDataVisionaries(dataVis);

    let seriesData = dataArray.map((dataPoint) => {
    if (dataPoint.x >= 0 && dataPoint.y >= 0) {
      return ({
        label: dataPoint.id,
        data: [{
          x: dataPoint.x,
          y: dataPoint.y,
          id: dataPoint.id
        }],
        color: "#1f77b4"
      })
    } else if (dataPoint.x < 0 && dataPoint.y >= 0) {
      return ({
        label: dataPoint.id,
        data: [{
          x: dataPoint.x,
          y: dataPoint.y,
          id: dataPoint.id
        }],
        color: "#ff7f0e"
      })
    } else if (dataPoint.x < 0 && dataPoint.y < 0) {
      return ({
        label: dataPoint.id,
        data: [{
          x: dataPoint.x,
          y: dataPoint.y,
          id: dataPoint.id
        }],
        color: "#d62728"
      })
    } else {
      return ({
        label: dataPoint.id,
        data: [{
          x: dataPoint.x,
          y: dataPoint.y,
          id: dataPoint.id
        }],
        color: "#2ca02c"
      })
    }
  });

    setSeries(seriesData);
    console.log(seriesData);
      
    },[]) 
  

  return (
    <div className='matrix'>
      <div className="graph">
        <div className="row">
            <span><div className="chall"/>Challengers</span>
            <span><div className="lead"/>Leaders</span>
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
            series={series
              // {
              //   label: "Leaders",
              //   data: dataLeaders.map((v) => ({ x: v.x, y: v.y, id: v.id })),
              //   color:"#1f77b4"
              // },
              // {
              //   label: "Challengers",
              //   data: dataChallengers.map((v) => ({ x: v.x, y: v.y, id: v.id })),
              //   color:"#ff7f0e"
              // },
              // {
              //   label: "Visionaries",
              //   data: dataVisionaries.map((v) => ({ x: v.x, y: v.y, id: v.id })),
              //   color:"#2ca02c"
              // },
              // {
              //   label: "Players",
              //   data: dataPlayers.map((v) => ({ x: v.x, y: v.y, id: v.id })),
              //   color:"#d62728"
              // },
            }
            // grid={{vertical:true, horizontal:true}}
            slotProps={{ legend: { hidden: isHidden } }}
            leftAxis={null}
            bottomAxis={null}
            xAxis={[{ min: -1, max: 1, }]}
            yAxis={[{min: -1,max: 1,}]}
            voronoiMaxRadius={10}
            className="scatter"
          />
          </ThemeProvider>

        <div className="bottomText">Business readiness</div>
        <div className="row">
          <span><div className="play"/>Players</span>
          <span><div className="vision"/>Visionaries</span>
        </div>
      </div>
    </div>
  )
}
export default Matrix