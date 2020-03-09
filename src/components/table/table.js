import React, {Component} from 'react';
import { Table } from 'react-bootstrap';
import './table.css'

class Data extends Component {

  render() {
    return(
      <div className="">
        <div className="container">
          <div className="row mb-4">
            <div className="col-sm-12 grid-margin">
              <div className="card h-100">
                <h4 className="card-header">Table</h4>
                <div className="card-body">
                  <Table striped bordered hover>
                    <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
  

export default Data;