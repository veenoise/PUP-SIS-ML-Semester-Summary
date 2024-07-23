let buttonLoad = document.querySelector(".content-header");
let head = document.querySelector("head");
let body = document.querySelector("body");
let cardHeader = document.querySelectorAll(".card-header");
let cardBody = document.querySelectorAll(".card-body");
let buttonPage1;
const styling =
  "\
<style>\
  span {\
    display: inline-flex;\
    align-self: center;\
  }\
  \
  .span {\
    color: #DAC147;\
    font-size: 18px;\
  }\
  \
  .body {\
    position: fixed;\
    z-index: 10000;\
    background: linear-gradient(177.53deg, #161A2D 1.99%, #21344A 49.96%, #2D5065 73.95%, #438A93 97.93%);\
    width: 100%;\
    top: 0;\
    height: 100vh;\
    overflow: hidden;\
  }\
  \
  .center {\
    display: flex;\
    justify-content: center;\
  }\
  \
  .grid-container-page-1 {\
    display: grid;\
    grid-template-columns: auto 1fr;\
  }\
  \
  .grid-container-page-2 {\
    display: grid;\
    grid-template-columns: 1fr auto;\
  }\
  \
  .grid-container-200 {\
    display: grid;\
    grid-template-columns: 200px 662px 1fr;\
  }\
  \
  .grid-3 {\
    display: grid;\
    grid-template-columns: 50px auto 100px;\
  }\
  \
  .bar {\
    height: 8px;\
    background-color: #131F2B;\
    border-radius: 10px;\
  }\
  \
  #loadSemesterSummary:hover {\
    cursor: pointer;\
  }\
  \
  #notification-message {\
    width: 100vw;\
    display: flex;\
    justify-content: center;\
  }\
  \
  .bar-fill {\
    height: inherit;\
    background-color: #6EC7FF;\
    border-radius: inherit;\
    \
  }\
  \
  .gap {\
    gap: 16px;\
  }\
  \
  .blue {\
    color: #8CE7F9;\
  }\
  \
  .white {\
    color: white;\
  }\
  \
  .yellow {\
    color: #DAC147;\
  }\
  \
  .rank {\
    font-size: 48px;\
  }\
  \
  .frequency {\
    font-size: 24px;\
  }\
  \
  .heading-label {\
    font-size: 18px;\
  }\
  \
  .content-fade {\
    animation: fade 1.5s ease-in-out;\
  }\
  \
  #quote {\
    font-size: 36px;\
  }\
  \
  .font-md {\
    font-size: 24px;\
  }\
  \
  .font-highlight {\
    font-size: 18px;\
  }\
  \
  .italic {\
    font-style: italic;\
  }\
  \
  .bold {\
    font-weight: bold;\
  }\
  \
  .text-left {\
    text-align: left;\
  }\
  \
  .text-right {\
    text-align: right;\
  }\
  \
  .text-center{\
    text-align: center;\
  }\
  \
  .spacing-10 {\
    letter-spacing: .1rem;\
  }\
  \
  .spacing-20 {\
    letter-spacing: .2rem;\
  }\
  \
  .full-height {\
    height: 100vh;\
  }\
  \
  .height-100 {\
    height: 100%;\
  }\
  \
  .full-width {\
    width: 100vw;\
  }\
  \
  .padding-x {\
    padding: 0 24px;\
  }\
  \
  .margin-x {\
    margin: 0 24px;\
  }\
  \
  .margin-top {\
    margin-top: 42px;\
  }\
  \
  .margin-bottom-custom {\
    margin-bottom: 24px;\
  }\
  \
  .margin-bottom-lg {\
    margin-bottom: 72px;\
  }\
  \
  .margin-bottom-sm {\
    margin-bottom: 16px;\
  }\
  \
  .margin-bottom-xs {\
    margin-bottom: 8px;\
  }\
  \
  .content-max-height {\
    max-height: 100vh;\
  }\
  \
  .flex {\
    display: flex;\
  }\
  \
  .flex-col {\
    flex-direction: column;\
  }\
  \
  .justify-content-center {\
    justify-content: center;\
  }\
  \
  .justify-content-space-between {\
    justify-content: space-between;\
  }\
  \
  .justify-content-end {\
    justify-content: end;\
  }\
  \
  .align-items-center {\
    align-items: center;\
  }\
  \
  .align-content-space-between {\
    align-content: space-between;\
  }\
  \
  #back {\
    position: fixed;\
    top: 5%;\
    left: 2%;\
    z-index: 100100;\
  }\
  \
  #back:hover {\
    cursor: pointer;\
    filter: drop-shadow(0px 0px 4px #99BAEC);\
  }\
  \
  #intro {\
    height: 100%;\
    position: fixed;\
    z-index: 100;\
    top: -15%;\
  }\
  \
  #notification-message {\
    position: fixed;\
    bottom: 10%;\
  }\
  \
  #left-footer {\
    position: fixed;\
    left: 0;\
    bottom: 0;\
  }\
  \
  #right-footer {\
    position: fixed;\
    right: 0;\
    bottom: 0;\
  }\
  \
  #lylia {\
    height: 100vh;\
  }\
  \
  #chip {\
    height: 100vh;\
  }\
  \
  .move {\
    animation: move 0.6s ease-in-out;\
  }\
  \
  .buttons {\
    position: fixed;\
    bottom: 5%;\
    right: 2%;\
  }\
  \
  .buttons > button {\
    padding: 0 24px;\
    background-color: #406599;\
    border: #99BAEC solid 1px;\
  }\
  \
  .buttons > button:hover {\
    cursor: pointer;\
    box-shadow: 0px 0px 8px 4px #99BAEC;\
  }\
  \
  .border-test {\
    border: red solid 1px;\
  }\
  \
  #Polygon3 {\
    animation: polygon3 6s ease-in infinite;\
  }\
  \
  #Polygon14 {\
    animation: polygon3 5s ease-in infinite;\
  }\
  \
  #Polygon13 {\
    animation: polygon13 6s ease-in infinite;\
  }\
  \
  #Polygon12 {\
    animation: polygon3 4s ease-in infinite;\
  }\
  \
  #Polygon11 {\
    animation: polygon3 10s ease-in infinite;\
  }\
  \
  #Polygon10 {\
    animation: polygon3 12s ease-in infinite;\
  }\
  \
  #Polygon9 {\
    animation: polygon3 11s ease-in infinite;\
  }\
  \
  #Polygon7 {\
    animation: polygon3 6s ease-in infinite;\
  }\
  \
  #Polygon8 {\
    animation: polygon3 10s ease-in infinite;\
  }\
  \
  #Polygon6 {\
    animation: polygon3 8s ease-in infinite;\
  }\
  \
  #Polygon4 {\
    animation: polygon3 12s ease-in infinite;\
  }\
  \
  #Polygon17 {\
    animation: polygon17 3s ease-in infinite;\
  }\
  \
  #Polygon15 {\
    animation: polygon17 3s ease-in infinite;\
  }\
  \
  #Polygon21 {\
    animation: polygon17 7s ease-in infinite;\
  }\
  \
  #Polygon20 {\
    animation: polygon17 9s ease-in infinite;\
  }\
  \
  #Polygon19 {\
    animation: polygon17 11s ease-in infinite;\
  }\
  \
  #Polygon18 {\
    animation: polygon17 6s ease-in infinite; \
  }\
  \
  #Polygon16 {\
    animation: polygon17 7s ease-in infinite; \
  }\
  \
  @keyframes polygon3 {\
    from {\
      transform: translate(0, 0) ;\
      opacity: 0;\
    }\
    40% {\
      opacity: 100%;\
    }\
    to {\
      transform: translate(-80px, -80px);\
      opacity: 0;\
    }\
  }\
  \
  @keyframes polygon13 {\
    from {\
      transform: translate(0, 0) ;\
      opacity: 0;\
    }\
    40% {\
      opacity: 100%;\
    }\
    to {\
      transform: translate(-100px, -40px);\
      opacity: 0;\
    }\
  }\
  \
  @keyframes polygon17 {\
    from {\
      transform: translate(0, 0) ;\
      opacity: 0;\
    }\
    40% {\
      opacity: 100%;\
    }\
    to {\
      transform: translate(80px, -80px);\
      opacity: 0;\
    }\
  }\
  @keyframes move {\
    from {\
      transform: translateY(-100vh)\
    }\
    to {\
      transform: translateY(0)\
    }\
  }\
  \
  @keyframes fade {\
    from {\
      opacity: 0\
    }\
    to {\
      opacity: 100%;\
    }\
  }\
<style>\
";
const indexPage =
  '\
  <div class="body" id="indexPage">\
    <div class="nav">\
      <img width="32" id="back" alt="back button">\
    </div>\
    <div class="main">\
      <div class="center">\
        <img id="intro" alt="introduction banner">\
        <p id="notification-message" class="white">Click to look back over your performance in the previous semester.</p>\
      </div>\
    </div>\
    <div class="footer">\
      <svg width="560" height="240" viewBox="0 0 560 240" fill="none" xmlns="http://www.w3.org/2000/svg" id="left-footer">\
        <g id="Group-12">\
        <path id="Polygon3" d="M228.5 133L241.5 151.5L213 179.5L228.5 133Z" fill="url(#paint0_linear_20_258)"/>\
        <path id="Polygon14" d="M189 196L190.5 214.5L178 208.5L189 196Z" fill="#C2C3D5"/>\
        <path id="Polygon13" d="M375 149.5L520.5 255.5H431L375 149.5Z" fill="url(#paint1_linear_20_258)"/>\
        <path id="Polygon12" d="M326 210L393 245L340 265L326 210Z" fill="#4EA3C0"/>\
        <path id="Polygon11" d="M192 127L200.5 121.5L204.5 133.5L192 127Z" fill="#549ABF"/>\
        <path id="Polygon10" d="M47 76.5L57 71L62 93L47 76.5Z" fill="#B3C4C2"/>\
        <path id="Polygon9" d="M47.5 104L67 125L59.5 137.5L47.5 104Z" fill="url(#paint2_linear_20_258)"/>\
        <path id="Polygon8" d="M79 148L106.5 189.5L81 222L79 148Z" fill="url(#paint3_linear_20_258)"/>\
        <path id="Polygon7" d="M260 177.5L238 235.5L201.5 195.5L260 177.5Z" fill="url(#paint4_linear_20_258)"/>\
        <path id="Polygon6" d="M67 151V197L-62 99.5L67 151Z" fill="url(#paint5_linear_20_258)"/>\
        <path id="Polygon4" d="M134 174.5L154.5 204L120.5 260.5L134 174.5Z" fill="url(#paint6_linear_20_258)"/>\
        <path id="Rectangle" d="M0 0H560V240H0V0Z" fill="url(#paint7_linear_20_258)"/>\
        </g>\
        <defs>\
        <linearGradient id="paint0_linear_20_258" x1="208.5" y1="174" x2="235.5" y2="146.5" gradientUnits="userSpaceOnUse">\
        <stop stop-color="#7ECFED"/>\
        <stop offset="1" stop-color="#4994B4"/>\
        </linearGradient>\
        <linearGradient id="paint1_linear_20_258" x1="422.5" y1="227" x2="456.5" y2="212" gradientUnits="userSpaceOnUse">\
        <stop stop-color="#488DB4"/>\
        <stop offset="1" stop-color="#6CF2DA"/>\
        </linearGradient>\
        <linearGradient id="paint2_linear_20_258" x1="53.5" y1="116" x2="63" y2="126" gradientUnits="userSpaceOnUse">\
        <stop stop-color="#83EBFF"/>\
        <stop offset="1" stop-color="#64BCDD"/>\
        </linearGradient>\
        <linearGradient id="paint3_linear_20_258" x1="92.75" y1="148" x2="92.75" y2="222" gradientUnits="userSpaceOnUse">\
        <stop stop-color="#5BBBD5"/>\
        <stop offset="1" stop-color="#61CEDB"/>\
        </linearGradient>\
        <linearGradient id="paint4_linear_20_258" x1="221.5" y1="216.5" x2="245" y2="199" gradientUnits="userSpaceOnUse">\
        <stop stop-color="#6BE8FC"/>\
        <stop offset="1" stop-color="#4CA0BD"/>\
        </linearGradient>\
        <linearGradient id="paint5_linear_20_258" x1="2" y1="136" x2="62.5" y2="180" gradientUnits="userSpaceOnUse">\
        <stop stop-color="#51A8BB"/>\
        <stop offset="1" stop-color="#62CDDD"/>\
        </linearGradient>\
        <linearGradient id="paint6_linear_20_258" x1="129" y1="237" x2="137" y2="182" gradientUnits="userSpaceOnUse">\
        <stop stop-color="#85F4FF"/>\
        <stop offset="1" stop-color="#56B9EF"/>\
        </linearGradient>\
        <linearGradient id="paint7_linear_20_258" x1="193" y1="282" x2="257.5" y2="120" gradientUnits="userSpaceOnUse">\
        <stop stop-color="#4BC3C9"/>\
        <stop offset="1" stop-color="#4BC3C9" stop-opacity="0"/>\
        </linearGradient>\
        </defs>\
      </svg>\
        \
      <svg width="324" height="196" viewBox="0 0 324 196" fill="none" xmlns="http://www.w3.org/2000/svg" id="right-footer">\
        <g id="Group 13">\
        <rect id="Rectangle14" width="324" height="196" fill="url(#paint0_linear_20_259)"/>\
        <path id="Polygon17" d="M117 78L128 98L101 123.5L117 78Z" fill="url(#paint1_linear_20_259)"/>\
        <path id="Polygon15" d="M200.5 113.5L224 142L191 190.5L200.5 113.5Z" fill="url(#paint2_linear_20_259)"/>\
        <path id="Polygon21" d="M146.5 63.5V73L138.5 67L146.5 63.5Z" fill="#508D9F"/>\
        <path id="Polygon20" d="M184.5 202.5L324 160.5L224 246L184.5 202.5Z" fill="url(#paint3_linear_20_259)"/>\
        <path id="Polygon19" d="M271 39L287 56L281.5 71L271 39Z" fill="url(#paint4_linear_20_259)"/>\
        <path id="Polygon18" d="M154.5 124L183.5 177L108 208L154.5 124Z" fill="url(#paint5_linear_20_259)"/>\
        <path id="Polygon16" d="M239 181.5L289.5 144L220.5 164.5L239 181.5Z" fill="url(#paint6_linear_20_259)"/>\
        </g>\
        <defs>\
        <linearGradient id="paint0_linear_20_259" x1="308.5" y1="155" x2="266" y2="35.5" gradientUnits="userSpaceOnUse">\
        <stop stop-color="#4FD7E3"/>\
        <stop offset="1" stop-color="#32586E" stop-opacity="0"/>\
        </linearGradient>\
        <linearGradient id="paint1_linear_20_259" x1="121.5" y1="87.5" x2="109" y2="116.5" gradientUnits="userSpaceOnUse">\
        <stop stop-color="#4A7F8F"/>\
        <stop offset="1" stop-color="#6CB2BF"/>\
        </linearGradient>\
        <linearGradient id="paint2_linear_20_259" x1="197" y1="118.5" x2="208" y2="152" gradientUnits="userSpaceOnUse">\
        <stop offset="0.15254" stop-color="#4EAFD1"/>\
        <stop offset="1" stop-color="#87FDFF"/>\
        </linearGradient>\
        <linearGradient id="paint3_linear_20_259" x1="324" y1="161" x2="173" y2="232.5" gradientUnits="userSpaceOnUse">\
        <stop stop-color="#52D7DF"/>\
        <stop offset="1" stop-color="#52D5DD"/>\
        </linearGradient>\
        <linearGradient id="paint4_linear_20_259" x1="276.5" y1="52" x2="279" y2="57" gradientUnits="userSpaceOnUse">\
        <stop stop-color="#5290A7"/>\
        <stop offset="1" stop-color="#3E899C"/>\
        </linearGradient>\
        <linearGradient id="paint5_linear_20_259" x1="184" y1="166" x2="115" y2="194" gradientUnits="userSpaceOnUse">\
        <stop stop-color="#67E3ED"/>\
        <stop offset="1" stop-color="#58D1DE"/>\
        </linearGradient>\
        <linearGradient id="paint6_linear_20_259" x1="246.5" y1="167" x2="238" y2="171.5" gradientUnits="userSpaceOnUse">\
        <stop stop-color="#61D2E4"/>\
        <stop offset="1" stop-color="#61E1EA"/>\
        </linearGradient>\
        </defs>\
      </svg>\
        \
    </div>\
  </div>\
';
const page1 =
  '\
  <div class="body">\
    <div class="nav">\
      <img width="32" id="back" alt="back button">\
    </div>\
    <div class="main">\
      <div class="grid-container-page-1">\
        <div>\
          <img id="chip" src="" alt="picture of chip from mobile legends">\
        </div>\
        <div class="padding-x flex flex-col justify-content-center" id="content">\
          <div class="grid-container-page-2 gap align-items-center content-fade">\
            <div>\
              <p class="text-right margin-bottom white">In semester <span class="yellow font-highlight" id="sem"></span> at Polytechnic University of the\
                Philippines, you completed <span class="yellow font-highlight" id="unit"></span> unit(s).</p>\
              <p class="blue font-md flex justify-content-center spacing-10">Highest Rank: <span\
                class="font-md spacing-10 yellow" id="highestRank"></span></p>\
            </div>\
            <div class="flex justify-content-center align-items-center">\
              <img id="rankImg" alt="rank image">\
            </div>\
          </div>\
          <div class="" style="height:250px; width:100%; display: flex; justify-content: center;">\
            <canvas id="chart" style="max-height: 250px; max-width: 80%;"></canvas>\
          </div>\
        </div>\
      </div>\
      <div class="buttons">\
        <button class="italic white" id="nextPage">Next Page&gt&gt</button>\
      </div>\
    </div>\
  </div>\
';
const page2 =
  '\
  <div class="body">\
    <div class="nav">\
      <img width="32" id="back" alt="back button">\
    </div>\
    <div class="main">\
      <div class="grid-container-page-2">\
        <div class="flex flex-col justify-content-center padding-x content-fade">\
          <div class="align-items-center margin-bottom-xs">\
            <p class="text-left white">In this semester, my highest grade is <span class="yellow highestGrade"></span>. I took <span class="yellow" id="numCourses"></span> courses.</p>\
          </div>\
          <div class="flex flex-col margin-bottom-lg">\
            <div class="grid-3 gap align-items-center">\
              <h2 class="bold white flex align-items-center justify-content-end frequency height-100" id="freqHighest"></h2>\
              <div class="flex flex-col justify-content-center ">\
                <p class="margin-bottom-xs heading-label white">Highest grade: <span class="highestGrade"></span></p>\
                <div class="bar">\
                  <div class="bar-fill"></div>\
                </div>\
              </div>\
              <h2 class="italic yellow flex align-items-center justify-content-start rank height-100" id="highRank"></h2>\
            </div>\
            <div class="grid-3 gap">\
              <h2 class="bold white flex align-items-center justify-content-end frequency height-100" id="freqLowest"></h2>\
              <div class="flex flex-col justify-content-center">\
                <p class="margin-bottom-xs heading-label white">Lowest grade: <span id="lowestGrade"></span></p>\
                <div class="bar">\
                  <div class="bar-fill"></div>\
                </div>\
              </div>\
              <h2 class="italic yellow flex align-items-center justify-content-start rank height-100" id="lowRank"></h2>\
            </div>\
            <div class="grid-3 gap">\
              <h2 class="bold white text-right "></h2>\
              <div class="flex flex-col justify-content-center">\
                <p class="margin-bottom-xs heading-label white">GPA: <span id="GPA"></span></p>\
                <div class="bar">\
                  <div class="bar-fill"></div>\
                </div>\
              </div>\
              <h2 class="italic yellow flex align-items-center justify-content-start rank height-100" id="GPARank"></h2>\
            </div>\
          </div>\
          \
          <p class="bold italic white spacing-20" id="quote">GAGAMITIN AND KARUNUNGAN MULA SA\'YO PARA SA BAYAN</p>\
        </div>\
        <div>\
          <img class="full-height" src="" id="lylia" alt="background image">\
        </div>\
      </div>\
      <div class="buttons flex gap">\
        <button class="italic white" id="prevPage">&lt&ltBack</button>\
        <button class="italic white" id="nextPage">Next Page&gt&gt</button>\
      </div>\
    </div>\
  </div>\
';
const page3 =
  '\
  <div class="body">\
    <div class="nav">\
      <img width="32" id="back" alt="back button">\
    </div>\
    <div class="main">\
      <div class="flex align-items-center full-height" style="margin: 0 5%;">\
        <div class="grid-container-200 gap content-fade">\
          <div class="flex align-items-center">\
            <img alt="PUP logo with mobile legends avatar border" id="pupLogo">\
          </div>\
          <div class="flex flex-col justify-content-center gap">\
            <p class="white">In this semester, I am not alone in the pursuit of knowledge. I have my professors, classmates, loved ones, and friends. May we not let our grades dictate what we are capable of, and may we use what our university has taught us for good.</p>\
            <p class="italic white" style="border: solid #354A5F 1px; padding: 8px 16px; background-color: #1E2D44; width: fit-content;">Bawi tayo next sem, par!</p>\
          </div>\
          <div></div>\
        </div>\
      </div>\
      \
      <div class="buttons flex gap">\
        <button class="italic white" id="prevPage">&lt&ltBack</button>\
        <button class="italic white" id="nextPage">Next Page&gt&gt</button>\
      </div>\
    </div>\
  </div>\
';

