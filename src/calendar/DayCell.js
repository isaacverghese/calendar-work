import React from "react";
import "./SeasonCalendar";

class DayCell extends React.Component {
  dayStyle = () => {
    let style = {};
    if (this.props.data !== undefined) {
      style["width"] = "23px";
      style["height"] = "23px";
      style["color"] = "#2b2b2b";
      style["fontSize"] = "10px";
      style["fontWeight"] = "300";
      //style["boxSizing"] = "border-box";
      style["textAlign"] = "center";
      style["lineHeight"] = "normal";
    }
    return style;
  };

  handleClick = (data, e) => {
    console.log("TableCell Clicked");
    if (e.target.className !== "dateSelected") {
      e.target.className = "dateSelected";
    } else {
      e.target.className = "";
    }
  };
  render() {
    return (
      <td
        className="dayCell"
        onClick={e => this.handleClick(this.props.data, e)}
        key={this.props.data.date}
        style={this.dayStyle()}
      >
        {this.props.data.date}
      </td>
    );
  }
}

export default DayCell;
