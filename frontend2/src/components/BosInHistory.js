import React from 'react';

import { 
  Grommet,
  Box,
  DataTable,
  Text,
} from 'grommet';

const columns = [
  {
    property: 'Account',
    header: <Text>Account</Text>,
    primary: true,
    footer: 'Total',
  },
  {
    property: 'date',
    header: 'Date',
    render: datum => datum.date && new Date(datum.date).toLocaleDateString('en-US'),
    align: 'end',
  },
  {
    property: 'Amount',
    header: 'Amount',
    align: 'end',
    aggregate: 'sum',
    footer: { aggregate: true },
  },
];

const data = [];
for (let i = 0; i < 40; i += 1) {
  data.push({
    Account: `Account ${i + 1}`,
    date: `2018-07-${(i % 30) + 1}`,
    Amount: ((i + 1) * 17) % 1000,
  });
}
const DATA = [
  {
    Account: 'Alan',
    date: '',
    Amount: 0,
  },
  {
    Account: 'Bryan',
    date: '2018-06-10',
    Amount: 1234,
  },
  {
    Account: 'Chris',
    date: '2018-06-09',
    Amount: 2345,
  },
  {
    Account: 'Eric',
    date: '2018-06-11',
    Amount: 3456,
  },
  {
    Account: 'Doug',
    date: '2018-06-10',
    Amount: 1234,
  },
  {
    Account: 'Jet',
    date: '2018-06-09',
    Amount: 3456,
  },
  {
    Account: 'Michael',
    date: '2018-06-11',
    Amount: 1234,
  },
  {
    Account: 'Tracy',
    date: '2018-06-10',
    Amount: 2345,
  },
];

const BosInHistory = () => (
  <Grommet>
    <Box align="center">
      <Text>Bos 입금 내역</Text>
    </Box>
    <Box align="center" pad="small">
      <DataTable columns={columns} data={DATA} size="medium" />
    </Box>
  </Grommet>
);

export default BosInHistory;
