#### 构造函数
在Es6之前并没有引入类（class）的概念，js并非通过类而是直接通过构造函数来创建实例

构造函数模式的目的是为了创建一个自定义类，并且创建这个类的实例，构造函数模式中拥有了类和实例的概念，并且实例和实例之间是相互独立的，即实例识别

在创建上，构造函数就是一个普通的函数，创建方式和普通函数没有区别，不同的是构造函数习惯上首字母大写；另就是调用方式不同，普通函数是直接调用，构造函数需要使用new关键字来调用
```
每创建一个Person构造函数，在Person构造函数中，为每一个对象都添加了一个say方法，即构造函数每执行一次就会创建一个新的say方法，这就会导致构造函数执行一次就会创建一个新的方法，为把这个方法单独放到一个地方，并让所有的实例都可以访问到，所以需要原型prototype
function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.say = function(){console.log(this.name);}
}
var per = new Person('zs', 18, 'boy');
console.log(per); // Person {name: "zs", age: 18, gender: "boy", say: ƒ}
```

#### 原型
在js中，每当定义一个函数数据类型（普通函数，类）时，会自带一个prototype属性，这个属性指向函数的原型对象，并且这个属性是一个对象数据类型的值

> Person   ————————————>   Person.prototype
> 构造函数    prototype         实例原型

原型对象相当于一个公共的区域，使得同一个类的实例都可以访问到这个原型对象，可以将对象中共有的内容，统一设置到原型对象中

#### 原型链
* __proto__和constructor
每一个对象数据类型（普通对象、实例、prototype...）自带一个属性__proto__，属性值是当前实例所属类的原型(prototype)，原型对象中有一个属性constructor，它指向函数对象
```
function Person(){}
var per = new Person();
console.log(per.__proto__ === Person.prototype); // true
console.log(Person.prototype.constructor === Person); // true
console.log(Object.getPrototypeOf(per) === Person.prototype); // true
```
> 构造函数    prototype         实例原型
> Person   ————————————>   Person.prototype
>   |      <————————————          ↑
>   |        constructor          |
>   | new                         |
>   ↓       __proto__             |
>  per  ————————————————————————  |

* 在js中万物都是对象，对象和对象之间也有关系，并不是孤立存在的。对象之间的继承关系，在js中是通过prototype对象指向父类对象，直到指向Object对象为止，这形成了一个原型指向的链条，即原型链
> 如 person -> Person -> Object，人继承人类，人类继承对象类

当访问对象的一个属性或方法时，会先在对象自身中寻找，如果有则直接使用，如果没有则会去原型对象中寻找，如果找到则直接使用；如果没有则去原型的原型中寻找，直到找到Object对象的原型，Object对象的原型没有原型，如果在Object原型中依然没有找到，则返回undefined

可以使用对象的hasOwnProperty()来检查对象自身中是否含有该属性；使用in检查对象中是否含有某个属性时，如果对象中没有但是原型中有，会返回true
```
per实例中没有a这个属性，从per对象中找不到a属性，则从per的原型（person.__proto__ / Person.prototype）中查找，得到a的值为123；
当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果仍找不到，则找原型的原型，一直找到最顶层的Object为止，Object是js中所有对象数据类型的基类（最顶层的类），在Object.prototype上没有__proto__属性
console.log(Object.prototype.__proto__ === null); // true

function Person(){}
Person.prototype.a = 123;
Person.prototype.say = function(){console.log('hello');}
var per = new Person();
console.log(per.a); // 123
console.log(per.hasOwnProperty('a')); // false
console.log('a' in per); // true
```
> 构造函数    prototype         实例原型
> Person   ————————————>   Person.prototype
>   |      <————————————          ↑  |
>   |        constructor          |  |
>   | new                         |  |
>   ↓       __proto__             |  |
>  per  ————————————————————————  |  |   __proto__
>                                    |
>            prototype               ↓
>  Object() ————————————>  Object.prototype
>           <————————————            |
>            constructor             |   __proto__
>                                    ↓
>                                   null
