"use client"

import { Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useStore from '../../store';
import HeroCard from '../../src/app/_components/HeroCard';
import WinnerModal from '../../src/app/_components/WinnerModal';

const Home = () => {
  const { setModal, search, setSearch, filteredData, fetchData, selectedHeros } = useStore();
  const [winner, setWinner] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedHeros.length == 2) {
      setModal(true)
      const hero1 = selectedHeros[0].powerstats;
      const hero2 = selectedHeros[1].powerstats;

      const hero1Total = Object.values(hero1).reduce((a, b) => a + b);
      const hero2Total = Object.values(hero2).reduce((a, b) => a + b);

      if (hero1Total > hero2Total) {
        setWinner(selectedHeros[0].name)
      }
      else if (hero1Total < hero2Total) {
        setWinner(selectedHeros[1].name)
      }
      else {
        setWinner('Draw')
      }
    }
  }, [selectedHeros]);

  return (
    <>
      <h1 className='text-center text-white text-5xl font-bold py-4'>Heroes Challenge</h1>

      <TextField
        type="search"
        color="success"
        variant="filled"
        label="Search for a specific hero here!"
        value={search}
        className='w-full mb-4'
        onChange={(e) => setSearch(e.target.value)}
      />

      <Grid container spacing={2}>
        {filteredData().map((item) => (
          <Grid item xs={3} md={2}>
            <HeroCard item={item} />
          </Grid>
        ))}
      </Grid>

      <WinnerModal winner={winner} />
    </ >
  );
};

export default Home;