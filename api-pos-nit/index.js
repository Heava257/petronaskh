// const express = require("express");
// const cors = require("cors");
// const app = express();
// require('dotenv').config();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors({ origin: "*" }));

// app.get("/", (req, res) => {
//   const list = [
//     { id: 1, name: "a" },
//     { id: 2, name: "b" },
//   ];
//   res.json({
//     list,
//   });
// });


const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  const list = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
  ];
  res.json({
    list,
  });
});

app.get("/api/home", (req, res) => {
  const data = [
    {
      title: "Customer",
      obj: {
        total: 100,
        totla_m: 50,
        total_f: 50,
      },
    },
    {
      title: "Sale",
      obj: {
        total: 1000,
        due: 100,
      },
    },
    {
      title: "Expense",
      obj: {
        total: 1000,
      },
    },
    {
      title: "Employe",
      obj: {
        total: 1000,
      },
    },
    {
      title: "Purchase",
      obj: {
        total: 1000,
      },
    },
  ];
  res.json({
    list: data,
  });
});

require("./src/route/category.route")(app);
require("./src/route/auth.route")(app);
require("./src/route/role.route")(app);
require("./src/route/supplier.route")(app);
require("./src/route/config.route")(app);
require("./src/route/product.route")(app);
require("./src/route/customer.route")(app);
require("./src/route/expanse.route")(app);
require("./src/route/employee.route")(app);
require("./src/route/order.route")(app);
require("./src/route/dashbaord.route")(app);
require("./src/route/report.route")(app);
require("./src/route/currency.route")(app);
require("./src/route/invoices.route")(app);
require("./src/route/admin_stock_transfer.route")(app); 
require("./src/route/StockUser.route")(app);
// require("./src/route/expense_type.route")(app);

// const PORT =  process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log("http://localhost:" + PORT);
// });
const PORT = 8080;
app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
