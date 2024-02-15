let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let ones = document.getElementById('ones');
let twos = document.getElementById('twos');
let threeds = document.getElementById('threes');
one.addEventListener('mousemove', function () {
    ones.style.display = 'block';
})
ones.addEventListener('mouseleave', function () {
    ones.style.display = 'none';
})
two.addEventListener('mouseover', function () {
    twos.style.display = 'block';
})
twos.addEventListener('mouseleave', function () {
    twos.style.display = 'none';
})

three.addEventListener('mouseover', function () {
    threes.style.display = 'flex';
})
threes.addEventListener('mouseout', function () {
    threes.style.display = 'none';
})