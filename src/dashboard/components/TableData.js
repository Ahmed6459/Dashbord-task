import React from 'react'


import "./TableData.css"

 const TableData=(props) => {
   console.log(props.info);
    return (
      <div className="wrapper">

      <table border className="mt-5">
  <thead>
    <tr>
      <th>Date</th>
      <th>PRODUCT</th>
      <th>SIZE (US)</th>
      <th>WEBSITE</th>
      <th>PRICE</th>
      <th>STATUS</th>
    </tr>
  </thead>
  <tbody>
    {props.info.lengh === 0 ? 
      <h2>No data to show</h2>:
      props.info.map(item=>{
        return(
          <tr>
              <td>{item.date}</td>
              <td>{item.product}</td>
              <td>{item.size})</td>
              <td>{item.website}</td>
              <td>{item.peice}</td>
              <td>
              {item.peice==="$211"?
                <span className="success">Success</span>:
                item.peice==="$252"&&
                <span className="fail">Fail</span>
              }
              </td>
          </tr>
        )
      })
    }
  </tbody>
</table>
      </div>
)
}

export default TableData
