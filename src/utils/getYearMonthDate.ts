type TDate = {
  year: number;
  month: number;
  date: number;
};

const getYearMonthDate = (dateObj: Date): TDate => ({
  year: dateObj.getFullYear(),
  month: dateObj.getMonth(),
  date: dateObj.getDate(),
});

export default getYearMonthDate;
