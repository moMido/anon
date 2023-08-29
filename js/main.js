// bar define the height of page
const el = document.querySelector(".scrolling");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

const sections = document.querySelectorAll("main > div");
const banners = document.querySelectorAll("#banner > div");

const heartSec = document.querySelector(".fa-heart");
const heartMobileSec = document.querySelector("#navbar_bottom_mobil .fa-heart");

const cartSec = document.querySelector(".fa-bag-shopping");
const cartMobileSec = document.querySelector("#navbar_bottom_mobil .fa-bag-shopping");

const homeLink = document.querySelector("#homeLink");
const homeMobileLink = document.querySelector("#navbar_bottom_mobil .fa-house");

const menLink = document.getElementById("men");
const menLinkMobile = document.getElementById("menMobile");

const womenLink = document.getElementById("womenLink");
const womenLinkMobile = document.getElementById("womenMobile");

const jewelryLink = document.getElementById("jewelryLink");
const jewelryLinkMobile = document.getElementById("jewelryMobile");

const perfumeLink = document.getElementById("perfumeLink");
const perfumeLinkMobile = document.getElementById("perfumeMobile");

const blogLink = document.getElementById("blog_p");
const blogLinkMobile = document.getElementById("blog_p_mobile");

const hotOfferLink = document.getElementById("hot_offer");
const hotOfferLinkMobile = document.getElementById("hot_offer_mobile");


const dropMenuMen = document.querySelectorAll(".drop_menu_men");
const dropMenuWoman = document.querySelectorAll(".drop_menu_woman");
const dropMenuJewelry = document.querySelectorAll(".drop_menu_jewelry");
const dropMenuPerfume = document.querySelectorAll(".drop_menu_perfume");

const tipNewProduct = document.querySelector(".new_product");
const tipExistProduct = document.querySelector(".exist_product");

const btnTop = document.getElementById("top");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 500) {
        btnTop.style.opacity = 1;
        btnTop.style.right = `${0}%`;
    } else {
        btnTop.style.right = `${-100}%`;
        btnTop.style.opacity = 0;
    }
})

dropMenuMen.forEach(item => {
    item.addEventListener("click", ()=> {
        routingPages(3);
    })
});

dropMenuWoman.forEach(item => {
    item.addEventListener("click", ()=> {
        routingPages(4);
    })
});

dropMenuJewelry.forEach(item => {
    item.addEventListener("click", ()=> {
        routingPages(5);
    })
});

dropMenuPerfume.forEach(item => {
    item.addEventListener("click", ()=> {
        routingPages(6);
    })
});

// homeLink.addEventListener("click", mido(0))
// cartSec.addEventListener("click", mido(1))
// heartSec.addEventListener("click", mido(2))

homeLink.onclick = ()=> { routingPages(0) }
homeMobileLink.onclick = ()=> { routingPages(0) }

cartSec.onclick = ()=> { routingPages(1) }
cartMobileSec.onclick = ()=> { routingPages(1) }

heartSec.onclick = ()=> { routingPages(2) }
heartMobileSec.onclick = ()=> { routingPages(2) }

menLink.onclick = () => { routingPages(3) }
menLinkMobile.onclick = () => { routingPages(3) }

womenLink.onclick = () => { routingPages(4) }
womenLinkMobile.onclick = () => { routingPages(4) }

jewelryLink.onclick = () => { routingPages(5)}
jewelryLinkMobile.onclick = () => { routingPages(5)}

perfumeLink.onclick = () => { routingPages(6)}
perfumeLinkMobile.onclick = () => { routingPages(6)}

blogLink.onclick = () => { routingPages(0)}
blogLinkMobile.onclick = () => { routingPages(0)}

hotOfferLink.onclick = () => { routingPages(0)}
hotOfferLinkMobile.onclick = () => { routingPages(0)}

function routingPages(i) {

    sections.forEach(sec => {
        sec.style.display = 'none';
    });

    banners.forEach( banner => {
        banner.style.display = 'none';
    });

    sections[i].style.display = 'block';
    banners[i].style.display = 'block';
}

routingPages(0);


window.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop;
    el.style.width = `${(scroll / height) * 100}%`;
});


/**
 * Model NewsLetter
*/
const closeBtn = document.querySelectorAll(".close");
const modelNewsLetter = document.querySelector("#newsLetter");

function closeNewsLetter(ele) {
    ele.classList.add("hideModelNewsLetter");
}
closeBtn[0].addEventListener("click", ()=> {
    closeNewsLetter(modelNewsLetter);
});


/**
 * Notifiaction
*/
const notification = document.getElementById("notification");
closeBtn[1].addEventListener("click", ()=> {
    closeNewsLetter(notification);
});

