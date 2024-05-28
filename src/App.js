import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import payload from './payload'

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [question, setQuestion] = useState('');
  const [loader, setLoader] = useState(false)

  const updateChat = async () => {
    let updatedChat = chatHistory
    updatedChat.push({
      type: 'question',
      name: 'Report Analyser',
      value: {
        type: 'string',
        res: question
      },
      time: new Date(),
    })
    setChatHistory(updatedChat)
    setQuestion("")
    setLoader(true)
    let API_KEY = 'pak-O_dfmpaCrTdfWibe7opXkKMbnptgUsauedGyXNsDjfk'
    let header = {
        'accept': 'application/json',
        'content-type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }
    payload["data"]['input'] = [question]
    // let SERVER_URL = "http://localhost:8080/https://bam-api.res.ibm.com"
    // let response = await axios.post(`${SERVER_URL}/v2/text/generation?version=2024-04-15`, payload, {headers: header})
    // if(!response.data.results[0].generated_text.includes('df')) {
    //   let updatedChat = chatHistory
    //     // updatedChat.push()
    //     setChatHistory([...updatedChat, {
    //       type: 'answer',
    //       name: 'BlueMind',
    //       value: {
    //         type: 'string',
    //         res: response.data.results[0].generated_text
    //       },
    //       time: new Date(),
    //     } ])
    // } else{
    //   let data = {
    //     query: response.data.results[0].generated_text
    //   }
    //   let res = await axios.post('http://localhost:8080/http://127.0.0.1:3003/', data)
    //   let updatedChat = chatHistory

    //   setChatHistory([...updatedChat,{
    //     type: 'answer',
    //     name: 'BlueMind',
    //     value: {
    //       type: res.data.type,
    //       res: res.data.type == 'obj' ? JSON.parse(res.data.res) : res.data.res
    //     },
    //     time: new Date(),
    //   }])
    // }
    setChatHistory([...updatedChat,{
      type: 'answer',
      name: 'BlueMind',
      value: {
        type: 'string',
        res: 'Hello world'
      },
      time: new Date(),
    }])
    setLoader(false);
  }

  return (
    <div className="App" style={{padding: "25px"}}>
      {/* <div className='item1'>
        <a href="http://localhost:3000/Discovery.csv"> Discovery Report </a>
      </div> */}
      <div className="container clearfix item2">
       
        <div className="chat">
          <div className="chat-header clearfix">
            <img src="https://cdn.pixabay.com/photo/2023/02/05/17/33/ai-generated-7770055_1280.jpg" style={{width: '10%'}} alt="avatar" />
            
            <div className="chat-about">
              <div className="chat-with">Chat with BlueMind</div>
            </div>
            <i className="fa fa-star"></i>
          </div>
          
          <div className="chat-history">
            <ul>
              {chatHistory.length > 0 && chatHistory.map((item) => {
                return (
                  <li className="clearfix">
                    <div className={item.type === 'question' ? "message-data align-right" : "message-data"}>
                      <span className={item.type === 'question' ? "message-data-name" : "message-data-name sender-message"}>{item.name}</span> 
                      <i className={item.type === 'question' ? "fa fa-circle me" : "fa fa-circle online"}></i>
                    </div>
                    {(item.value.type === 'string' || item.value.type === 'int') && <div className={item.type === 'question' ? "message other-message float-right" : "message my-message"}>
                      {item.value.res}
                    </div>}
                    {item.value.type === 'obj' && <div className={item.type === 'question' ? "message other-message float-right" : "message my-message"}>
                      <table>
                        <thead>
                            <tr>
                                {Object.keys(item.value.res[0]).map((head, headID) => (
                                    <th key={headID}>{head}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {item.value.res.map((row, index) => (
                              <tr>
                                {Object.keys(item.value.res[index]).map((val, id) => (
                                  <td key={id}>{row[val]}</td>
                                ))}
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>}
                  </li>
                )
              })}
            </ul>
          </div>
          
          <div className="chat-message clearfix">
            <textarea value={question} onChange = {(e) => setQuestion(e.target.value)} name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="5" />
                    
            <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
            <i className="fa fa-file-image-o"></i>
            
            {loader ? <div class="loader"></div> : <button onClick={() => updateChat()}>Send</button>}
            
          </div>
          
        </div> 
      </div>
    </div>
  );
}

export default App;
