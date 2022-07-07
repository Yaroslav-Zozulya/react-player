import { Component } from 'react';
import { Controls } from 'components/Reader/Controls';
import { Progress } from 'components/Reader/Progress';
import { Publication } from 'components/Reader/Publication';
import { getPublications } from 'services/publicationsApi';

export class Reader extends Component {
  state = {
    index: 0,
    items: [],
    isLoading: false,
  };

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const items = await getPublications();
      this.setState({ isLoading: false, items });
    } catch (error) {
      console.log(error);
    }
  }

  // componentDidMount() {
  //   const saveState = localStorage.getItem(LS_KEY);
  //   if (saveState) {
  //     const index = Number(localStorage.getItem(LS_KEY));
  //     this.setState({ index });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.index !== this.state.index) {
  //     localStorage.setItem(LS_KEY, this.state.index);
  //   }
  // }

  render() {
    const { index, items, isLoading } = this.state;
    const totalItems = items.length;
    const currentItem = items[index];
    const showPlaceholder = !isLoading && totalItems === 0;
    const showReaderUI = !isLoading && totalItems > 0;

    return (
      <div style={{ padding: 24 }}>
        {isLoading && <div>Laoding...</div>}
        {showPlaceholder && <div>Ещё нет публикаций!</div>}
        {showReaderUI && (
          <>
            <Controls
              currentItem={index + 1}
              totalItems={totalItems}
              onChange={this.changeIndex}
            />
            <Progress currentPage={index + 1} totalPages={totalItems} />
            <Publication title={currentItem.title} text={currentItem.text} />
          </>
        )}
      </div>
    );
  }
}
