(this.webpackJsonpdrummachine=this.webpackJsonpdrummachine||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),s=t.n(r),o=t(7),i=t.n(o);t(15),t(8),t(16);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=t(2),c=t(3),d=t(1),l=t(5),p=t(4),m=t(9),u=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],h=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],y=Object(m.a)({backgroundColor:"rgba(0, 0, 0, 0.521)",boxShadow:"0 3px red",height:77,marginTop:13,color:"red"},"boxShadow","0 0 30px rgba(194, 2, 2, 0.89)"),k={background:"linear-gradient(90deg, rgba(128, 1, 167, 0.400) 0%, rgba(0,0,0,1) 100%)",marginTop:10,boxShadow:"3px 3px 5px black"},g=function(e){Object(l.a)(t,e);var a=Object(p.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={padStyle:k},r.playSound=r.playSound.bind(Object(d.a)(r)),r.handleKeyPress=r.handleKeyPress.bind(Object(d.a)(r)),r.activatePad=r.activatePad.bind(Object(d.a)(r)),r}return Object(c.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){e.keyCode===this.props.keyCode&&this.playSound()}},{key:"activatePad",value:function(){this.props.power?"rgba(0, 0, 0, 0.521)"===this.state.padStyle.backgroundColor?this.setState({padStyle:k}):this.setState({padStyle:y}):13===this.state.padStyle.marginTop?this.setState({padStyle:k}):this.setState({padStyle:{height:77,marginTop:13,background:"linear-gradient(90deg, rgba(129,1,167,1) 0%, rgba(0,0,0,1) 100%)",boxShadow:"0 3px grey"}})}},{key:"playSound",value:function(e){var a=this,t=document.getElementById(this.props.keyTrigger);t.currentTime=0,t.play(),this.activatePad(),setTimeout((function(){return a.activatePad()}),100),this.props.updateDisplay(this.props.clipId.replace(/-/g," "))}},{key:"render",value:function(){return s.a.createElement("div",{id:this.props.clipId,onClick:this.playSound,className:"drum-pad",style:this.state.padStyle},s.a.createElement("audio",{className:"clip",id:this.props.keyTrigger,src:this.props.clip}),this.props.keyTrigger)}}]),t}(s.a.Component),C=function(e){Object(l.a)(t,e);var a=Object(p.a)(t);function t(e){return Object(n.a)(this,t),a.call(this,e)}return Object(c.a)(t,[{key:"render",value:function(){var e,a=this;return e=this.props.power?this.props.currentPadBank.map((function(e,t,r){return s.a.createElement(g,{clipId:r[t].id,clip:r[t].url,keyTrigger:r[t].keyTrigger,keyCode:r[t].keyCode,updateDisplay:a.props.updateDisplay,power:a.props.power})})):this.props.currentPadBank.map((function(e,t,r){return s.a.createElement(g,{clipId:r[t].id,clip:"#",keyTrigger:r[t].keyTrigger,keyCode:r[t].keyCode,updateDisplay:a.props.updateDisplay,power:a.props.power})})),s.a.createElement("div",{className:"pad-bank"},e)}}]),t}(s.a.Component),f=function(e){Object(l.a)(t,e);var a=Object(p.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={power:!0,display:String.fromCharCode(160),currentPadBank:u,currentPadBankId:"Heater Kit",sliderVal:.3},r.displayClipName=r.displayClipName.bind(Object(d.a)(r)),r.selectBank=r.selectBank.bind(Object(d.a)(r)),r.adjustVolume=r.adjustVolume.bind(Object(d.a)(r)),r.powerControl=r.powerControl.bind(Object(d.a)(r)),r.clearDisplay=r.clearDisplay.bind(Object(d.a)(r)),r}return Object(c.a)(t,[{key:"powerControl",value:function(){this.setState({power:!this.state.power,display:String.fromCharCode(160)})}},{key:"selectBank",value:function(){this.state.power&&("Heater Kit"===this.state.currentPadBankId?this.setState({currentPadBank:h,display:"Smooth Piano Kit",currentPadBankId:"Smooth Piano Kit"}):this.setState({currentPadBank:u,display:"Heater Kit",currentPadBankId:"Heater Kit"}))}},{key:"displayClipName",value:function(e){this.state.power&&this.setState({display:e})}},{key:"adjustVolume",value:function(e){var a=this;this.state.power&&(this.setState({sliderVal:e.target.value,display:"Volume: "+Math.round(100*e.target.value)}),setTimeout((function(){return a.clearDisplay()}),1e3))}},{key:"clearDisplay",value:function(){this.setState({display:String.fromCharCode(160)})}},{key:"render",value:function(){var e=this,a=this.state.power?{float:"right"}:{float:"left"},t=this.state.currentPadBank===u?{float:"left"}:{float:"right"};return[].slice.call(document.getElementsByClassName("clip")).forEach((function(a){a.volume=e.state.sliderVal})),s.a.createElement("div",{id:"drum-machine",className:"inner-container"},s.a.createElement("div",{className:"logo"},s.a.createElement("p",{className:"title"},"Drum Machine")),s.a.createElement("div",{className:"control"},s.a.createElement("p",null,"Power"),s.a.createElement("div",{onClick:this.powerControl,className:"select"},s.a.createElement("div",{style:a,className:"inner"}))),s.a.createElement("div",{className:"controls-container"},s.a.createElement("div",{className:"control"},s.a.createElement("p",null,"Bank"),s.a.createElement("div",{onClick:this.selectBank,className:"select"},s.a.createElement("div",{style:t,className:"inner"}))),s.a.createElement("p",{id:"display"},this.state.display),s.a.createElement("div",{className:"volume-slider"},s.a.createElement("input",{className:"vslider",type:"range",min:"0",max:"1",step:"0.01",value:this.state.sliderVal,onChange:this.adjustVolume}),s.a.createElement("p",{className:"volumetext"},"- Volume +"))),s.a.createElement(C,{power:this.state.power,updateDisplay:this.displayClipName,clipVolume:this.state.sliderVal,currentPadBank:this.state.currentPadBank}))}}]),t}(s.a.Component);i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.a1ba7a86.chunk.js.map