head = document.querySelector("head");
head.innerHTML += styling;
buttonLoad = document.querySelector(".content-header");
buttonLoad.innerHTML +=
  '<svg width="24" id="loadSemesterSummary" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.19999 2.43994L18.1 14.3399L20.22 12.2199L21.63 13.6299L19.16 16.0999L22.34 19.2799C22.73 19.6699 22.73 20.2999 22.34 20.6899L21.63 21.3999C21.24 21.7899 20.61 21.7899 20.22 21.3999L17 18.2299L14.56 20.6999L13.15 19.2899L15.27 17.1699L3.36999 5.26994V2.43994H6.19999ZM15.89 9.99994L20.63 5.25994V2.43994H17.8L13.06 7.17994L15.89 9.99994ZM10.94 14.9999L8.10999 12.1299L5.89999 14.3399L3.77999 12.2199L2.36999 13.6299L4.83999 16.0999L1.65999 19.2899C1.26999 19.6799 1.26999 20.3099 1.65999 20.6999L2.36999 21.4099C2.75999 21.7999 3.38999 21.7999 3.77999 21.4099L6.99999 18.2299L9.43999 20.6999L10.85 19.2899L8.72999 17.1699L10.94 14.9999Z" fill="black"/></svg>';

let buttonElem = document.querySelector("#loadSemesterSummary");
let backButton;
let bodyIndexPage;
buttonLoad.style.display = "flex";
buttonLoad.style.justifyContent = "space-between";
buttonLoad.style.alignItems = "center";

