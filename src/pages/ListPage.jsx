import { useState, useEffect } from 'react';
import { getPublications } from 'services/publicationsApi';
import { Loader } from 'components/Loader/Loader';

export const ListPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPublications = async () => {
      setLoading(true);
      try {
        const itemsData = await getPublications();
        setItems(itemsData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPublications();
  }, []);

  return (
    <main>
      <h1>ListPage</h1>
      {loading && <Loader />}
      {items.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </main>
  );
};