const btn_bars = document.querySelector(".fa-bars");
const btn_close = document.querySelector("h3 .fa-xmark");

const aside = document.querySelector("#sidebar .overlay");
const asideNav = document.querySelector("#sidebar aside");

function showHideItem() {
    asideNav.classList.toggle("show");
    aside.classList.toggle("show");
}

btn_bars.addEventListener("click", ()=> {
    showHideItem();
});

btn_close.addEventListener("click", ()=> {
    showHideItem();
});


const lis_drop_menu = [...document.getElementsByClassName("btn_inside")];
// const menus = [...document.querySelectorAll("ul.inside")];

lis_drop_menu.forEach((li)=> {
    const btnDropMenu1 = li.querySelector("i.first");
    const btnDropMenu2 = li.querySelector("i.secand");
    const btnDropMenuLink = li.querySelector("li a");
    function toRmoveClass () {
        lis_drop_menu.forEach((liItem)=> {
            if(liItem !== li) {
                liItem.classList.remove("show_inside");
            }
        })
        li.classList.toggle("show_inside");
    }
    btnDropMenu1.addEventListener("click", toRmoveClass);
    btnDropMenu2.addEventListener("click", toRmoveClass);
    btnDropMenuLink.addEventListener("click", toRmoveClass);
})

const lis_drop_menu_category = [...document.getElementsByClassName("btn_inside_category")];
// const menus = [...document.querySelectorAll("ul.inside")];

lis_drop_menu_category.forEach((li)=> {
    const btnDropMenuLink = li.querySelector("li p");
    function toRmoveClass () {
        lis_drop_menu_category.forEach((liItem)=> {
            if(liItem !== li) {
                liItem.classList.remove("show_inside");
            }
        })
        li.classList.toggle("show_inside");
        
    }
    li.addEventListener("click", toRmoveClass);
})

// mark product click heart (Section Product)


const hearts = document.querySelectorAll(".product_action li .fa-heart");
const eyes = document.querySelectorAll(".product_action li .fa-eye");
const replaces = document.querySelectorAll(".product_action li .fa-repeat");
const pluses = document.querySelectorAll(".product_action li .fa-plus");

const items = document.querySelectorAll(".item .product_action ul li");
// const actionItemsCart = document.querySelectorAll(".cart .item .product_action ul li");
// const actionItemsFavo = document.querySelectorAll(".favorite .item .product_action ul li");


items.forEach((item) => {
    item.addEventListener('click', ()=> {
        item.classList.toggle("checkItem");
    });
});

// actionItemsCart.forEach((item)=> {
//     item.addEventListener('click', ()=> {
//         item.classList.toggle("checkItem");
//     });
// });

// actionItemsFavo.forEach((item)=> {
//     item.addEventListener('click', ()=> {
//         item.classList.toggle("checkItem");
//     });
// });

const numHeart = document.getElementById("countHearts");
const numShopping = document.getElementById("countShopping");
const heartMobile = document.querySelector(".heart");
const shoppingMobile = document.querySelector(".shopping");


let countHearts = 0;
let countShopping = 0;

// function increaseHeart() {
//     countHearts++;
// }
// function increaseShop() {
//     countShopping++;
// }
// function decreaseHeart() {
//     countHearts--;
// }
// function decreaseShop() {
//     countShopping--;
// }


// hearts.forEach((heart)=> {
//     heart.parentElement.addEventListener('click', ()=> {
//         if (heart.parentElement.classList.contains("checkItem")) {
//             increaseHeart();
//         } else decreaseHeart();

//         // numHeart.innerHTML = regionProductsFavo.childElementCount;
//         // heartMobile.firstElementChild.innerHTML = regionProductsFavo.childElementCount;

//         if (countHearts > 0) {
//             numHeart.previousElementSibling.style.color = 'var(--bittersweet)';
//             heartMobile.style.color = 'var(--bittersweet)';
//         } else {
//             numHeart.previousElementSibling.style.color = '';
//             heartMobile.style.color = '';
//         }
//     })
// });

// pluses.forEach((plus)=> {
//     plus.parentElement.addEventListener('click', ()=> {
//         if (plus.parentElement.classList.contains("checkItem")) {
//             increaseShop();
//         } else decreaseShop();

//         // numShopping.innerHTML = countShopping;
//         // shoppingMobile.firstElementChild.innerHTML = countShopping;

//         if (countHearts > 0) {
//             numShopping.previousElementSibling.style.color = 'var(--bittersweet)';
//             shoppingMobile.style.color = 'var(--bittersweet)';
//         } else {
//             numShopping.previousElementSibling.style.color = '';
//             shoppingMobile.style.color = '';
//         }
//     })
// });

