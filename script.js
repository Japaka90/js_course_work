var sky = document.getElementById('sky');
var ground = document.getElementById('ground');
var ground_house = document.getElementsByClassName('ground_house'); // место под фундамент
var house_place = document.getElementsByClassName('house_place'); // место для строительства

var check_basement = [];
var check_floor = [];
var check_roof = [];

var button_right = document.getElementById('button_right');
var button_left = document.getElementById('button_left');
var button_top = document.getElementById('button_top');
var button_bottom = document.getElementById('button_bottom');


var button_dig = document.getElementsByClassName('dig');
button_dig[0].addEventListener("click", function () {  //копаем фундамент
    if (check_basement.length == 0) {
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
            
            // для кнопок управления на сайте            
           
            button_right.addEventListener('click', function() {
                if ($(hole).width() <= ($(ground_house).width())-60) {
                            hole.style.width = $(hole).width()+60 + 'px';
                        }
           })
            button_bottom.addEventListener('click', function() {
                if ($(hole).height() <= ($(ground_house).height())-30) {
                            hole.style.height = $(hole).height()+30 + 'px';
                        }
           })
            button_top.addEventListener('click', function() {
                if ($(hole).height() > 30) {
                            hole.style.height = $(hole).height()-30 + 'px';
                        }
           })
            button_left.addEventListener('click', function() {
                if ($(hole).width() > 60) {
                            hole.style.width = $(hole).width()-60 + 'px';
                        }

           })                    
            
        } else {
            alert('Вы не можете достроить фундамент под стоящим домом! Начните строительство заново.')
        } 
    }
    
});

// строим первый этаж
var button_floor = document.getElementsByClassName('floor');
button_floor[0].addEventListener("click", function () {
    if (check_basement.length != 0) {
        if (check_floor.length == 0) { //строим первый этаж
            var floor = document.createElement('div');
            floor.style.backgroundColor = 'white';
            floor.style.width = '60px';
            floor.style.height = '60px';
            floor.style.position = 'absolute';
            floor.style.bottom = 0;
            house_place[0].appendChild(floor);
            check_floor.push(floor);
        
            this.addEventListener('keydown', function() {
            switch(event.code) {                    
                case 'ArrowRight':
                    if ($(check_basement[0]).width() > $(floor).width() && check_floor.length == 1) {
                    if ($(floor).width() <= ($(house_place).width())-60) {
                        floor.style.width = $(floor).width()+60 + 'px'
                    }}
                    break;
                case 'ArrowLeft':
                    if ($(floor).width() > 60 && check_floor.length == 1) {
                        floor.style.width = $(floor).width()-60 + 'px'
                    }
                    break;
            }
        })
             
            
            
        } // закончили строить первый этаж
        
            //строим второй этаж
            else if ($(check_basement[0]).height() >= 60 && check_floor.length == 1) { 
                var floor2 = document.createElement('div');
                floor2.style.backgroundColor = 'white';
                floor2.style.width = '60px';
                floor2.style.height = '60px';
                floor2.style.position = 'absolute';
                floor2.style.bottom = '60px';
                house_place[0].appendChild(floor2);
                check_floor.push(floor2);
              
                this.addEventListener('keydown', function() {
                switch(event.code) {                    
                    case 'ArrowRight':
                        if ($(check_basement[0]).width() > $(floor2).width() && check_floor.length == 2) {
                        if ($(floor2).width() <= ($(house_place).width())-60) {
                            floor2.style.width = $(floor2).width()+60 + 'px'
                        }}
                        break;
                    case 'ArrowLeft':
                        if ($(floor2).width() > 60 && check_floor.length == 2) {
                            floor2.style.width = $(floor2).width()-60 + 'px'
                        }
                        break;
                }
                }) 
                
                //?????? колонны
                
//                if ($(floor2).width() >= $(floor).width()+60) {
//                    var column = document.createElement('div');
//                    column.style.backgroundColor = 'white';
//                    column.style.width = '2px';
//                    column.style.height = '60px';
//                    column.style.position = 'absolute';
//                    column.style.left = $(floor).width() + 60 +'px';
//                    house_place[0].appendChild(column);
//                }
        } // закончили строить второй этаж
        
           else if ($(check_basement[0]).height() >= 90 && check_floor.length == 2) { //строим третий этаж
                var floor3 = document.createElement('div');
                floor3.style.backgroundColor = 'white';
                floor3.style.width = '60px';
                floor3.style.height = '60px';
                floor3.style.position = 'absolute';
                floor3.style.bottom = '120px';
                house_place[0].appendChild(floor3);
                check_floor.push(floor3);
              
                this.addEventListener('keydown', function() {
                switch(event.code) {                    
                    case 'ArrowRight':
                        if ($(check_basement[0]).width() > $(floor3).width() && check_floor.length == 3) {
                        if ($(floor3).width() <= ($(house_place).width())-60) {
                            floor3.style.width = $(floor3).width()+60 + 'px'
                        }}
                        break;
                    case 'ArrowLeft':
                        if ($(floor3).width() > 60 && check_floor.length == 3) {
                            floor3.style.width = $(floor3).width()-60 + 'px'
                        }
                        break;
                }
                })    
        } // закончили строить третий этаж
    } 
    else {
        alert('Сначала постройте фундамент!')
    }
});

