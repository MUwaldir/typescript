type Operation = 'add' | 'multiply' | 'divide'
type Respuest = number 
const calculator = (a: number, b: number, op:Operation): Respuest => {
        if (op === 'add') return a + b
        if(op==='divide') {
            if(b===0) throw new Error( 'can/t divide by zero')
            return a / b
        }
        if(op==='multiply') return a * b

        throw new Error('Operation not supported')
}


console.log(process.argv)

try {
    
    console.log(calculator(1,5,'add'))
    console.log(calculator(1,34, 'multiply'))
} catch (error) {
    console.log('Something went wrong', error)
}









