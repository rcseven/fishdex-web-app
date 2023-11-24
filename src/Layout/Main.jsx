import App from "../component/App";

const Main = () => {
    return (
        <main>
            <div className="banner-container">
                <div className="banner-content">
                    <h1>Know Your Fish</h1>
                    <p>Learn more about fish by picturing it.</p>
                </div>
            </div>
            <div className="content-container">
                <App />
            </div>
        </main>
    )   
}

export default Main;