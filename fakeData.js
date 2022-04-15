const breakfast = [
	{
		id: 1,
		name: "Onion-Dijon Pork Chops",
		description:
			"Coated in a flavorful sauce, these chops are cooked to tender perfection. Serve with rice and carrots for a full meal. —Taste of Home Test Kitchen, Milwaukee, Wisconsin",
		image: "https://i.ibb.co/m92PhZf/breakfast1.png",
		price: 250,
		category: "breakfast",
	},
	{
		id: 2,
		name: "Breakfast Sandwich",
		description:
			"A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.",
		image: "https://i.ibb.co/XyjkGkM/breakfast2.png",
		price: 110,
		category: "breakfast",
	},
	{
		id: 3,
		name: "Roast Chicken With Tomatoes",
		description:
			"Had some very ripe field tomatoes from the farmers market that got bruised on the way home and was looking for a recipe to accommodate them, happy I stumbled across this one. This recipe has amazing flavour for something so simple, using fresh in-season tomatoes to soak up chicken juices is genius! Ate with pita which worked well to deliver perfect bites with feta sauce/tomato/onion/chicken.",
		image: "https://i.ibb.co/0rks8L5/breakfast3.png",
		price: 190,
		category: "breakfast",
	},
	{
		id: 4,
		name: "Molletes",
		description:
			"Heat oil in a medium Dutch oven or other heavy pot over medium. Add onions and cook, stirring, until just beginning to turn golden brown, 10–14 minutes. Stir in beans and add bay leaf. Cook, stirring occasionally, until beans begin to soften and fall apart, 9–11 minutes. Season beans with salt and remove from heat. Remove and discard bay leaf. Mash beans with a potato masher until smooth and spreadable.",
		image: "https://i.ibb.co/DVjTb86/breakfast4.png",
		price: 130,
		category: "breakfast",
	},
	{
		id: 5,
		name: "Egg-Topped Avocado Toast",
		description:
			"We always have avocados on hand, so it’s easy to make this quick breakfast toast for my husband and I. It’s really tasty! —Kallee Krong-McCreery, Escondido, California",
		image: "https://i.ibb.co/ZXFFBtc/breakfast5.png",
		price: 150,
		category: "breakfast",
	},
	{
		id: 6,
		name: "Caramelized Zucchini Flatbread",
		description:
			"Place racks on upper and lower third of oven; preheat to 450°. Let 1 lb. pizza dough sit in its bag or container until it reaches room temperature, at least 30 minutes—room temp dough is much easier to stretch. Prepare your vegetables while you wait.",
		image: "https://i.ibb.co/SddKcT3/breakfast6.png",
		price: 150,
		category: "breakfast",
	},
];

const lunch = [
	{
		id: 7,
		name: "Warm Eggplant Salad with Walnuts",
		description:
			"Heat remaining ¼ cup oil in a large skillet, preferably nonstick, over medium-high. Add eggplant and cook, tossing occasionally, until golden brown and tender, 7–9 minutes. Using a slotted spoon or tongs, transfer eggplant to bowl with dressing, leaving any oil in pan behind; discard oil. Add onion, mint, and three-quarters of reserved walnuts to bowl. Season with salt and toss to combine.",
		image: "https://i.ibb.co/fddJ3GZ/lunch1.png",
		price: 250,
		category: "lunch",
	},
	{
		id: 8,
		name: "Fava Bean Bruschetta",
		description:
			"Purée fava beans in a blender with ¼ cup reserved cooking liquid and 1 Tbsp. lemon juice, adding more cooking liquid as needed, until smooth. Taste and adjust seasoning with more salt, oil, and lemon juice as needed.",
		image: "https://i.ibb.co/SNS3Nkx/lunch2.png",
		price: 110,
		category: "lunch",
	},
	{
		id: 9,
		name: "Antipasto Salad",
		description:
			"A no-cook summer salad with a lemony, garlicky dressing. And salami. Long sweet peppers show up at farmers’ markets during the peak of the season and may be sold as long sweet yellow, sweet banana, Hungarian Sweet, or Cubanelle. For this antipasto salad recipe, you can substitute two medium red, orange, or yellow bell peppers (don’t use the green ones).",
		image: "https://i.ibb.co/7yxBr91/lunch3.png",
		price: 190,
		category: "lunch",
	},
	{
		id: 10,
		name: "Avocado with Radish",
		description:
			"Pickling the onion in lemon juice gives it a fresh, less acidic finish. If you like, soak the carrot ribbons in ice water for 10 minutes to make them curl.",
		image: "https://i.ibb.co/mFZbSDq/lunch4.png",
		price: 130,
		category: "lunch",
	},
	{
		id: 11,
		name: "Snapper Escabèche",
		description:
			"Because it’s so delicate, the flesh can break down when marinated first, sometimes causing the fish to fall apart. A post-grill bath delivers flavor without compromising texture. Learn how it's done here.",
		image: "https://i.ibb.co/MfVjCZT/lunch5.png",
		price: 150,
		category: "lunch",
	},
	{
		id: 12,
		name: "Sweet Bell Pepper",
		description:
			"Toss bell peppers, onion, and vinegar in a large bowl; season with salt and pepper. Let sit until bell peppers are slightly softened, 10–20 minutes. Just before serving, toss herbs and oil with bell pepper mixture.",
		image: "https://i.ibb.co/k2pKD61/lunch6.png",
		price: 150,
		category: "lunch",
	},
];

