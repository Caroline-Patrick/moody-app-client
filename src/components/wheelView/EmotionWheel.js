import React, { useRef, useEffect, useState, useContext } from "react";
import AuthContext from "../../AuthContext";
import { LogFormComponent } from "./LogFormComponent";
import emotionList from "../../emotionList.json";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { Box, Button } from "@mui/material";
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
  const [instructionsVisible, setInstructionsVisible] = useState(false);

  const handleSliceClick = (event) => {
    const data = event.target.dataItem.dataContext;
    setSelectedChartData(data);
    setFormVisible(true);
  };

  const handleInstructionsClick = () => {
    setInstructionsVisible(true);
  };

  useEffect(() => {
    if (emotionList) {
      var chart = am4core.create("chartdiv", am4charts.TreeMap);
      chart.data = emotionList;

      chart.maxLevels = 1;
      
      // chart.padding(0, 0, 0, 0);
      // chart.radius = am4core.percent(100);
      chart.colors.step = 2;
      chart.fontSize = 18;
      chart.fontFamily = "Roboto";

      // Define data fields
      chart.dataFields.value = "value";
      chart.dataFields.name = "name";
      chart.dataFields.children = "children";
      chart.dataFields.color = "color";
      chart.dataFields.fontWeight = "bold";

      let level0 = chart.seriesTemplates.create("0");
      let level0_bullet = level0.bullets.push(new am4charts.LabelBullet());
      level0_bullet.locationY = 0.5;
      level0_bullet.locationX = 0.5;
      level0_bullet.label.text = "{name}";
     
      var level0_column = level0.columns.template;
level0_column.column.cornerRadius(10, 10, 10, 10);
level0_column.fillOpacity = 0.8;
level0_column.stroke = am4core.color("#fff");
level0_column.strokeWidth = 5;
level0_column.strokeOpacity = 1;
level0_column.tooltipText = "";

  

      var level1 = chart.seriesTemplates.create("1");
      let level1_bullet = level1.bullets.push(new am4charts.LabelBullet());
      level1_bullet.locationY = 0.5;
      level1_bullet.locationX = 0.5;
      level1_bullet.label.text = "{name}";

      var level1_column = level1.columns.template;
      level1_column.column.cornerRadius(10, 10, 10, 10);
      level1_column.fillOpacity = 0.8;
      level1_column.stroke = am4core.color("#fff");
      level1_column.strokeWidth = 5;
      level1_column.strokeOpacity = 1;
      level1_column.tooltipText = "";



      var level2 = chart.seriesTemplates.create("2");
      let level2_bullet = level2.bullets.push(new am4charts.LabelBullet());
      level2_bullet.locationY = 0.5;
      level2_bullet.locationX = 0.5;
      level2_bullet.label.text = "{name}";

      var level3 = chart.seriesTemplates.create("3");
      let level3_bullet = level3.bullets.push(new am4charts.LabelBullet());
      level3_bullet.locationY = 0.5;
      level3_bullet.locationX = 0.5;
      level3_bullet.label.text = "{name}";

      var level4 = chart.seriesTemplates.create("4");
      let level4_bullet = level4.bullets.push(new am4charts.LabelBullet());
      level4_bullet.locationY = 0.5;
      level4_bullet.locationX = 0.5;
      level4_bullet.label.text = "{name}";

      /* Navigation bar */
chart.homeText = "TOP";
chart.navigationBar = new am4charts.NavigationBar();

      return () => {
        chart.dispose();
      };
    }
  }, []);

// useEffect(() => {
//   if (emotionList) {
//     let chart = am4core.create("chartdiv", am4plugins_sunburst.Sunburst);
//     chart.data = emotionList;
//     chart.padding(0, 0, 0, 0);
//     chart.radius = am4core.percent(100);
//     chart.colors.step = 2;
//     chart.fontSize = 18;
//     chart.fontFamily = "Roboto";

//     // Define data fields
//     chart.dataFields.value = "value";
//     chart.dataFields.name = "name";
//     chart.dataFields.children = "children";
//     chart.dataFields.color = "color";
//     chart.dataFields.fontWeight = "bold";

//     var level0 = chart.seriesTemplates.create("0");
//     var level1 = chart.seriesTemplates.create("1");
//     var level2 = chart.seriesTemplates.create("2");

//     // Set radius for each level to create a more pie-chart like visual
//     level0.radius = am4core.percent(30);
//     level1.radius = am4core.percent(60);
//     level2.radius = am4core.percent(90);

//     // Hide labels for levels 0 and 1
//     level0.labels.template.text = "";
//     level1.labels.template.text = "";
//     // Show labels only for level 2
//     level2.labels.template.text = "{name}";
//     level2.labels.template.fontFamily = "Roboto";
//     level2.labels.template.fontSize = 15;
//     level2.labels.template.fill = am4core.color("#FFFFFF");
//     level2.slices.template.tooltipText = "";
//     level2.slices.template.events.on("hit", handleSliceClick);

//     // Enable breadcrumbs
//     chart.homeText = "<";

//     chartRef.current = chart;

//     return () => {
//       chart.dispose();
//     };
//   }
// }, []);


  return (
    <div
      className="emotion-wheel-container"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        id="chartdiv"
        style={{ width: "100%", height: "80vh" }}
      ></div>
      <Box
        sx={{
          width: "50%",
          margin: "5vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
        {!instructionsVisible ? (
          <Button
            onClick={handleInstructionsClick}
            sx={{ backgroundColor: "white", color: "#210036" }}
          >
            Show Instructions
          </Button>
        ) : (
          <HowToWheel setInstructionsVisible={setInstructionsVisible} />
        )}
      </Box>
    </div>
  );
};
