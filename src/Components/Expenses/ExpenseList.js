import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
  return props.items.length === 0 ? (
    <h2 className="expenses-list__fallback">
      Nenhuma despesa encontrada para o ano escolhido.
    </h2>
  ) : (
    props.items.map((expense) => (
      <ul className="expenses-list">
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      </ul>
    ))
  );
};

export default ExpenseList;