const btns = document.querySelectorAll('button');

btns.forEach((btn)=> {
    btn.addEventListener('mousemove', (e)=> {
        let x = e.offsetX;
        let y = e.offsetY;
    
        btn.style.setProperty("--x", `${x}px`);
        btn.style.setProperty("--y", `${y}px`);
    })
})


// Cart Page 

// let num = 188103;
// console.log(num);

const homeProducts = document.querySelectorAll(".home .item");
const cartProducts = document.querySelectorAll(".cart .item");
const favoProducts = document.querySelectorAll(".favorite .item");
const menProducts = document.querySelectorAll(".men .item");
const womenProducts = document.querySelectorAll(".women .item");
const jewelryProducts = document.querySelectorAll(".jewelry .item");
const perfumeProducts = document.querySelectorAll(".perfume .item");
const offerProducts = document.querySelectorAll(".offer .item");

const regionProductsCart = document.querySelector(".cart #product_cart_region .contain_product_cart");
const regionProductsFavo = document.querySelector(".favorite #product_favo_region .contain_product_favo");


// Add products to cart & favo

let checkProductCart;
let checkProductFavo;

let productListCart;
let productListFavo;


// local storage for products cart
if (localStorage.getItem("productsCart") == null) {
    productListCart = [];
} else {
    productListCart = JSON.parse(localStorage.getItem("productsCart"));
    // createProduct(productListCart, regionProductsCart);
}

// local storage for products favo
if (localStorage.getItem("productsFavo") == null) {
    productListFavo = [];
} else {
    productListFavo = JSON.parse(localStorage.getItem("productsFavo"));
    // createProduct(productListFavo.splice(0,1), regionProductsFavo);
}

// to check if the array contain the product that you want to add to cart
if (localStorage.getItem("checkCart") == null) {
    checkProductCart = [];
} else {
    checkProductCart = JSON.parse(localStorage.getItem("checkCart"));
}

// to check if the array contain the product that you want to add to favo
if (localStorage.getItem("checkFavo") == null) {
    checkProductFavo = [];
} else {
    checkProductFavo = JSON.parse(localStorage.getItem("checkFavo"));
}

function createProduct(listOfProducts, region = productListCart) {
    let cartoona;
    for (let i = 0; i < listOfProducts.length; i++) {
        cartoona += `<div class="item productIndex">
                    <img src="${listOfProducts[i].imgURL1}" alt="jacket 2">
                    <img src="${listOfProducts[i].imgURL2}" alt="jacket 4">
                    
                    <div class="details">
                        <h3 class="title_product">${listOfProducts[i].title}</h3>
                        <p class="desc">${listOfProducts[i].desc}</p>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                        </div>
                        <p class="price_product">${listOfProducts[i].price}</p>
                        <button onclick = "removeProduct(${i})"><span>remove</span></button>
                    </div>
                </div>`;
    }

    region.innerHTML = cartoona;

    // to remove undefined in the region of products (cart or favo)
    region.removeChild(region.firstChild);
}


function total() {
    getData();
    createProduct(productListFavo, regionProductsFavo);
    createProduct(productListCart, regionProductsCart);
    counterIcon();
    
}

function counterIcon() {
    if (regionProductsFavo.childElementCount > 0) {
        numHeart.previousElementSibling.style.color = 'var(--bittersweet)';
        heartMobile.style.color = 'var(--bittersweet)';
    } else {
        numHeart.previousElementSibling.style.color = '';
        heartMobile.style.color = '';
    }

    if (regionProductsCart.childElementCount > 0) {
        numShopping.previousElementSibling.style.color = 'var(--bittersweet)';
        numShopping.style.color = 'var(--bittersweet)';
    } else {
        numShopping.previousElementSibling.style.color = '';
        numShopping.style.color = '';
    }

    numHeart.innerHTML = regionProductsFavo.childElementCount;
    heartMobile.firstElementChild.innerHTML = regionProductsFavo.childElementCount;
    numShopping.innerHTML = regionProductsCart.childElementCount;
    shoppingMobile.firstElementChild.innerHTML = regionProductsCart.childElementCount;
}

// get Details of item to variable productList and set localStorage

