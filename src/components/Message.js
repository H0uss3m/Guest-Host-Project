import React from 'react';
import { MDBDataTable } from 'mdbreact';

const Message = () => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Type',
        field: 'Type',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Host/Guest',
        field: 'Host/Guest',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Host Location',
        field: 'Host Location',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Price/Night',
        field: 'Price/Night',
        sort: 'asc',
        width: 150
      },
      
    ],
    rows: [
      {
        name: 'Tiger Nixon',
        position: 'Reservation',
        office: 'Edinburgh',
        age: '61',
        salary: '$320'
      },
      {
        name: 'Garrett Winters',
        position: 'Add Host',
        office: 'Tokyo',
        age: '63',
        
        salary: '$170'
      },
      {
        name: 'Ashton Cox',
        position: 'Add Host',
        office: 'San Francisco',
        age: '66',
        
        salary: '$86'
      },
      {
        name: 'Cedric Kelly',
        position: 'Reservation',
        office: 'Edinburgh',
        age: '22',
        
        salary: '$433'
      },
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
    />
  );
}

export default Message;

