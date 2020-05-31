import React from "react";
import DataGrid, { Column, FilterRow } from "devextreme-react/data-grid";

export default {
	title: "Data Table",
	component: DataGrid
};

export const SimpleDataGrid = () => {
	const employees = [
		{ ID: 1, FirstName: "Sandra", LastName: "Johnson" },
		{ ID: 2, FirstName: "James", LastName: "Scott" },
		{ ID: 3, FirstName: "Nancy", LastName: "Smith" }
	];

	return (
		<DataGrid dataSource={employees} keyExpr="ID">
			{/* <FilterRow visible={true} />
			<Column allowFiltering={false} /> */}
		</DataGrid>
	);
};
