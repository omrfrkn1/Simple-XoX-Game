var isX = true; 
function placeX(cell) {
    if (cell.innerHTML === ""|| cell.innerHTML === "&nbsp;") {
        if (isX == false) {
        cell.innerHTML ="O"
        isX = true;
        
        }
        else{
            cell.innerHTML ="X"
            isX = false;
            
        }
    }
    else{
        alert("Hücre dolu başka bir hücre seçin!!!");
    }
    checkwinner();
}

function checkwinner(){
    var cells = document.querySelectorAll("td");
    var winner = null;

    // Kazanan kombinasyonları tanımla
    var winningCombinations = [
        // Yatay kombinasyonlar
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        // Dikey kombinasyonlar
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        // Çapraz kombinasyonlar
        [0, 4, 8], [2, 4, 6]
    ];

    // Her kazanan kombinasyonu kontrol et
    for (var i = 0; i < winningCombinations.length; i++) {
        var combination = winningCombinations[i];
        var firstCellContent = cells[combination[0]].innerHTML;
        var secondCellContent = cells[combination[1]].innerHTML;
        var thirdCellContent = cells[combination[2]].innerHTML;

        // Eğer kombinasyondaki hücreler aynıysa ve boş değilse, kazananı belirle
        if (firstCellContent === secondCellContent && secondCellContent === thirdCellContent && firstCellContent !== "") {
            winner = firstCellContent;
            break;
        }
    }

 // Eğer kazanan varsa, kazananı bildir ve oyunu sıfırla
    if (winner) {
        // Kazananı biraz geciktirerek belirt
        setTimeout(function() {
            alert(winner + " kazandı!");
            setTimeout(function() {
                resetGame();
            }, 2000); // 2000 milisaniye (2 saniye) sonra sıfırla
            }, 100);
    } 
    else {
    // Eğer kazanan yoksa, berabere durumunu kontrol et
    var isTie = true;
    for (var j = 0; j < cells.length; j++) {
        if (cells[j].innerHTML === "") {
            isTie = false;
            break;
        }
    }

    // Eğer tüm hücreler dolu ise ve kazanan yoksa, berabere olduğunu bildir ve oyunu sıfırla
    if (isTie) {
        setTimeout(function() {
            alert("Berabere");
            setTimeout(function() {
                resetGame();
            }, 2000); // 2000 milisaniye (2 saniye) sonra sıfırla
            }, 100);
    }
}
}
function resetGame() {
var cells = document.querySelectorAll("td");
for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
}
isX = true;
}