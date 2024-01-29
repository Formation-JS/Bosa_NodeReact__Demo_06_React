import './App.css'
import Counter from './components/counter/counter';
import HelloWorld from './components/hello-world/hello-world';
import OrganismInfo from './components/organism-info/organism-info';
import ProductTable from './components/product-table/product-table';

function App() {

  return (
    <>
      <HelloWorld firstname='Della' lastname='Duck' gender='F' />
      {/* <HelloWorld firstname='Zaza' lastname='Vanderquack' /> */}
      <ProductTable />
      <Counter />
      
      <OrganismInfo organismId={10215} />
      <OrganismInfo organismId={10215} />
      <OrganismInfo organismId={10215} />

      <OrganismInfo organismId={10242} />
      <OrganismInfo organismId={10242} />
      <OrganismInfo organismId={10242} />
    </>
  )
}

export default App