function getData() {
    homeProducts.forEach(item => {
        iconHeart = item.childNodes[5].firstElementChild.firstElementChild;
        iconPlus = item.childNodes[5].firstElementChild.lastElementChild;
        iconHeart.onclick = ()=> {
            let productDetailsOfProduct = {
                title: item.childNodes[7].childNodes[1].innerHTML,
                imgURL1: item.childNodes[1].src,
                imgURL2: item.childNodes[3].src,
                desc: item.childNodes[7].childNodes[3].innerHTML,
                price: item.childNodes[7].childNodes[7].innerHTML,
                priceN: (item.childNodes[7].childNodes[7].firstElementChild.innerHTML).slice(1),
                
            }


            if (checkProductFavo.indexOf((productDetailsOfProduct.imgURL1).toString()) == -1) {
                checkProductFavo.push((productDetailsOfProduct.imgURL1).toString());
                localStorage.setItem("checkFavo", JSON.stringify(checkProductFavo));
                productListFavo.push(productDetailsOfProduct);
                localStorage.setItem("productsFavo", JSON.stringify(productListFavo));
                total();
                tipNewProduct.style.opacity = 1;
                setTimeout(() => {
                    tipNewProduct.style.opacity = 0;
                    
                }, 1500);
            } else {
                tipExistProduct.style.opacity = 1;
                setTimeout(() => {
                    tipExistProduct.style.opacity = 0;
                    
                }, 1500);
            }

            
        };

        iconPlus.onclick = ()=> {
            let productDetailsOfProduct = {
                title: item.childNodes[7].childNodes[1].innerHTML,
                imgURL1: item.childNodes[1].src,
                imgURL2: item.childNodes[3].src,
                desc: item.childNodes[7].childNodes[3].innerHTML,
                price: item.childNodes[7].childNodes[7].innerHTML,
                priceN: (item.childNodes[7].childNodes[7].firstElementChild.innerHTML).slice(1),
            }
            
            if (checkProductCart.indexOf((productDetailsOfProduct.imgURL1).toString()) == -1) {
                checkProductCart.push((productDetailsOfProduct.imgURL1).toString());
                localStorage.setItem("checkCart", JSON.stringify(checkProductCart));
                productListCart.push(productDetailsOfProduct);
                localStorage.setItem("productsCart", JSON.stringify(productListCart));
                total();
                tipNewProduct.style.opacity = 1;
                setTimeout(() => {
                    tipNewProduct.style.opacity = 0;
                }, 1500);
            } else {
                tipExistProduct.style.opacity = 1;
                setTimeout(() => {
                    tipExistProduct.style.opacity = 0;
                }, 1500);
            }
            
        };
    });

    cartProducts.forEach(item => {
        iconHeart = item.childNodes[5].firstElementChild.firstElementChild;
        iconPlus = item.childNodes[5].firstElementChild.lastElementChild;
        
        iconHeart.onclick = ()=> {
            let productDetailsOfProduct = {
                title: item.childNodes[7].childNodes[1].innerHTML,
                imgURL1: item.childNodes[1].src,
                imgURL2: item.childNodes[3].src,
                desc: item.childNodes[7].childNodes[3].innerHTML,
                price: item.childNodes[7].childNodes[7].innerHTML,
                priceN: (item.childNodes[7].childNodes[7].firstElementChild.innerHTML).slice(1),
            }

            if (checkProductFavo.indexOf((productDetailsOfProduct.imgURL1).toString()) == -1) {
                checkProductFavo.push((productDetailsOfProduct.imgURL1).toString());
                localStorage.setItem("checkFavo", JSON.stringify(checkProductFavo));
                productListFavo.push(productDetailsOfProduct);
                localStorage.setItem("productsFavo", JSON.stringify(productListFavo));
                total();
                tipNewProduct.style.opacity = 1;
                setTimeout(() => {
                    tipNewProduct.style.opacity = 0;
                    
                }, 1500);

            } else {
                tipExistProduct.style.opacity = 1;
                setTimeout(() => {
                    tipExistProduct.style.opacity = 0;
                    
                }, 1500);
            }
            
        };

        iconPlus.onclick = ()=> {
            let productDetailsOfProduct = {
                title: item.childNodes[7].childNodes[1].innerHTML,
                imgURL1: item.childNodes[1].src,
                imgURL2: item.childNodes[3].src,
                desc: item.childNodes[7].childNodes[3].innerHTML,
                price: item.childNodes[7].childNodes[7].innerHTML,
                priceN: (item.childNodes[7].childNodes[7].firstElementChild.innerHTML).slice(1),
            }
    
            if (checkProductCart.indexOf((productDetailsOfProduct.imgURL1).toString()) == -1) {
                checkProductCart.push((productDetailsOfProduct.imgURL1).toString());
                localStorage.setItem("checkCart", JSON.stringify(checkProductCart));
                productListCart.push(productDetailsOfProduct);
                localStorage.setItem("productsCart", JSON.stringify(productListCart));
                total();
                tipNewProduct.style.opacity = 1;
                setTimeout(() => {
                    tipNewProduct.style.opacity = 0;
                    
                }, 1500);
            } else {
                tipExistProduct.style.opacity = 1;
                setTimeout(() => {
                    tipExistProduct.style.opacity = 0;
                    
                }, 1500);
            }
            
        };
    });

    favoProducts.forEach(item => {
        iconHeart = item.childNodes[5].firstElementChild.firstElementChild;
        iconPlus = item.childNodes[5].firstElementChild.lastElementChild;

        iconHeart.onclick = ()=> {
            let productDetailsOfProduct = {
                title: item.childNodes[7].childNodes[1].innerHTML,
                imgURL1: item.childNodes[1].src,
                imgURL2: item.childNodes[3].src,
                desc: item.childNodes[7].childNodes[3].innerHTML,
                price: item.childNodes[7].childNodes[7].innerHTML,
                priceN: (item.childNodes[7].childNodes[7].firstElementChild.innerHTML).slice(1),
            }
    

            if (checkProductFavo.indexOf((productDetailsOfProduct.imgURL1).toString()) == -1) {
                checkProductFavo.push((productDetailsOfProduct.imgURL1).toString());
                localStorage.setItem("checkFavo", JSON.stringify(checkProductFavo));
                productListFavo.push(productDetailsOfProduct);
                localStorage.setItem("productsFavo", JSON.stringify(productListFavo));
                total();
                tipNewProduct.style.opacity = 1;
                setTimeout(() => {
                    tipNewProduct.style.opacity = 0;
                    
                }, 1500);
            } else {
                tipExistProduct.style.opacity = 1;
                setTimeout(() => {
                    tipExistProduct.style.opacity = 0;
                    
                }, 1500);
            }
            
        };

        iconPlus.onclick = ()=> {
            let productDetailsOfProduct = {
                title: item.childNodes[7].childNodes[1].innerHTML,
                imgURL1: item.childNodes[1].src,
                imgURL2: item.childNodes[3].src,
                desc: item.childNodes[7].childNodes[3].innerHTML,
                price: item.childNodes[7].childNodes[7].innerHTML,
                priceN: (item.childNodes[7].childNodes[7].firstElementChild.innerHTML).slice(1),
            }
    
            if (checkProductCart.indexOf((productDetailsOfProduct.imgURL1).toString()) == -1) {
                checkProductCart.push((productDetailsOfProduct.imgURL1).toString());
                localStorage.setItem("checkCart", JSON.stringify(checkProductCart));
                productListCart.push(productDetailsOfProduct);
                localStorage.setItem("productsCart", JSON.stringify(productListCart));
                total();
                tipNewProduct.style.opacity = 1;
                setTimeout(() => {
                    tipNewProduct.style.opacity = 0;
                    
                }, 1500);
            } else {
                tipExistProduct.style.opacity = 1;
                setTimeout(() => {
                    tipExistProduct.style.opacity = 0;
                    
                }, 1500);
            }
            
        };
    });

    menProducts.forEach(item => {
        iconHeart = item.childNodes[5].firstElementChild.firstElementChild;
        iconPlus = item.childNodes[5].firstElementChild.lastElementChild;

        iconHeart.onclick = ()=> {
            let productDetailsOfProduct = {
                title: item.childNodes[7].childNodes[1].innerHTML,
                imgURL1: item.childNodes[1].src,
                imgURL2: item.childNodes[3].src,
                desc: item.childNodes[7].childNodes[3].innerHTML,
                price: item.childNodes[7].childNodes[7].innerHTML,
                priceN: (item.childNodes[7].childNodes[7].firstElementChild.innerHTML).slice(1),
            }

            if (checkProductFavo.indexOf((productDetailsOfProduct.imgURL1).toString()) == -1) {
                checkProductFavo.push((productDetailsOfProduct.imgURL1).toString());
                localStorage.setItem("checkFavo", JSON.stringify(checkProductFavo));
                productListFavo.push(productDetailsOfProduct);
                localStorage.setItem("productsFavo", JSON.stringify(productListFavo));
                total();
                tipNewProduct.style.opacity = 1;
                setTimeout(() => {
                    tipNewProduct.style.opacity = 0;
                    
                }, 1500);
            } else {
                tipExistProduct.style.opacity = 1;
                setTimeout(() => {
                    tipExistProduct.style.opacity = 0;
                    
                }, 1500);
            }
            
        };

        iconPlus.onclick = ()=> {
            let productDetailsOfProduct = {
                title: item.childNodes[7].childNodes[1].innerHTML,
                imgURL1: item.childNodes[1].src,
                imgURL2: item.childNodes[3].src,
                desc: item.childNodes[7].childNodes[3].innerHTML,
                price: item.childNodes[7].childNodes[7].innerHTML,
                priceN: (item.childNodes[7].childNodes[7].firstElementChild.innerHTML).slice(1),
            }
    
            if (checkProductCart.indexOf((productDetailsOfProduct.imgURL1).toString()) == -1) {
                checkProductCart.push((productDetailsOfProduct.imgURL1).toString());
                localStorage.setItem("checkCart", JSON.stringify(checkProductCart));
                productListCart.push(productDetailsOfProduct);
                localStorage.setItem("productsCart", JSON.stringify(productListCart));
                total();
                tipNewProduct.style.opacity = 1;
                setTimeout(() => {
                    tipNewProduct.style.opacity = 0;
                    
                }, 1500);
            } else {
                tipExistProduct.style.opacity = 1;
                setTimeout(() => {
                    tipExistProduct.style.opacity = 0;
                    
                }, 1500);
            }
            
        };
    });

    womenProducts.forEach(item => {
        iconHeart = item.childNodes[5].firstElementChild.firstElementChild;
        iconPlus = item.childNodes[5].firstElementChild.lastElementChild;

        iconHeart.onclick = ()=> {
            let productDetailsOfProduct = {
                title: item.childNodes[7].childNodes[1].innerHTML,
                imgURL1: item.childNodes[1].src,
                imgURL2: item.childNodes[3].src,
                desc: item.childNodes[7].childNodes[3].innerHTML,
                price: item.childNodes[7].childNodes[7].innerHTML,
                priceN: (item.childNodes[7].childNodes[7].firstElementChild.innerHTML).slice(1),
            }

            if (checkProductFavo.indexOf((productDetailsOfProduct.imgURL1).toString()) == -1) {
                checkProductFavo.push((productDetailsOfProduct.imgURL1).toString());
                localStorage.setItem("checkFavo", JSON.stringify(checkProductFavo));
                productListFavo.push(productDetailsOfProduct);
                localStorage.setItem("productsFavo", JSON.stringify(productListFavo));
                total();
                tipNewProduct.style.opacity = 1;
                setTimeout(() => {
                    tipNewProduct.style.opacity = 0;
                    
                }, 1500);
            } else {
                tipExistProduct.style.opacity = 1;
                setTimeout(() => {
                    tipExistProduct.style.opacity = 0;
                    
                }, 1500);
            }
            
        };

        iconPlus.onclick = ()=> {
            let productDetailsOfProduct = {
                title: item.childNodes[7].childNodes[1].innerHTML,
                imgURL1: item.childNodes[1].src,
                imgURL2: item.childNodes[3].src,
                desc: item.childNodes[7].childNodes[3].innerHTML,
                price: item.childNodes[7].childNodes[7].innerHTML,
                priceN: (item.childNodes[7].childNodes[7].firstElementChild.innerHTML).slice(1),
            }
    
            if (checkProductCart.indexOf((productDetailsOfProduct.imgURL1).toString()) == -1) {
                checkProductCart.push((productDetailsOfProduct.imgURL1).toString());
                localStorage.setItem("checkCart", JSON.stringify(checkProductCart));
                productListCart.push(productDetailsOfProduct);
                localStorage.setItem("productsCart", JSON.stringify(productListCart));
                total();
                tipNewProduct.style.opacity = 1;
                setTimeout(() => {
                    tipNewProduct.style.opacity = 0;
                    
                }, 1500);
            } else {
                tipExistProduct.style.opacity = 1;
                setTimeout(() => {
                    tipExistProduct.style.opacity = 0;
                    
                }, 1500);
            }
            
        };
    });

    jewelryProducts.forEach(item => {
        iconHeart = item.childNodes[5].firstElementChild.firstElementChild;
        iconPlus = item.childNodes[5].firstElementChild.lastElementChild;

        iconHeart.onclick = ()=> {
            let productDetailsOfProduct = {
                title: item.childNodes[7].childNodes[1].innerHTML,
                imgURL1: item.childNodes[1].src,
                imgURL2: item.childNodes[3].src,
                desc: item.childNodes[7].childNodes[3].innerHTML,
                price: item.childNodes[7].childNodes[7].innerHTML,
                priceN: (item.childNodes[7].childNodes[7].firstElementChild.innerHTML).slice(1),
            }

            if (checkProductFavo.indexOf((productDetailsOfProduct.imgURL1).toString()) == -1) {
                checkProductFavo.push((productDetailsOfProduct.imgURL1).toString());
                localStorage.setItem("checkFavo", JSON.stringify(checkProductFavo));
                productListFavo.push(productDetailsOfProduct);
                localStorage.setItem("productsFavo", JSON.stringify(productListFavo));
                total();
                tipNewProduct.style.opacity = 1;
                setTimeout(() => {
                    tipNewProduct.style.opacity = 0;
                    
                }, 1500);
            } else {
                tipExistProduct.style.opacity = 1;
                setTimeout(() => {
                    tipExistProduct.style.opacity = 0;
                    
                }, 1500);
            }
            
        };

        iconPlus.onclick = ()=> {
            let productDetailsOfProduct = {
                title: item.childNodes[7].childNodes[1].innerHTML,
                imgURL1: item.childNodes[1].src,
                imgURL2: item.childNodes[3].src,
                desc: item.childNodes[7].childNodes[3].innerHTML,
                price: item.childNodes[7].childNodes[7].innerHTML,
                priceN: (item.childNodes[7].childNodes[7].firstElementChild.innerHTML).slice(1),
            }
    
            if (checkProductCart.indexOf((productDetailsOfProduct.imgURL1).toString()) == -1) {
                checkProductCart.push((productDetailsOfProduct.imgURL1).toString());
                localStorage.setItem("checkCart", JSON.stringify(checkProductCart));
                productListCart.push(productDetailsOfProduct);
                localStorage.setItem("productsCart", JSON.stringify(productListCart));
                total();
                tipNewProduct.style.opacity = 1;
                setTimeout(() => {
                    tipNewProduct.style.opacity = 0;
                    
                }, 1500);
            } else {
                tipExistProduct.style.opacity = 1;
                setTimeout(() => {
                    tipExistProduct.style.opacity = 0;
                    
                }, 1500);
            }
            
        };
    });

    perfumeProducts.forEach(item => {
        iconHeart = item.childNodes[5].firstElementChild.firstElementChild;
        iconPlus = item.childNodes[5].firstElementChild.lastElementChild;

        iconHeart.onclick = ()=> {
            let productDetailsOfProduct = {
                title: item.childNodes[7].childNodes[1].innerHTML,
                imgURL1: item.childNodes[1].src,
                imgURL2: item.childNodes[3].src,
                desc: item.childNodes[7].childNodes[3].innerHTML,
                price: item.childNodes[7].childNodes[7].innerHTML,
                priceN: (item.childNodes[7].childNodes[7].firstElementChild.innerHTML).slice(1),
            }

            if (checkProductFavo.indexOf((productDetailsOfProduct.imgURL1).toString()) == -1) {
                checkProductFavo.push((productDetailsOfProduct.imgURL1).toString());
                localStorage.setItem("checkFavo", JSON.stringify(checkProductFavo));
                productListFavo.push(productDetailsOfProduct);
                localStorage.setItem("productsFavo", JSON.stringify(productListFavo));
                total();
                tipNewProduct.style.opacity = 1;
                setTimeout(() => {
                    tipNewProduct.style.opacity = 0;
                    
                }, 1500);
            } else {
                tipExistProduct.style.opacity = 1;
                setTimeout(() => {
                    tipExistProduct.style.opacity = 0;
                    
                }, 1500);
            }
            
        };

        iconPlus.onclick = ()=> {
            let productDetailsOfProduct = {
                title: item.childNodes[7].childNodes[1].innerHTML,
                imgURL1: item.childNodes[1].src,
                imgURL2: item.childNodes[3].src,
                desc: item.childNodes[7].childNodes[3].innerHTML,
                price: item.childNodes[7].childNodes[7].innerHTML,
                priceN: (item.childNodes[7].childNodes[7].firstElementChild.innerHTML).slice(1),
            }
    
            if (checkProductCart.indexOf((productDetailsOfProduct.imgURL1).toString()) == -1) {
                checkProductCart.push((productDetailsOfProduct.imgURL1).toString());
                localStorage.setItem("checkCart", JSON.stringify(checkProductCart));
                productListCart.push(productDetailsOfProduct);
                localStorage.setItem("productsCart", JSON.stringify(productListCart));
                total();
                tipNewProduct.style.opacity = 1;
                setTimeout(() => {
                    tipNewProduct.style.opacity = 0;
                    
                }, 1500);
            } else {
                tipExistProduct.style.opacity = 1;
                setTimeout(() => {
                    tipExistProduct.style.opacity = 0;
                    
                }, 1500);
            }
            
        };
    });

    offerProducts.forEach(item => {
        iconHeart = item.childNodes[5].firstElementChild.firstElementChild;
        iconPlus = item.childNodes[5].firstElementChild.lastElementChild;

        iconHeart.onclick = ()=> {
            let productDetailsOfProduct = {
                title: item.childNodes[7].childNodes[1].innerHTML,
                imgURL1: item.childNodes[1].src,
                imgURL2: item.childNodes[3].src,
                desc: item.childNodes[7].childNodes[3].innerHTML,
                price: item.childNodes[7].childNodes[7].innerHTML,
                priceN: (item.childNodes[7].childNodes[7].firstElementChild.innerHTML).slice(1),
            }

            if (checkProductFavo.indexOf((productDetailsOfProduct.imgURL1).toString()) == -1) {
                checkProductFavo.push((productDetailsOfProduct.imgURL1).toString());
                localStorage.setItem("checkFavo", JSON.stringify(checkProductFavo));
                productListFavo.push(productDetailsOfProduct);
                localStorage.setItem("productsFavo", JSON.stringify(productListFavo));
                total();
                tipNewProduct.style.opacity = 1;
                setTimeout(() => {
                    tipNewProduct.style.opacity = 0;
                    
                }, 1500);
            } else {
                tipExistProduct.style.opacity = 1;
                setTimeout(() => {
                    tipExistProduct.style.opacity = 0;
                    
                }, 1500);
            }
            
        };

        iconPlus.onclick = ()=> {
            let productDetailsOfProduct = {
                title: item.childNodes[7].childNodes[1].innerHTML,
                imgURL1: item.childNodes[1].src,
                imgURL2: item.childNodes[3].src,
                desc: item.childNodes[7].childNodes[3].innerHTML,
                price: item.childNodes[7].childNodes[7].innerHTML,
                priceN: (item.childNodes[7].childNodes[7].firstElementChild.innerHTML).slice(1),
            }
    
            if (checkProductCart.indexOf((productDetailsOfProduct.imgURL1).toString()) == -1) {
                checkProductCart.push((productDetailsOfProduct.imgURL1).toString());
                localStorage.setItem("checkCart", JSON.stringify(checkProductCart));
                productListCart.push(productDetailsOfProduct);
                localStorage.setItem("productsCart", JSON.stringify(productListCart));
                total();
                tipNewProduct.style.opacity = 1;
                setTimeout(() => {
                    tipNewProduct.style.opacity = 0;
                    
                }, 1500);
            } else {
                tipExistProduct.style.opacity = 1;
                setTimeout(() => {
                    tipExistProduct.style.opacity = 0;
                    
                }, 1500);
            }
            
        };
    });

    totalPriceProduct();

}

