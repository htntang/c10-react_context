export default function Footer({user, setUser}) {
    function logout(){
        setUser(null)
    }

    return <div style={{
        width: '100%',
        backgroundColor:'#FFC2D1',
        justifyContent:'space-around',
        alignItems:'center'}}>
    <div>Hi {user}</div>
    <button onClick={ logout }style={{backgroundColor:"#FF8FAB"}}>Logout</button>
    </div>
}