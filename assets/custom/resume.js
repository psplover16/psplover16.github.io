var myname_count = 0;
function myname() {
  switch (myname_count) {
    case 0:
      $(".myname").text("你");
      myname_count++;
      console.log("1");
      setTimeout(myname, 300);

      break;
    case 1:
      $(".myname").text("你好");
      myname_count++;
      console.log("2");
      setTimeout(myname, 300);

      break;
    case 2:
      $(".myname").text("你好！");
      myname_count++;
      setTimeout(myname, 300);
      break;
    case 3:
      $(".myname").text("你好！我");
      myname_count++;
      setTimeout(myname, 300);
      break;
    case 4:
      $(".myname").text("你好！我是");
      myname_count++;
      setTimeout(myname, 300);
      break;
    case 5:
      $(".myname").text("你好！我是俊");
      myname_count++;
      setTimeout(myname, 300);
      break;
    case 6:
      $(".myname").text("你好！我是俊孝");
      myname_count++;
      setTimeout(myname, 300);
      break;
    case 7:
      $(".myname").text("你好！我是俊孝！");
      myname_count++;
      $(".myname").addClass("shine_text");
      $(".myname").next().text("");
      // setTimeout(myname, 1500);
      break;
    // case 8:
    //   $(".myname").text("");
    //   myname_count = 0;
    //   setTimeout(myname, 300);
    //   break;
  }
}

setTimeout(myname, 300);

// $(".myname").text("123");

function rotates(event) {
  // console.log(event.target.classList);
  event.target.parentNode.parentNode.classList.add("rotateY")
}
function returnRotate(event) {
  event.target.parentNode.parentNode.classList.remove("rotateY")
}

var cardList=[
  // {title:"水墨特效1",content:"滑鼠滑動時，產生墨水紋路",url:"https://psplover16.github.io/canvasEffect_Ink1"},
  {title:"油脂特效",content:"油脂在水面的效果",url:"https://psplover16.github.io/canvasEffect_Ink2/"},
  {title:"煙霧炫彩特效",content:"煙霧炫彩功能",url:"https://psplover16.github.io/canvasEffect_Ink3/"},
  {title:"水波特效1",content:"利用Jq完成水波特效",url:"https://psplover16.github.io/canvasEffect_waterWave1/"},
  {title:"白色粒子特效1",content:"利用純canvas完成噴射粒子的功能",url:"https://psplover16.github.io/whiteParticle1/"},
  {title:"擦鞋特效",content:"clipPath 練習與實踐",url:"https://psplover16.github.io/cleanShoes/"},
  {title:"文字煙霧特效",content:"讓文字如煙霧般向上飄散",url:"https://psplover16.github.io/smokeFont/"},
]

var cardEffCode="";
cardList.forEach((v)=>{
  cardEffCode+=`        <div class="cardEff_container">
  <div class="contentA">
    <h3>${v.title}</h3>
    <div>
      ${v.content}
    </div>
    <button onclick="rotates(event)" class="btn btn-primary cardEff_btn">詳細資訊</button>
  </div>
  <div class="contentB" onclick="returnRotate(event)">
    <a href="${v.url}" class="btn btn-danger cardEff_btn" target="_blank">前往連結</a>
    <button onclick="returnRotate(event)" class="btn btn-secondary cardEff_btn">返回</button>
  </div>
</div>`
})



document.getElementsByClassName("cardEff")[0].innerHTML=cardEffCode