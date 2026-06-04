import React, { useState } from 'react';
import TransactionByCategories from "../components/TransactionByCategories"
import RecentTransaction from "../components/RecentTransaction"
import MonthlySpending from "../components/MothlySpending"
import UpperNav from "../components/UpperNav"
import Cards from "../components/Cards"
import AddIncomeItems from '../Layout/AddIncomeItems';
import AddExpenseItems from '../Layout/AddExpenseItems'


const Overview = () => {

  const [openIncomeModal, setOpenIncomeModal] = useState(false)
  const [openExpensesModal, setOpenExpensesModal] = useState(false)
  const [data, setData] = useState([])
  const [categories, setCategories] = useState("")
  const [values, setValues] = useState({ title: "", amount: 0, date: "", note: "" })
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpenses, setTotalExpenses] = useState(0)
  const [sixMonthExp, setSixMonthExp] = useState({ month: "", spending: 0 })
  const [isMonth, setIsMonth] = useState(false)
  const [month, setMonth] = useState("")


  const setMonthName = (month) => {
    switch (month) {
      case 0: setMonth("Jan"); break;
      case 1: setMonth("Feb"); break;
      case 2: setMonth("Mar"); break;
      case 3: setMonth("Apr"); break;
      case 4: setMonth("May"); break;
      case 5: setMonth("Jun"); break;
      case 6: setMonth("Jul"); break;
      case 7: setMonth("Aug"); break;
      case 8: setMonth("Sep"); break;
      case 9: setMonth("Oct"); break;
      case 10: setMonth("Nov"); break;
      case 11: setMonth("Dec"); break;
      // default: return "Month didnot match"
    }

  }
  const setMonthlyExpenses = () =>{
    // if(values.date )
    const [y, m, d] = values.date.split('-'); 
    // if(ym > )
  }


  const closeModal = () => {
    setOpenIncomeModal(false)
    setOpenExpensesModal(false)
  }

  const putValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const saveIncome = (e) => {
    e.preventDefault();
    setData([...data, {
      transaction: "income",
      title: values.title,
      amount: parseInt(values.amount),
      date: values.date,
      categories: categories,
      note: values.note
    }])
    setTotalIncome((prev) => prev + parseInt(values.amount))
    setMonth(new Date().getMonth())
  }
  const saveExpense = (e) => {
    e.preventDefault();
    setData([...data, {
      transaction: "expenses",
      title: values.title,
      amount: parseInt(values.amount),
      date: values.date,
      categories: categories,
      note: values.note
    }])
    setMonth(new Date().getMonth())
    setTotalExpenses((prev) => prev + parseInt(values.amount))
    // setSixMonthExp({...sixMonthExp,month:month,spending:2000})
    setIsMonth(true)
  }
  return (
    <>
      {openIncomeModal && <AddIncomeItems closeModal={closeModal} putValue={putValue} saveIncome={saveIncome} setCategories={setCategories} />}
      {openExpensesModal && <AddExpenseItems closeModal={closeModal} putValue={putValue} saveExpense={saveExpense} setCategories={setCategories} />}
      <div className='flex flex-col px-10 py-5 ml-55'  >
        <UpperNav setOpenExpensesModal={setOpenExpensesModal} setOpenIncomeModal={setOpenIncomeModal} />
        <Cards totalIncome={totalIncome} totalExpenses={totalExpenses} />
        <div className='flex gap-5 justify-between '>
          <MonthlySpending sixMonthExp={sixMonthExp} isMonth={isMonth} />
          <TransactionByCategories />
        </div>
        <RecentTransaction data={data} />
      </div>
    </>
  );
};

export default Overview;