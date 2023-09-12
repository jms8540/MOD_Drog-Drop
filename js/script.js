const addBt = document.querySelector(".addBt");
const addBtImg = document.querySelector(".addBt_img");
const contents = document.querySelector(".contents");

addBt.addEventListener("click", () => {
  const addMenu = document.createElement("div");
  const addMenu_title = document.createElement("div");
  const addMenu_Item = document.createElement("div");
  // const addMenu_addBox = document.createElement("div");
  const addMenu_addBt = document.createElement("img");
  addBtImg.style.height = "54px";
  setTimeout(() => (addBtImg.style.height = `${64}px`), 100);
  addMenu.classList.add("mainItem");
  contents.appendChild(addMenu); // addMenu
  addMenu_title.classList.add("mainItem_title");
  addMenu_title.textContent = "title"
  addMenu.appendChild(addMenu_title); // addMeun title
  addMenu_Item.classList.add("addMenu_Item");
  // addMenu_addBox.classList.add("addMenu_addBt");
  // addMenu.appendChild(addMenu_addBox); // addMenu_addBt
  addMenu_addBt.setAttribute("src", "./img/menuItem_addIcon.png");
  addMenu_addBt.classList.add("addMenu_addBt_img");
  addMenu.appendChild(addMenu_addBt);  // addMenu_addBt_img
  // main_menu 추가 버튼

  // const sub_menu = document.querySelectorAll(".addMenu_addBt_img");
  // const sub_menuArr = [...sub_menu];
  // sub_menuArr.forEach((e, idx)=>{
  //   e.addEventListener("click", ()=>{
  //     const sub_item = document.createElement("div");
  //     sub_menu[idx].style.height = "50px";
  //     setTimeout(() => (sub_menu[idx].style.height = `${40}px`), 100);
  //     sub_item.classList.add("sub_item");
  //     sub_menu[idx].parentNode.appendChild(sub_item);
  //     const subMenu_addBt = document.querySelectorAll(".addMenu_addBt_img");
  //     const subMenu_title = document.querySelector(".mainItem_title");
  //     subMenu_addBt.forEach(e =>{
  //       e.addEventListener("click",(el) =>{
          
  //       })
  //     })
      
  //   });
  // });
  // sub_menu 추가 버튼
});

const sub_menu = document.querySelector(".addMenu_addBt_img");
const subMenu_title = document.querySelector(".mainItem_title");
sub_menu.addEventListener("click", ()=>{
  const sub_menu_item = document.createElement("div");
  
  subMenu_title
});

// subMenu_addBt.addEventListener("click", ()=>{
//   const addSubmenu_item = document.createElement("div");
//   addSubmenu_item.classList.add("addSubmenu_item");
//   subMenu_title.appendChild(addSubmenu_item);
// });
// console.log(subMenu_addBt)




