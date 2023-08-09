import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <Link to="/">Home</Link>
        </ul>
        <ul>
          <Link to="/Contact">Contact</Link>
        </ul>
        <ul>
          <Link to="/Blogs">Blogs</Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;

// class App extends Component {
//   render() {
//     return (
//       <div className="app">
//         <h1>Hello React World</h1>
//       </div>
//     );
//   }
// }
// class NewApp extends Component {
//   render() {
//     return (
//       <div className="app">
//         <h3>Login Page</h3>
//         <Button />
//       </div>
//     );
//   }
// }
// class Button extends Component {
//   render() {
//     return <button className="button">Submit</button>;
//   }
// }
// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//     <NewApp />
//     <Gallery />
//     <Button />
//   </React.StrictMode>
// );

// react class, methods and objects :

// class Demo {
//   demoMethod() {
//     var a = 5;
//     var b = 18;
//     var c = a + b;
//     document.getElementById("root").innerHTML = c;
//   }
//   demoMethod2() {
//     var a = "React User 1";
//     var b = "React User 2";
//     var c = a + b;
//     document.getElementById("root").innerHTML = c;
//   }
// }
// var demoobj = new Demo();
// demoobj.demoMethod2();
// arreow function using react :
// var arrow = (x, y) => {
//   var a = 100;
//   var b = 500;
//   var c = a + b - x;
//   var ans = c * y;
//   document.getElementById("root").innerHTML = ans;
// };
// arrow(80, 18);
// variables in react :

// var myVar = () => {
//   var a = 5;
//   if (a === 5) {
//     let a = 10;
//     document.getElementById("root").innerHTML = a;
//   }
//   // document.getElementById("root").innerHTML = a;
// };
// myVar();
// jsx example :

// const rElem = React.createElement("h1", {}, "hello react world"); // without jsx element
// const jsxElm = <h1>Holle React World with Jsx</h1>; // with jsx element
// var pagestyle = {
//   color: "purple",
//   textAlign: "center",
//   margin: 10,
// }; // inline css

/** external style */
// const jsxmulitTag = (
//   <div className="divstyle">
//     <h2 className="header">Welcome To React Login</h2>
//     <input type="text" placeholder="Input one" />
//     <input type="text" placeholder="Input Two" />
//     <button>Singin</button>
//   </div>
// );
// ReactDom.render(jsxmulitTag, document.getElementById("root"));

// /* function components  */
// function Heading() {
//   return <h2>React Component</h2>;
// }
// function Sidebar() {
//   return <h1>Sidebar</h1>;
// }
// function Navbar() {
//   return <h3>navication bar</h3>;
// }
// function Footer() {
//   return <footer>Footer area</footer>;
// }
// function Website() {
//   return (
//     <div>
//       <Heading />
//       <Navbar />
//       <Sidebar />
//       <Footer />
//     </div>
//   );
// }
// ReactDom.render(<Website />, document.getElementById("root"));

// /* class Components */

// class Website extends React.Component {
//   render() {
//     return <h1>Welcome to react</h1>;
//   }
// }

/* react props */
// class Newwebsite extends React.Component {
//   render() {
//     return (
//       <div>
//         <Website />
//         <h2>
//           login page by {this.props.topic} in {this.props.lag} using{" "}
//           {this.props.support}
//         </h2>
//       </div>
//     );
//   }
// }

// class ParentsElement extends React.Component {
//   render() {
//     return <h2>My Car collection {this.props.info.favotie}</h2>;
//   }
// }

// class ChildElementPro extends React.Component {
//   render() {
//     const myVar = "english";
//     return <ParentsElement varpors={myVar} />;
//   }
// }

// class Carinfo extends React.Component {
//   render() {
//     const carInfo = { name: "Ford", model: "Mustang", favotie: "Audi" };
//     return <ParentsElement info={carInfo} />;
//   }
// }

// class Learnreactstate extends React.Component {
//   render() {
//     return (
//       <h1>
//         differnce between {this.props.other} in {this.props.name}
//       </h1>
//     );
//   }
// }
/* React Events */

// class Eventsofreact extends React.Component {
//   render() {
//     const shoot = () => {
//       alert("Sweeet Shot");
//     };
//     return <button onClick={shoot}>Take the shoot !</button>;
//   }
// }

// Learnreactstate.defaultProps = { name: "props", other: "state" };

