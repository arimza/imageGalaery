import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const ImageModal = (props: any) => {
    const [modal, setModal] = useState(props.selectedImage? true : false);
    const toggle = (action: any) => {
        props.handleNavigation(action)
    }
    return <>
          <Modal isOpen={modal} >
            <ModalHeader toggle={toggle}>Images Viewer</ModalHeader>
            <ModalBody>
                <img className = 'imageContainer' src={props.selectedImage.download_url} width={props.selectedImage.width} height={props.selectedImage.height} alt={props.selectedImage.alt}  />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => toggle('d')}>
               Previous
              </Button>{' '}
              <Button color="secondary" onClick={() => toggle('i')}>
                Next
              </Button>
              <Button color="secondary" onClick={() => {toggle('c');setModal(false)} }>
                Close
              </Button>
            </ModalFooter>
          </Modal>
          </>
}
export default ImageModal;