// строим крышу
var button_roof = document.getElementsByClassName('roof');
button_roof[0].addEventListener("click", function () {
    if (check_floor.length > 0) {        
        var loft = document.createElement('div');
        loft.id = 'roof'
        var loft_width = $(check_floor[(check_floor.length-1)]).width();        
        loft.style.position = 'absolute';
        loft.style.bottom = check_floor.length * 60 + 'px';
        loft.style.borderLeft = loft_width/2 + 'px solid transparent';
        loft.style.borderRight = loft_width/2 + 'px solid transparent';
        loft.style.borderBottom = '30px solid red';
        var x = 30;
        house_place[0].appendChild(loft);
        check_roof.push(loft);
        this.addEventListener('keydown', function() {
                switch(event.code) {                    
                    case 'ArrowUp':
                        x += 10;
                        loft.style.borderBottom = x + 'px solid red';
                        break;
                    case 'ArrowDown':
                        if (x > 10) {
                            x -= 10;
                            loft.style.borderBottom = x + 'px solid red'
                            break;
                        }
                }
                })
    } else {
        alert('Сначала постройте постройте хотя бы один этаж')
    }
});

var delete_floor = document.getElementsByClassName('delete_floor');
delete_floor[0].addEventListener("click", function () {
    if (check_roof.length == 0) {
         check_floor[check_floor.length-1].style.width = 0;
    check_floor[check_floor.length-1].style.height = 0;
    check_floor.splice((check_floor.length-1), 1)
    } else {
        alert('Если хотете снести этаж, сначала снесите крышу!')
    }   
})

var delete_roof = document.getElementsByClassName('delete_roof');
delete_roof[0].addEventListener("click", function () {
    if (check_roof.length > 0) {
        var del_roof_div = document.getElementById('roof')
        del_roof_div.outerHTML=''
        check_roof.splice(0, 1)
    } else {
        alert('Сначала постройте крышу!')
    }   
})


// облака по небу
var big_cloud = document.getElementById('big_cloud');
big_cloud.style.position = 'absolute';
big_cloud.style.left = '-100px';
big_cloud.style.top = '50px';

var middle_cloud = document.getElementById('middle_cloud');
middle_cloud.style.position = 'absolute';
middle_cloud.style.left = '-100px';

var small_cloud = document.getElementById('small_cloud');
small_cloud.style.position = 'absolute';
small_cloud.style.left = '-100px';
small_cloud.style.top = '130px';

 function move_big_cloud() {
     var start = Date.now(); // сохранить время начала
     var timer = setInterval(function() {
      // вычислить сколько времени прошло с начала анимации
          var timePassed = Date.now() - start;
          if (timePassed >= 8500) {
            clearInterval(timer); // конец через 2 секунды
            return;
      }      
      big_cloud.style.left = timePassed / 10 + 'px';
    }, 20)
     function move_cloud_again() {
         setInterval(move_big_cloud, 8500)
     };
     move_cloud_again()
 };
function move_middle_cloud() {
     var start = Date.now(); // сохранить время начала
     var timer = setInterval(function() {
      // вычислить сколько времени прошло с начала анимации
          var timePassed = Date.now() - start;
          if (timePassed >= 9000) {
            clearInterval(timer); // конец через 2 секунды
            return;
      }      
      middle_cloud.style.left = timePassed / 9 + 'px';
    }, 20)
     function move_cloud_again() {
         setInterval(move_middle_cloud, 9000)
     };
     move_cloud_again()
 };
function move_small_cloud(big_cloud) {
     var start = Date.now(); // сохранить время начала
     var timer = setInterval(function() {
      // вычислить сколько времени прошло с начала анимации
          var timePassed = Date.now() - start;
          if (timePassed >= 11000) {
            clearInterval(timer); // конец через 2 секунды
            return;
      }      
      small_cloud.style.left = timePassed / 11 + 'px';
    }, 20)
     function move_cloud_again() {
         setInterval(move_small_cloud, 11000)
     };
     move_cloud_again()
 };
// запустить облачка
//move_big_cloud()
//move_middle_cloud()
//move_small_cloud()



// выбор места, откуда начнём строить
//var location1 = document.getElementById('location')
//location1.style.width = '60px';
//location1.style.height = '60px';
//location1.style.position = 'absolute';
//location1.style.bottom = 0;
//location1.style.background = 'yellow';
//
//location1.addEventListener('click', function() {
//    
//})