// ReactDom.render(
//   <Learnreactstate other="components vs state and props" name="react" />,
//   document.getElementById("root")
// );
/** for api purpose (laravel server) */
// function App() {
//   return (
//     <div>
//       <h2>React App</h2>
//       <Users />
//     </div>
//   );
// }
// ReactDom.render(<App />, document.getElementById("root"));

/** react state */

// class Reactstate extends React.Component {
//   constructor() {
//     super();
//     this.state = { initalvalue: "Welcome", name: "react" };
//   }

//   componentWillMount() {
//     alert("Welcome to my app");
//   }

//   render() {
//     return (
//       <h2>
//         {this.state.initalvalue} , {this.state.name}
//       </h2>
//     );
//   }
// }
/**
 Event with and without arguments
 */
// function ReacteventWithoutArg() {
//   const shoot = () => {
//     alert("You we go");
//   };
//   return <button onClick={shoot}>let go!</button>;
// }
// function ReacteventWithArg() {
//   const shoot = (event) => {
//     alert(event);
//   };
//   return <button onClick={() => shoot("goal !!")}>let go!</button>;
// }

// function Football() {
//   const shoot = (a, b) => {
//     alert(b.type);
//   };

//   return (
//     <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
//   );
// }

/** react conditions-
 * if (in if-con as default the condition is in false state) */
// function MissedGoal() {
//   return <h1>I am Missed!</h1>;
// }
// function MadeGoal() {
//   return <h2>I am Made goal!</h2>;
// }

// function MainFun(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <MadeGoal />;
//   }
//   return <MissedGoal />;
// }

/**  Logical AND Operator */

// function Office(props) {
//   const staffs = props.members;
//   return (
//     <>
//       <h1>AAHA Solutions</h1>
//       {staffs.length > 0 && (
//         <h3>aaha solutions have {staffs.length} staffs in office</h3>
//       )}
//     </>
//   );
// }

/** ternary operator */
// function MissedGoal() {
//   return <h1>I am Missed the goal!</h1>;
// }
// function MadeGoal() {
//   return <h2>I am Made goal!</h2>;
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
// }
// // const hoomans = ["staff-1", "staff-2", "staff-3", "staff-4"];
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Goal isGoal={true} />);

/** React list */

// function Animalslist(props) {
//   return <h2>it's me {props.animal}</h2>;
// }
// function Forest() {
//   const animalnames = [
//     { id: 1, animalname: "rabbit" },
//     { id: 2, animalname: "lion" },
//     { id: 3, animalname: "cheeta" },
//     { id: 4, animalname: "python" },
//     { id: 5, animalname: "falcon" },
//     { id: 6, animalname: "sparrow" },
//   ];
//   return (
//     <>
//       <h1>Amazon Forest Animals List</h1>
//       <ul>
//         {animalnames.map((name) => (
//           <Animalslist key={name.id} animal={name.animalname} />
//         ))}
//       </ul>
//     </>
//   );
// }

/** React forms */

// function ReactFrom() {
//   return (
//     <form>
//       <label>Enter Your good name :</label>
//       <input type="text" placeholder="Enter name here ..." />
//     </form>
//   );
// }
// singel input form :
// function MyFormsimple() {
//   const [name, setName] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`The name you entered was: ${name}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Enter your name:
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//   );
// }

/**
 Multiple Input Fields
   */
// function MyForm() {
//   const [inputs, setInputs] = useState({});
//   const [myselect, setSelect] = useState({});
//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs((values) => ({ ...values, [name]: value }));
//   };
//   const handleSelectChange = (event) => {
//     setSelect(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Enter your name:
//         <input
//           type="text"
//           name="username"
//           value={inputs.username || ""}
//           onChange={handleChange}
//         />
//       </label>
//       <br></br>
//       <label>
//         Enter your age:
//         <input
//           type="number"
//           name="age"
//           value={inputs.age || ""}
//           onChange={handleChange}
//         />
//       </label>
//       <br></br>
//       <label>Enter your Email :</label>
//       <input
//         type="email"
//         name="emailaddress"
//         value={inputs.emailaddress || ""}
//         onChange={handleChange}
//       />
//       <br></br>
//       <label>Select Gender :</label>
//       <select value={myselect} onChange={handleSelectChange}>
//         <option>Male</option>
//         <option>Female</option>
//         <option>Trans</option>
//       </select>
//       <br></br>
//       <input type="submit" />
//     </form>
//   );
// }
