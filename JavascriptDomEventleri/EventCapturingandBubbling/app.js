// Event Bubbling

// document.querySelector('.container').addEventListener('click', function(){
//     console.log('Div Container');
// });

// document.querySelector('.card-body').addEventListener('click', function(){
//     console.log('Card Body');
// });

// Event Capturing ve ya Delegation

const cardBody = document.querySelector('.card-body');

cardBody.addEventListener('click', run);

function run(e){
    if (e.target.className === "fa-trash"){
        console.log('Silme islemi'); // bura islemedi niye?
    }
    if (e.target.id === "filter"){
        console.log('Filtrleme islemi');
    }
    if (e.target.id === "clear-toDos"){
        console.log('Tum tasklari sil');
    } // bura da islemedi
    // console.log(e.target);
}