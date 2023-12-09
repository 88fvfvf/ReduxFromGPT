import { createSlice } from '@reduxjs/toolkit';

// Начальное значение
const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default counterSlice.reducer;

