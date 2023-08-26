var request = new XMLHttpRequest()
request.open('GET','https://restcountries.com/v3.1/all')
request.send()

request.onload = function(){    
    let data = JSON.parse(request.response)
     

    //a) Get all the countries from Asia continent /region using Filter function
    console.log("ASIAN COUNTRIES")
    let AsianCountries = data.filter((element)=>element.region==='Asia').map((element)=>{
    let obj = {NAME: element.name.common,
               CONTINENT: element.continents,
               REGION:element.region} 
    return obj})//used filter to get asian countries then used map to just list seleted properties
    console.log(AsianCountries)


//-------------------------------------------------------------------------------------------------------------
    

    //b) Get all the countries with a population of less than 2 lakhs using Filter function
    console.log(`LIST OF COUNTRIES WITH LESS THAT 2 POPULATION`)
    let TwoLakhPopCount = data.filter((element)=>element.population<200000).map((element)=>{
    let obj = {NAME: element.name.common,
            POPULATION: element.population}    
    return obj})//used filter to get countries with required population then used map to just list seleted properties
    console.log(TwoLakhPopCount)

//------------------------------------------------------------------------------------------------------------

    //C) Print the following details name, capital, flag using forEach function
    console.log(`PRINITING NAME,CAPITAL AND FLAGS USING FOREACH`)
    data.forEach((element) => {
        let obj = {NAME: element.name.common,
                   CAPITAL: element.capital,
                   FLAGS: element.flags.png  } 
        console.log(obj)          
    });
    
   
    //--------------------------------------------------------------------------------------------------------

    //d) Print the total population of countries using reduce function
    let TotalPopulation = data.reduce((acc,cv)=>acc+cv.population,0)
    console.log("Total population of countries is :",TotalPopulation)

//----------------------------------------------------------------------------------------------------------

    //e) Print the country which uses US Dollars as currency.
    console.log(`COUNTRIES WHICH USES US DOLLARS AS CURRENCY`)
    let US_Dollars_Countries = data.filter((element)=>element?.currencies?.USD).map((element)=>{
    let obj = {NAME: element.name.common,
               CURRENCIES: element.currencies}  
    return obj})//used filter to get countries with currecy USD then used map to just list seleted properties
    
    console.log(US_Dollars_Countries)
}