window.onload = ()=> {
    total();
}

function totalPriceProduct() {
    let totalPrice = 0;
    productListCart.forEach(mido => {
        totalPrice += Number(mido.priceN);
    })
    document.getElementById("price").innerHTML = "$" + totalPrice;
}

function removeProduct(id) {
    let abo = productListFavo[id];

    productListCart.splice(id, 1);
    localStorage.setItem("productsCart", JSON.stringify(productListCart));
    
    productListFavo.splice(id, 1);
    localStorage.setItem("productsFavo", JSON.stringify(productListFavo));

    checkProductFavo.splice(id, 1);
    localStorage.setItem("checkFavo", JSON.stringify(checkProductFavo));

    checkProductCart.splice(id, 1);
    localStorage.setItem("checkCart", JSON.stringify(checkProductCart));

    createProduct(productListCart, regionProductsCart);
    createProduct(productListFavo, regionProductsFavo);
    totalPriceProduct();
    counterIcon();

}



// favoProducts.forEach(item => {
//     // iconPlus = item.childNodes[5].firstElementChild.lastElementChild;
//     iconHeart = item.childNodes[5].firstElementChild.firstElementChild;

//     // iconPlus.addEventListener('click', ()=> {
//     //     createProduct(regionProductsCart);
//     // });

