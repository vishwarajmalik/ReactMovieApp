
import './App.css';
import Counter, { } from './comps/counter_Hooks';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <i>src/App.js</i> and save to reload..
//         </p>
//         <span>{41 * 5}</span>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// pass value in different attributes
const Person = (props) => {
  console.log(`props`);
  console.log(props);
  return (<>
    <span> Name : {props.name ?? props.person.name}</span><br />
    <span> Age : {props.age ?? props.person.age}</span><br />
    <span> Gender : {props.gender ?? props.person.gender}</span><br />

    {/* <span>-----------------------</span><br /> */}

    {/* <span> Name : Vish</span><br />
    <span> Age : 35</span><br />
    <span> Gender : Male</span> */}

  </>)
}

// pass object in props
const PersonAddress = (props) => {
  console.log(`props in PersonAddress`);
  console.log(props);
  return (<>
    <span> Phone : {props.person.phone}</span><br />
    <span> City : {props.person.address.city}</span><br />
    <span> country : {props.person.address.country}</span><br />

    <span>-----------------------</span><br />

    {/* <span> Name : Vish</span><br />
    <span> Age : 35</span><br />
    <span> Gender : Male</span> */}

  </>)
}

const PersonDetail = (item) => {
  console.log(`item`);
  console.log(item);

  return (
    <>
      <Person person={item.person} />
      <PersonAddress person={item.person} />
    </>

  )

}

const App = () => {

  let person = {
    "name": "John Smith",
    "age": 30,
    "gender": "male",
    "email": "john.smith@example.com",
    "phone": "+1 (555) 555-5555",
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345",
      "country": "USA"
    }
  };

  let persons = [
    {
      "name": "John Smith",
      "age": 30,
      "gender": "male",
      "email": "john.smith@example.com",
      "phone": "+1 (555) 555-5555",
      "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA",
        "zip": "12345",
        "country": "USA"
      }
    },
    {
      "name": "Jane Doe",
      "age": 25,
      "gender": "female",
      "email": "jane.doe@example.com",
      "phone": "+1 (555) 123-4567",
      "address": {
        "street": "456 Oak St",
        "city": "Anycity",
        "state": "NY",
        "zip": "54321",
        "country": "USA"
      }
    },
    {
      "name": "Bob Johnson",
      "age": 45,
      "gender": "male",
      "email": "bob.johnson@example.com",
      "phone": "+1 (555) 987-6543",
      "address": {
        "street": "789 Elm St",
        "city": "Someplace",
        "state": "TX",
        "zip": "67890",
        "country": "USA"
      }
    }
  ]
    ;



  return (
    <div className='App' >
      <h2>This is test</h2>
      {person.name ?
        <>
          <h3>hello {person.name}</h3>
        </>
        :
        <div>
          <h3>No name</h3>
          <h4>please enter</h4>
        </div>
      }
      {/* <Person name="vish" age="35" gender="Male" /> */}
      {/* <Person {{ person }} /> */}
      {/* <Person name="rash" age="30" gender="fm" /> */}

      <>
        {
          persons.map((row, index) => {
            // if return 2 components from here
            return (
              <div key={index}>
                <Person key={row.name + 1} person={row} name={row.name} age={row.age} gender={row.gender} /> <br />
                <PersonAddress key={row.name} person={row}></PersonAddress>
              </div>
            );

            // or put Person and PersonAddress in PersonDetail and return that

            // return <PersonDetail person={row} ></PersonDetail>
          })
        }
        <Counter />;
      </>
    </div >
  )
}

export default App;
