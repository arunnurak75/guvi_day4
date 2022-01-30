// 2. Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
//3.Use the same rest countries and print all countries name, region, sub region and population
const request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all")
request.send()


request.onload=function()
{ 
    if(request.status==200)
    {
    let c=JSON.parse( request.responseText)
    for(let i = 0 ; i< c.length ; i++){
        console.log(c[i].name,c[i].region,c[i].subregion,c[i].population);
     }
 c.map((s)=>{
     console.log(s.flags.png)
 })
}else   
{
request.onerror=function()
{
    console.log("site is error")
}}} 