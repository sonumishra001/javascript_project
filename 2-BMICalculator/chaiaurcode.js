const form = document.querySelector('form')
// this usecase will give you empty value----
// const height = parseInt(document.querySelector('#height').value) 
form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value) //.value return in string so parseInt convert it into integer value
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = `please give a valid height it is:  ${height}`
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight it is:  ${weight}`
    }
    else{
    const bmi =  (weight / ((height*height)/10000)).toFixed(2);

    //show the result
    if(bmi<18.6){
        results.innerHTML = `<span>${bmi}</span> and The Person is Under Weight` 
    }else if(bmi>=18.6 && bmi<=24.9){
        results.innerHTML = `<span>${bmi}</span> and The Person is Normal` 
    } else if(bmi>=24.9){
        results.innerHTML = `<span>${bmi}</span> and The Person is Over Weight` 
    }
    
    }
})

