import * as React from 'react';
import { TiTick } from 'react-icons/ti'
import { ImCross } from 'react-icons/im'



const rows = [

  {
    name: 'Automated Market Maker',
    uniswap: <TiTick className="fs-3 text-success" />,
    swap: <TiTick className="fs-3 text-success" />,
    pork: <TiTick className="fs-3 text-success" />

  },
  {
    name: 'Spot Trading',
    uniswap: <TiTick className="fs-3 text-success" />,
    swap: <TiTick className="fs-3 text-success" />,
    pork: <TiTick className="fs-3 text-success" />

  },
  {
    name: 'Futures Trading',
    uniswap: <ImCross className="text-danger" />,
    swap: <ImCross className="text-danger" />,
    pork: <TiTick className="fs-3 text-success" />

  },
  {
    name: 'Governance',
    uniswap: <TiTick className="fs-3 text-success" />,
    swap: <TiTick className="fs-3 text-success" />,
    pork: <TiTick className="fs-3 text-success" />

  },
  {
    name: 'Leveraged',
    uniswap: <ImCross  className="text-danger" />,
    swap: <ImCross  className="text-danger"  />,
    pork: <TiTick className="fs-3 text-success"  />

  },
  {
    name: <p className='mb-0'>Gas Fees</p>,
    uniswap: <p className='text-danger mb-0'>$71.53</p>,
    swap: <p className='text-danger mb-0'>$0.42</p>,
    pork: <p className='text-danger mb-0'>$0.42</p>

  },
  {
    name: 'Inflationary',
    uniswap: <ImCross className="text-success" />,
    swap: <ImCross className="text-success" />,
    pork: <TiTick className="fs-3 text-success" />

  },
  {
    name: 'Deflationary',
    uniswap: <ImCross  className="text-danger" />,
    swap: <ImCross  className="text-danger" />,
    pork: <TiTick className="fs-3 text-success" />

  },
  {
    name: 'Fixed Supply',
    uniswap: <TiTick className="fs-3 text-success" />,
    swap: <ImCross  className="text-danger" />,
    pork: <TiTick className="fs-3 text-success" />

  },
];

const DataTable = () => {
  return (
    <>
      <table class="table table-striped table-hover">
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