import React from 'react';

const bankOne = [{
        keyCode:81,
        keyTrigger:'Q',
        id:'Heater-1',
        url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },{
        keyCode:87,
        keyTrigger:'W',
        id:'Heater-2',
        url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },{
        keyCode:69,
        keyTrigger:'E',
        id:'Heater-3',
        url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },{
        keyCode:65,
        keyTrigger:'A',
        id:'Heater-4',
        url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },{
        keyCode:83,
        keyTrigger:'S',
        id:'Clap',
        url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },{
        keyCode:68,
        keyTrigger:'D',
        id:'Open-HH',
        url:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },{
        keyCode:90,
        keyTrigger:'Z',
        id:"Kick-n'-Hat",
        url:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },{
        keyCode:88,
        keyTrigger:'X',
        id:'Kick',
        url:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },{
        keyCode:67,
        keyTrigger:'C',
        id:'Closed-HH',
        url:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
];

const bankTwo = [{
        keyCode:81,
        keyTrigger:'Q',
        id:'Chord-1',
        url:'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },{
        keyCode:87,
        keyTrigger:'W',
        id:'Chord-2',
        url:'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },{
        keyCode:69,
        keyTrigger:'E',
        id:'Chord-3',
        url:'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },{
        keyCode:65,
        keyTrigger:'A',
        id:'Shaker',
        url:'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },{
        keyCode:83,
        keyTrigger:'S',
        id:'Open-HH',
        url:'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },{
        keyCode:68,
        keyTrigger:'D',
        id:'Closed-HH',
        url:'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },{
        keyCode:90,
        keyTrigger:'Z',
        id:'Punchy-Kick',
        url:'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },{
        keyCode:88,
        keyTrigger:'X',
        id:'Side-Stick',
        url:'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },{
        keyCode:67,
        keyTrigger:'C',
        id:'Snare',
        url:'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
];

const activeStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.521)",
    boxShadow: "0 3px red",
    height: 77,
    marginTop: 13,
    color: "red",
    boxShadow: "0 0 30px rgba(194, 2, 2, 0.89)"
}

const inactiveStyle = {
    background: "linear-gradient(90deg, rgba(95, 0, 0, 0.603) 0%, rgba(0,0,0,1) 100%)",
    marginTop: 10,
    boxShadow: "3px 3px 5px black"
}

class DrumPad extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            padStyle: inactiveStyle
        }
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.activatePad = this.activatePad.bind(this);
    }

    componentDidMount(){
        document.addEventListener('keydown',this.handleKeyPress);
    }

    componentWillUnmount(){
        document.removeEventListener('keydown',this.handleKeyPress);
    }

    handleKeyPress(e) {
        if (e.keyCode === this.props.keyCode){
            this.playSound();
        }
    } 

    activatePad(){
        if(this.props.power){
            this.state.padStyle.backgroundColor ===  "rgba(0, 0, 0, 0.521)" ?
            this.setState({
                padStyle: inactiveStyle
            }) :
            this.setState({
                padStyle: activeStyle
            });
        }else{
            this.state.padStyle.marginTop === 13 ?
            this.setState({
                padStyle: inactiveStyle
            }) :
            this.setState({
                padStyle: {
                    height: 77,
                    marginTop: 13,
                    background: "grey",
                    boxShadow: "0 3px grey"
                }
            });
        }
    }

    playSound(e) {
        const sound = 
            document.getElementById(this.props.keyTrigger);
            sound.currentTime = 0;
            sound.play();
            this.activatePad();
            setTimeout(() => this.activatePad(),100);
            this.props.updateDisplay(this.props.clipId.replace(/-/g,' '));
    }

    render() {
        return (
            <div id={this.props.clipId}
                onClick={this.playSound}
                className="drum-pad"
                style={this.state.padStyle}>

                <audio className='clip' 
                    id={this.props.keyTrigger}
                    src={this.props.clip}>
                </audio>
                {this.props.keyTrigger}
            </div>
        )
    }
}

