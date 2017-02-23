// EsLint Rules!!!!!!!
/* global google */

"use strict";

import React from "react";

// Import scriptjs to dinamycally load google.visualization script
import $script from "scriptjs";

// Chart Component
// -----------------
class Chart extends React.Component
{
	constructor(props)
    {
		super(props);
		this.draw=this.draw.bind(this);
	}

	componentDidMount()
    {
		var that=this;
		$script("https://www.gstatic.com/charts/loader.js",
			function ()
			{
				google.charts.load("current", {"packages": ["corechart"]});
				google.charts.setOnLoadCallback(that.draw);   
			});
	}

	componentDidUpdate()
    {
		this.draw();
	}	

	draw()
    {
		console.log("draw...");
		var options=
		{
			title: "Dati",
			curveType: "function",
			explorer: {},
			hAxis: 
			{
				title: this.props.xTitle
			},
			vAxis:
			{
				title: this.props.yTitle
			}
		};

			//var data=google.visualization.arrayToDataTable(this.props.data);
		var data=new google.visualization.DataTable();
		data.addColumn("number","x");
		data.addColumn("number","y");
		data.addRows(this.props.data);
		var chart=new google.visualization.LineChart(document.getElementById(this.props.lineId));
		chart.draw(data,options);
	}

	render()
    {
		console.log("render...");
		return (
			<div id={this.props.lineId} style={{width:900 + "px", height:700 + "px"}}>
			Caricamento chart....   
			</div>
		);
	}	
}

export default Chart;

