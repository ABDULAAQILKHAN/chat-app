import React,{useState,useEffect} from "react";
import {sendMsg, userJoined, receiveMessage} from '../action/action'
import { useSelector,useDispatch } from "react-redux";
import "./chat.css"
import io from 'socket.io-client';
const socket = io.connect('http://localhost:8000')
const Chat = ()=>{
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const [message,setmessage] = useState('')
    const [user,setuser] = useState({name:'',message:''});
    const [name,setname] = useState('')
    const [roomInput,setroomInput] = useState()
    const [room,setroom] = useState()

   socket.open();
   useEffect(()=>{
    //dispatch(receiveMessage())
    try{

        socket.on('receive',(data)=>{
            console.log(data)
        })
    }catch (error){
        console.log(error)
    }
    //socket.close();
   },[])
        //let data = useSelector((state)=>state.sendMsgReducer)
        //console.log("state ",data)
        useEffect(()=>{
            setroom(roomInput);
        },[roomInput])
    useEffect(() => {
        setmessage(input)
        setuser({name,message})
        // eslint-disable-next-line 
    }, [input]);
    return<>
        <center>
            <div className="container">
                <input type="text" name="name" id="" onChange={(e)=>{
                    setname(e.target.value)
                }} />
                <input type="number" onChange={(e)=>{
                    setroomInput(e.target.value);
                }} />
                <button onClick={()=>{
                    setroom(roomInput)
                
                //console.log(name,room)
                socket.emit('joined',name,room)
                //dispatch(userJoined(name))
            }}>Enter</button>
                <div className="screen">
                    <div className="sender">
                        <p>sender</p>
                    </div>
                    <div className="reciver">
                        <p>this is replyer</p>
                    </div>
                  
                    
                </div>
                <div className="actions">

                <input type="text"name="message"
                onChange={(e)=>{setInput(e.target.value)}}  className="input"/>
                <button className="sendBtn" onClick={()=>{
                    console.log(user)
                    socket.emit('send-message',user,room)

                    //dispatch(sendMsg(user))
                    setInput('')
                }}>&#9658;</button>
                </div>
            </div>
        </center>
    </>
}
export default Chat;