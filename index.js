// let doc = document.getElementById("root");
// doc.innerHTML = '<h1>Welcome To Guvi</h1>'    
// doc.innerText = '<h1>Welcome to Guvi<h1>'
// doc.setAttribute('class','text-color');
// doc.style.textAlign =  "center";
// doc.style.fontFamily = "verdana";
// doc.style.color = "red";

// let docs = document.getElementsByTagName("div");
// console.log(docs);

// for(let i=0 ; i<docs.length ; i++){
//   docs[i].innerHTML = '<h1>Welcome To Guvi</h1>';
//   docs[i].style.textAlign =  "center";
//   docs[i].style.fontFamily = "verdana";
//   docs[i].style.color = "red";
// }

// let h1 = document.createElement("h1");
// h1.innerHTML = "Iam learning javascript";
// document.body.appendChild(h1);

// let h2 = document.createElement("h2");
// h2.innerHTML = "we are late";
// document.body.appendChild(h2);

// h2.append("we should be responsible");

// let parent = document.createElement("div");
// document.body.appendChild(parent);
// parent.style.display='flex';
// parent.style.flexWrap='wrap';

// let child = document.createElement("div");
// parent.appendChild(child);

// let image = document.createElement('img');
// child.appendChild(image);


// image.setAttribute('src','flag.jpg');
// image.style.width='300px';
// image.style.marginRight = '10px'

// let child1 = document.createElement("div");
// parent.appendChild(child1);

// let image1 = document.createElement('img');
// child1.appendChild(image1);

// image1.setAttribute('src','flag.jpg');
// image1.style.width='300px';





// let child2 = document.createElement("div");
// document.body.appendChild(child2);

// let image2 = document.createElement('img');
// child1.appendChild(image2);

// image2.setAttribute('src','flag.jpg');

 

// let myfav = ['coffee','tea','mountain dew','travel','development'];

// let h2 = document.createElement('h2');
// h2.innerText = 'My Favourites are : ';
// document.body.appendChild(h2);

// let ul = document.createElement('ul');
// // document.body.appendChild(ul);


// for (let i = 0 ; i < myfav.length ; i++) 
// {
//   let li = document.createElement('li');
//   li.innerText = myfav[i];
//   // li.style.display='block';
//   // li.style.marginRight = '10px';
//   ul.appendChild(li);
// }

// document.body.appendChild(ul);
// let myWindow;

// function OpenWindow()
// {
//   let age = prompt('Enter Age to proceed : ')
//   if(Number(age)>18){
//   myWindow = window.open("https://www.linkedin.com/","_blank");
// }
//   else {
//     alert ("Page  is accessible only for Adults");
//   }
// }

// function closewindow(){
//   myWindow.close();
// }


// let button = document.createElement('button');
// button.innerHTML = "LinkedIn";
// document.body.append(button);
// button.addEventListener("click",OpenWindow);

// let button1 = document.createElement('button');
// button1.innerHTML = "closetab";
// document.body.append(button1);
// button1.addEventListener("click",closewindow);

// let h1 = document.createElement('h1');
// h1.innerHTML = 'Counter';
// h1.setAttribute('class','counter-header');
// document.body.appendChild(h1);

// let value = 0 ; 

// let parent = document.createElement('div');
// parent.setAttribute('class','parent');
// document.body.appendChild(parent);

// let btn1 = document.createElement('button');
// btn1.innerHTML="-"
// parent.appendChild(btn1);

// btn1.addEventListener('click',()=>{
//   setTimeout(()=>{
// document.getElementsByClassName('value')[0].innerHTML = --value;
// },2000)
// })


// let div = document.createElement('div');
// div.setAttribute('class','value');
// div.innerHTML = value;
// parent.appendChild(div);

// let btn2 = document.createElement('button');
// btn2.innerHTML="+"
// parent.appendChild(btn2);



//   setInterval(()=>{
// document.getElementsByClassName('value')[0].innerHTML = ++value;

// },2000)

// setInterval(()=>{
//   document.getElementsByClassName('value')[0].innerHTML = --value;
  
//   },2200)


let input = document.createElement('input');
document.body.appendChild(input);
input.setAttribute('type','text');
input.setAttribute('placeholder','Name');



input.addEventListener('blur',(e)=>{
  if(e.target.value.length>3 && e.target.value.length<10 )
  {
    console.log(e.target.value)
  }

  else{
    input.addEventListener('blur', ()=>{
    function alertmsg(){
      let div= document.createElement('div');
      div.innerHTML = "Name should be minimum of 3 character and maximum of 10 character"
      div.style.fontSize = '10px';
      div.style.color = 'red';
      document.body.append(div);
      }
    alertmsg();
  })
  }
})

input.addEventListener('focus',()=>{
  function alertmsg(){
    let div= document.createElement('div');
    div.innerHTML = ""
    div.style.fontSize = '10px';
    div.style.color = 'red';
    document.body.append(div);
    }
  alertmsg();
  
})