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
        className='w-32 px-2 py-2 border text-sm border-stone-200 rounded-lg 
        placeholder-stone-500
        transition-all duration-300 sm:w-60
        sm:focus:w-64 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50'
        placeholder='Search order #'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </form>
  );
}

export default SearchOrder;
