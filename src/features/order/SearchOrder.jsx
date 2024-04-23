import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigation = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;

    navigation(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='w-72 px-2 py-2 border border-stone-200 rounded-lg'
        placeholder='Search order #'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </form>
  );
}

export default SearchOrder;
