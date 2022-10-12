import { Link } from 'react-router-dom';

import '../styles/Header.css';

const Header = () => {
    return (
        <div className = 'app-header'>
            <Link to = '/'>
                <div className = 'header-logo'>Header Logo</div>
            </Link>
            <div>
                <ul>
                    <Link to = '/'>
                        <li>Home</li>
                    </Link>
                    <Link to = '/testA'>
                        <li>Test A</li>
                    </Link>
                    <Link to = '/testB'>
                        <li>Test B</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header;