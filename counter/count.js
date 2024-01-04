const value = document.getElementsByTagName('p');
let count = 0;
function inc()
{  
    if(count < 25)
    {
        count++;
        value[0].textContent=count;
        if(count % 2 == 0)
        {
          value[1].textContent=count;
          value[1].textContent = "Even";
        }
        else
        {
           value[1].textContent = "Odd";
        }
      
    }
    else{
        alert("You are Reached the Limit(25)");
    }
    
}

function dec()
{
    if(count > 0)
    {
        count--;
      value[0].textContent = count;
      if(count % 2 == 0)
      {
         value[1].textContent=count;
         value[1].textContent = "Even";
      }
      else
      {
        value[1].textContent = "Odd";
      }
     
    }  
    else
    {
        alert("don't decrease than zerooo");
    }

}

function reset()
{
    count = 0;
    value[0].textContent = count;
    value[1].textContent = count;
}