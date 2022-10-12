/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../redux/logic';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search),
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  }
  return (
    <Stack alignItems="center" mt="0" justifyContent="center" p="80px" backgroundColor= "#3f51b5">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
        Exercises You Should Try Out <br />
      </Typography>
      <Box position="relative" mb="72px" backgroundColor= "#3f51b5">
        <TextField sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '800px', xs: '350px' }, backgroundColor: "#fff", borderRadius: '40px' }} height="76px" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Search Exercise" type="text" />
        <Button className="search-btn" sx={{ bgcolor: 'black', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises