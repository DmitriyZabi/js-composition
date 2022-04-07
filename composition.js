function createProgrammer(name) {
  const programmer = { name }
  return {
    ...programmer,
    ...canCode(programmer),
  }
}

function canCode({ name }) {
  return {
    code: () => console.log(`${name} can codding`),
  }
}

function canReact({ name }) {
  return {
    react: () => console.log(`${name} can codding React`),
  }
}

function canNodejs({ name }) {
  return {
    nodejs: () => console.log(`${name} can codding Node JS`),
  }
}

function createFrontend(name) {
  const programmer = createProgrammer(name)
  return {
    ...programmer,
    ...canReact(programmer),
  }
}

function createBackend(name) {
  const programmer = createProgrammer(name)
  return {
    ...programmer,
    ...canNodejs(programmer),
  }
}

function createFullstack(name) {
  const programmer = createProgrammer(name)
  return {
    ...programmer,
    ...canNodejs(programmer),
    ...canReact(programmer),
  }
}

const fullstack = createFullstack('Дмитрий')
fullstack.code()
fullstack.react()
fullstack.nodejs()
