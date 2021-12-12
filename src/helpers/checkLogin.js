const hasLogin = () => {
    try{
       const tokenWeb = localStorage.getItem("token")
       console.log(tokenWeb)
       if (tokenWeb) {
           return true
       }
       else {
           return false
       }
    }
    catch (error) {
        return false

    }
}

export {
    hasLogin
}