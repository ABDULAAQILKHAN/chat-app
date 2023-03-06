
//import io from 'socket.io-client';
//const socket = io.connect('http://localhost:8000')

const initialState = ''
const sendMsgReducer = (state=initialState,action)=>{
    
    
    switch(action.type){
            case "sendMsg":
                const user = action.payload;
                //socket.emit('send-message',user)

                
        case "userJoined":
            const name = action.payload
            //socket.emit('joined',name)
            return{
                name
            }
            default: return ""
            
        }

}


export default sendMsgReducer;