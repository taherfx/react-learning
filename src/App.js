import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome"
import Greet from './components/Greet';
import Message from './components/Message';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import MyStyles from './components/MyStyles';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import Fragment from './components/Fragment';
import ParentComp from './components/ParentComp';
import RefComp from './components/RefComp';
import Hero from './components/Hero';
import ErrorBoundiries from './components/ErrorBoundiries';
import ClickCounter from './components/ClickCounter';
import HoverCount from './components/HoverCount';
import RenderProps from './components/RenderProps';
import ClickCounterTwo from './components/ClickCounterTwo';
import ComponentC from './components/context/ComponentC';
import { UserProvider } from './components/context/UserContext';
import GetMethod from './components/http/GetMethod';
import PostMethod from './components/http/PostMethod';
import HooksCount from './components/hooks/HooksCount';
import HookUsername from './components/hooks/HookUsername';
import HookArr from './components/hooks/HookArr';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>Hello World</p> */}

        {/* <RefComp /> */}
        {/* <ParentComp /> */}
        {/* <Fragment /> */}
        {/* <LifecycleA /> */}
        {/* <Form /> */}
        {/* <MyStyles color={true} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <Welcome name="Taher" />       
        <Greet name="Taher" />
         <Message /> */}

         {/* <ErrorBoundiries>
        <Hero heroname='Batman' />
        </ErrorBoundiries>

        <ErrorBoundiries>
        <Hero heroname='Captain America' />
        </ErrorBoundiries>

        <ErrorBoundiries>
        <Hero heroname='Joker' />
        </ErrorBoundiries> */}

        {/* <ClickCounter name="taher" />
        <HoverCount /> */}
        {/* <RenderProps render={(count, handleCount) => {
          return <ClickCounterTwo count={count} incrementCount={handleCount} />
        }} /> */}
        {/* <UserProvider value="taher"> 
          <ComponentC />
        </UserProvider> */}
        {/* <GetMethod /> */}
        {/* <PostMethod /> */}
        {/* <HooksCount /> */}
        {/* <HookUsername /> */}
        <HookArr />
      </header>
    </div>
  );
}

export default App;
