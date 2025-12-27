let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon")
    }else{
        speak("Good Evening")
    }
}
// window.addEventListener('load',()=>{
//     wishMe()
// })
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by Don Bosco Students")
    }
    
    else if(message.includes("what is your name")|| message.includes("what's your name")){
        speak("My Name is mikky , Created in december 2024")
    }

    else if(message.includes("ninna hesaru")|| message.includes("what's your name")){
        speak("nanna hesaru mikky")
    }

    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("play pushpa song")){
        speak("playing pushpa pushpa song...")
        window.open("https://youtu.be/kN6HHzEXKFU?si=qsxxTu2pxYZt05Kr","_blank")
    }
    else if(message.includes("play any kannada song")){
        speak("playing maayavi kannada song..")
        window.open("https://youtu.be/TMY1g8pAktk?si=rLBOQqwsPs2Y32da","_blank")
    }
    else if(message.includes("play pushpa 2 song")){
        speak("playing kisshk song ")
        window.open("https://youtu.be/cMulQrRnwtc?si=0rhQKUq9nv7ABfMw","_blank")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("say goodbye")){
        speak(" Thank you my guide Swati B patil mam and Amulya mam,and Thanks to all facultities for providing this opportunity to make this project")
    
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("ava","")}`,"_blank")
    }
}