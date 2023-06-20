const selectColor = document.querySelector('color');
const colorValue = document.querySelector('value');
// console.log(color);

// color.input(()=> {
//     document.body.style.backgroundColor = color.value;
// });

color.addEventListener('input',()=>{
    let color = selectColor.value;
    colorValue.value = color;
    document.body.style.backgroundColor = color;
});
