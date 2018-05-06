import React, { Component } from 'react';
import './App.css';
import ReactTable from 'react-table';
import "react-table/react-table.css";


class App extends Component {

  render() {
   
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
      }]}
         defaultPageSize={10}
         className="-striped -highlight"
        />
        </div>

      
      </div>
    );
  }
}

export default App;
