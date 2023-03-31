const AdminPage = () => {
  return (
    <>
      <section class=" ">
        <div className="container admin">
          <p className="admin__header">Regular Users</p>
          <table className="table-users styled-table">
            <thead>
              <tr>
                <th>Mail</th>

                <th>Number of orders</th>
                <th>Orders in progress</th>
              </tr>
            </thead>
            <tbody className="table__body"></tbody>
          </table>
          <p className="admin__header admin__header2">Admins</p>
          <table className="styled-table ">
            <thead>
              <tr>
                <th>Mail</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody className="table2"></tbody>
          </table>
          <p className="admin__header admin__header2">Orders</p>
          <table className="table-orders styled-table">
            <thead>
              <tr>
                <th>ItemId</th>
                <th>UserId</th>

                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="table__body"></tbody>
          </table>
        </div>
      </section>
    </>
  );
};
export default AdminPage;
