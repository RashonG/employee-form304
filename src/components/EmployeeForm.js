import './EmployeeForm.css';
import React from 'react';



class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      title: '',
      department: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Employee Data:', this.state);
    this.setState({
      name: '',
      email: '',
      title: '',
      department: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Employee Form</h2>

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>

        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </label>

        <br />

        <label>
          Job Title:
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
        </label>

        <br />

        <label>
          Department:
          <input
            type="text"
            name="department"
            value={this.state.department}
            onChange={this.handleChange}
            required
          />
        </label>

        <br />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default EmployeeForm;
