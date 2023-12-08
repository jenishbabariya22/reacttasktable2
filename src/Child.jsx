const { Component } = require("react");

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: this.props.data
    }
  }
  render() {
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">empid</th>
            <th scope="col">empname</th>
            <th scope="col">empemail</th>
            <th scope="col">empphone</th>
            <th scope="col">country</th>
            <th scope="col">state</th>
            <th scope="col">city</th>
            <th scope="col">area</th>
            <th scope="col">empdeg</th>
            <th scope="col">empsalary</th>
            <th scope="col">empdepartment</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.userdata.map((val) => {
              return (
                <tr>
                  <td style={{ background: val.color }}>{val.empid}</td>
                  <td style={{ background: val.color }}>{val.empname}</td>
                  <td style={{ background: val.color }}>{val.empemail}</td>
                  <td style={{ background: val.color }}>{val.empphone}</td>
                  <td style={{ background: val.color }}>{val.empaddress.country}</td>
                  <td style={{ background: val.color }}>{val.empaddress.state}</td>
                  <td style={{ background: val.color }}>{val.empaddress.city}</td>
                  <td style={{ background: val.color }}>{val.empaddress.area}</td>
                  <td style={{ background: val.color }}>{val.empdeg}</td>
                  <td style={{ background: val.color }}>{val.empsalary}</td>
                  <td style={{ background: val.color }}>{val.empdepartment}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

    m /  export default Child