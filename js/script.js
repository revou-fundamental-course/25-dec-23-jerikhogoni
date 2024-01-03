let currentLayout = 1;

function toggleLayout() {
    const layout1 = document.getElementById('layout1');
    const layout2 = document.getElementById('layout2');

    if (currentLayout === 1) {
        layout1.classList.remove('active');
        layout2.classList.add('active');
        currentLayout = 2;
    } else {
        layout1.classList.add('active');
        layout2.classList.remove('active');
        currentLayout = 1;
    }
}

function calculateArea() {
  var base = parseFloat(document.getElementById('base').value);
  var height = parseFloat(document.getElementById('height').value);

  if (!isNaN(base) && !isNaN(height)) {
    var area = 0.5 * base * height;
    document.getElementById('areaResult').textContent = area.toFixed(2);
    document.getElementById('areaCalculation').innerHTML = `
      Proses Perhitungan:
      Luas = 0.5 * ${base} * ${height} = ${area.toFixed(2)}
    `;
  } else {
    alert("Masukkan angka valid untuk alas dan tinggi segitiga.");
  }
}

function resetArea() {
  document.getElementById('base').value = '';
  document.getElementById('height').value = '';
  document.getElementById('areaResult').textContent = '-';
  document.getElementById('areaCalculation').textContent = '';
}

function calculatePerimeter() {
  var side1 = parseFloat(document.getElementById('side1').value);
  var side2 = parseFloat(document.getElementById('side2').value);
  var side3 = parseFloat(document.getElementById('side3').value);

  if (!isNaN(side1) && !isNaN(side2) && !isNaN(side3)) {
    var perimeter = side1 + side2 + side3;
    document.getElementById('perimeterResult').textContent = perimeter.toFixed(2);
    document.getElementById('perimeterCalculation').innerHTML = `
      Proses Perhitungan:
      Keliling = ${side1} + ${side2} + ${side3} = ${perimeter.toFixed(2)}
    `;
  } else {
    alert("Masukkan angka valid untuk panjang sisi segitiga.");
  }
}

function resetPerimeter() {
  document.getElementById('side1').value = '';
  document.getElementById('side2').value = '';
  document.getElementById('side3').value = '';
  document.getElementById('perimeterResult').textContent = '-';
  document.getElementById('perimeterCalculation').textContent = '';
}