// Adapter Pattern (Structural Pattern)
// old interface
class OldCalculator {
    constructor() {
        this.operations = function(term1, term2, operation) {
            switch(operation) {
                case 'add':
                    return term1 + term2
                case 'sub':
                    return term1 - term2
                default:
                    return NaN
            }
        }
    }
}

// new interface
class NewCalculator {
    constructor() {
        this.add = function(term1, term2) {
            return term1 + term2
        }
        this.sub = function(term1, term2) {
            return term1 - term2
        }
    }
}

// Adapter Class
class CalcAdapter {
    constructor() {
        const newCalc = new NewCalculator()

        this.operations = function(term1, term2, operation) {
            switch (operation) {
                case 'add':
                    return newCalc.add(term1, term2)
                case 'sub':
                    return newCalc.sub(term1, term2)
                default:
                    return NaN
            }
        }
    }
}

// usage
const oldCalc = new OldCalculator()
console.log(oldCalc.operations(10, 5, 'add'))

const newCalc = new NewCalculator()
console.log(newCalc.add(10, 5))

const adaptedCalc = new CalcAdapter()
console.log(adaptedCalc.operations(10, 5, 'add'))

// ------------------------------------------------------------------------------------------------------------------------

// Composite Pattern (Structual Pattern)
class Component {
    constructor(name) {
        this._name = name;
    }

    getNodeName() {
        return this._name
    }

    // abstract methods that need to be overridden
    getType() {

    }

    addChild(component) {

    }

    removeChildByName(componentName) {

    }

    removeChildByIndex(index) {

    }

    getChildByIndex(index) {

    }

    noOfChildren() {

    }

    static logTreeStructure(root) {
        let treeStructure = ''
        function traverse(node, indent = 0) {
            treeStructure += `${'--'.repeat(indent)}${node.getNodeName()}\n`
            indent++
            for (let i = 0, length = node.noOfChildren(); i < length; i++) {
                traverse(node.getChildByIndex(i), indent)
            }
        }

        traverse(root)
        return treeStructure
    }
}

class Leaf extends Component {
    constructor(name) {
        super(name)
        this._type = 'Leaf Node'
    }
    
    getType() {
        return this._type
    }

    noOfChildren() {
        return 0
    }

}

class Composite extends Component {
    constructor(name) {
        super(name)
        this._type = 'Composite Node'
        this._children = []
    }

    getType() {
        return this._type
    }

    addChild(component) {
        this._children = [...this._children, component]
    }

    removeChildByName(componentName) {
        this._children = [...this._children].filter(component => component.getNodeName() !== componentName)
        // this._children = this._children.filter(component => {return component.getNodeName() !== componentName})
    }

    removeChildByIndex(index) {
        this._children = [...this._children.slice(0, index), ...this._children.slice(index + 1)]
    }

    getChildByName(componentName) {
        return this._children.find(component => component.name === componentName)
    }

    getChildByIndex(index) {
        return this._children[index]
    }

    noOfChildren() {
        return this._children.length
    }
}

// usage
const tree = new Composite('root')
tree.addChild(new Leaf('left'))
const right = new Composite('right')
tree.addChild(right)

right.addChild(new Leaf('right-left'))
const rightMid = new Composite('right-middle')
right.addChild(rightMid)
right.addChild(new Leaf('right-right'))

rightMid.addChild(new Leaf('left-end'))
rightMid.addChild(new Leaf('right-end'))

console.log(Component.logTreeStructure(tree))


// ------------------------------------------------------------------------------------------------------------------------
// Decorator Pattern (structural pattern)

class Book {
    constructor(title, author, price) {
        this._title = title
        this._author = author
        this.price = price
    }

    getDetails() {
        return `${this._title} by ${this._author}`
    }
}

// decorator 1
function giftWrap(book) {
    book.isGiftWrapped = true
    book.unwrap = function() {
        return `Unwrapped ${book.getDetails()}`
    }
    return book
}

// decorator 2
function hardbindBook(book) {
    book.isHardbound = true
    book.price += 5
    return book
}

