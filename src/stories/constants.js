export const selectBoxData = [
	{ id: 1, country: "Afghanistan" },
	{ id: 2, country: "America" },
	{ id: 3, country: "China" },
	{ id: 4, country: "Albania" },
	{ id: 5, country: "India" },
	{ id: 6, country: "Bangladesh" },
	{ id: 7, country: "Myanmar" }
];

export const longTabs = [
	{
		id: 0,
		title: "User",
		text: "User",
		icon: "user",
		content: "User tab content"
	},
	{
		id: 1,
		title: "Comments",
		text: "Comments",
		icon: "comment",
		content: "Comment tab content"
	},
	{
		id: 2,
		title: "Info",
		text: "Info",
		icon: "info",
		content: "Info tab content"
	},
	{
		id: 3,
		title: "Privacy",
		text: "Privacy",
		icon: "key",
		content: "Privacy tab content",
		disabled: true
	},
	{
		id: 4,
		title: "Tag",
		text: "Tag",
		icon: "tags",
		content: "Tagging tab content",
		disabled: true
	},
	{
		id: 5,
		title: "Share",
		text: "Share",
		icon: "group",
		content: "Share tab content"
	},
	{
		id: 6,
		title: "Delete",
		text: "Delete",
		icon: "trash",
		content: "Delete tab content",
		disabled: true
	}
];

export const productsMenu = [
	{
		id: "1",
		name: "Video Players",
		items: [
			{
				id: "1_1",
				name: "HD Video Player",
				price: 220,
				icon: "images/products/1.png"
			},
			{
				id: "1_2",
				name: "SuperHD Video Player",
				icon: "images/products/2.png",
				price: 270
			}
		]
	},
	{
		id: "2",
		name: "Televisions",
		items: [
			{
				id: "2_1",
				name: "SuperLCD 42",
				icon: "images/products/7.png",
				price: 1200
			},
			{
				id: "2_2",
				name: "SuperLED 42",
				icon: "images/products/5.png",
				price: 1450
			},
			{
				id: "2_3",
				name: "SuperLED 50",
				icon: "images/products/4.png",
				price: 1600
			},
			{
				id: "2_4",
				name: "SuperLCD 55 (Not available)",
				icon: "images/products/6.png",
				price: 1350,
				disabled: true
			},
			{
				id: "2_5",
				name: "SuperLCD 70",
				icon: "images/products/9.png",
				price: 4000
			}
		]
	},
	{
		id: "3",
		name: "Monitors",
		items: [
			{
				id: "3_1",
				name: '19"',
				items: [
					{
						id: "3_1_1",
						name: "DesktopLCD 19",
						icon: "images/products/10.png",
						price: 160
					}
				]
			},
			{
				id: "3_2",
				name: '21"',
				items: [
					{
						id: "3_2_1",
						name: "DesktopLCD 21",
						icon: "images/products/12.png",
						price: 170
					},
					{
						id: "3_2_2",
						name: "DesktopLED 21",
						icon: "images/products/13.png",
						price: 175
					}
				]
			}
		]
	},
	{
		id: "4",
		name: "Projectors",
		items: [
			{
				id: "4_1",
				name: "Projector Plus",
				icon: "images/products/14.png",
				price: 550
			},
			{
				id: "4_2",
				name: "Projector PlusHD",
				icon: "images/products/15.png",
				price: 750
			}
		]
	}
];

export default {
	selectBoxData,
	longTabs,
	productsMenu
};
