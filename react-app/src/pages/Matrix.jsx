import "./Matrix.scss"
import { ScatterChart } from "@mui/x-charts/ScatterChart";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { getModels } from "../services/llm.service.js";

const Matrix = () => {

  const newTheme = createTheme({ palette: { mode: "dark"} });

  const [series, setSeries] = useState([]);

  const [modelData, setModelData] = useState([])

  useEffect(() => {

    const fetchModelData = async () => {
      const modelRes = await getModels();
      const first50 = modelRes.data.slice(0,50)
      setModelData(modelRes.data)
    }

    fetchModelData()
  }, [])

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
      return ({
        label: dataPoint.name,
        data: [{
          x: dataPoint.business_readiness,
          y: dataPoint.business_value,
          id: dataPoint._id
        }],
        color: "#1f77b4"
      })
    } else if (dataPoint.business_readiness < 0 && dataPoint.business_value >= 0) {
      return ({
        label: dataPoint.name,
        data: [{
          x: dataPoint.business_readiness,
          y: dataPoint.business_value,
          id: dataPoint._id
        }],
        color: "#ff7f0e"
      })
    } else if (dataPoint.business_readiness < 0 && dataPoint.business_value < 0) {
      return ({
        label: dataPoint.name,
        data: [{
          x: dataPoint.business_readiness,
          y: dataPoint.business_value,
          id: dataPoint._id
        }],
        color: "#d62728"
      })
    } else {
      return ({
        label: dataPoint.name,
        data: [{
          x: dataPoint.business_readiness,
          y: dataPoint.business_value,
          id: dataPoint._id
        }],
        color: "#2ca02c"
      })
    }
  });

    setSeries(seriesData);
  }, [modelData]) 
  
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
            series={series}
            slotProps={{ legend: { hidden: true } }}
            leftAxis={null}
            bottomAxis={null}
            xAxis={[{ min: -1, max: 1, }]}
            yAxis={[{min: -1,max: 1,}]}
            voronoiMaxRadius={10}
            className="scatter"
          />
          </ThemeProvider>

        <div className="bottomText">Business Readiness</div>
        <div className="row">
          <span><div className="play"/>Players</span>
          <span><div className="vision"/>Visionaries</span>
        </div>
      </div>
    </div>
  )
}
export default Matrix