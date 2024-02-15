let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let down = document.getElementById('down');
let ones = document.getElementById('ones');
let twos = document.getElementById('twos');
let fours = document.getElementById('fours');
let threeds = document.getElementById('threes');
let downs = document.getElementById('downs');
one.addEventListener('mousemove', function () {
    ones.style.display = 'flex';
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
    fours.style.display = 'none';
})
four.addEventListener('mouseover', function () {
    fours.style.display = 'flex';
})
fours.addEventListener('mouseover', function () {
    fours.style.display = 'flex';
})
fours.addEventListener('mouseleave', function () {
    fours.style.display = 'none';
})




down.addEventListener('mouseover', function () {
    downs.style.display = 'block';
})
downs.addEventListener('mouseover', function () {
    downs.style.display = 'block';
})
downs.addEventListener('mouseleave', function () {
    downs.style.display = 'none';
})