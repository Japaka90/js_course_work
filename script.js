var sky = document.getElementById('sky');
var ground = document.getElementById('ground');
var ground_house = document.getElementsByClassName('ground_house'); // место под фундамент
var house_place = document.getElementsByClassName('house_place'); // место для строительства

var check_basement = [];
var check_floor = [];


var button_dig = document.getElementsByClassName('dig');
button_dig[0].addEventListener("click", function () {
    if (check_floor.length == 0) {
        var hole = document.createElement('div');
        hole.style.backgroundColor = 'brown';
        hole.style.width = '60px';
        hole.style.height = '30px';
        ground_house[0].appendChild(hole);
        check_basement.push(hole);

        this.addEventListener('keydown', function() {
            switch(event.code) {
                case 'ArrowDown':
                    if ($(hole).height() <= ($(ground_house).height())-30) {
                        hole.style.height = $(hole).height()+30 + 'px';
                    }
                    break;
                case 'ArrowRight':
                    if ($(hole).width() <= ($(ground_house).width())-60) {
                        hole.style.width = $(hole).width()+60 + 'px';
                    }

                    break;
                case 'ArrowUp':
                    if ($(hole).height() > 30) {
                        hole.style.height = $(hole).height()-30 + 'px';
                    }
                    break;
                case 'ArrowLeft':
                    if ($(hole).width() > 60) {
                        hole.style.width = $(hole).width()-60 + 'px';
                    }

                    break;

            }
        })
    } else {
        alert('Вы не можете достроить фундамент под стоящим домом! Начните строительство заново.')
    }
});

var button_floor = document.getElementsByClassName('floor');
button_floor[0].addEventListener("click", function () {
    if (check_basement.length != 0) {
        var wall = document.createElement('div');
        wall.style.backgroundColor = 'white';
        wall.style.width = '60px';
        wall.style.height = '60px';
        wall.style.position = 'absolute';
        wall.style.bottom = 0;
        house_place[0].appendChild(wall);
        check_floor.push(wall);
        if ($(check_basement[0]).width() > $(wall).width()) {
            this.addEventListener('keydown', function() {
            switch(event.code) {
                case 'ArrowDown':
                    if ($(wall).height() > 60) {
                        wall.style.height = $(wall).height()-60 + 'px';
                    }
                    break;
                case 'ArrowRight':
                    if ($(wall).width() <= ($(house_place).width())-60) {
                        wall.style.width = $(wall).width()+60 + 'px';
                    }

                    break;
                case 'ArrowUp':
                    if ($(wall).height() <= ($(house_place).height())-60) {
                        wall.style.height = $(wall).height()+60 + 'px';
                    }
                    break;
                case 'ArrowLeft':
                    if ($(wall).width() > 60) {
                        wall.style.width = $(wall).width()-60 + 'px';
                    }

                    break;

            }
        })
        } 
    } else {
        alert('Сначала постройте фундамент!')
    }
});




var button_roof = document.getElementsByClassName('roof');
button_roof[0].addEventListener("click", function () {
    if (check_basement.length != 0) {
        var loft = document.createElement('div');
        loft.style.backgroundColor = 'white';
        loft.style.width = '180px';
        loft.style.height = '60px';
        loft.style.position = 'absolute';
        loft.style.bottom = 0;
        house_place[0].appendChild(loft);
        check_floor.push(loft);
        
        
        if ($(check_basement[0]).width() > $(wall).width()) {
            this.addEventListener('keydown', function() {
            switch(event.code) {
//                case 'ArrowDown':
//                    if ($(wall).height() > 60) {
//                        wall.style.height = $(wall).height()-60 + 'px';
//                    }
//                    break;
                case 'ArrowRight':
                    if ($(wall).width() <= ($(house_place).width())-60) {
                        wall.style.width = $(wall).width()+60 + 'px';
                    }

                    break;
//                case 'ArrowUp':
//                    if ($(wall).height() <= ($(house_place).height())-60) {
//                        wall.style.height = $(wall).height()+60 + 'px';
//                    }
//                    break;
//                case 'ArrowLeft':
//                    if ($(wall).width() > 60) {
//                        wall.style.width = $(wall).width()-60 + 'px';
//                    }
//
//                    break;

            }
        })
        } 
    } else {
        alert('Сначала постройте фундамент!')
    }
});


this.addEventListener('onclick', function drawTriangle(context, left_padding, top_padding, height, width) {
                    context.moveTo(0 + left_padding, 0 + height + top_padding);
                    context.lineTo(width / 2 + left_padding, 0 + top_padding);
                    context.lineTo(width + left_padding, 0 + height + top_padding);
                    context.closePath();
                })

 
