import React, { useRef, useEffect, useState, useContext } from "react";
import AuthContext from "../../AuthContext";
import { LogFormComponent } from "./LogFormComponent";
import emotionList from "../../emotionList.json";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_sunburst from "@amcharts/amcharts4/plugins/sunburst";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Box, Button} from "@mui/material";
import { SuccessForm } from "./SuccessForm";
import { HowToWheel } from "./HowToWheel";

am4core.useTheme(am4themes_animated);

export const EmotionWheel = () => {
  const { token, userId } = useContext(AuthContext);
  const chartRef = useRef(null);
  const [formVisible, setFormVisible] = useState(false);
  const [selectedChartData, setSelectedChartData] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [logSubmitted, setLogSubmitted] = useState(false);
  const [instructionsVisible, setInstructionsVisible]=useState(false);

  const handleSliceClick = (event) => {
    const data = event.target.dataItem.dataContext;
    setSelectedChartData(data);
    setFormVisible(true);
  };

  const handleInstructionsClick = () => {
    setInstructionsVisible(true)
  }

  useEffect(() => {
    if (emotionList) {
      const chart = am4core.create("chartdiv", am4plugins_sunburst.Sunburst);

      chart.data = emotionList;
      chart.padding(0, 0, 0, 0);
      chart.radius = am4core.percent(100);

      chart.colors.step = 2;
      chart.fontSize = 18;
      chart.fontFamily = "roboto";

      // Define data fields
      chart.dataFields.value = "value";
      chart.dataFields.name = "name";
      chart.dataFields.children = "children";
      chart.dataFields.color = "color";
      chart.dataFields.fontWeight = "bold";

      let level0SeriesTemplate = new am4plugins_sunburst.SunburstSeries();
      level0SeriesTemplate.hiddenInLegend = false;

      var level0 = chart.seriesTemplates.create("0");
      var level1 = chart.seriesTemplates.create("1");
      var level2 = chart.seriesTemplates.create("2");

      // Add more label properties as desired

      level1.labels.template.text = "{name}";
      level1.labels.template.fontFamily = "Roboto";
      level1.labels.template.fontSize = 15;
      level1.labels.template.fill = am4core.color("#FFFFFF");
      // Add more label properties as desired

      level2.labels.template.text = "{name}";
      level2.labels.template.fontFamily = "Roboto";
      level2.labels.template.fontSize = 15;
      level2.labels.template.fill = am4core.color("#FFFFFF");
      // Add more label properties as desired

      // Set default behavior for all series
      level0.labels.template.text = "{name}";
      level1.labels.template.text = "{name}";
      level2.labels.template.text = "{name}";
      level0SeriesTemplate.tooltip.defaultState.properties.opacity = 0;
      level0SeriesTemplate.tooltip.animationDuration = 1;
      level0SeriesTemplate.strokeOpacity = 1;
      level0.slices.template.tooltipText = "";
      level1.slices.template.tooltipText = "";
      level2.slices.template.tooltipText = "";
      level2.slices.template.events.on("hit", handleSliceClick);

      chartRef.current = chart;
      return () => {
        chart.dispose();
      };
    }
  });

  return (
    <div
      className="emotion-wheel-container"
      style={{ display: "flex", 
              flexDirection: "row", 
              justifyContent: 'center',
            alignItems: 'center'  }}
    >
      <div
        id="chartdiv"
        style={{ width: "100%", height: "80vh" }}
      >

      </div>
      <Box 
      sx={{width: '50%', margin: '5vh', display:"flex", flexDirection: 'column', alignItems: 'center'}}>
       
        

      {!logSubmitted ? (
        <LogFormComponent
          className="log-form-container"
          visible={formVisible}
          data={selectedChartData}
          onHide={() => setFormVisible(false)}
          token={token}
          userId={userId}
          setLogSubmitted={setLogSubmitted}
          setSuccessMessage={setSuccessMessage}
        />
      ) : (
        <SuccessForm
          message={successMessage}
          setLogSubmitted={setLogSubmitted}
          setSuccessMessage={setSuccessMessage}
        />
      )}
      {!instructionsVisible ? ( <Button onClick={handleInstructionsClick} sx={{backgroundColor:'white', color: '#210036'}}
        >Show Instructions</Button>) : <HowToWheel setInstructionsVisible={setInstructionsVisible}/>}
      </Box>
    </div>
  );
};
