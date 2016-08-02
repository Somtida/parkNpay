import React, { Component } from 'react';

export default class avalibleDisplay extends Component {
  constructor(props) {
    super(props);


  }


  render() {
    let {tenants} = this.props;
    console.log('tenants: ', tenants);

    let display = tenants.map(tenant => <Tenant key={tenant._id} tenant={tenant} />);
    return (
      <table className="table">
        <thead>
          <tr>
            <th className="col-xs-4 col-md-4 text-center">Name</th>
            <th className="col-xs-4 col-md-4 text-center">Email</th>
            <th className="col-xs-4 col-md-4 text-center">Edit</th>
            <th className="col-xs-4 col-md-4 text-center">Delete</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {display}
        </tbody>
      </table>
    );
  }
}
