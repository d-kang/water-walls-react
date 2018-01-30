import React, { PureComponent } from 'react';

class Form extends PureComponent {
  state = {
    value: '',
  }

  handleValue = (e) => {
    const { value } = e.target;
    this.setState({ value });
  }

  submit = (e) => {
    e.preventDefault();
    this.props.postData(this.state.value);
    e.target.value = '';
  }

  render() {
    return (
      <form onSubmit={this.submit} action="">
        <input onChange={this.handleValue} type="text"/>
        <button>click me!</button>
      </form>
    )
  }
}

export default Form;
