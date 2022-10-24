import "../style/NavBar.css"

const NavBar = () => {
    return(
        <div className="bar">
            <img src={require('../img/tecserviceslogowhite.png')} className='logo' alt=""/>
            {/* <div className='moreInfo'>Más información</div> */}
        </div>
    )
}
export default NavBar;