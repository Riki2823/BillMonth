import Avatar from '../img/avatar-boy-svgrepo-com.svg'

function Nav(){

    return(
        <nav id='nav'>
            <ul>
               <img className="navImg" src={Avatar} alt="logo" />
               <img className="navImg" src={Avatar} alt="avatar" /> 
            </ul>
        </nav>
    )
}

export default Nav;