const dinner = [
	{
		id: 13,
		name: "Avocado with Radish",
		description:
			"Pickling the onion in lemon juice gives it a fresh, less acidic finish. If you like, soak the carrot ribbons in ice water for 10 minutes to make them curl.",
		image: "https://i.ibb.co/crMnNjG/dinner1.png",
		price: 130,
		category: "dinner",
	},
	{
		id: 15,
		name: "Fava Bean Bruschetta",
		description:
			"Purée fava beans in a blender with ¼ cup reserved cooking liquid and 1 Tbsp. lemon juice, adding more cooking liquid as needed, until smooth. Taste and adjust seasoning with more salt, oil, and lemon juice as needed.",
		image: "https://i.ibb.co/TYxT00P/dinner2.png",
		price: 110,
		category: "dinner",
	},
	{
		id: 16,
		name: "Antipasto Salad",
		description:
			"A no-cook summer salad with a lemony, garlicky dressing. And salami. Long sweet peppers show up at farmers’ markets during the peak of the season and may be sold as long sweet yellow, sweet banana, Hungarian Sweet, or Cubanelle. For this antipasto salad recipe, you can substitute two medium red, orange, or yellow bell peppers (don’t use the green ones).",
		image: "https://i.ibb.co/7C1NfTz/dinner3.png",
		price: 190,
		category: "dinner",
	},
	{
		id: 17,
		name: "Fava Bean Bruschetta",
		description:
			"Purée fava beans in a blender with ¼ cup reserved cooking liquid and 1 Tbsp. lemon juice, adding more cooking liquid as needed, until smooth. Taste and adjust seasoning with more salt, oil, and lemon juice as needed.",
		image: "https://i.ibb.co/ZVKyH90/dinner4.png",
		price: 110,
		category: "dinner",
	},
	{
		id: 18,
		name: "Antipasto Salad",
		description:
			"A no-cook summer salad with a lemony, garlicky dressing. And salami. Long sweet peppers show up at farmers’ markets during the peak of the season and may be sold as long sweet yellow, sweet banana, Hungarian Sweet, or Cubanelle. For this antipasto salad recipe, you can substitute two medium red, orange, or yellow bell peppers (don’t use the green ones).",
		image: "https://i.ibb.co/8zPPgNB/dinner5.png",
		price: 190,
		category: "dinner",
	},
	{
		id: 19,
		name: "Antipasto Salad",
		description:
			"A no-cook summer salad with a lemony, garlicky dressing. And salami. Long sweet peppers show up at farmers’ markets during the peak of the season and may be sold as long sweet yellow, sweet banana, Hungarian Sweet, or Cubanelle. For this antipasto salad recipe, you can substitute two medium red, orange, or yellow bell peppers (don’t use the green ones).",
		image: "https://i.ibb.co/PWcnft3/dinner6.png",
		price: 190,
		category: "dinner",
	},
];
