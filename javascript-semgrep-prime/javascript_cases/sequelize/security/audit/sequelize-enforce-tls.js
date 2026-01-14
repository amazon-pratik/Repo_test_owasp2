// {fact rule=improper-certificate-validation@v1.0 defects=1}
module.exports = {
  // ruleid: sequelize-enforce-tls
  local: {
    username: "AppUser",
    database: "AppDb",
    dialect: "postgres",
    host: "127.0.0.1"
  }
};
// {/fact}

// {fact rule=improper-certificate-validation@v1.0 defects=1}
module.exports = {
  // ruleid: sequelize-enforce-tls
  local: {
    username: "AppUser",
    database: "AppDb",
    dialect: "mariadb",
    host: "127.0.0.1"
  }
};
// {/fact}

// {fact rule=improper-certificate-validation@v1.0 defects=1}
module.exports = {
  // ruleid: sequelize-enforce-tls
  local: {
    username: "AppUser",
    database: "AppDb",
    dialect: "mysql",
    host: "127.0.0.1"
  }
};
// {/fact}

// {fact rule=improper-certificate-validation@v1.0 defects=1}
module.exports = {
  // ok: sequelize-enforce-tls
  local: {
    username: "AppUser",
    database: "AppDb",
    dialect: "postgres",
    host: "127.0.0.1",
    dialectOptions: {
      ssl: {
        minVersion: 'TLSv1.3'
      }
    }
  }
};
// {/fact}

// {fact rule=improper-certificate-validation@v1.0 defects=1}
module.exports = {
  // ok: sequelize-enforce-tls
  local: {
    username: "AppUser",
    database: "AppDb",
    dialect: "postgres",
    host: "127.0.0.1",
    dialectOptions: {
      ssl: true
    }
  }
};
// {/fact}

// {fact rule=improper-certificate-validation@v1.0 defects=1}
module.exports = {
  // ruleid: sequelize-enforce-tls
  local: {
    username: "AppUser",
    database: "AppDb",
    dialect: "postgres",
    host: "127.0.0.1",
    dialectOptions: {
      ssl: false
    }
  }
};
// {/fact}
