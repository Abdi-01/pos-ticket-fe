import { Container } from '@chakra-ui/react';
import LandingPage from './Pages/Landing';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { storeData } from './reducers/data';
import { API_URL } from './helper';

function App() {
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      let res = await axios.get(``) // link API
      console.table(res.data.articles);
      dispatch(storeData(res.data.articles)); // menyimpan data ke reducer
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getData();
  }, [])
}

function App() {
  return (
    <Container>

      <LandingPage />
    </Container>
  );
}

export default App;
