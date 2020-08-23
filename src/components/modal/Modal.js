import React from "react";
import ReactDom from 'react-dom';
import './modal.css'

const portalRoot = document.getElementById('portal-root')

export default class Modal extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (this.props.show) {
      return null;
    }
    return ReactDom.createPortal(
      <div className="overlay">
        <div className="estilizacaoModal">{this.props.children}
        <div>
          <p  onClick={(e) => {this.onClose(e);}}>
            Cancelar
          </p>
        </div>
        
        </div>

        
      </div>,
      portalRoot,
    );
  }
}