// usage 
const alchemist = giftWrap(new Book('The Alchemist', 'Paulo Coelho', 10))
console.log(alchemist.isGiftWrapped)
console.log(alchemist.unwrap())

const inferno = hardbindBook(new Book('Inferno', 'Dan Brown', 15))

console.log(inferno.isHardbound)
console.log(inferno.price)

// ------------------------------------------------------------------------------------------------------------------------
// Facade Pattern (Structural Design)
let currentId = 0

class ComplaintRegistry {
    registerComplaint(customer, type, details) {
        const id = ComplaintRegistry._uniqueIdGenerator()
        let registry
        if (type === 'service') {
            registry = new ServiceComplaints()
        } else {
            registry = new ProductComplaints()
        }
        return registry.addComplaint({id, customer, details})
    }

    static _uniqueIdGenerator() {
        return ++currentId
    }
}

class Complaints {
    constructor() {
        this.complaints = []
    }

    addComplaint(complaint) {
        this.complaints.push(complaint)
        return this.replyMessage(complaint)
    }

    getComplaint(id) {
        return this.complaints.find(compaint => complaint.id === id)
    }

    replyMessage(complaint) {}
}

class ProductComplaints extends Complaints {
    constructor() {
        super()
        if (ProductComplaints.exists) {
            return ProductComplaints.instance
        }
        ProductComplaints.instance = this
        ProductComplaints.exists = true
        return this
    }

    replyMessage({id, customer, details}) {
        return `Complaint No. ${id} reported by ${customer} regarding ${details} have been filed 
                with the Products Complaint Department. Replacement/Repairment of the product as per terms and conditions will be carried out soon.`
    }
}

class ServiceComplaints extends Complaints {
    constructor() {
        super()
        if (ServiceComplaints.exists) {
            return ServiceComplaints.instance
        }
        ServiceComplaints.instance = this
        ServiceComplaints.exists = true
        return this
    }

    replyMessage({id, customer, details}) {
        return `Complaint No. ${id} reported by ${customer} regarding ${details} have been filed 
                with the Service Complaint Department. Replacement/Repairment of the product as per terms and conditions will be carried out soon.`
    }
}

// usage
const registry = new ComplaintRegistry()

const reportService = registry.registerComplaint('Martha', 'service', 'availability')
const reportProduct = registry.registerComplaint('Jane', 'product', 'faded color')

// ------------------------------------------------------------------------------------------------------------------------
// Flyweight Pattern (structural design pattern)
// flyweight class
class Icecream {
    constructor(flavour, price) {
        this.flavour = flavour
        this.price = price
    }
}

// factory for flyweight objects
class IcecreamFactory {
    constructor() {
        this._icecreams = []
    }

    createIcecream(flavour, price) {
        let icecream = this.getIcecream(flavour)
        if (icecream) {
            return icecream
        } else {
            const newIcecream = new Icecream(flavour, price)
            this._icecreams.push(newIcecream)
            return newIcecream
        }
    }
    
    getIcecream(flavour) {
        return this._icecreams.find(icecream => icecream.flavour === flavour)
    }

}

// usage
const factory = new IcecreamFactory()

const chocoVanilla = factory.createIcecream('chocolate and vanilla', 15)
const vanillaChoco = factory.createIcecream('chocolate and vanilla', 15)

console.log(chocoVanilla === vanillaChoco)

// ------------------------------------------------------------------------------------------------------------------------
// Proxy Pattern (structural design pattern)
// Target 
function networkFetch(url) {
    return `${url} - Response from network`
}

// Proxy 
// ES6 Proxy API = new Proxy(target, handler)
const cache = []
const proxiedNetworkFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const urlParam = args[0]
        if (cache.includes(urlParam)) {
            return `${urlParam} - Response from cache`
        } else {
            cache.push(urlParam)
            return Reflect.apply(target, thisArg, args)
        }
    }
})

// usage
console.log(proxiedNetworkFetch('dogPic.jpg'))
console.log(proxiedNetworkFetch('dogPic.jpg'))

// ------------------------------------------------------------------------------------------------------------------------
//  (structural design pattern)