// Get data from /grades
let objSem = new Object();
let objSemLen = cardBody.length;
let count = 0;

cardBody.forEach((e) => {
  if (count > 0) {
    objSem[objSemLen] = new Object();
    objSem[objSemLen]["GPA"] =
      e.children[1].children[0].children[0].children[1].textContent;
    objSem[objSemLen]["Semester"] = objSemLen;
    objSem[objSemLen]["Grades"] = new Array();
    e.children[2].children[0].children[0].children[1].children[0].children[0].children[1].childNodes.forEach(
      (f) => {
        if (f.role == "row") {
          objSem[objSemLen]["Grades"].push(f.childNodes[13].textContent);
        }
      },
    );

    let units = 0;
    e.children[2].children[0].children[0].children[1].children[0].children[0].children[1].childNodes.forEach(
      (f) => {
        if (f.role == "row") {
          units += Number(f.childNodes[9].textContent);
        }
      },
    );

    objSem[objSemLen]["Units"] = units;
  }
  count++;
  objSemLen--;
});

let currSemComp;
let found = false;
for (let f in (e = Object.keys(objSem).reverse())) {
  if (!(objSem[e[f]]["GPA"] === "Grades Not Complete")) {
    currSemComp = objSem[e[f]];
    break;
  }
}

function startButton() {
  buttonElem = document.querySelector("#loadSemesterSummary");
  buttonElem.addEventListener("click", () => {
    body.insertAdjacentHTML("beforeend", indexPage);
    bodyIndexPage = document.querySelector(".body");
    document.querySelector("#back").src =
      chrome.runtime.getURL("assets/Back.svg");
    document.querySelector("#intro").src =
      chrome.runtime.getURL("assets/Intro.svg");
    bodyIndexPage.addEventListener("click", () => {
      document.querySelector(".body").remove();
      page1Content();
    });
    backButton = document.querySelector("#back");
    backButton.addEventListener("click", (event) => {
      event.stopPropagation();
      document.querySelector(".body").remove();
    });
  });
}

