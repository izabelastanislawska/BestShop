// Zalecamy podejście obiektowe do tego projektu, tzn. oparcie całości na założeniu konstruktora obiektów i prototypów. Dzięki temu kod stanie się bardzo hermetyczny.

//Dropdown z Choose package
const selectInput = document.querySelector(".select__input");
const dropdown = document.querySelector("#package");
selectInput.addEventListener("click", handleDropdown);

function handleDropdown(event) {      
    dropdown.classList.toggle("open");
}

//Wybór z Choose package
const select = document.querySelector(".select__dropdown");
const selectDropdown = document.querySelectorAll(".select__dropdown li");

select.addEventListener("click", handleChoose);

const basic = selectDropdown[0].dataset.value;
const professional = selectDropdown[1].dataset.value;
const premium = selectDropdown[2].dataset.value;
let basicPrice = 0;
let professionalPrice = 0;
let premiumPrice = 0;

function handleChoose(event) {
    dropdown.classList.toggle("open");
    if (event.target.dataset.value === basic) {
        selectInput.innerText = "Basic";
        data[2].classList.add("open");
        data[2].children[1].innerText = "Basic";
        basicPrice = 10;
        professionalPrice = 0;
        premiumPrice = 0;
        data[2].children[2].innerText = `${"$"}${basicPrice}`;
    }
    if (event.target.dataset.value === professional) {
        selectInput.innerText = "Professional";
        data[2].classList.add("open");
        data[2].children[1].innerText = "Professional";
        professionalPrice = 20;
        basicPrice = 0;
        premiumPrice = 0;
        data[2].children[2].innerText = `${"$"}${professionalPrice}`;
    }
    if (event.target.dataset.value === premium) {
        selectInput.innerText = "Premium";
        data[2].classList.add("open");
        data[2].children[1].innerText = "Premium";
        premiumPrice = 30;
        professionalPrice = 0;
        basicPrice = 0;
        data[2].children[2].innerText = `${"$"}${premiumPrice}`;
    }  
    addTotal(); 
}

//checkboxy accounting/terminal
const accounting = document.querySelector("#accounting");
const terminal = document.querySelector("#terminal");
const data = document.querySelectorAll(".list__item");
let accountingPrice = 0;
let terminalPrice = 0;
    
accounting.addEventListener("change", handleAccounting);
terminal.addEventListener("change", handleTerminal);

function handleAccounting(event) {    
    data.forEach(function(el){
        if (el.dataset.id === "accounting") {
            data[3].classList.toggle("open");   
            if (accounting.checked) {
                accountingPrice = 10; 
            } else {
                accountingPrice = 0;
            }
        }}
    )
    addTotal();
}


function handleTerminal(event) {
    data.forEach(function(el) {
        if (el.dataset.id === "terminal") {
            data[4].classList.toggle("open"); 
            if (terminal.checked) {
                terminalPrice = 10; 
            } else {
                terminalPrice = 0;
            } 
        }
    })
    addTotal();
}

//inputy products, orders
const products = document.querySelector("#products");
const orders = document.querySelector("#orders");
let productsSum = 0;
let ordersSum = 0

products.addEventListener("change", handleProducts);
orders.addEventListener("change", handleOrders);

function handleProducts(event) {
    if (products.value > 0) {
        data[0].classList.add("open");
        const productsPrice = 1;
        data[0].children[1].innerText = `${products.value} * ${"$"}${productsPrice}`;
        productsSum = parseInt(products.value) * productsPrice;
        data[0].children[2].innerText = `${"$"} ${productsSum}`
        addTotal();
    }
}

function handleOrders(event) {
    if (orders.value > 0) {
        data[1].classList.add("open");
        const ordersPrice = 1;
        data[1].children[1].innerText = `${orders.value} * ${"$"}${ordersPrice}`;
        ordersSum = parseInt(orders.value) * ordersPrice;
        data[1].children[2].innerText = `${"$"} ${ordersSum}`
        addTotal();
    }
}

//sumowanie wszystkiego

const total = document.querySelector("#total-price");

function addTotal() {
    total.classList.add("open");
    const sum = basicPrice + professionalPrice + premiumPrice + productsSum + ordersSum + accountingPrice + terminalPrice;
    total.children[1].innerText = `${"$"}${sum}`;
    if (sum === 0) {
        total.classList.remove("open");
    }
}

