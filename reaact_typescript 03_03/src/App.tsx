import Header from "./components/Header"
import Subheader from "./components/Subheader"
import Section from "./components/Section"
import Tyicode from "./components/Tyicode"
import RandomUsers from "./components/RandomUsers"

function App() {

  return (
    <>
      <h1 className="text-center text-red-500 text-3xl font-bold ">React Tyscript</h1>
      <Header headerText="Typescript Test header" id={6}/>
      <Subheader>
        <p>Szoveg1</p>
        <p className="text-right">Szoveg2</p>
        <p className="text-left">Szoveg3</p>
        <p className="text-right">Szoveg4</p>
        <p>Szoveg5</p>
      </Subheader>


      <Section>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </Section>
      <br />
      <br />
      <Section title="Test cim">
        <p>elso</p>
        <p>masodik</p>
        <p>harmadik</p>
        <p>negyedik</p>
      </Section>



      <Tyicode/>
      <RandomUsers></RandomUsers>

      <div className="item-center flex justify-center items-center">
        <button className="btn btn-primary ">Csao</button>
      </div>
    </>
  )
}

export default App
