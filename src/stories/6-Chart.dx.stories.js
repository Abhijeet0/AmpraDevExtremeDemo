import React from "react";
import Chart, {
	ArgumentAxis,
	CommonSeriesSettings,
	Legend,
	Series,
	Tooltip,
	ValueAxis,
	ConstantLine,
	Label
} from "devextreme-react/chart";

const complaintsData = [
	{ complaint: "Cold pizza", count: 780 },
	{ complaint: "Not enough cheese", count: 120 },
	{ complaint: "Underbaked or Overbaked", count: 52 },
	{ complaint: "Delayed delivery", count: 1123 },
	{ complaint: "Damaged pizza", count: 321 },
	{ complaint: "Incorrect billing", count: 89 },
	{ complaint: "Wrong size delivered", count: 222 }
];
let cumulativeCount = 0;
const totalCount = complaintsData.reduce((sum, val) => sum + val.count, 0);

const dataArray = complaintsData
	.sort((a, b) => a.count - b.count)
	.map(({ count, complaint }) => {
		cumulativeCount += count;
		return {
			complaint: complaint,
			count: count,
			cumulativePercentage: Math.round(
				(cumulativeCount * 100) / totalCount
			)
		};
	});
console.log(cumulativeCount, totalCount);
const customizeTooltip = ({ argumentText, points }) => {
	return {
		html: `<div><div class="tooltip-header">${argumentText}</div><div class="tooltip-body"><div class="series-name">${points[0].seriesName}: </div><div class="value-text">${points[0].valueText}</div><div class="series-name">${points[1].seriesName}: </div><div class="value-text">${points[1].valueText}% </div></div></div>`
	};
};

const customizePercentageText = ({ valueText }) => `${valueText}%`;

export default {
	title: "Chart",
	component: Chart
};

export const SimpleChart = () => {
	return (
		<Chart
			title="Pizza Shop Complaints"
			dataSource={dataArray}
			palette="Harmony Light"
			id="chart">
			<CommonSeriesSettings argumentField="complaint" />
			<Series
				name="Complaint frequency"
				valueField="count"
				axis="frequency"
				type="bar"
				color="#fac29a"
			/>
			<Series
				name="Cumulative percentage"
				valueField="cumulativePercentage"
				axis="percentage"
				type="spline"
				color="#6b71c3"
			/>

			<ArgumentAxis>
				<Label overlappingBehavior="stagger" />
			</ArgumentAxis>

			<ValueAxis name="frequency" position="left" tickInterval={300} />
			<ValueAxis
				name="percentage"
				position="right"
				tickInterval={20}
				showZero={true}
				valueMarginsEnabled={false}>
				<Label customizeText={customizePercentageText} />
				<ConstantLine
					value={80}
					width={2}
					color="#fc3535"
					dashStyle="dash">
					<Label visible={false} />
				</ConstantLine>
			</ValueAxis>

			<Tooltip
				enabled={true}
				shared={true}
				customizeTooltip={customizeTooltip}
			/>

			<Legend verticalAlignment="top" horizontalAlignment="center" />
		</Chart>
	);
};
