import Menu from "../Menu";
import './style.scss';

const Header = () => {

    return (
        <header>
            <div className='banner'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='text-banner'>FREE SHIPPING ON ALL HERMAN MILLER TILL 2022</p>
                    </div>
                </div>
            </div>
            <div className='header-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-9'>
                            <Menu/>
                        </div>
                        <div className='col-3'></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
