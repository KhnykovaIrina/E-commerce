import NavBar from "../NavBar";
import './style.scss';

const Header = () => {

    return (
        <header className="container">
            <div className='banner'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='text-banner p-0'>FREE SHIPPING ON ALL HERMAN MILLER TILL 2022</p>
                    </div>
                </div>
            </div>
            <NavBar />
        </header>
    );
}

export default Header;
