const rows = [
    { id: "name", numeric: false, disablePadding: true, label: "Dessert (100g serving)"},
    { id: "calories", numeric: true, disablePadding: false, label: "Calories" },
    { id: "fat", numeric: true, disablePadding: false, label: "Fat (g)" },
    { id: "carbs", numeric: true, disablePadding: false, label: "Carbs (g)" },
    { id: "protein", numeric: true, disablePadding: false, label: "Protein (g)" }
  ];

const data = [
    {apiId: 8, apiName: "supply_estimates", projectName: "Balancing out Business", publisher: "initial migration", updatedAt: 1535658853000},
    {apiId: 10, apiName: "capable", projectName: "TWers Experience", publisher: "initial migration", updatedAt: 1533591871000},
    {apiId: 7, apiName: "exchange-rate-service", projectName: "PSA", publisher: "initial migration", updatedAt: 1533249696000},
    {apiId: 1, apiName: "iot-platform", projectName: "WorkSpace", publisher: "initial migration", updatedAt: 1532983361000},
    {apiId: 9, apiName: "timecard-service", projectName: "PSA", publisher: "initial migration", updatedAt: 1529947336000},
    {apiId: 4, apiName: "consumer", projectName: "API-GW", publisher: "initial migration", updatedAt: 1529061865000},
    {apiId: 2, apiName: "publisherapipoc", projectName: "API-GW", publisher: "initial migration", updatedAt: 1522915211000},
    {apiId: 5, apiName: "api_integration_test_api", projectName: "API-GW", publisher: "initial migration", updatedAt: 1521635223000},
    {apiId: 6, apiName: "echo", projectName: "API-GW", publisher: "initial migration", updatedAt: 1521545864000},
    {apiId: 3, apiName: "publisher", projectName: "API-GW", publisher: "initial migration", updatedAt: 1521545750000}
  ];


  function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }
  
  function getSorting(order, orderBy) {
    return order === "desc"
      ? (a, b) => desc(a, b, orderBy)
      : (a, b) => -desc(a, b, orderBy);
  }

  stableSort(data, getSorting(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((item, index) => {
        console.log(index, item);
    });
