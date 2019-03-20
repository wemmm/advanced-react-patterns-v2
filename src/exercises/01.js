// Building the toggle component

import React from 'react'
import { Switch } from '../switch'

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(
      ({on: !this.state.on}), 
      () => this.props.onToggle(this.state.on)
    );
  }

  render() {
    return (
      <Switch
        on={this.state.on}
        onClick={this.toggle}
      />
    )
  }
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the Toggle component.
function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return <Toggle onToggle={onToggle} />
}
Usage.title = 'Build Toggle'

export {Toggle, Usage as default}
