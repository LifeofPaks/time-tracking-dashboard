 const dailyBtn = document.querySelector('.daily')
 const weeklyBtn = document.querySelector('.weekly')
 const monthlyBtn = document.querySelector('.monthly')
 const title =  document.querySelectorAll('.title')
 const current =  document.querySelectorAll('.current')
 const previous =  document.querySelectorAll('.previous')

 checkDashBoard()
 async function checkDashBoard(){
    const resp = await fetch('./data.json')
    const data = await resp.json()

    dailyBtn.addEventListener('click', ()=>{
        for (let i = 0; i <= 5; i++){
            dailyBtn.classList.add('active')
            weeklyBtn.classList.remove('active')
            monthlyBtn.classList.remove('active')
            title[i].innerHTML = data[i].title
            current[i].innerHTML = `${data[i].timeframes.daily.current}hrs`
            previous[i].innerHTML = `Previous Day- ${data[i].timeframes.daily.previous}hrs`
        }
     })


     weeklyBtn.addEventListener('click', ()=>{
        for (let i = 0; i <= 5; i++){
            dailyBtn.classList.remove('active')
            weeklyBtn.classList.add('active')
            monthlyBtn.classList.remove('active')
            title[i].innerHTML = data[i].title
            current[i].innerHTML = `${data[i].timeframes.weekly.current}hrs`
            previous[i].innerHTML = `Previous Week- ${data[i].timeframes.weekly.previous}hrs`
        }
     })

    monthlyBtn.addEventListener('click', ()=>{
        for (let i = 0; i <= 5; i++){
            dailyBtn.classList.remove('active')
            weeklyBtn.classList.remove('active')
            monthlyBtn.classList.add('active')
            title[i].innerHTML = data[i].title
            current[i].innerHTML = `${data[i].timeframes.monthly.current}hrs`
            previous[i].innerHTML = `Previous Month- ${data[i].timeframes.monthly.previous}hrs`
        }
     })

 }






