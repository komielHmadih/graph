import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { DateFormatter } from '@amcharts/amcharts4/core'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
am4core.useTheme(am4themes_animated)
class Graph extends Component {
  componentDidMount() {
    let chart = am4core.create('chartdiv', am4charts.XYChart)
    chart.dateFormatter.dateFormat = 'yyyy-MM-dd'

    chart.data = [
      {
        x: 1,
        ay: 4393,
        by: 2.2,
        aValue: 100000,
        bValue: 0,
      },
      {
        x: 2,
        ay: 4780,
        by: 4.9,
        aValue: 3000000,
        bValue: 3,
      },
      {
        x: 3,
        ay: 5254,
        by: 5.1,
        aValue: 2000000,
        bValue: 4,
      },
      {
        x: 4,
        ay: 5030,
        by: 19,
        aValue: 1000000,
        bValue: 3,
      },
      {
        x: 6,
        ay: 4479,
        by: 19,
        aValue: 2000000,
        bValue: 3,
      },
      {
        x: 10,
        ay: 3238,
        by: 13.3,
        aValue: 1900000,
        bValue: 13,
      },
      {
        x: 12.3,
        ay: 3426,
        by: 6.1,
        aValue: 9000000,
        bValue: 2,
      },
      {
        x: 20,
        ay: 3044,
        by: 19,
        aValue: 1000000,
        bValue: 3,
      },
      {
        x: 23,
        ay: 3038,
        by: 10.5,
        aValue: 3000000,
        bValue: 10,
      },
      {
        x: 26,
        ay: 2913,
        by: 12.3,
        aValue: 1500000,
        bValue: 13,
      },
      {
        x: 30,
        ay: 2361,
        by: 19,
        aValue: 2200000,
        bValue: 3,
      },
      {
        x: 35,
        ay: 2453,
        by: 15,
        aValue: 1000000,
        bValue: 999999,
      },
      {
        x: 39,
        ay: 3181,
        by: 10.8,
        aValue: 1,
        bValue: 11,
      },
    ]

    // Create axes
    let xAxis = chart.xAxes.push(new am4charts.ValueAxis())
    xAxis.renderer.minGridDistance = 40

    // Create value axis
    let yAxis = chart.yAxes.push(new am4charts.ValueAxis())

    // Create series
    let series1 = chart.series.push(new am4charts.LineSeries())
    series1.dataFields.valueX = 'x'
    series1.dataFields.valueY = 'ay'
    series1.dataFields.value = 'aValue'
    series1.strokeWidth = 2

    let bullet1 = series1.bullets.push(new am4charts.CircleBullet())
    series1.heatRules.push({
      target: bullet1.circle,
      min: 5,
      max: 100,
      property: 'radius',
    })

    bullet1.tooltipText = '{valueX} & {valueY}: [bold]{value}[/]'

    //scrollbars

    chart.plotContainer.mouseOptions.sensitivity = 0.5
    this.chart = chart
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose()
    }
  }

  render() {
    return (
      <div>
        <p style={{ textAlign: 'center', fontSize: '200%' }}>خگستر</p>
        <br />
        <p style={{ textAlign: 'center', fontSize: '100%' }}>
          تعداد : قيمت & تاريخ خريد
        </p>
        <br />
        <div id='chartdiv' style={{ width: '100%', height: '500px' }}></div>
      </div>
    )
  }
}
export default Graph
