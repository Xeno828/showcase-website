import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

export default class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: false,
    };

    const handleClick = () => {
      this.setState({ anchorEl: true });
    };

    const handleClose = () => {
      this.setState({ anchorEl: false });
    };
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'menu' : false}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Menu
        </Button>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Home</MenuItem>
          <MenuItem onClick={this.handleClose}>About</MenuItem>
          <MenuItem onClick={this.handleClose}>Portfolio</MenuItem>
        </Menu>
      </div>
    );
  }
}
