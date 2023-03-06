export const sendMsg = (user)=>{
    return{
        type: "sendMsg",
        payload: {
            user
        }
    }
}
export const userJoined = (name)=>{
    return {
        type: 'userJoined',
        payload: {name}
    }
}
export const receiveMessage = ()=>{
    return{
        type: 'receiveMessage'
    }
}

     

    
