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
