import React from "react";
import jsPDF from "jspdf";

class TestePdf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button type="primary">Download PDF</button>
      </div>
    );
  }
}

export default TestePdf;
