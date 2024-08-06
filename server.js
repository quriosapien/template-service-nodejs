import app from "./src/app.js";

import AppConfigs from "./config/defaults.js";

app.listen(AppConfigs.PORT, async function () {
  console.log(`Server started on PORT=${AppConfigs.PORT}`);
});
