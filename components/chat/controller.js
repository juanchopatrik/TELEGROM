const store= require('./store')

function addChat(users){
    if (!users || !Array.isArray(users)){
        return Promise.reject('InvalidUserList')
    }

    const chat={
        users: users,
    }
    return store.add(chat)
}

function listChats(userId){
    return store.list(userId)
}

module.exports={
    addChat,
    listChats
}