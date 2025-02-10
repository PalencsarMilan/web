import '../styles/oldal.css'
import kep from '../images/fortmine.jpeg'

const Oldal = () => {
    return (
        <div id="body">
            <div id="header">
                <div className="headelement"></div>
                <div className="headelement"></div>
                <div className="headelement"></div>
                <div className="headelement"></div>
            </div>
            <div id="right-main-box">
                <div id="right">
                    <div className="rightelement"></div>
                    <div className="rightelement"></div>
                    <div className="rightelement"></div>
                    <div className="rightelement"></div>
                    <div className="rightelement"></div>
                    <div className="rightelement"></div>
                </div>
                <div id="main">
                    <div className="mainelement">
                        <img src={kep} alt="fortmine" id='fortmine' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Oldal