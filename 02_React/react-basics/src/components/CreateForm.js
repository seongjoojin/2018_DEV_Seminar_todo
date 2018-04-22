import React, { Component } from 'react';
import './CreateForm.css';

class CreateForm extends Component {
  state = {
    input: ''
  };

  handleChange = e => {
    this.setState({
      // 앞으로 바뀔 input 의 값은 e.target.value 에 있습니다.
      input: e.target.value
    });
  };

  handleSubmit = e => {
    // Form Submit 은 페이지를 새로고침을 트리거하는데
    // 이를 방지해줍니다.
    e.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <form className="CreateForm" onSubmit={this.handleSubmit}>
        <input
          placeholder="오늘 뭐하지..?"
          onChange={this.handleChange}
          value={this.state.input}
        />
        <button type="submit">추가</button>
      </form>
    );
  }
}

export default CreateForm;
