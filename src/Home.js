import { Link } from 'react-router-dom';

import './styles/Home.css';

const Home = () => {

    return (
        <div className = 'container'>
            <div className = 'companyBox'>
                <div>
                    <div>Zebra Tests is awesome</div>
                    <div>This website has some subtext that goes here under the main title.  It's a smaller font and the colour is a lower contrast</div>
                    <div className = 'sign-up-btn'>Sign me up</div>
                </div>
                <div>placeholder for img</div>
            </div>
            <div className = 'testBox'>
                <div>Zebra Tests</div>
                <div className = 'testSection'>
                    <Link to = '/testA'>
                        <div className = 'testA'>
                            <div>Test A</div>
                            <div>Test your knowledge on Biology.</div>
                        </div>
                    </Link>
                    <Link to = '/testB'>
                        <div className = 'testB'>
                            <div>Test B</div>
                            <div>Test your knowledge on Astronomy.</div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className = 'quoteBox'>
                <div>
                    The greatest glory in living lies not in never falling, but in rising every time we fall.
                </div>
                <div>
                    -Nelson Mandela
                </div>
            </div>
        </div>
    )
}

export default Home;