startButton();
function page1Content() {
  let sortGPA = new Array();

  Object.keys(objSem).forEach((e) => {
    sortGPA.push(Number(objSem[e]["GPA"]));
  });
  sortGPA.sort();

  body = document.querySelector("body");
  body.innerHTML += page1;
  backButton = document.querySelector("#back");
  document.querySelector("#back").src =
    chrome.runtime.getURL("assets/Back.svg");
  document.querySelector("#sem").innerHTML = currSemComp["Semester"];
  document.querySelector("#unit").innerHTML = currSemComp["Units"];

  if (sortGPA[0] >= 1.0 && sortGPA[0] <= 1.24) {
    document.querySelector("#highestRank").innerHTML = "Mythical Immortal";
  } else if (sortGPA[0] >= 1.25 && sortGPA[0] <= 1.49) {
    document.querySelector("#highestRank").innerHTML = "Mythical Glory";
  } else if (sortGPA[0] >= 1.5 && sortGPA[0] <= 1.74) {
    document.querySelector("#highestRank").innerHTML = "Mythical Glory";
  } else if (sortGPA[0] >= 1.75 && sortGPA[0] <= 1.99) {
    document.querySelector("#highestRank").innerHTML = "Mythic";
  } else if (sortGPA[0] >= 2.0 && sortGPA[0] <= 2.24) {
    document.querySelector("#highestRank").innerHTML = "Legend";
  } else if (sortGPA[0] >= 2.25 && sortGPA[0] <= 2.49) {
    document.querySelector("#highestRank").innerHTML = "Epic";
  } else if (sortGPA[0] >= 2.5 && sortGPA[0] <= 2.74) {
    document.querySelector("#highestRank").innerHTML = "Grand Master";
  } else if (sortGPA[0] >= 2.75 && sortGPA[0] <= 2.99) {
    document.querySelector("#highestRank").innerHTML = "Master";
  } else if (sortGPA[0] >= 3.0 && sortGPA[0] <= 4.99) {
    document.querySelector("#highestRank").innerHTML = "Elite";
  } else {
    document.querySelector("#highestRank").innerHTML = "Warrior";
  }

  backButton.addEventListener("click", () => {
    document.querySelector(".body").remove();
    startButton();
  });

  if (document.querySelector("#chip").complete) {
    document.querySelector("#chip").classList.add("move");
  }

  document.querySelector("#chip").src =
    chrome.runtime.getURL("/assets/Chip.svg");

  if (currSemComp["GPA"] != "Grades Not Complete") {
    let numGPA = Number(currSemComp["GPA"]);
    if (numGPA >= 1.0 && numGPA <= 1.24) {
      document.querySelector("#rankImg").src = chrome.runtime.getURL(
        "/assets/Mythical_Immortal.webp",
      );
    } else if (numGPA >= 1.25 && numGPA <= 1.49) {
      document.querySelector("#rankImg").src = chrome.runtime.getURL(
        "/assets/Mythical_Glory.webp",
      );
    } else if (numGPA >= 1.5 && numGPA <= 1.74) {
      document.querySelector("#rankImg").src = chrome.runtime.getURL(
        "/assets/Mythical_Honor.webp",
      );
    } else if (numGPA >= 1.75 && numGPA <= 1.99) {
      document.querySelector("#rankImg").src = chrome.runtime.getURL(
        "/assets/Mythic.webp",
      );
    } else if (numGPA >= 2.0 && numGPA <= 2.24) {
      document.querySelector("#rankImg").src = chrome.runtime.getURL(
        "/assets/Legend.webp",
      );
    } else if (numGPA >= 2.25 && numGPA <= 2.49) {
      document.querySelector("#rankImg").src =
        chrome.runtime.getURL("/assets/Epic.webp");
    } else if (numGPA >= 2.5 && numGPA <= 2.74) {
      document.querySelector("#rankImg").src = chrome.runtime.getURL(
        "/assets/Grandmaster.webp",
      );
    } else if (numGPA >= 2.75 && numGPA <= 2.99) {
      document.querySelector("#rankImg").src = chrome.runtime.getURL(
        "/assets/Master.webp",
      );
    } else if (numGPA >= 3.0 && numGPA <= 4.99) {
      document.querySelector("#rankImg").src =
        chrome.runtime.getURL("/assets/Elite.webp");
    }
  } else {
    document.querySelector("#rankImg").src = chrome.runtime.getURL(
      "/assets/Warrior.webp",
    );
  }

  (async function () {
    let dataItem = new Array();
    let labels = new Array();

    Object.keys(objSem).forEach((e) => {
      dataItem.push(Number(objSem[e]["GPA"]));
      labels.push(objSem[e]["Semester"]);
    });

    const data = {
      labels: labels,
      datasets: [
        {
          label: null,
          data: dataItem,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
          pointRadius: 0,
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {
        scales: {
          y: {
            reverse: true,
            ticks: {
              color: "#779AB0",
            },
          },
          x: {
            ticks: {
              color: "#779AB0",
            },
            grid: {
              display: true,
              color: "#779AB0",
              lineWidth: 1,
              drawBorder: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        elements: {
          point: {
            pointHitRadius: 25,
          },
        },
      },
    };

    new Chart(document.getElementById("chart"), config);
    document.getElementById("chart").height = 250;
  })();

  document.querySelector("#nextPage").addEventListener("click", () => {
    document.querySelector(".body").remove();
    page2Content();
  });
}

function page2Content() {
  body = document.querySelector("body");
  body.innerHTML += page2;
  backButton = document.querySelector("#back");
  backButton.addEventListener("click", () => {
    document.querySelector(".body").remove();
    startButton();
  });
  if (document.querySelector("#lylia").complete) {
    document.querySelector("#lylia").classList.add("move");
  }
  document.querySelector("#lylia").src =
    chrome.runtime.getURL("assets/Lylia.svg");
  document.querySelector("#back").src =
    chrome.runtime.getURL("assets/Back.svg");

  currSemComp["Grades"].sort();
  let countHigh = 0;
  let countLow = 0;

  for (let i = 0; i < currSemComp["Grades"].length; i++) {
    if (currSemComp["Grades"][i] == currSemComp["Grades"][0]) {
      countHigh++;
    }
  }

  for (let i = 0; i < currSemComp["Grades"].length; i++) {
    if (currSemComp["Grades"][i] == currSemComp["Grades"].reverse()[0]) {
      countLow++;
    }
  }

  document
    .querySelectorAll(".highestGrade")
    .forEach((e) => (e.innerHTML = currSemComp["Grades"][0]));
  const cHighRank = rankEq(currSemComp["Grades"][0]);
  document.querySelector("#highRank").innerHTML = cHighRank["rank"];
  document.querySelectorAll(".bar-fill")[0].style.width =
    cHighRank["percent"] + "%";
  document.querySelector("#lowestGrade").innerHTML =
    currSemComp["Grades"].reverse()[0];
  const cLowRank = rankEq(currSemComp["Grades"][0]);
  document.querySelector("#lowRank").innerHTML = cLowRank["rank"];
  document.querySelectorAll(".bar-fill")[1].style.width =
    cLowRank["percent"] + "%";
  document.querySelector("#numCourses").innerHTML =
    currSemComp["Grades"].length;
  document.querySelector("#freqHighest").innerHTML = countHigh;
  document.querySelector("#freqLowest").innerHTML = countLow;
  document.querySelector("#GPA").innerHTML = currSemComp["GPA"];
  const cGPARank = rankEq(currSemComp["GPA"]);
  document.querySelector("#GPARank").innerHTML = cGPARank["rank"];
  document.querySelectorAll(".bar-fill")[2].style.width =
    cGPARank["percent"] + "%";

  function rankEq(grade) {
    if (grade >= 1.0 && grade <= 1.49) {
      return {
        rank: "SSS",
        percent: (7 / 7) * 100,
      };
    } else if (grade >= 1.5 && grade <= 1.99) {
      return {
        rank: "SS",
        percent: (6 / 7) * 100,
      };
    } else if (grade >= 2.0 && grade <= 2.49) {
      return {
        rank: "S",
        percent: (5 / 7) * 100,
      };
    } else if (grade >= 2.5 && grade <= 2.99) {
      return {
        rank: "A",
        percent: (4 / 7) * 100,
      };
    } else if (grade >= 3.0 && grade <= 3.49) {
      return {
        rank: "B",
        percent: (3 / 7) * 100,
      };
    } else if (grade >= 3.5 && grade <= 3.99) {
      return {
        rank: "C",
        percent: (2 / 7) * 100,
      };
    } else if (grade >= 4.0 && grade <= 4.49) {
      return {
        rank: "D",
        percent: (1 / 7) * 100,
      };
    } else {
      return {
        rank: "F",
        percent: (0 / 7) * 100,
      };
    }
  }

  document.querySelector("#prevPage").addEventListener("click", () => {
    document.querySelector(".body").remove();
    page1Content();
  });
  document.querySelector("#nextPage").addEventListener("click", () => {
    document.querySelector(".body").remove();
    page3Content();
  });
}

function page3Content() {
  body = document.querySelector("body");
  body.innerHTML += page3;
  document.querySelector("#back").src =
    chrome.runtime.getURL("assets/Back.svg");
  document.querySelector("#pupLogo").src = chrome.runtime.getURL(
    "assets/PUP_Avatar.svg",
  );
  document.querySelector("#prevPage").addEventListener("click", () => {
    document.querySelector(".body").remove();
    page2Content();
  });
  document.querySelector("#nextPage").addEventListener("click", () => {
    document.querySelector(".body").remove();
    startButton();
  });
  backButton = document.querySelector("#back");
  backButton.addEventListener("click", () => {
    document.querySelector(".body").remove();
    startButton();
  });
}