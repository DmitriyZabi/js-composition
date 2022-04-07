class Programmer {
  constructor(name) {
    this.name = name
  }
  code() {
    console.log(`${this.name} can codding`)
  }
}

class Frontend extends Programmer {
  constructor(name) {
    super()
    this.name = name
  }
  react() {
    console.log(`${this.name} can codding React`)
  }
}

class Backend extends Programmer {
  constructor(name) {
    super()
    this.name = name
  }
  nodejs() {
    console.log(`${this.name} can codding Node JS`)
  }
}

class Fullstack extends Programmer {
  constructor(name) {
    super()
    this.name = name
  }
  nodejs() {
    console.log(`${this.name} can codding Node JS`)
  }
  react() {
    console.log(`${this.name} can codding React`)
  }
}

// Проблема - дубляж кода, решение - композиция

const programmer = new Frontend('Василий')
console.log(programmer.code())
console.log(programmer.react())
