import React, { useEffect,useState } from 'react';
import{Table,Form, Container,Row,Col} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    minWidth: -10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(-0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 5,
  },
 
    
});

const App = () => {
  const [users,setPosts] = useState([]);

  useEffect(() => {
      loadPosts();
  }, []);

  const loadPosts = async () => {
      const result = await axios.get("http://localhost:3000/posts");
      setPosts(result.data);
  };

  const deleteUser = async id => {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      loadPosts();
  };
 
      
  return (
    <div>
    <Container>
    <Row>
    <Col md="auto">
     <Typography variant="h5" gutterBottom>
      Enter Search Here
      </Typography>
      </Col>
      </Row>
      </Container>
      <Container>
      <Row>
    <Col md="auto">
      <Form.Control size="sm" type="text" placeholder="Search here" /></Col></Row></Container>
      
      <br></br>
      <Container>
      <Row>
    <Col md="auto">
      <Button variant="contained" color="light">
  Submitt
</Button>
</Col></Row></Container>
    <br></br>
    <br></br>
      <Table striped bordered hover>
  <thead>
    <tr>
     
      <th>Index</th>
      <th>Id</th>
      <th>Type</th>
      <th>punchline</th>
    </tr>
  </thead>
  <tbody>
{users.map((user, index) => (
<tr>
<th scope="row">{index + 1}</th>
<td>{user.id}</td>
<td>{user.type}</td>

<td>{user.punchline}</td>

</tr>
))
}
</tbody>
</Table>
    </div>
  )
  }

export default App;