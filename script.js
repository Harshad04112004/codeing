const Loginbutton=document.getElementById("Loginbutton");
        const Singebutton=document.getElementById("Singebutton");
        const LoginForm=document.getElementById('login-container');
        const MainForm=document.getElementById('main-container');
        const footer=document.getElementById('footer');
        const image=document.getElementById('main2');
        Loginbutton.addEventListener('click',function(){
          LoginForm.style.display="block";
          MainForm.style.display="none";
          footer.style.marginTop="-160px";
          image.style.display="none";
        })
        function Login(){
         var name=document.getElementById('username').value;
         var password=document.getElementById('password').value;
         if(name=="Harshad" && password=="041104"){
            alert("you are logine secuusees");
            // MainForm.style.display="block";
         }else
           {
            alert("check password and name");
            
           }
        }
        function run(){
          let htmlcode=document.getElementById("html-code").value;
          let csscode=document.getElementById("css-code").value;
          let jscode=document.getElementById("js-code").value;
          let output=document.getElementById("output");
          
          output.contentDocument.body.innerHTML = htmlcode +"<style>"+csscode+"</style>";
          output.contentWindow.eval(jscode);

        }