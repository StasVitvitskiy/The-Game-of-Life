import React, {Component} from 'react'
import { Button, ButtonToolbar, MenuItem, DropdownButton } from 'react-bootstrap';

export default class Buttons extends Component{
  handleSelect = (evt) => {
    this.props.gridSize(evt)
  }
  render() {
    return (
      <div className="center">
        <ButtonToolbar>
          <Button className="btn btn-default" onClick={this.props.playButton}>
          Play
          </Button>
          <button className="btn btn-default" onClick={this.props.pauseButton}>
          Pause
          </button>
          <button className="btn btn-default" onClick={this.props.clear}>
          Clear
          </button>
          <button className="btn btn-default" onClick={this.props.slow}>
          Slow
          </button>
          <button className="btn btn-default" onClick={this.props.fast}>
          Fast
          </button>
          <button className="btn btn-default" onClick={this.props.seed}>
          Seed
          </button>
          <DropdownButton
          title="Grid Size"
          id="size menu"
          onSelect={this.handleSelect}
          >
          <MenuItem eventKey="1">20x10</MenuItem>
          <MenuItem eventKey="2">50x30</MenuItem>
          <MenuItem eventKey="3">70x50</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    )
  }
}