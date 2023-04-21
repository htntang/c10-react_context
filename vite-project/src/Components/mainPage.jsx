import { useContext } from "react"

function WelcomePage({theUser}) {
    const loggedInUser = useContext(useContext)
    const theUser = loggedInUser.user
    return <div>Welcome {theUser}</div>
}

function MainPage({user}){
    return <div>
        <WelcomePage theUser={user} />
        This is your main application. 
        Your are logged in if you can see it.
    </div>
}

export default MainPage