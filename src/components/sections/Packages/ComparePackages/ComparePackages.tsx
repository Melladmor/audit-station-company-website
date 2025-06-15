import React from "react";

const ComparePackages = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Services</th>
          <th>Basic</th>
          <th>Starter</th>
          <th>Smart</th>
          <th>Professional</th>
          <th>Ultimate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={6}>
            <strong>BOOKKEEPING</strong>
          </td>
        </tr>
        <tr>
          <td>Transactions</td>
          <td>50 Transactions</td>
          <td>200 Transactions</td>
          <td>1000 Transactions</td>
          <td>1200 Transactions</td>
          <td>Unlimited Transactions</td>
        </tr>
        <tr>
          <td>Accountant</td>
          <td>❌</td>
          <td>Shared Accountant</td>
          <td>✅</td>
          <td>Shared Accountant</td>
          <td>Dedicated Accountant</td>
        </tr>
        <tr>
          <td>Depreciation Calculation</td>
          <td>❌</td>
          <td>❌</td>
          <td>✅</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          <td colSpan={6}>
            <strong>INTERNAL AUDITING</strong>
          </td>
        </tr>
        <tr>
          <td>Stocktaking</td>
          <td>❌</td>
          <td>❌</td>
          <td>1/Year Stocktaking</td>
          <td>2/Year Stocktaking</td>
          <td>4/Year or 1/Year</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ComparePackages;
