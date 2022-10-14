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


// jhulan code //



var data1 = [
	{
	  imgUrl:
	  "https://fundamental.in/wp-content/uploads/2021/03/in-galaxy-fit2-r375n-sm-r220nzkainu-lperspectiveblack-thumb-315990397-300x300.png",
	  name: "Samsung R220NZ Galaxy Fit 2 Smart Watch",
	  price: 3999,
	  strikedOffPrice: "₹ 4,199",
	  discount:"-5%",
	  
	},
	{
	  imgUrl:
	  "https://fundamental.in/wp-content/uploads/2021/03/71C2r560lfL._SL1500_-300x300.jpg",
		name:"Samsung SM-R375 Galaxy Fit E Smart Watch",
	  price: 2299,
	  strikedOffPrice: "₹ 2,590 ",
	  discount:"-11%",
	  
	},
	{
	  imgUrl:
		"https://fundamental.in/wp-content/uploads/2021/03/u_10198636-300x300.jpg",
	  name: "Samsung SM-R820NS Galaxy Smart Watch",
	  price: 28490,
	  strikedOffPrice: "₹ 33,990",
	  discount:"-16%",
	  
	},
	{
	  imgUrl:
		"https://fundamental.in/wp-content/uploads/2021/11/61brDD8JILL._SL1500_-300x300.jpg",
	  name: "Amazfit Bip U Pro Smart Watch With Built-In Alexa",
	  price: 4999,
	  strikedOffPrice: "₹ 6,999",
	  discount:"-29%",
	//   2nd line
	},
	{
	  imgUrl:
		"https://fundamental.in/wp-content/uploads/2021/11/61-ZuCsybdL._SL1500_-300x300.jpg",
	  name: "Amazfit Bip U Smart Watch, SpO2 & Stress Monitor, 3.63 Cm(1.43″)",
	  price: 3999,
	  strikedOffPrice: "₹ 5,999",
	  discount:"-33%",
	  
	},
	{
	  imgUrl:
		"https://fundamental.in/wp-content/uploads/2021/11/5189v68fgyL._SL1100_-300x300.jpg",
		name:"Amazfit GTR 2 Smart Watch, 1.39″ AMOLED Display",
	  price: 13499,
	  strikedOffPrice: "₹ 18,999 ",
	  discount:"-29%",
	},
	
	{
	  imgUrl:
		"https://fundamental.in/wp-content/uploads/2021/11/618MEYCaUQL._SL1500_-300x300.jpg",
	  name: "Amazfit GTS2 Mini Smart Watch With 1.55″ AMOLED Display",
	  price: 9999,
	  strikedOffPrice: "₹ 6,999",
	  discount:"-30%",
	},
	{
	  imgUrl:
		"https://fundamental.in/wp-content/uploads/2021/03/in-watch-active2-r820nz-sm-r820nzkainu-frontblack-189191514-300x300.jpg",
	  name: "Samsung SM-R820NZ Galaxy Smart Watch",
	  price: 23990,
	  strikedOffPrice: "₹ 27,990",
	  discount:"-14%",
	},

	// 3rd Line

	{
	  imgUrl:
		"https://fundamental.in/wp-content/uploads/2021/03/71aEPwBhjL._SL1500_-300x300.jpg",
	  name: "Samsung SM-R825FS Galaxy Smart Watch",
	  price:  32490,
	  strikedOffPrice: "₹ 37,990",
	  discount:"-14%",
	},
	{
	  imgUrl:
		"https://fundamental.in/wp-content/uploads/2021/03/in-watch-active2-r825fz-sm-r825fzkiinu-frontblack-266742371-1-300x300.png",
	  name: "Samsung SM-R825FZ Galaxy Smart Watch",
	  price: 28490,
	  strikedOffPrice: "₹ 29,990",
	  discount:"-5%",
	},
	{
	  imgUrl:
		"https://fundamental.in/wp-content/uploads/2021/03/717WeOKf-TL._SL1500_-300x300.jpg",
		name:"Samsung SM-R845 Galaxy Smart Watch",
	  price: 38990,
	  strikedOffPrice: "₹ 39,499",
	  discount:"-1%",
	},
	{
	  imgUrl:
		"https://fundamental.in/wp-content/uploads/2021/03/storm-black-300x300.png",
		name:"Boat Storm Smart Watch",
	  price: 2499,
	  strikedOffPrice: "₹ 5,990",
	  discount:"-58%",
	  
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
	  // btn1.style.backgroundColor="red";
	  // btn1.style.color="white";
	  // btn1.style.marginTop="-90px";
	  // btn1.style.border="4px solid red";
	  btn1.setAttribute("class", "discountlappy")
	 
	  //   Add to cart
	  var btn2=document.createElement("button")
	  btn2.style.backgroundColor="white";
	  btn2.style.color="#E42329";
	  // btn2.innerText ="ADD TO CART";
	  btn2.innerHTML='<i class="fa-solid fa-bag-shopping fa-2xl"></i>';
	  btn2.style.height="40px";
	  btn2.style.width="40px"
	  // btn2.style.fontSize="10px";
	  // btn2.style.border="10px";
	  // btn2.style.marginRight="53px";
	  // btn2.style.margonTop="-10px"
	  btn2.setAttribute("class", "add");
//
	  // btn2.setAttribute("class", "fas fa-cart plus")
//
	  
	  btn2.addEventListener("click", function () {
	   addToCart(elem);
	   console.log("btn2 clicked")
//
	  // btn2.setAttribute("class","fas  fa-check-circle");
	  // btn2.style.color="white"
	  // btn2.style.backgroundColor="red"
//
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
	  price.innerText = "₹"+elem.price;
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






 
