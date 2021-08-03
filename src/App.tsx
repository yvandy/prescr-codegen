import { Fragment, useEffect } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import 'antd/dist/antd.css';
import { useDispatch } from 'react-redux';

function App() {
  // Load medicines dropdown data
  const dispatchMed = useDispatch();
  const fetchMedicine = async () => {
    const response = await fetch('https://prescription-app-84502-default-rtdb.firebaseio.com/medicines.json');
    const medicines = await response.json();
    dispatchMed({ type: "loadMedicines", payload: medicines }); // update store
  }
  useEffect(() => {
    fetchMedicine();
  })
  return (
    <Fragment>
      <Homepage />
    </Fragment>
  );
}

export default App;
