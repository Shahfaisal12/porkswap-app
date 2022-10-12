import * as React from 'react';
import { TiTick } from 'react-icons/ti'
import { ImCross } from 'react-icons/im'



const rows = [

  {
    name: 'Automated Market Maker',
    uniswap: <TiTick />,
    swap: <TiTick />,
    pork: <TiTick />

  },
  {
    name: 'Spot Trading',
    uniswap: <TiTick />,
    swap: <TiTick />,
    pork: <TiTick />

  },
  {
    name: 'Futures Trading',
    uniswap: <ImCross />,
    swap: <ImCross />,
    pork: <TiTick />

  },
  {
    name: 'Governance',
    uniswap: <TiTick />,
    swap: <TiTick />,
    pork: <TiTick />

  },
  {
    name: 'Leveraged',
    uniswap: <ImCross />,
    swap: <ImCross />,
    pork: <TiTick />

  },
  {
    name: 'Gas Fees',
    uniswap: <TiTick />,
    swap: <TiTick />,
    pork: <TiTick />

  },
  {
    name: 'Inflationary',
    uniswap: <TiTick />,
    swap: <TiTick />,
    pork: <TiTick />

  },
  {
    name: 'Deflationary',
    uniswap: <ImCross />,
    swap: <ImCross />,
    pork: <TiTick />

  },
  {
    name: 'Fixed Supply',
    uniswap: <TiTick />,
    swap: <ImCross />,
    pork: <TiTick />

  },
];

const DataTable = () => {
  return (
    <>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"><img src='https://porkswap.finance/assets/images/uniswap.png' className='img-fluid' alt='' width="140px" /></th>
            <th scope="col"><img src='https://porkswap.finance/assets/images/pancakeswap.png' className='img-fluid' alt='' width="140px" /></th>
            <th scope="col"><img src='	https://porkswap.finance/assets/images/logo.png' className='img-fluid' alt='' width="140px" /></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <th scope="row">{row.name}</th>
              <td align="right">{row.uniswap}</td>
              <td align="right">{row.swap}</td>
              <td align="right">{row.pork}</td>
            </tr>

          ))}
        </tbody>
      </table>
    </>
  );
}

export default DataTable;