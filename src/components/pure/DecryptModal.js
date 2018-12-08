import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
// const localStyles = {
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   modal: {
//     content: {
//       maxWidth: "400px",
//       maxHeight: "600px"
//     }
//   }
// } 
const MOCK_TIME = 5000;

export class DecryptModal extends React.PureComponent {
  render() {
    let { isOpen, onSuccess, productId } = this.props;

    setTimeout(() => {
      onSuccess(productId);
    }, MOCK_TIME);
    return (
      <div style={{display: 'flex'}}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onSuccess}
        contentLabel="Decrypt"
      >
        <h2>Decrypting</h2>
        <div>Loading</div>
      </Modal>
      </div>
    );
  }
}
