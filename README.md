## Готовимся к собеседованию.

1. [Javascript](#Javascript)
2. [Typescript](#Typescript)
3. [Node.js](#Node.js)
4. [Nest.js](#Nest.js)
5. [SQL](#SQL)
6. [MongoDB](#MongoDB)
7. [Redis](#Redis)
8. [RabbitMQ](#RabbitMQ)
9. [Microservices](Microservices)


### Javascript.
1.1 Types
##### Primitive (Immutable):
1. number
2. boolean
3. string
4. undefined
5. null
6. symbol
##### Objects:
Array Function

### Typescript.
2.1 Types
### Node.js.
3.1 Event Loop
##### Phases Overview
1. timers: this phase executes callbacks scheduled by setTimeout() and setInterval().
2. pending callbacks: executes I/O callbacks deferred to the next loop iteration.
3. idle, prepare: only used internally.
4. poll: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
5. check: setImmediate() callbacks are invoked here.
6. close callbacks: some close callbacks, e.g. socket.on('close', ...).

### Nest.js.

### SQL.
5.1 Уровни изоляции транзакций
Стандарт описывает следующие особые условия, недопустимые для различных уровней изоляции:

«грязное» чтение
Транзакция читает данные, записанные параллельной незавершённой транзакцией.

неповторяемое чтение
Транзакция повторно читает те же данные, что и раньше, и обнаруживает, что они были изменены другой транзакцией (которая завершилась после первого чтения).

фантомное чтение
Транзакция повторно выполняет запрос, возвращающий набор строк для некоторого условия, и обнаруживает, что набор строк, удовлетворяющих условию, изменился из-за транзакции, завершившейся за это время.

аномалия сериализации
Результат успешной фиксации группы транзакций оказывается несогласованным при всевозможных вариантах исполнения этих транзакций по очереди.
1. Уровень изоляции	«Грязное» чтение	Неповторяемое чтение	Фантомное чтение	Аномалия сериализации
2. Read uncommited (Чтение незафиксированных данных)	Допускается, но не в PG	Возможно	Возможно	Возможно
3. Read committed (Чтение зафиксированных данных)	Невозможно	Возможно	Возможно	Возможно
4. Repeatable read (Повторяемое чтение)	Невозможно	Невозможно	Допускается, но не в PG	Возможно
5. Serializable (Сериализуемость)	Невозможно	Невозможно	Невозможно	Невозможно
### MongoDB.
### Redis.
### RabbitMQ.
### Microservices.