class PadBank extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let padBank;
        this.props.power ?
        padBank = this.props.currentPadBank.map((drumObj, i, padBankArr)=>{
            return(
                <DrumPad 
                    clipId={padBankArr[i].id}
                    clip={padBankArr[i].url}
                    keyTrigger={padBankArr[i].keyTrigger}
                    keyCode={padBankArr[i].keyCode}
                    updateDisplay={this.props.updateDisplay}
                    power={this.props.power}
                />
            )
        }) :

        padBank =this.props.currentPadBank.map((drumObj, i, padBankArr) => {
            return(
                <DrumPad 
                    clipId={padBankArr[i].id}
                    clip="#"
                    keyTrigger={padBankArr[i].keyTrigger}
                    keyCode={padBankArr[i].keyCode}
                    updateDisplay={this.props.updateDisplay}
                    power={this.props.power}
                />
            )
        });

        return (
            <div className="pad-bank">
                {padBank}
            </div>
        )
    }
}

class DrumMachine extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            power: true,
            display: String.fromCharCode(160),
            currentPadBank: bankOne,
            currentPadBankId: 'Heater Kit',
            sliderVal: 0.3
        }
        this.displayClipName = this.displayClipName.bind(this);
        this.selectBank = this.selectBank.bind(this);
        this.adjustVolume = this.adjustVolume.bind(this);
        this.powerControl= this.powerControl.bind(this);
        this.clearDisplay= this.clearDisplay.bind(this);
    }

    powerControl() {
        this.setState({
            power: !this.state.power,
            display: String.fromCharCode(160)
        });
    }

    selectBank() {
        if (this.state.power) {
            this.state.currentPadBankId === 'Heater Kit' ?
            this.setState({
                currentPadBank: bankTwo,
                display: 'Smooth Piano Kit',
                currentPadBankId: 'Smooth Piano Kit',
            }) :
            this.setState({
                currentPadBank: bankOne,
                display: 'Heater Kit',
                currentPadBankId: 'Heater Kit',
            });
        }
    }

    displayClipName(name){
        if(this.state.power){
            this.setState({
                display: name
            });
        }
    }

    adjustVolume(e) {
        if(this.state.power){
            this.setState({
                sliderVal: e.target.value,
                display: "Volume: " + Math.round(e.target.value * 100)
            });
            setTimeout(()=> this.clearDisplay(), 1000);
        }
    }

    clearDisplay() {
        this.setState({
            display: String.fromCharCode(160)
        });
    }

    render() {
        const powerSlider = this.state.power ? 
        {float: 'right'} : {float: 'left'};

        const bankSlider = this.state.currentPadBank === bankOne ?
        {float: 'left'} : {float: 'right'}; 

        {
            const clips = 
                [].slice.call(document.getElementsByClassName('clip'));
                clips.forEach(sound => {
                    sound.volume = this.state.sliderVal
                });   
        }

        return (
            <div id="drum-machine" className="inner-container">
                <div className="logo">
                    <p className="title">Drum Machine</p>
                </div>
                <div className="control">
                    <p>Power</p>
                    <div onClick={this.powerControl}
                         className="select">
                        <div style={powerSlider} 
                             className="inner">
                        </div>         
                    </div>
                </div>

                <div className="controls-container">
                    <div className="control bank">
                        <p>Bank</p>
                        <div onClick={this.selectBank}
                             className="select">
                            <div style={bankSlider}
                                    className="inner">
                            </div>    
                        </div>    
                    </div>

                    <p id="display">
                        {this.state.display}
                    </p>
                    <div className="volume-slider">
                        <input className="vslider" type="range" min="0" max="1" step="0.01"
                            value={this.state.sliderVal}
                            onChange={this.adjustVolume}
                        />
                        <p className="volumetext">- Volume +</p>
                    </div>
                </div>

                <PadBank 
                    power={this.state.power}
                    updateDisplay={this.displayClipName}
                    clipVolume={this.state.sliderVal}
                    currentPadBank={this.state.currentPadBank}
                />
           </div>
        )
    }
}

export default DrumMachine;