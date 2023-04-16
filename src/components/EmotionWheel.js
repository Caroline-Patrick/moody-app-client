import React, { useRef, useEffect, useState } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_sunburst from "@amcharts/amcharts4/plugins/sunburst";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import emotionList from "../emotionList";

import { LogFormComponent } from "./LogFormComponent";

am4core.useTheme(am4themes_animated);

export const EmotionWheel = ({token, userId}) => {
  const chartRef = useRef(null);

  const [formVisible, setFormVisible] = useState(false);
  const [selectedChartData, setSelectedChartData] = useState(null);

  const handleSliceClick = (event) => {
    const data = event.target.dataItem.dataContext;
    setSelectedChartData(data);
    setFormVisible(true);

  };

  console.log(`Token: ${token}, userId: ${userId}`)

  useEffect(() => {
    if (emotionList) {
      const chart = am4core.create("chartdiv", am4plugins_sunburst.Sunburst);
      chart.data = emotionList;
      chart.padding(0, 0, 0, 0);
      chart.radius = am4core.percent(100);

      chart.colors.step = 2;
      chart.fontSize = 14;

      //   chart.innerRadius = am4core.percent(20);

      // Define data fields
      chart.dataFields.value = "value";
      chart.dataFields.name = "name";
      chart.dataFields.children = "children";
      chart.dataFields.color = "color";
      chart.dataFields.desc = "desc";

      let level0SeriesTemplate = new am4plugins_sunburst.SunburstSeries();
      level0SeriesTemplate.hiddenInLegend = false;
      //   chart.seriesTemplates.setKey('0', level0SeriesTemplate);

      var level0 = chart.seriesTemplates.create("0");
      var level1 = chart.seriesTemplates.create("1");
      var level2 = chart.seriesTemplates.create("2");

      // Set default behavior for all series
      level0.labels.template.text = "{name}";
      level1.labels.template.text = "{name}";
      level2.labels.template.text = "{name}";
      level0SeriesTemplate.tooltip.defaultState.properties.opacity = 0;
      level0SeriesTemplate.tooltip.animationDuration = 0;
      level0SeriesTemplate.strokeOpacity = 1;
      level0.slices.template.tooltipText = "";
      level1.slices.template.tooltipText = "";
      level2.slices.template.tooltipText = "";
      level2.slices.template.events.on("hit", handleSliceClick);

      //   chart.legend = new am4charts.Legend();
      //   chart.legend.labels.template.text = '{name}';
      //   chart.legend.valueLabels.template.text = '{value}';

      chartRef.current = chart;
      return () => {
        chart.dispose();
      };
    }
  }, [emotionList]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div id="chartdiv" style={{ width: "80%", height: "700px" }}></div>
      <LogFormComponent
        visible={formVisible}
        data={selectedChartData}
        onHide={() => setFormVisible(false)}
        token={token}
        userId={userId}
      />
    </div>
  );
};
