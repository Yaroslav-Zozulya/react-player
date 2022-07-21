import { useState, useEffect } from 'react';
import { Controls } from 'components/Reader/Controls';
import { Progress } from 'components/Reader/Progress';
import { Publication } from 'components/Reader/Publication';
import { getPublications, deletePublication } from 'services/publicationsApi';

export const Reader = () => {
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const changeIndex = value => {
    setIndex(prevIndex => prevIndex + value);
  };

  const deleteItem = async () => {
    const currentItem = items[index];
    try {
      await deletePublication(currentItem.id);
      setItems(prevItems =>
        prevItems.filter(item => item.id !== currentItem.id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('some words');
    const fetchPublications = async () => {
      try {
        setIsLoading(true);
        const items = await getPublications();
        setIsLoading(false);
        setItems(items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPublications();
  }, []);

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
          <button type="button" onClick={deleteItem}>
            Удалить публикацию
          </button>
          <Controls
            currentItem={index + 1}
            totalItems={totalItems}
            onChange={changeIndex}
          />
          <Progress currentPage={index + 1} totalPages={totalItems} />
          <Publication title={currentItem.title} text={currentItem.text} />
        </>
      )}
    </div>
  );
};
