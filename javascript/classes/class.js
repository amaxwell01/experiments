class Parent {
    constructor() {

    }

    foo () {

    }

    bar () {

    }
}

var parent = new Parent();
parent.foo();

class Child extends Parent {
    constructor() {
        super();
    }

    baz() {

    }
}

var child = new Child();
child.baz();
