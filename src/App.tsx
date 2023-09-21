import React from 'react';
import './App.css';
function App() {
    return (
        <div className={"app-wrapper"}>
            <header className={"header"}>
                <img src={"https://seeklogo.com/images/P/pepsi-logo-94D7DEF922-seeklogo.com.png"} alt={"some"}/>
            </header>
            <nav className={"nav"}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className={"content"}>
                <div>
                    <img src={"https://img.freepik.com/premium-photo/orange-butterfly-flower-nature-background_38810-5249.jpg?w=900"} alt={"Flower"}/>
                </div>
                <div>
                    Avatar + description
                </div>
                <div>
                    My post
                    <div>
                        New Post
                    </div>
                    <div>
                        <div>
                            Post 1
                        </div>
                        <div>
                            Post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;