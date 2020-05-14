import React, { useState, useEffect } from 'react';

function CalculatorType(props) {

  const currentDate = new Date();

  const year = currentDate.getFullYear();

  const toCurrency = numb => Number(numb).toLocaleString('en');

  let salaryInput = React.createRef();

  const [amount, setAmount] = useState(0);

  const [ccss, setCCSS] = useState(0);

  const [totalHac, setHacTotal] = useState(0);

  const [asoc, setAsoc] = useState(5);

  const [totalAsoc, setTotalAsoc] = useState(0);

  const [range2, setRange2] = useState(0);

  const [range3, setRange3] = useState(0);

  const [range4, setRange4] = useState(0);

  const [range5, setRange5] = useState(0);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    onSalaryChange(amount);
  });

  const clearValues = () => {
    setRange2(0);
    setRange3(0);
    setRange4(0);
    setRange5(0);
    setCCSS(0);
    setHacTotal(0);
    setTotalAsoc(0);
    setTotal(0);
  };

  const onSalaryChange = (salary) => {
    const amount = salary === '' ? 0 : parseInt(salary);
    clearValues();
    if (amount > 840000 && amount <= 1233000) {
      setRange2(((amount - 840000) * 10) / 100);
    } else if (amount > 1233000 && amount <= 2163000) {
      setRange2(((1233000 - 840000) * 10) / 100);
      setRange3(((amount - 1233000) * 15) / 100);
    } else if (amount > 2163000 && amount <= 4325000) {
      setRange2(((1233000 - 840000) * 10) / 100);
      setRange3(((2163000 - 1233000) * 15) / 100);
      setRange4(((amount - 2163000) * 20) / 100);
    } else if (amount > 4325000) {
      setRange2(((1233000 - 840000) * 10) / 100);
      setRange3(((2163000 - 1233000) * 15) / 100);
      setRange4(((4325000 - 2163000) * 20) / 100);
      setRange5(((amount - 4325000) * 25) / 100);
    }
    setCCSS(((amount * 10.34) / 100).toFixed(0));
    setHacTotal(range2 + range3 + range4 + range5);
    setTotalAsoc(((amount * asoc) / 100).toFixed(0));
    setTotal(amount - totalHac - totalAsoc - ccss);
  };

  return (
    <div className="card">
      <div className="card-header"><h2>{props.cardHeader}</h2></div>
      <div className="card-body">
        <form className="form">
          <div className="form-group">
            <label>Ingreso Bruto:</label>
            <input type="number" ref={salaryInput} className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>
          <div className="form-group float-right">
            <button className="btn btn-primary" onClick={(e) => {e.preventDefault(); setAmount(0);}}>Limpiar</button>
          </div>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th colSpan="4">Impuesto de Renta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>¢0</td>
                <td>¢840 000</td>
                <td>0%</td>
                <td>¢0</td>
              </tr>
              <tr>
                <td>¢840 000</td>
                <td>¢1 233 000</td>
                <td>10%</td>
                <td>¢{toCurrency(range2)}</td>
              </tr>
              <tr>
                <td>¢1 233 000</td>
                <td>¢2 163 000</td>
                <td>15%</td>
                <td>¢{toCurrency(range3)}</td>
              </tr>
              <tr>
                <td>¢2 163 000</td>
                <td>¢4 325 000</td>
                <td>20%</td>
                <td>¢{toCurrency(range4)}</td>
              </tr>
              <tr>
                <td>¢4 325 000</td>
                <td>&lt;</td>
                <td>25%</td>
                <td>¢{toCurrency(range5)}</td>
              </tr>
              <tr>
                <td colSpan="3"><strong>TOTAL:</strong></td>
                <td><strong>¢{toCurrency(totalHac)}</strong></td>
              </tr>
            </tbody>
          </table>
          <table className="table table-striped ccss">
            <thead className="thead-dark">
              <tr>
                <th colSpan="3">CCSS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aporte Trabajador</td>
                <td>10.34%</td>
                <td><strong>¢{toCurrency(ccss)}</strong></td>
              </tr>
            </tbody>
          </table>
          <table className="table table-striped asoc">
            <thead className="thead-dark">
              <tr>
                <th colSpan="3">Asociación Solidarista</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aporte Trabajador</td>
                <td>
                  <div className="input-group">
                    <input type="number" className="form-control" value={asoc} onChange={(e) => setAsoc(e.target.value)} />
                    <div className="input-group-prepend">
                      <span className="input-group-text">%</span>
                    </div>
                  </div>
                </td>
                <td><strong>¢{toCurrency(totalAsoc)}</strong></td>
              </tr>
            </tbody>
          </table>
        </form>
        <p className="salary-total">¢{toCurrency(total)}</p>
      </div>
      <div className="card-footer">
        <p>Porcentajes actualizados a Octubre 2019</p>
        <p>
          <a href="https://github.com/rsancheza09/calculadora-salarial" target="_blank" rel="noopener noreferrer">
            <svg className="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
          </a>
        </p>
        <p>&copy; {year} Randall Sánchez A</p>
      </div>
    </div>
  );

}

export default CalculatorType;
