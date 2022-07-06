import { Component } from 'react';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publication';

const LS_KEY = 'reader_item_index';

export class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  componentDidMount() {
    const saveState = localStorage.getItem(LS_KEY);
    if (saveState) {
      const index = Number(localStorage.getItem(LS_KEY));
      this.setState({ index });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = this.props.items.length;
    const currentItem = items[index];

    return (
      <div style={{ padding: 24 }}>
        <Controls
          onChange={this.changeIndex}
          currentItem={index + 1}
          totalItems={totalItems}
        />
        <Progress currentPage={index + 1} totalPages={totalItems} />
        <Publication title={currentItem.title} text={currentItem.text} />
      </div>
    );
  }
}
