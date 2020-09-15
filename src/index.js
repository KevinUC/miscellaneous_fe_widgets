import _ from "lodash";
import "./style.scss";

// consts and lets
let classNames = {
  header: {
    menuWrapper: "InfoTypeSelections flex justify-around",
    activeMenuItem: "Active",
    slidingBorderBottom: "SlidingBorderBottom",
  },
};

let headerMenuItemsCnt = 6;
let activeIdx = 0;

// methods
let handleClickHeaderMenuItem = function (menuItemsList, curIdx) {
  let className = classNames.header.activeMenuItem;
  let activeEle = menuItemsList[activeIdx];
  let curEle = menuItemsList[curIdx];
  let slidingBorderBottomEle = document.getElementsByClassName(
    classNames.header.slidingBorderBottom
  )[0];
  let newWidth = curEle.clientWidth - 11;
  let leftOffset = curEle.offsetLeft + 16;

  slidingBorderBottomEle.style.left = leftOffset + "px";
  slidingBorderBottomEle.style.width = newWidth + "px";

  activeEle.classList.toggle(className);
  curEle.classList.toggle(className);

  activeIdx = curIdx;
};

(function () {
  // set up onClick handlers
  let headerMenuList = document.getElementsByClassName(
    classNames.header.menuWrapper
  )[0].children;

  for (let idx = 0; idx < headerMenuItemsCnt; idx++) {
    headerMenuList[idx].addEventListener(
      "click",
      function (e) {
        handleClickHeaderMenuItem(headerMenuList, idx);
      },
      false
    );
  }
})();
