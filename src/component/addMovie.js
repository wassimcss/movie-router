import React,{useState} from 'react';
import {Modal,Button} from 'react-bootstrap';

function AddMovie(props) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [rate, setRate] = useState(0);
    const [img, setImg] = useState("");
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlsave = () => {setShow(false)
    props.addMovie(title,rate,img)};
  
    return (
      <div>
        <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body><input type="text" onChange={e=>{setTitle(e.target.value)}}/>
          <input type="number" onChange={e=>{setRate(e.target.value)}}/>
          <input type="text" onChange={e=>{setImg(e.target.value)}}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handlsave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  ;

  export default AddMovie;