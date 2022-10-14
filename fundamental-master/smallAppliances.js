const scrollBtn = document.querySelector("#bttop");
scrollBtn.addEventListener("click", () => {
	document.body.scrollTop  = 0;
	document.documentElement.scrollTop = 0;
});
document.addEventListener("scroll",(e) => {
	if (document.documentElement.scrollTop <= 400) {
		scrollBtn.style.display = "none";
	}
	else
	{
    scrollBtn.style.display = "block";

	}
});



// jhulan js file //
var data1 = [
	{
	  imgUrl:
	  "https://fundamental.in/wp-content/uploads/2021/07/diet_12t_3-4-1-1-300x300.png",
	  name: "Bajaj Majesty PC Deluxe Water Heater, 10 Ltr",
	  price: 7400,
	  strikedOffPrice: "₹9,535",
	  discount:"-22%",
	  
	},
	{
	  imgUrl:
	  "https://fundamental.in/wp-content/uploads/2021/12/71DLf-7fdhL._SL1500_-300x300.jpg",
		name:"KENT GEM 16058 Induction Cooktop (Black, Touch Panel)",
	  price: 2000,
	  strikedOffPrice: "₹3,150",
	  discount:"-37%",
	  
	},
	{
	  imgUrl:
		"https://fundamental.in/wp-content/uploads/2021/11/312Pt40VYQL-300x300.jpg",
	  name: "AO Smith Water Heater Finesse (6Ltr / 10Ltr)",
	  price: 7800,
	  strikedOffPrice: "₹10,100",
	  discount:"-23%",
	  
	},
	{
	  imgUrl:
		"https://fundamental.in/wp-content/uploads/2021/07/41E3YKtx02L._SL1000_-300x300.jpg",
	  name: "AO Smith Water Heater – 15 Ltr, HAS-X1-015",
	  price: 9060,
	  strikedOffPrice: "₹ 11,120",
	  discount:"-19%",
	//   2nd line
	},
	{
	  imgUrl:
		"https://fundamental.in/wp-content/uploads/2021/07/ao-smith-geyser-fast-on-003l-3kw-white-8818-qkv3ks-300x300.png",
	  name: "AO Smith Water Heater – 3Ltr, FAST ON-003L-3KW WHITE",
	  price: 3750,
	  strikedOffPrice: "₹4,600",
	  discount:"-18%",
	  
	},
	{
	  imgUrl:
		"https://fundamental.in/wp-content/uploads/2021/05/1-322-300x300.jpg",
		name:"Aquaguard Enhance NXT UV+ Water Purifier",
	  price: 8000,
	  strikedOffPrice: "₹ 12,400",
	  discount:"-35%",
	},
	
	{
	  imgUrl:
		"https://fundamental.in/wp-content/uploads/2021/05/enhance_inline_white_01-300x300.jpg",
	  name: "Aquaguard Enhance NXT UV+Ayur Water Purifier",
	  price: 11800,
	  strikedOffPrice: "₹ 18,500",
	  discount:"-36%",
	},
	{
	  imgUrl:
		"https://fundamental.in/wp-content/uploads/2021/05/yyy-1-3-300x300.png",
	  name: "Aquasure From Aquaguard Maxima RO+UV+MTDS+ME Water Purifier",
	  price: 12850,
	  strikedOffPrice: "₹ 15,000",
	  discount:"-14%",
	},

	// 3rd Line

	{
	  imgUrl:
		"https://fundamental.in/wp-content/uploads/2021/04/61olfFfY8bL._SL1500_-300x300.jpg",
	  name: "Bajaj 1.2L SS Cordless Electric Kettle (Black)",
	  price: 1600,
	  strikedOffPrice: "₹2,400",
	  discount:"-33%",
	},
	{
	  imgUrl:
		"https://fundamental.in/wp-content/uploads/2021/01/bajaj-geyser-500x500-1-300x300.png",
	  name: "Bajaj Instant Water Heater – 3L Flora",
	  price: 3300,
	  strikedOffPrice: "₹3,905",
	  discount:"-15%",
	},
	{
	  imgUrl:
		"https://fundamental.in/wp-content/uploads/2021/04/61QuoPbQKoL._SL1500_-300x300.jpg",
		name:"Bajaj Majesty KTX 15 1.7 Litre Kettle (Black And Silver)",
	  price: 1850,
	  strikedOffPrice: "₹2,700",
	  discount:"-31%",
	},
	{
	  imgUrl:
		"https://fundamental.in/wp-content/uploads/2021/07/diet_12t_3-4-1-1-300x300.png",
		name:"Bajaj Majesty PC Deluxe Water Heater, 15 Ltr",
	  price: 7900,
	  strikedOffPrice: "₹10,345",
	  discount:"-24%",
	  
	},
   
  ];



  var cartData = JSON.parse(localStorage.getItem("cart")) || [];

	 data1.map(function(elem) {
	  // 4 times
	  var div = document.createElement("div");
	  div.setAttribute("class", "Div");
	  var img = document.createElement("img");
	  img.setAttribute("class", "lappy")
	  img.src = elem.imgUrl;

	//   Discount
	  var btn1=document.createElement("button")
	  btn1.innerText=elem.discount;
	   
	  btn1.setAttribute("class", "discountlappy")
	 
	  //   Add to cart
	  var btn2=document.createElement("button")
	  btn2.style.backgroundColor="white";
	  btn2.style.color="#E42329";
	  
	  btn2.innerHTML='<i class="fa-solid fa-bag-shopping fa-2xl"></i>';
	  btn2.style.height="40px";
	  btn2.style.width="40px"
	 
	  btn2.setAttribute("class", "add");

	  

	  
	  btn2.addEventListener("click", function () {
	   addToCart(elem);
	   console.log("btn2 clicked")
	   
 
	  });
// item Name
	  var name = document.createElement("p"); 
	  name.setAttribute("class", "n");
	  name.innerText = elem.name;
	  name.style.fontSize="14px";
	  name.style.textAlign="center";
	  name.style.fontWeight="bold"
	  name.style.fontFamily="sans-serif"
	  name.style.margin="40px"
	
	  var contentDiv=document.createElement("div");
	  contentDiv.setAttribute("class", "cd");
	  var priceDiv = document.createElement("div");
	  priceDiv.setAttribute("class", "innerDiv");

	  

	  var price = document.createElement("p");
	  price.innerText = "₹" + elem.price;
	  price.style.color="#E42329"
	  price.style.fontSize="16px";
	  price.style.fontWeight="bold";
	  price.style.fontFamily="sans-serif"


	  var strikedOffPrice = document.createElement("p");
	  strikedOffPrice.innerText = elem.strikedOffPrice;
	  strikedOffPrice.style.textDecoration = "line-through";
	  strikedOffPrice.style.color = "#909090";
	  strikedOffPrice.style.fontSize="16px";


	  priceDiv.append( strikedOffPrice,price);
	  contentDiv.append(name,priceDiv )
	  div.append(btn1,img, btn2, contentDiv );

	  document.querySelector("#container").append(div);
	});
  
  function addToCart(ele) {
  console.log(ele);
  cartData.push(ele);
  localStorage.setItem("cart", JSON.stringify(cartData));
  alert("item added to cart");
}