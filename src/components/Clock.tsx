import React from 'react';

interface State {
  currentDate: Date;
}

interface Props {
  clockName: string;
  clockNameId: number;
}

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    currentDate: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ currentDate: new Date() });

      this.printCurrentDate();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    clearInterval(this.props.clockNameId);
  }

  printCurrentDate() {
    window.console.log(this.state.currentDate.toLocaleTimeString());
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.currentDate.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
