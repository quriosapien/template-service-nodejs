let PORT = 8000;

const APP_VERSION = process.env.npm_package_version;
const APP_NAME = process.env.npm_package_name;
const ENV = process.env.NODE_ENV;

if (process.env.PORT) {
  PORT = process.env.PORT;
} else if (ENV === "production") {
  PORT = 8080;
}

export default {
  APP_NAME,
  APP_VERSION,
  ENV,
  PORT,
};
