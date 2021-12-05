import React from "react";
import Table from "../components/Molecules/roles/Table";
import Layout from "../components/Organism/Layout";

function Druzyna() {
  return (
    <Layout>
      <div style={cointainer}>
        <Table />
      </div>
    </Layout>
  );
}

const cointainer = {
    minHeight: '82vh',
    height:'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}
export default Druzyna;
