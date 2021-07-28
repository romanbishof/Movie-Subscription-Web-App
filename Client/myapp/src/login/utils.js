import axios from "axios";

const getUsers = async () => {

    let usersobj = await axios.get(`http://localhost:8080/users`)
    let users = usersobj.data
    
    let mergeUsers = users.users
    let userJson = users.userJson
    let userPermisions = users.usersPermisions
    // let newArray = {...mergeUsers, ...userJson, ...userPermisions}

    let newArray = []
        for (let i = 0; i < mergeUsers.length; i++) {
            newArray[i] = {...mergeUsers[i], ...userJson[i], ...userPermisions[i]}
            
        }

    
    
    return newArray
    
}

const updateUser = async (userId, userObj) => {
    await axios.put(`http://localhost:8080/users/${userId}`, userObj)
}

const addUser = async (userObj) => {
        await axios.post(`http://localhost:8080/users`, userObj)

    return  getUsers()
    
}

const deleteUser = async (userId) => {
    
    return await axios.delete(`http://localhost:8080/users/${userId}`)
}

const getMovies = async() => {
    return await axios.get(`http://localhost:8080/movies`)
}

const updateMovie = async(url, obj) => {
    return await axios.put(url, obj)
}

const deleteMovie = async(url) => {
        await axios.delete(url)

    return getMovies()
}

const saveMovie = async(obj) => {
        await axios.post(`http://localhost:8080/movies`, obj)

    return getMovies() 
}

const getMembers = async() => {
    return await axios.get(`http://localhost:8080/members`)
}

const updateMember = async(memberId, memberObj) => {
    return axios.put(`http://localhost:8080/members/${memberId}`, memberObj)
}

const deleteMember = async(memberId) => {
    return await axios.delete(`http://localhost:8080/members/${memberId}`)
}

const addMember = async(memberObj) => {
        let resp = await axios.post(`http://localhost:8080/members`, memberObj)

        let newSubscription = {
            memberId: resp.data._id,
            movies: []
        }
        await axios.post(`http://localhost:8080/subscription`, newSubscription)

    return getMembers()
}

const getSubscriptions = async() => {
    return await axios.get(`http://localhost:8080/subscription`)
}

const updateSub = async(subId, subObj) => {
        

    return await axios.put(`http://localhost:8080/subscription/${subId}`,subObj)
}



export default { updateSub, getSubscriptions, addMember, deleteMember, updateMember, getMembers, updateUser, getUsers, getMovies, updateMovie, deleteMovie, saveMovie, addUser, deleteUser}