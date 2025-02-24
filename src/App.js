import './App.css';
// import Change from './cart/task3';
import ThemeProvider from './examples/task10';
import Component1 from './examples/task12';
import Auth from './examples/task17';
import CountParent from './examples/task4';
import Parent from './language/parent';
import Main from './language/task4';
// import ComponentA from './examples/task1';
// import Parent from './examples/task4';


function App() {
  return (
    <div>
      {/* <ComponentA/> */}
      {/* <Parent/> */}

      <CountParent/>

      <ThemeProvider/>

      <Component1/>

      <Auth/>

      <Main/>

      {/* <ColorProvider/> */}

      <Parent/>

    </div>
  );
}

export default App;
