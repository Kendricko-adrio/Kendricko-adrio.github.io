import ReactDOM from 'react-dom';
import MainPage from "./Page/Main/Main";
import './index.scss';

const App = () => {
    return(
    <div>
        <MainPage/>
    </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));


