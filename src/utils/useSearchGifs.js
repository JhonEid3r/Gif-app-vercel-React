import React, { useState } from 'react';

export const useSearchGifs = () => {
  const [valorInput, setValorInput] = useState("");
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const valor = e.target.value;
    setValorInput(valor);
  };

  const getGifs = async (query) => {
    const apiKey = "eOVgmZQEiOR05WLQoFlpqilLURGGnuhI";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}`;
    setLoading(true)
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false)
    return data.data;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const gifs = await getGifs(valorInput);
    setGifs(gifs);
  };

  return {
    onSubmit,
    onChange,
    valorInput,
    gifs,
    loading
  };
};
