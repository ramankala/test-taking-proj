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
                    <div className = 'testA'>
                        <div>Test A</div>
                        <div> test description</div>
                    </div>
                    <div className = 'testB'>
                        <div>Test B</div>
                        <div>test description</div>
                    </div>
                </div>
            </div>
            <div className = 'quoteBox'>
                stuff
            </div>
        </div>
    )
}

export default Home;