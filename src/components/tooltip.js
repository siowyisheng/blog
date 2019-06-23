import React from "react"
import glamorous from 'glamorous'
import ReactTooltip from 'react-tooltip'

const TextDiv = glamorous.span({
    borderBottom: `1px dotted black`,
})

// const TooltipDiv = glamorous.span(
//     {
//         visibility: `hidden`,
//         width: `120px`,
//         backgroundColor: `black`,
//         color: `#fff`,
//         textAlign: `center`,
//         padding: `5px 0`,
//         borderRadius: `6px`,
//         position: `absolute`,
//         zIndex: `1`,
//     },
//     (props) => ({
//         visibility: props.tooltipVisible ? `visible` : `hidden`,
//     })
// )

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mobileShow: false}
  }

  static defaultProps = {
    text: 'placeholder',
  }

  handleTouchStart = () => {
    this.setState({mobileShow: this.state.mobileShow ? false : true})
  }

  render() {
    const dataEvent = this.state.mobileShow ? "mouseenter" : "touchstart mouseenter"
    const dataEventOff = this.state.mobileShow ? "touchstart mouseout" : "mouseout"
    return (
        <div>
            <TextDiv onTouchStart={this.handleTouchStart} data-tip={this.props.text} data-event={dataEvent} data-event-off={dataEventOff}>
                {this.props.children}
            </TextDiv>
            <ReactTooltip place="bottom" type="info" effect="solid" globalEventOff='touchstart'/>
        </div>
    )
  }
}
