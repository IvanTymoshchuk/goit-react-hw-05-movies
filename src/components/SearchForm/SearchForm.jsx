import { useState } from 'react';
import { Form, Input, Button } from './SearchForm.styled';
import { AiOutlineSearch } from 'react-icons/ai';

 const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const changeQuery = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) return alert('Please enter a sometings');
    onSearch(query);
    setQuery('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter for search movies"
          name="query"
          value={query}
          onChange={changeQuery}
        />
        <Button type="submit">
          <AiOutlineSearch size="13" />
        </Button>
      </Form>
    </>
  );
};

export default SearchForm;
