const argon2 = require("argon2");

const hashSettings = {
  type: argon2.argon2i,
  memoryCost: 2 ** 16,
  parallelism: os.cpus().length || 8,
};

const goodHashSettings = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  parallelism: os.cpus().length || 8,
};

// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
const prepareSavingGood = (user) => {
  if (!user.Password) return Promise.resolve(user);


  return argon2
    // ok: unsafe-argon2-config
    .hash(user.Password, goodHashSettings)
    .then((hash) => ({ ...user, Password: hash }))
    .catch((err) => console.error(`Error during hashing: ${err}`));
};
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
const prepareSavingBad = (user) => {
  if (!user.Password) return Promise.resolve(user);


  return argon2
    // ruleid:unsafe-argon2-config
    .hash(user.Password, hashSettings)
    .then((hash) => ({ ...user, Password: hash }))
    .catch((err) => console.error(`Error during hashing: ${err}`));
};
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
const bad = (user) => {
  if (!user.Password) return Promise.resolve(user);
  const hashSettings = {
    type: argon2.argon2i,
    memoryCost: 2 ** 16,
    parallelism: os.cpus().length || 8,
  };

  return argon2
    // ruleid:unsafe-argon2-config
    .hash(user.Password, hashSettings)
    .then((hash) => ({ ...user, Password: hash }))
    .catch((err) => console.error(`Error during hashing: ${err}`));
};
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
function okTest(user) {
  if (!user.Password) return Promise.resolve(user);
  // ok: unsafe-argon2-config
  return argon2
    .hash(user.Password, {
      type: argon2.argon2id,
      memoryCost: 2 ** 16,
      parallelism: os.cpus().length || 8,
    })
    .then((hash) => ({ ...user, Password: hash }))
    .catch((err) => console.error(`Error during hashing: ${err}`));
}
// {/fact}
