document.querySelector("#anc1").onclick = function () { alert("Name: . \nTown Hall: . \nLVL: . \nLeague: . \nCWL: ( Атак/Звезд ). "); };
document.querySelector("#anc2").onclick = function () { alert("Name: . \nTown Hall: . \nLVL: . \nLeague: . \nCWL: ( Атак/Звезд ). "); };
document.querySelector("#anc3").onclick = function () { alert("Name: . \nTown Hall: . \nLVL: . \nLeague: . \nCWL: ( Атак/Звезд ). "); };
document.querySelector("#anc4").onclick = function () { alert("Name: . \nTown Hall: . \nLVL: . \nLeague: . \nCWL: ( Атак/Звезд ). "); };
document.querySelector("#anc5").onclick = function () { alert("Name: . \nTown Hall: . \nLVL: . \nLeague: . \nCWL: ( Атак/Звезд ). "); };
document.querySelector("#anc6").onclick = function () { alert("Name: . \nTown Hall: . \nLVL: . \nLeague: . \nCWL: ( Атак/Звезд ). "); };
document.querySelector("#anc7").onclick = function () { alert("Name: . \nTown Hall: . \nLVL: . \nLeague: . \nCWL: ( Атак/Звезд ). "); };
document.querySelector("#anc8").onclick = function () { alert("Name: . \nTown Hall: . \nLVL: . \nLeague: . \nCWL: ( Атак/Звезд ). "); };
document.querySelector("#anc9").onclick = function () { alert("Name: . \nTown Hall: . \nLVL: . \nLeague: . \nCWL: ( Атак/Звезд ). "); };
document.querySelector("#anc10").onclick = function () { alert("Name: . \nTown Hall: . \nLVL: . \nLeague: . \nCWL: ( Атак/Звезд ). "); };
document.querySelector("#anc11").onclick = function () { alert("Name: . \nTown Hall: . \nLVL: . \nLeague: . \nCWL: ( Атак/Звезд ). "); };
document.querySelector("#anc12").onclick = function () { alert("Name: . \nTown Hall: . \nLVL: . \nLeague: . \nCWL: ( Атак/Звезд ). "); };
document.querySelector("#anc13").onclick = function () { alert("Name: . \nTown Hall: . \nLVL: . \nLeague: . \nCWL: ( Атак/Звезд ). "); };
document.querySelector("#anc14").onclick = function () { alert("Name: . \nTown Hall: . \nLVL: . \nLeague: . \nCWL: ( Атак/Звезд ). "); };
document.querySelector("#anc15").onclick = function () { alert("Name: . \nTown Hall: . \nLVL: . \nLeague: . \nCWL: ( Атак/Звезд ). "); };
document.querySelector("#anc16").onclick = function () { alert("Name: . \nTown Hall: . \nLVL: . \nLeague: . \nCWL: ( Атак/Звезд ). "); };
document.querySelector("#anc17").onclick = function () { alert("Name: . \nTown Hall: . \nLVL: . \nLeague: . \nCWL: ( Атак/Звезд ). "); };
document.querySelector("#anc18").onclick = function () { alert("Name: . \nTown Hall: . \nLVL: . \nLeague: . \nCWL: ( Атак/Звезд ). "); };
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
    })
  })
})