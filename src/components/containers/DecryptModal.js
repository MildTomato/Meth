import React from "react";
import Modal from "react-modal";
import { decrypt } from "../../lib/encryption";

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

export class DecryptModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }
  render() {
    let { isLoading } = this.state;
    let { isOpen, productId, onClose } = this.props;

    return (
      <div style={{ display: "flex", width: "100px" }}>
        <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Decrypt">
          <h2>Decrypt</h2>
          {!isLoading ? (
            <div>
              <button
                onClick={() => this._onDecryptClick()}
                className="button secondary"
              >
                Decrypt
              </button>
            </div>
          ) : (
            <div>Decrypting ...</div>
          )}
        </Modal>
      </div>
    );
  }

  _onDecryptClick = async () => {
    let { onSuccess, onFail } = this.props;
    try {
      this.setState({ isLoading: true });
      let decrypted = await decrypt();
      console.log("decrypted", decrypted);
      return onSuccess(decrypted);
    } catch (error) {
      console.error(error);
      return onFail(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
}
