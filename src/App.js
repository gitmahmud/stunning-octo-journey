import React, { Component } from 'react';
import './App.css';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import Sound from 'react-sound'
import ReactDOM from 'react-dom';

const eng2pin = [
    {
      "#" : 1,
      "eng" : "Do you speak English?",
      "pin" : "Nǐ huì shuō yīngyǔ ma"
    },
    {
      "#" : 2,
      "eng" : "My name is",
      "pin" : "wǒ jiào"
    },
    {
      "#" : 3,
      "eng" : "Taxi",
      "pin" : "chūzū chē"
    },
    {
      "#" : 4,
      "eng" : "Goodbye",
      "pin" : "Zàijiàn"
    },
    {
      "#" : 5,
      "eng" : "Please take me to the airport",
      "pin" : "qǐng sòng wǒ dào jīchǎng"
    },
    {
      "#" : 6,
      "eng" : "How much",
      "pin" : "Duōshǎo"
    },
    {
      "#" : 7,
      "eng" : "I/me",
      "pin" : "Wǒ"
    },
    {
      "#" : 8,
      "eng" : "Where is the restroom",
      "pin" : "xǐshǒujiān zài nǎli"
    },
    {
      "#" : 9,
      "eng" : "How are you?",
      "pin" : "Nǐ hǎo ma?"
    },
    {
      "#" : 10,
      "eng" : "Eat",
      "pin" : "Chī"
    },
    {
      "#" : 11,
      "eng" : "Thank you",
      "pin" : "Xièxiè"
    },
    {
      "#" : 12,
      "eng" : "I am sorry",
      "pin" : "Duìbùqǐ"
    },
    {
      "#" : 13,
      "eng" : "Phone number",
      "pin" : "diànhuà hàomǎ"
    },
    {
      "#" : 14,
      "eng" : "Yes",
      "pin" : "shì"
    },
    {
      "#" : 15,
      "eng" : "No",
      "pin" : "bú shì"
    }

    ];


class App extends Component {

  handleButton(props){
    console.log(eng2pin[props.value-1]["pin"]);
    let gUrl = "https://translate.google.com/translate_tts?ie=UTF-8&q="+ eng2pin[props.value-1]["pin"] +"&tl=zh-CN&client=gtx";
    console.log(gUrl);
    ReactDOM.render(
    <Sound
      url= {gUrl}
      playStatus={Sound.status.PLAYING}
      playFromPosition={0 /* in milliseconds */}
    />,null
  );

  }

  render() {
  
    
    return (
      <div className="App">
        <header className="App-header">
         <h1>Conversational Language Learning</h1>
         <a href="http://www.ctcfl.ox.ac.uk/Pinyin_Notes.htm" target="_blank">How to read pinyin</a>
        </header>
        <div>
        <ReactTable
         data={eng2pin}
         columns={[{
        Header: '#',
        accessor: '#' // String-based value accessors!
      }, {
        Header: 'English',
        accessor: 'eng',
        
      }, {
        Header: 'PinYin',
        accessor: 'pin'
      },
      {
        Header: 'Play',
        accessor: '#',
        Cell: ({value}) => (<button onClick={()=> this.handleButton({value})}>click!</button>)
      }

      ]}
         defaultPageSize={10}
         className="-striped -highlight"
        />
        </div>

      
      </div>
    );
  }
}

export default App;
