let button=document.querySelector('#search_button');
let input_text=document.querySelector('#input_search');
let age_result_container=document.querySelector('#gender_result_container');
button.addEventListener('click',(e)=>{
    let name=input_text.value;
    let age_url='https://api.agify.io?name='+name;
    fetch(age_url,{method:'GET',headers:{'Content-Type':'application/json'}}).then((response)=>{
        return response.json();
    }).then((data_age)=>{
        let gender_url='https://api.genderize.io?name='+name;
        fetch(gender_url,{method:'GET',headers:{'Content-Type':'application/json'}}).then((response)=>{

            return response.json();

        }).then((data_gender)=>{
                    let list=document.createElement('div');
                list.classList.add('result_card');
                let delete_button=document.createElement('button');
                delete_button.classList.add('delete_button');
                delete_button.addEventListener('click',(e)=>{
                    let parent_card=e.target.parentNode;
                    parent_card.remove();
                    
                
                })
                let name=document.createElement('h5');
                let age=document.createElement('h5');
                let gender=document.createElement('h5');
                
                delete_button.innerHTML="X";
                list.appendChild(delete_button);

                name.innerHTML="Name: "+data_gender.name;
                age.innerHTML="Predicted Age: "+data_age.age;
                gender.innerHTML="Predicted Gender:"+data_gender.gender;
                list.appendChild(name);
                list.appendChild(age);
                list.appendChild(gender);
                

                age_result_container.appendChild(list);
        }).catch(function(err) {
            console.log(err);
        })
        

    }).catch((error)=>{
        console.log(error);
    })
})