//     iconHeart.addEventListener('click', ()=> {
//         getData();
//     });
// });


// homeProducts.forEach(item => {
//     // iconPlus = (item.childNodes[5].firstElementChild.firstElementChild);
//     iconHeart = (item.childNodes[5].firstElementChild.firstElementChild);

//     // iconPlus.addEventListener('click', ()=> {
//     //     getData();
//     //     createProduct(regionProductsCart, productList);
//     // });

//     iconHeart.addEventListener('click', ()=> {
//         getData();
//     });
// });

// cartProducts.forEach(item => {
//     iconPlus = item.childNodes[5].firstElementChild.lastElementChild;
//     iconHeart = item.childNodes[5].firstElementChild.firstElementChild;

//     iconPlus.addEventListener('click', ()=> {
//         createProduct(regionProductsCart);
//     });

//     iconHeart.addEventListener('click', ()=> {
//         createProduct(regionProductsFavo);
//     });
// });

// favoProducts.forEach(item => {
//     // iconPlus = item.childNodes[5].firstElementChild.lastElementChild;
//     iconHeart = item.childNodes[5].firstElementChild.firstElementChild;

//     // iconPlus.addEventListener('click', ()=> {
//     //     createProduct(regionProductsCart);
//     // });

//     iconHeart.addEventListener('click', ()=> {
//         getData();
//     });
// });